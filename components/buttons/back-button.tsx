'use client';

import { useRouter } from 'next/navigation';
import { IoChevronBackCircle } from 'react-icons/io5';

const BackButton = () => {
  const router = useRouter();
  return (
    <IoChevronBackCircle
      className='text-2xl md:text-4xl cursor-pointer'
      onClick={router.back}
    />
  );
};

export default BackButton;
