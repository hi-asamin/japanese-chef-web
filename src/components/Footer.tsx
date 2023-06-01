const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-6 py-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">© 2023 NigiriNomads. All rights reserved.</p>
        <nav>
          <a href="#" className="text-white hover:text-gold-500 mx-3">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-gold-500 mx-3">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
