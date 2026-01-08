import { useEffect } from 'react';

interface BackToSchoolRedirectProps {
  baseUrl?: string;
}

export default function BackToSchoolRedirect({ 
  baseUrl = 'https://backtoschool.yummiespromociones.com/' 
}: BackToSchoolRedirectProps) {
  useEffect(() => {
    const searchParams = window.location.search;
    const destination = baseUrl + searchParams;
    
    // Enviar evento a GTM si hay parámetros UTM
    if (searchParams && typeof window !== 'undefined' && (window as any).dataLayer) {
      const params = new URLSearchParams(searchParams);
      const hasUtm = Array.from(params.keys()).some(key => key.startsWith('utm_'));
      
      if (hasUtm) {
        (window as any).dataLayer.push({
          event: 'backtoschool_redirect',
          destination: destination,
          utm_source: params.get('utm_source') || '',
          utm_medium: params.get('utm_medium') || '',
          utm_campaign: params.get('utm_campaign') || '',
        });
      }
    }
    
    // Redirección inmediata
    window.location.replace(destination);
  }, [baseUrl]);

  // No renderizar nada para evitar flash de contenido
  return null;
}
