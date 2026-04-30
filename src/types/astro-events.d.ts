// Extender las definiciones de tipos para eventos de Astro
declare global {
  interface DocumentEventMap {
    'astro:page-load': CustomEvent;
  }

  interface WindowEventMap {
    'astro:page-load': CustomEvent;
  }

  interface Window {
    showShareModal?: (modalId?: string) => void;
    videoModals?: {
      [key: string]: {
        open: () => void;
        close: () => void;
      };
    };
  }
}

export {};
