import { ENV } from './environment';

export function openWhatsApp(productName?: string): void {
  const message = productName 
    ? `I want to buy this ${productName}` 
    : 'Hello! I\'m interested in your lip products.';
  
  const url = `https://wa.me/${ENV.WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

export function formatWhatsAppNumber(number: string): string {
  return number.replace(/\D/g, '');
}
