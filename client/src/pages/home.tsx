import Hero from "@/components/sections/hero";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import ProductCard from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import productsData from "@/data/products.json";

const Home = () => {
  // Featured products - first 4 from the products list
  const featuredProducts = productsData.slice(0, 4);
  const heroProduct = productsData[0]; // First product as hero featured product

  return (
    <div>
      <Hero featuredProduct={heroProduct} />
      
      {/* Featured Products Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6" data-testid="featured-products-title">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular lip products, loved by customers everywhere.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/products">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg" data-testid="view-all-products">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
