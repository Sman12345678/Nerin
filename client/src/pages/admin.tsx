import { useState, useRef } from "react";
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
    image: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 🔑 Authentication (hardcoded "nerin")
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewProduct((prev) => ({
      ...prev,
      image: file,
    }));
  };

  // 📸 Upload image to im.ge
  const uploadToImge = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("key", ENV.IMGE_API_KEY);

    try {
      const response = await fetch("https://api.im.ge/1/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("IMGE_ERROR: Failed to upload image");
      }

      const data = await response.json();
      return data.data.url;
    } catch (error) {
      console.error("Image upload error:", error);
      throw new Error("IMGE_ERROR: Unable to upload image to im.ge");
    }
  };

  // 🚀 Submit product
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
        imageUrl = await uploadToImge(newProduct.image);
      }

      const productData = {
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        description: newProduct.description,
        category: newProduct.category,
        image:
          imageUrl ||
          "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      };

      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error("APP_ERROR: " + (errorData.error || "Failed to add product"));
      }

      await response.json();

      toast({
        title: "Product Added!",
        description: "The new product has been successfully added.",
      });

      // Reset form
      setNewProduct({
        name: "",
        price: "",
        description: "",
        category: "",
        image: null,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error adding product:", error);

      let errorTitle = "Error";
      let errorMessage = "Something went wrong. Please try again.";

      if (error instanceof Error) {
        if (error.message.startsWith("IMGE_ERROR")) {
          errorTitle = "Image Upload Error";
          errorMessage = "Image upload failed. Please check your file or try again.";
        } else if (error.message.startsWith("APP_ERROR")) {
          errorTitle = "App Error";
          errorMessage = "Failed to save product to the app. Please retry later.";
        } else {
          errorMessage = error.message;
        }
      }

      toast({
        title: errorTitle,
        description: errorMessage,
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
      image: null,
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
            />
            <h1 className="text-2xl font-serif font-bold text-primary">
              Admin Panel
            </h1>
          </div>

          {!isAuthenticated ? (
            <form onSubmit={handleAuthentication} className="space-y-6">
              <div>
                <Label htmlFor="password">Enter Admin Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Login
              </Button>
            </form>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-serif font-semibold text-primary">
                  Add New Product
                </h2>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </div>

              <form onSubmit={handleProductSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="price">Price (₦)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    name="category"
                    value={newProduct.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring bg-background"
                    required
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
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    className="h-24 resize-none"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="image">Product Image</Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                  />
                  {newProduct.image && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Selected: {newProduct.image.name}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
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
