import Logo from "./logocrypto.jpg";

const NavBar = () => {
  return (
    <nav className="shadow-[0_3px_8px_rgba(0,0,0,0.24)] h-16 px-8 flex items-center justify-between">
      <div className="flex items-center">
        <img className="w-10 h-10" alt="logo" src={Logo}/>
        <h1 className="text-lg font-bold ml-4">Crypto Tracker</h1>
      </div>
    </nav>
  );
};
export default NavBar;
