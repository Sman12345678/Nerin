import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openWhatsApp } from "@/lib/whatsapp";

interface HeroProps {
  featuredProduct?: {
    name: string;
    price: number;
    image: string;
  };
}

const Hero = ({ featuredProduct }: HeroProps) => {
  const defaultProduct = {
    name: "Raspberry Sugar Plum Set",
    price: 2500,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  };

  const product = featuredProduct || defaultProduct;

  return (
    <section className="min-h-screen flex items-center justify-center floral-bg pt-16">
      <div className="text-center px-4 animate-fadeIn">
        {/* Brand Logo */}
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
          <span className="text-4xl font-serif font-bold text-white">NL</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold gradient-text mb-6" data-testid="hero-title">
          Nerin Liplush
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-script mb-8" data-testid="hero-slogan">
          "Where Beauty Meets Elegance"
        </p>
        <p className="text-lg text-foreground max-w-2xl mx-auto mb-12 leading-relaxed" data-testid="hero-description">
          Discover our exquisite collection of premium lipsticks and lip glosses designed to enhance your natural beauty and boost your confidence.
        </p>
        
        {/* Featured Product Highlight */}
        <Card className="max-w-md mx-auto shadow-xl border border-border">
          <CardContent className="p-8">
            <h3 className="text-xl font-serif font-semibold text-primary mb-4" data-testid="featured-title">
              ✨ Featured Collection
            </h3>
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-4 shadow-lg"
              data-testid="featured-image"
            />
            <h4 className="font-semibold text-foreground mb-2" data-testid="featured-name">
              {product.name}
            </h4>
            <p className="text-primary font-bold text-lg mb-4" data-testid="featured-price">
              ₦{product.price.toLocaleString()}
            </p>
            <Button 
              onClick={() => openWhatsApp(product.name)}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-testid="featured-buy-now"
            >
              Shop Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
