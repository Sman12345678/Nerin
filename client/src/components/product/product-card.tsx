import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openWhatsApp } from "@/lib/whatsapp";

interface Product {
  id: number;
  name: string;
  price: number;
  priceNote?: string;
  description: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden shadow-xl border border-border hover:shadow-2xl transition-all duration-300 hover:scale-105" data-testid={`product-card-${product.id}`}>
      <img 
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
        data-testid={`product-image-${product.id}`}
        onError={(e) => {
          // Fallback image if the original fails to load
          const target = e.target as HTMLImageElement;
          target.src = `https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300`;
        }}
      />
      <CardContent className="p-6">
        <h3 className="font-serif font-semibold text-lg text-foreground mb-2" data-testid={`product-name-${product.id}`}>
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4" data-testid={`product-description-${product.id}`}>
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary" data-testid={`product-price-${product.id}`}>
              ₦{product.price.toLocaleString()}
            </span>
            {product.priceNote && (
              <span className="text-sm text-muted-foreground" data-testid={`product-price-note-${product.id}`}>
                {product.priceNote}
              </span>
            )}
          </div>
          <Button 
            onClick={() => openWhatsApp(product.name)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            data-testid={`product-buy-${product.id}`}
          >
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
