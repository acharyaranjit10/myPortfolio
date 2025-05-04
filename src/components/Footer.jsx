const Footer = () => {
  return (
    <footer className="bg-[#033e65] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text - Left Side */}
          <div className="mb-4 md:mb-0 text-center md:text-left text-white">
            Made by Ranjit Acharya.© 2024 All rights reserved.
          </div>
          
          {/* Logo - Right Side */}
          <div className="w-[170px] h-[50px] flex items-center justify-center">
            <img 
              src="/img/ok.png" 
              alt="logo" 
              className="h-full w-full object-contain" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;