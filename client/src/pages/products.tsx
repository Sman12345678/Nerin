import { useState } from "react";
import ProductCard from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import productsData from "@/data/products.json";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = [
    { value: "all", label: "All Products" },
    { value: "lipgloss", label: "Lip Gloss" },
    { value: "combo", label: "Combos" },
    { value: "care", label: "Lip Care" },
    { value: "liner", label: "Lip Liner" },
    { value: "tools", label: "Tools" },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? productsData 
    : productsData.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-16">
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slideUp">
            <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6" data-testid="products-title">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Indulge in our carefully curated collection of premium lip products, each designed to enhance your natural beauty.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-64" data-testid="category-filter">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value} data-testid={`category-${category.value}`}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4" data-testid="no-products">
                No products found in this category.
              </p>
              <Button 
                onClick={() => setSelectedCategory("all")}
                variant="outline"
                data-testid="show-all-products"
              >
                Show All Products
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
