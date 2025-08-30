import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ENV } from "@/lib/environment";

interface NewProduct {
  name: string;
  price: string;
  description: string;
  category: string;
  image: File | null;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: "",
    price: "",
    description: "",
    category: "",
    image: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleAuthentication = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "nerin") {
      setIsAuthenticated(true);
      toast({
        title: "Welcome!",
        description: "You are now logged in to the admin panel.",
      });
    } else {
      toast({
        title: "Invalid Password",
        description: "Please enter the correct admin password.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewProduct(prev => ({
      ...prev,
      image: file
    }));
  };

  const uploadToImgE = async (file: File): Promise<string> => {
    // In a real implementation, this would upload to Im.ge API
    // For now, we'll simulate the upload and return a placeholder URL
    const formData = new FormData();
    formData.append('image', file);
    formData.append('key', ENV.IMGE_API_KEY);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Return a simulated URL (in real implementation, this would be the actual Im.ge response)
      return `https://im.ge/i/${Date.now()}.${file.name.split('.').pop()}`;
    } catch (error) {
      throw new Error('Failed to upload image to Im.ge');
    }
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let imageUrl = "";
      
      if (newProduct.image) {
        toast({
          title: "Uploading image...",
          description: "Please wait while we upload your image.",
        });
        imageUrl = await uploadToImgE(newProduct.image);
      }

      // In a real app, you would save this to your backend/JSON file
      const productData = {
        id: Date.now(),
        name: newProduct.name,
        price: parseInt(newProduct.price),
        description: newProduct.description,
        category: newProduct.category,
        image: imageUrl || "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      };

      console.log("New product would be saved:", productData);

      toast({
        title: "Product Added!",
        description: "The new product has been successfully added to the catalog.",
      });

      // Reset form
      setNewProduct({
        name: "",
        price: "",
        description: "",
        category: "",
        image: null
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add product. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setNewProduct({
      name: "",
      price: "",
      description: "",
      category: "",
      image: null
    });
    toast({
      title: "Logged out",
      description: "You have been logged out of the admin panel.",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-20">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <img 
              src={ENV.ADMIN_IMAGE_URL}
              alt="Admin profile"
              className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary"
              data-testid="admin-image"
            />
            <h1 className="text-2xl font-serif font-bold text-primary" data-testid="admin-title">
              Admin Panel
            </h1>
          </div>
          
          {!isAuthenticated ? (
            <form onSubmit={handleAuthentication} className="space-y-6">
              <div>
                <Label htmlFor="password" className="text-sm font-medium text-foreground mb-2">
                  Enter Admin Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  data-testid="input-password"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                data-testid="button-login"
              >
                Login
              </Button>
            </form>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-serif font-semibold text-primary" data-testid="add-product-title">
                  Add New Product
                </h2>
                <Button 
                  variant="outline"
                  onClick={handleLogout}
                  data-testid="button-logout"
                >
                  Logout
                </Button>
              </div>
              
              <form onSubmit={handleProductSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2">
                    Product Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    placeholder="Enter product name"
                    required
                    data-testid="input-product-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="price" className="text-sm font-medium text-foreground mb-2">
                    Price (₦)
                  </Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    placeholder="Enter price"
                    required
                    data-testid="input-product-price"
                  />
                </div>
                
                <div>
                  <Label htmlFor="category" className="text-sm font-medium text-foreground mb-2">
                    Category
                  </Label>
                  <select
                    id="category"
                    name="category"
                    value={newProduct.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring bg-background"
                    required
                    data-testid="select-product-category"
                  >
                    <option value="">Select category</option>
                    <option value="lipgloss">Lip Gloss</option>
                    <option value="combo">Combos</option>
                    <option value="care">Lip Care</option>
                    <option value="liner">Lip Liner</option>
                    <option value="tools">Tools</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="description" className="text-sm font-medium text-foreground mb-2">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    placeholder="Enter product description"
                    className="h-24 resize-none"
                    required
                    data-testid="input-product-description"
                  />
                </div>
                
                <div>
                  <Label htmlFor="image" className="text-sm font-medium text-foreground mb-2">
                    Product Image
                  </Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                    data-testid="input-product-image"
                  />
                  {newProduct.image && (
                    <p className="text-sm text-muted-foreground mt-2" data-testid="selected-file">
                      Selected: {newProduct.image.name}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  data-testid="button-add-product"
                >
                  {isSubmitting ? "Adding Product..." : "Add Product"}
                </Button>
              </form>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
