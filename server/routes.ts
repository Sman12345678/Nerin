import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import express from "express"; // Import express to use express.static

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to get products
  app.get("/api/products", async (req, res) => {
    try {
      const productsPath = path.join(process.cwd(), "client/src/data/products.json");
      const productsData = JSON.parse(fs.readFileSync(productsPath, "utf8"));
      res.json(productsData);
    } catch (error) {
      res.status(500).json({ error: "Failed to load products" });
    }
  });

  // API route to add new product (for admin)
  app.post("/api/products", async (req, res) => {
    try {
      const { name, price, description, category, image } = req.body;

      if (!name || !price || !description || !category) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const productsPath = path.join(process.cwd(), "client/src/data/products.json");
      const productsData = JSON.parse(fs.readFileSync(productsPath, "utf8"));

      const newProduct = {
        id: Date.now(),
        name,
        price: parseInt(price),
        description,
        category,
        image: image || "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      };

      productsData.push(newProduct);
      fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

      res.json({ success: true, product: newProduct });
    } catch (error) {
      res.status(500).json({ error: "Failed to add product" });
    }
  });

  // API route to handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // In a real application, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Integrate with CRM

      console.log("Contact form submission:", { name, email, message });

      res.json({ success: true, message: "Contact form submitted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  // API route for newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }

      // In a real application, you would integrate with:
      // 1. Mailchimp
      // 2. SendGrid
      // 3. ConvertKit
      // etc.

      console.log("Newsletter subscription:", { email });

      res.json({ success: true, message: "Newsletter subscription successful" });
    } catch (error) {
      res.status(500).json({ error: "Failed to subscribe to newsletter" });
    }
  });

      

  // SPA fallback - serve index.html for all non-API routes
  // This must be the last route
  app.get("*", (req, res) => {
    // Skip API routes
    if (req.path.startsWith("/api/")) {
      return res.status(404).json({ error: "API endpoint not found" });
    }

    if (process.env.NODE_ENV === "production") {
      res.sendFile(path.join(process.cwd(), "dist/public", "index.html"));
    } else {
      // In development, let Vite middleware handle this
      res.status(404).send("Route not found in development");
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
    if (process.env.NODE_ENV === "production") {
      res.sendFile(path.join(process.cwd(), "dist/public", "index.html"));
    } else {
      // In development, Vite middleware handles this, but we still need a fallback for direct URL access
      // In development, Vite middleware will typically handle serving index.html for SPA routes.
      // If we reach here in development, it means Vite didn't catch it, which might be an issue with Vite config or the route itself.
      // For simplicity and to avoid conflicts with Vite, we'll let Vite handle it and assume it will serve index.html if configured correctly.
      // If Vite doesn't serve it, a 404 from the server might occur, which is not ideal for SPAs.
      // A more robust development setup might involve explicitly telling Vite to serve index.html for all routes if it doesn't.
      // For now, we'll trust Vite's handling or let the client-side router take over after index.html is served.
      // If this route is hit in dev, it means the client-side router should ideally handle it.
      // The Vite middleware should handle serving the index.html in dev for SPA routes.
      // If this is hit directly, it's likely an unhandled route by the client-side router.
      // For a pure SPA, the index.html should always be served, and the client-side router takes over.
      // This fallback is primarily for production build.
      res.status(404).send("Route not found. If this is a SPA route, check your client-side routing and server configuration.");
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
