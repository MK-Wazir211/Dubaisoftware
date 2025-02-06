import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, userType } = body;

    // Validate input
    if (!name || !email || !password || !userType) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store additional user data in Firestore
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

  } catch (error: any) {
    console.error('Registration error:', error);
    
    // Handle Firebase specific errors
    if (error.code === 'auth/email-already-in-use') {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
