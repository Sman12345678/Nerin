import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { openWhatsApp } from "@/lib/whatsapp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real app, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter!",
    });
  };

  return (
    <div className="pt-16">
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6" data-testid="contact-title">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you! Reach out with any questions or feedback.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-semibold text-primary mb-6" data-testid="contact-form-title">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      className="h-32 resize-none"
                      required
                      data-testid="input-message"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* WhatsApp Contact */}
              <Card className="shadow-xl border border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-semibold text-primary mb-6" data-testid="whatsapp-title">
                    Chat with us directly
                  </h2>
                  <Button 
                    onClick={() => openWhatsApp()}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                    data-testid="button-whatsapp"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 2.25c-5.368 0-9.75 4.382-9.75 9.75 0 1.668.418 3.237 1.153 4.607L2.25 21.75l5.134-1.17C8.766 21.365 10.357 21.75 12.017 21.75c5.367 0 9.75-4.383 9.75-9.75S17.384 2.25 12.017 2.25zM17.533 15.533c-.233.65-1.367 1.25-1.883 1.317-.467.067-1.05.067-1.7-.133-.383-.117-.883-.267-1.533-.5-2.717-1-4.5-3.717-4.633-3.883-.133-.167-1.083-1.433-1.083-2.733s.683-1.933.933-2.2c.25-.267.533-.317.717-.317.167 0 .333 0 .483.017.15.017.35-.067.533.4.2.5.667 1.617.733 1.733.067.117.117.267.033.433-.083.167-.133.267-.267.4-.133.133-.267.3-.383.4-.133.117-.267.25-.117.5.15.25.667 1.1 1.433 1.783.983.867 1.8 1.133 2.067 1.267.267.133.433.117.583-.067.15-.183.633-.733.8-1 .167-.267.333-.217.567-.133.233.083 1.483.7 1.733.833.25.133.417.2.483.3.067.117.067.683-.167 1.333z"/>
                    </svg>
                    <span className="font-semibold">Chat on WhatsApp</span>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Social Media Links */}
              <Card className="shadow-xl border border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-semibold text-primary mb-6" data-testid="social-title">
                    Follow Us
                  </h2>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61574082840918" 
                      className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                      data-testid="link-facebook"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.instagram.com/neirin_33?igsh=ODIwNmN6cWNmbHV5" 
                      className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                      data-testid="link-instagram"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.13 4.715.333 3.995.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.139C.333 4.859.131 5.67.072 6.9.013 8.134 0 8.541 0 12.017s.013 3.883.072 5.116c.059 1.23.261 2.042.558 2.761.306.789.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.72.297 1.531.499 2.761.558C7.989 23.987 8.396 24 12.017 24s3.883-.013 5.116-.072c1.23-.059 2.042-.261 2.761-.558.789-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.337 1.384-2.126.297-.719.499-1.531.558-2.761.059-1.233.072-1.64.072-5.116s-.013-3.883-.072-5.116c-.059-1.23-.261-2.042-.558-2.761-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.861.63c-.72-.297-1.531-.499-2.761-.558C15.866.013 15.459 0 12.017 0zM12.017 2.183c3.833 0 4.291.016 5.807.072 1.4.064 2.161.298 2.667.497.671.261 1.149.572 1.653 1.076.504.504.815.982 1.076 1.653.199.506.433 1.267.497 2.667.056 1.516.072 1.974.072 5.807s-.016 4.291-.072 5.807c-.064 1.4-.298 2.161-.497 2.667-.261.671-.572 1.149-1.076 1.653-.504.504-.982.815-1.653 1.076-.506.199-1.267.433-2.667.497-1.516.056-1.974.072-5.807.072s-4.291-.016-5.807-.072c-1.4-.064-2.161-.298-2.667-.497-.671-.261-1.149-.572-1.653-1.076-.504-.504-.815-.982-1.076-1.653-.199-.506-.433-1.267-.497-2.667-.056-1.516-.072-1.974-.072-5.807s.016-4.291.072-5.807c.064-1.4.298-2.161.497-2.667.261-.671.572-1.149 1.076-1.653.504-.504.982-.815 1.653-1.076.506-.199 1.267-.433 2.667-.497 1.516-.056 1.974-.072 5.807-.072z"/>
                        <path d="M12.017 5.838A6.179 6.179 0 1 0 18.196 12.017 6.179 6.179 0 0 0 12.017 5.838zM12.017 16A3.983 3.983 0 1 1 16 12.017 3.983 3.983 0 0 1 12.017 16z"/>
                        <circle cx="18.406" cy="5.594" r="1.44"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.tiktok.com/@neirin.liplush?_t=ZS-8zJbQKZ7R4r&_r=1" 
                      className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                      data-testid="link-tiktok"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-primary to-accent text-white shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-semibold mb-4" data-testid="newsletter-title">
                    Stay Updated
                  </h2>
                  <p className="mb-6 opacity-90">
                    Subscribe to get updates on new products and exclusive offers!
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                    <Input 
                      type="email" 
                      placeholder="Enter your email"
                      className="flex-1 text-foreground border-0 focus:ring-2 focus:ring-white"
                      required
                      data-testid="input-newsletter"
                    />
                    <Button 
                      type="submit"
                      className="bg-white text-primary hover:bg-gray-100 font-semibold"
                      data-testid="button-newsletter"
                    >
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
