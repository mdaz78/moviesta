import Link from 'next/link';
import NavItemContainer from './nav-item-container';

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 h-14 bg-slate-950 w-full text-white grid grid-cols-2'>
      <Link href='/'>
        <NavItemContainer className='border-r border-slate-900'>
          Home
        </NavItemContainer>
      </Link>
      <Link href='/favorites'>
        <NavItemContainer>Favorites</NavItemContainer>
      </Link>
    </div>
  );
};

export default BottomNav;
