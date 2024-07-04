const BottomNav = () => {
  return (
    <div className='fixed bottom-0 h-14 bg-slate-950 w-full text-white grid grid-cols-2'>
      <section className='w-full flex justify-center items-center border-r border-slate-900 cursor-pointer hover:bg-slate-900 text-sm'>
        Home
      </section>
      <section className='w-full flex justify-center items-center cursor-pointer hover:bg-slate-900 text-sm'>
        Favorites
      </section>
    </div>
  );
};

export default BottomNav;
