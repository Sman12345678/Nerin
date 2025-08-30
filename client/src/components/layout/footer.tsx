import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">NL</span>
              </div>
              <span className="text-2xl font-serif font-bold">Nerin Liplush</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Empowering confidence and elegance through premium lip beauty products. Discover your perfect shade with Nerin Liplush.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61574082840918" 
                className="text-primary-foreground/80 hover:text-white transition-colors"
                data-testid="footer-facebook"
              >
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/neirin_33?igsh=ODIwNmN6cWNmbHV5" 
                className="text-primary-foreground/80 hover:text-white transition-colors"
                data-testid="footer-instagram"
              >
                Instagram
              </a>
              <a 
                href="https://www.tiktok.com/@neirin.liplush?_t=ZS-8zJbQKZ7R4r&_r=1" 
                className="text-primary-foreground/80 hover:text-white transition-colors"
                data-testid="footer-tiktok"
              >
                TikTok
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors" data-testid="footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors" data-testid="footer-products">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors" data-testid="footer-about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors" data-testid="footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-primary-foreground/20 my-8" />
        <div className="text-center text-primary-foreground/80">
          <p data-testid="copyright">
            &copy; {currentYear} Nerin Liplush. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
