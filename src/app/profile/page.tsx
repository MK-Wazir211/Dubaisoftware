'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { SectionHeader, FormCard, InputField } from '../Components/Ui-Elements';
import ImageUploader from '../Components/ImageUploader';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

interface ApplicantProfile {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    linkedIn?: string;
    github?: string;
    portfolio?: string;
    imageSrc: string | null;
    resume?: File | null;
}

const ProfilePage: React.FC = () => {
    const [profile, setProfile] = useState<ApplicantProfile>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        linkedIn: '',
        github: '',
        portfolio: '',
        imageSrc: null,
        resume: null,
    });
    const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
    const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(true);

    // Simulate fetching profile data (replace with actual API call)
    useEffect(() => {
        const fetchProfileData = async () => {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 500));

            const mockProfile: ApplicantProfile = {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                phone: '123-456-7890',
                address: '123 Main St, Anytown',
                linkedIn: 'linkedin.com/in/johndoe',
                github: 'github.com/johndoe',
                portfolio: 'johndoe.com',
                imageSrc: 'https://via.placeholder.com/150',
                resume: null,
            };
            setProfile(mockProfile);
        };

        fetchProfileData();
    }, []);

    useEffect(() => {
        setIsSaveButtonEnabled(
            profile.firstName !== '' &&
            profile.lastName !== '' &&
            profile.email !== ''
        );
    }, [profile]);


    const handleChange = (key: keyof Omit<ApplicantProfile, 'resume'>, value: string) => {
        setProfile(prev => ({ ...prev, [key]: value }));
    };

    const handleImageUpload = (image: string) => {
        setProfile(prev => ({ ...prev, imageSrc: image }));
    };

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        setProfile(prev => ({ ...prev, resume: file }));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false });

    const handleSave = async () => {
        setUploadStatus('uploading');
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            setUploadStatus('success');
            // Reset status after a delay
            setTimeout(() => setUploadStatus('idle'), 3000);
        } catch (error) {
            console.error("Upload failed:", error);
            setUploadStatus('error');
            // Reset status after a delay
            setTimeout(() => setUploadStatus('idle'), 3000);
        }
    };

    const renderProfilePictureAndResume = () => (
        <div className="md:col-span-1">
            <FormCard title="Profile Picture">
                <div className="flex justify-center">
                    <ImageUploader onImageUpload={handleImageUpload} />
                </div>
            </FormCard>

            <FormCard title="Resume Upload">
                <div {...getRootProps()} className={`dropzone border-2 border-dashed rounded-md p-4 flex flex-col items-center justify-center ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors duration-300'}`}>
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" className="text-gray-500 mb-2 transition-colors duration-300" />
                        <p className="text-gray-500 transition-colors duration-300">{isDragActive ? "Drop the file here..." : "Drag 'n' drop your resume here, or click to select files"}</p>
                    </div>
                    {profile.resume && (
                        <div className="mt-4 flex items-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                            <span>{profile.resume.name}</span>
                        </div>
                    )}
                </div>
            </FormCard>
        </div>
    );

    const renderPersonalInformationForm = () => (
        <div className="md:col-span-1">
            <FormCard title="Personal Information">
                <InputField
                    label="First Name"
                    value={profile.firstName}
                    onChange={(value) => handleChange('firstName', value)}
                    required
                    placeholder="Enter your first name"
                />
                <InputField
                    label="Last Name"
                    value={profile.lastName}
                    onChange={(value) => handleChange('lastName', value)}
                    required
                    placeholder="Enter your last name"
                />
                <InputField
                    label="Email"
                    type="email"
                    value={profile.email}
                    onChange={(value) => handleChange('email', value)}
                    required
                    placeholder="Enter your email"
                />
                <InputField
                    label="Phone"
                    type="tel"
                    value={profile.phone}
                    onChange={(value) => handleChange('phone', value)}
                    placeholder="Enter your phone number"
                />
                <InputField
                    label="Address"
                    value={profile.address}
                    onChange={(value) => handleChange('address', value)}
                    placeholder="Enter your address"
                />
                <InputField
                    label="LinkedIn Profile"
                    value={profile.linkedIn || ''}
                    onChange={(value) => handleChange('linkedIn', value)}
                    placeholder="Enter your LinkedIn profile URL"
                />
                <InputField
                    label="GitHub Profile"
                    value={profile.github || ''}
                    onChange={(value) => handleChange('github', value)}
                    placeholder="Enter your GitHub profile URL"
                />
                <InputField
                    label="Portfolio URL"
                    value={profile.portfolio || ''}
                    onChange={(value) => handleChange('portfolio', value)}
                    placeholder="Enter your portfolio URL"
                />
            </FormCard>
        </div>
    );

    const renderSaveButton = () => (
        <div className="flex justify-end mt-6">
            <button
                onClick={handleSave}
                disabled={uploadStatus === 'uploading' || !isSaveButtonEnabled}
                className={`relative px-6 py-3 rounded-xl overflow-hidden transition-all duration-300
                    ${uploadStatus === 'uploading' || !isSaveButtonEnabled
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                        : 'bg-[#286672] text-white hover:bg-[#1d4d5a] hover:shadow-md hover:shadow-[#286672]/50'
                    }`}
            >
                <span className="relative z-10">
                    {uploadStatus === 'uploading' && 'Saving...'}
                    {uploadStatus === 'success' && (
                        <>
                            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> Saved!
                        </>
                    )}
                    {uploadStatus === 'error' && (
                        <>
                            <FontAwesomeIcon icon={faTimesCircle} className="mr-2" /> Error!
                        </>
                    )}
                    {uploadStatus === 'idle' && 'Save Changes'}
                </span>
            </button>
        </div>
    );

    return (
        <div className="container mx-auto py-10 px-4">
            <SectionHeader title="Your Applicant Profile" description="Review and update your profile information." />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderProfilePictureAndResume()}
                {renderPersonalInformationForm()}
            </div>

            {renderSaveButton()}
        </div>
    );
};

export default ProfilePage;
