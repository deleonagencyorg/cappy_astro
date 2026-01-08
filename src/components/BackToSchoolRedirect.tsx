import { useEffect } from 'react';

interface BackToSchoolRedirectProps {
  baseUrl?: string;
}

export default function BackToSchoolRedirect({ 
  baseUrl = 'https://backtoschool.yummiespromociones.com/' 
}: BackToSchoolRedirectProps) {
  useEffect(() => {
    const destination = baseUrl + (window.location.search || '');
    window.location.replace(destination);
  }, [baseUrl]);

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
          Redirigiendo a Back to School...
        </p>
        <noscript>
          <a 
            href={baseUrl}
            style={{ 
              color: '#00601b', 
              textDecoration: 'underline' 
            }}
          >
            Continuar
          </a>
        </noscript>
      </div>
    </div>
  );
}
