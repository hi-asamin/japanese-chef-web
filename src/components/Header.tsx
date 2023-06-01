const Header: React.FC = () => {
  return (
    <header className="bg-black text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gold-500">
          NigiriNomads
        </a>
        <nav>
          <a href="#" className="text-white hover:text-gold-500 mx-3">
            Home
          </a>
          <a href="#" className="text-white hover:text-gold-500 mx-3">
            About
          </a>
          <a href="#" className="text-white hover:text-gold-500 mx-3">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
