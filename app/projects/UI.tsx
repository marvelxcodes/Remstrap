'use client';
import { useClerk } from '@clerk/nextjs';
import Image from 'next/image';

export const ProfileImage = ({ ...props }) => {
	const { user } = useClerk();
	return (
		<Image
			src={user?.profileImageUrl!}
			alt='Profile Image'
			width={30}
			height={30}
			{...props}
		/>
	);
};
