import { Card, CardContent } from "@/components/ui/card";
import { ENV } from "@/lib/environment";

const About = () => {
  return (
    <div className="pt-16">
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6" data-testid="about-title">
              About Nerin Liplush
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Born from a passion for beauty and a commitment to quality, Nerin Liplush represents the perfect fusion of elegance, innovation, and accessibility. Our journey began with a simple yet powerful vision: to create premium lip beauty products that not only enhance your natural beauty but also empower confidence and celebrate the unique elegance in every woman.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-semibold text-primary" data-testid="mission-title">
                Our Mission
              </h2>
              <p className="text-foreground leading-relaxed" data-testid="mission-text-1">
                At Nerin Liplush, we believe that beauty is not just about looking good—it's about feeling confident, empowered, and expressing your unique personality. Our carefully crafted lipsticks and lip glosses are designed to enhance your natural beauty while providing long-lasting comfort and stunning results that make you feel unstoppable.
              </p>
              <p className="text-foreground leading-relaxed" data-testid="mission-text-2">
                Every product in our collection is formulated with premium ingredients sourced globally and crafted locally with Nigerian beauty needs in mind. We understand the diverse beauty landscape of Nigeria and create products that celebrate every skin tone. From the boardroom to the dance floor, from quiet mornings to glamorous evenings, we have something for every mood, occasion, and beautiful Nigerian woman.
              </p>
              <p className="text-foreground leading-relaxed" data-testid="mission-text-3">
                Our commitment extends beyond beauty—we're dedicated to supporting Nigerian women, employing local talent, and contributing to the growth of the beauty industry in Nigeria. When you choose Nerin Liplush, you're not just choosing quality cosmetics; you're supporting a dream built by Nigerian women, for Nigerian women.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-block relative">
                <img 
                  src={ENV.CEO_IMAGE_URL}
                  alt="CEO of Nerin Liplush"
                  className="w-64 h-64 object-cover rounded-full border-4 border-primary shadow-2xl mx-auto"
                  data-testid="ceo-image"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">👑</span>
                </div>
              </div>
              <Card className="mt-8 shadow-lg border border-border">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-lg text-primary mb-2" data-testid="ceo-message-title">
                    Message from our CEO
                  </h3>
                  <p className="text-foreground italic leading-relaxed" data-testid="ceo-message">
                    "Beauty is about feeling confident in your own skin and celebrating what makes you uniquely you. At Nerin Liplush, we're here to enhance that confidence with products that make you feel as beautiful as you truly are. Every shade we create, every formula we perfect, is designed with the Nigerian woman in mind—because you deserve nothing less than excellence."
                  </p>
                  <p className="text-primary font-semibold mt-4" data-testid="ceo-name">
                    - Sarah Nerin, Founder & CEO
                  </p>
                  <p className="text-sm text-muted-foreground mt-2" data-testid="ceo-credentials">
                    Former L'Oréal Beauty Consultant • MBA in Business Administration
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Brand Values */}
          <div className="mt-20">
            <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12" data-testid="values-title">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg border border-border">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="font-serif font-semibold text-lg text-primary mb-4" data-testid="value-quality-title">
                    Premium Quality
                  </h3>
                  <p className="text-muted-foreground" data-testid="value-quality-text">
                    We use only the finest ingredients including vitamin E, jojoba oil, and shea butter to create products that deliver exceptional color payoff, long-lasting wear, and nourishing care for your lips.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg border border-border">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🌿</div>
                  <h3 className="font-serif font-semibold text-lg text-primary mb-4" data-testid="value-ethical-title">
                    Ethical Beauty
                  </h3>
                  <p className="text-muted-foreground" data-testid="value-ethical-text">
                    All our products are 100% cruelty-free, halal-certified, and made with ethically sourced ingredients. We're committed to sustainable packaging and supporting fair trade practices that care for your lips and our planet.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg border border-border">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="font-serif font-semibold text-lg text-primary mb-4" data-testid="value-empowerment-title">
                    Empowerment
                  </h3>
                  <p className="text-muted-foreground" data-testid="value-empowerment-text">
                    We believe every Nigerian woman deserves to feel confident and beautiful. Our products are designed to enhance your natural radiance while celebrating the diverse beauty of our nation, from Lagos to Kano, from Port Harcourt to Abuja.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
