const Navbar = () => {
  return (
    <nav
      id="top"
      className="text-center h-[8.9375rem] flex justify-between items-center border-b-[0.5px] border-b-white/10 px-[10%]"
    >
      {/* ACM logo */}
      <img
        src="https://nsusc.acm.org/assets/img/ACM_Logo_22.png"
        className="w-[7.625rem] h-[6.4375rem]"
      />

      {/* Navbar Items */}
      <div className="flex gap-[2.875rem]">
        <a href="#home" className="hover:text-[#2F92D0]">
          Home
        </a>
        <a href="#about" className="hover:text-[#2F92D0]">
          About
        </a>
        <a href="#events" className="hover:text-[#2F92D0]">
          Events
        </a>
        <a href="#team" className="hover:text-[#2F92D0]">
          Team
        </a>
        <a href="#Sponsors" className="hover:text-[#2F92D0]">
          Sponsors
        </a>
        <a href="#membership" className="hover:text-[#2F92D0]">
          Membership
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
