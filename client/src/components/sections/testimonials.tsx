import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import testimonialsData from "@/data/testimonials.json";

const Testimonials = () => {
  const testimonials = testimonialsData.slice(0, 3); // Show first 3 testimonials

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6" data-testid="testimonials-title">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="testimonials-subtitle">
            Real reviews from our beautiful community
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-lg border border-border hover:shadow-xl transition-shadow duration-300" data-testid={`testimonial-${testimonial.id}`}>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400" data-testid={`testimonial-rating-${testimonial.id}`}>
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  {testimonial.verified && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      ✓ Verified
                    </Badge>
                  )}
                </div>
                
                {testimonial.product && (
                  <Badge variant="outline" className="mb-4 text-xs">
                    {testimonial.product}
                  </Badge>
                )}
                
                <p className="text-foreground text-sm leading-relaxed mb-6" data-testid={`testimonial-review-${testimonial.id}`}>
                  "{testimonial.review}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-primary/20"
                    data-testid={`testimonial-image-${testimonial.id}`}
                  />
                  <div>
                    <p className="font-semibold text-foreground" data-testid={`testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`testimonial-location-${testimonial.id}`}>
                      {testimonial.location ? `${testimonial.location} • ` : ""}Verified Customer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
