import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import faqData from "@/data/faq.json";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6" data-testid="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="faq-subtitle">
            Everything you need to know about our products and services
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq) => (
            <Card key={faq.id} className="overflow-hidden shadow-lg border border-border" data-testid={`faq-item-${faq.id}`}>
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted transition-colors duration-200"
                onClick={() => toggleItem(faq.id)}
                data-testid={`faq-question-${faq.id}`}
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-200 ${
                    openItems.includes(faq.id) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openItems.includes(faq.id) && (
                <div className="px-6 pb-4 text-muted-foreground" data-testid={`faq-answer-${faq.id}`}>
                  {faq.answer}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
