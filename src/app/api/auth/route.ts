import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, name, email, password, userType } = body;

    if (!action) {
      return NextResponse.json({ message: 'Action is required' }, { status: 400 });
    }

    if (action === 'register') {
      // Registration logic
      if (!name || !email || !password || !userType) {
        return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        userType,
        createdAt: new Date().toISOString(),
        emailVerified: false
      });

      return NextResponse.json({ 
        message: 'User created successfully',
        user: {
          id: user.uid,
          name,
          email,
          userType
        }
      }, { status: 201 });

    } else if (action === 'login') {
      // Login logic
      if (!email || !password) {
        return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
      }

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Get user data from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const userData = userDoc.data();

      // Determine redirect path based on user type
      const redirectTo = userData?.userType === 'client' 
        ? '/cv-database' 
        : '/profile';

      return NextResponse.json({ 
        message: 'Login successful',
        user: {
          id: user.uid,
          name: userData?.name,
          email: user.email,
          userType: userData?.userType
        },
        redirectTo
      }, { status: 200 });
    }

    return NextResponse.json({ message: 'Invalid action' }, { status: 400 });

  } catch (error: any) {
    console.error('Authentication error:', error);
    
    if (error.code === 'auth/email-already-in-use') {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 409 }
      );
    }

    if (error.code === 'auth/invalid-credential' || 
        error.code === 'auth/user-not-found' || 
        error.code === 'auth/wrong-password') {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
