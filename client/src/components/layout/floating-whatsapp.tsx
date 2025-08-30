import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => openWhatsApp()}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
        data-testid="floating-whatsapp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 2.25c-5.368 0-9.75 4.382-9.75 9.75 0 1.668.418 3.237 1.153 4.607L2.25 21.75l5.134-1.17C8.766 21.365 10.357 21.75 12.017 21.75c5.367 0 9.75-4.383 9.75-9.75S17.384 2.25 12.017 2.25zM17.533 15.533c-.233.65-1.367 1.25-1.883 1.317-.467.067-1.05.067-1.7-.133-.383-.117-.883-.267-1.533-.5-2.717-1-4.5-3.717-4.633-3.883-.133-.167-1.083-1.433-1.083-2.733s.683-1.933.933-2.2c.25-.267.533-.317.717-.317.167 0 .333 0 .483.017.15.017.35-.067.533.4.2.5.667 1.617.733 1.733.067.117.117.267.033.433-.083.167-.133.267-.267.4-.133.133-.267.3-.383.4-.133.117-.267.25-.117.5.15.25.667 1.1 1.433 1.783.983.867 1.8 1.133 2.067 1.267.267.133.433.117.583-.067.15-.183.633-.733.8-1 .167-.267.333-.217.567-.133.233.083 1.483.7 1.733.833.25.133.417.2.483.3.067.117.067.683-.167 1.333z"/>
        </svg>
        <span className="sr-only">Chat on WhatsApp</span>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
