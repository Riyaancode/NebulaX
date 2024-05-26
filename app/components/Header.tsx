import Herosec from "./Herosec";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      className="h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/galaxy-img-4.jpg')" }}
    >
      <Navbar />
      <Herosec />
    </header>
  );
};

export default Header;
