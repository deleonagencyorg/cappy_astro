import React, { useEffect, useRef, useState } from 'react';
import { FacebookShareButton } from 'react-share';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BRAND_COLORS = {
  facebook: '#1877F2',
  instagram: '#E4405F',
};

function BrandShareIcon({ brand, size = 40 }) {
  const iconClass = brand === 'facebook' ? 'fa-facebook-f' : 'fa-instagram';

  return (
    <span
      className="inline-flex items-center justify-center shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: BRAND_COLORS[brand],
        fontSize: Math.round(size * 0.46),
        color: '#fff',
        lineHeight: 1,
      }}
      aria-hidden="true"
    >
      <i className={`fa-brands ${iconClass}`} />
    </span>
  );
}

function resolveShareUrl(url) {
  if (typeof window === 'undefined') return url || '';

  if (url && /^https?:\/\//i.test(url)) {
    try {
      const parsed = new URL(url);
      if (!parsed.hostname.includes('localhost') && parsed.hostname !== '127.0.0.1') {
        return parsed.href;
      }
    } catch {
      // fallback below
    }
  }

  const path = url && url.startsWith('/')
    ? url
    : `${window.location.pathname}${window.location.search}`;

  return `${window.location.origin}${path}`;
}

const SocialShare = ({
  url,
  title,
  description = '',
  hashtags = [],
  iconSize = 32,
  className = '',
  buttonClassName = '',
  platforms = ['facebook', 'instagram'],
  labels = {
    facebook: 'Facebook',
    instagram: 'Instagram',
  },
  showLabels = false,
}) => {
  const [shareUrl, setShareUrl] = useState(() => resolveShareUrl(url));
  // Feedback visual para el fallback de Instagram: 'idle' | 'copied' | 'error'
  const [igStatus, setIgStatus] = useState('idle');
  const igTimeoutRef = useRef(null);

  useEffect(() => {
    setShareUrl(resolveShareUrl(url));
  }, [url]);

  useEffect(() => {
    return () => {
      if (igTimeoutRef.current) clearTimeout(igTimeoutRef.current);
    };
  }, []);
  const flashIgStatus = (status) => {
    setIgStatus(status);
    if (igTimeoutRef.current) clearTimeout(igTimeoutRef.current);
    igTimeoutRef.current = setTimeout(() => setIgStatus('idle'), 3000);
  };

  const handleInstagramShare = async () => {
    const text = [title, description, shareUrl].filter(Boolean).join('\n\n');
    const shareData = { title, text, url: shareUrl };
    const instagramWebUrl = 'https://www.instagram.com/';
    let popupWindow = null;
    const canUseWebShare = typeof navigator !== 'undefined' && !!navigator.share;

    if (!canUseWebShare) {
      popupWindow = window.open(instagramWebUrl, '_blank', 'noopener,noreferrer');
    }

    // si el navegador soporta Web Share API
    if (canUseWebShare) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error?.name === 'AbortError') return;
        // si falla entra el fallback de copiar y abrir
        popupWindow = window.open(instagramWebUrl, '_blank', 'noopener,noreferrer');
      }
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        flashIgStatus('copied');
      } else {
        throw new Error('Clipboard unavailable');
      }
    } catch {
      if (!popupWindow || popupWindow.closed) {
        window.open(instagramWebUrl, '_blank', 'noopener,noreferrer');
      }
      flashIgStatus('error');
    }
  };

  const wrapperClass = buttonClassName
    ? `inline-flex items-center justify-center ${buttonClassName}`
    : 'inline-flex items-center justify-center';

  const renderButtons = () => {
    const buttons = [];

    if (platforms.includes('facebook')) {
      buttons.push(
        <div key="facebook" className={wrapperClass}>
          <FacebookShareButton
            url={shareUrl}
            quote={`${title}\n${description}`}
            hashtag={hashtags.length > 0 ? `#${hashtags[0]}` : undefined}
            className="inline-flex items-center justify-center border-0 bg-transparent p-0 cursor-pointer"
          >
            <BrandShareIcon brand="facebook" size={iconSize} />
            {showLabels && <span className="block text-xs mt-1">{labels.facebook}</span>}
          </FacebookShareButton>
        </div>
      );
    }

    if (platforms.includes('instagram')) {
      buttons.push(
        <div key="instagram" className={`${wrapperClass} relative flex-col`}>
          <button
            type="button"
            onClick={handleInstagramShare}
            className="inline-flex items-center justify-center border-0 bg-transparent p-0 cursor-pointer"
            aria-label={labels.instagram || 'Instagram'}
          >
            <BrandShareIcon brand="instagram" size={iconSize} />
            {showLabels && <span className="block text-xs mt-1">{labels.instagram}</span>}
          </button>

          {igStatus !== 'idle' && (
            <span
              role="status"
              className="absolute top-full mt-1 whitespace-nowrap text-[11px] px-2 py-1 rounded bg-black/80 text-white"
            >
              {igStatus === 'copied'
                ? 'Enlace copiado. Pégalo en Instagram'
                : 'No se pudo copiar. Cópialo manualmente'}
            </span>
          )}
        </div>
      );
    }

    return buttons;
  };

  return (
    <div className={`social-share flex gap-4 items-center justify-center ${className}`}>
      {renderButtons()}
    </div>
  );
};

export default SocialShare;
