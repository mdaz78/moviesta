interface NavItemContainerProps {
  className?: string;
  children: React.ReactNode;
}

const NavItemContainer = ({ className, children }: NavItemContainerProps) => {
  return (
    <section
      className={`w-full flex justify-center items-center cursor-pointer hover:bg-slate-900 text-sm h-full ${className}`}
    >
      {children}
    </section>
  );
};

export default NavItemContainer;
