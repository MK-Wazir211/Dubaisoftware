import React, { useState } from 'react';

interface ImageUploaderProps {
    onImageUpload: (image: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const src = reader.result as string;
                setImageSrc(src);
                onImageUpload(src);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <label htmlFor="image-upload" className="cursor-pointer">
                {imageSrc ? (
                    <img src={imageSrc} alt="Uploaded" className="w-32 h-32 rounded-full object-cover" />
                ) : (
                    <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Upload Image</span>
                    </div>
                )}
            </label>
            <input
                type="file"
                id="image-upload"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
            />
        </div>
    );
};

export default ImageUploader;
