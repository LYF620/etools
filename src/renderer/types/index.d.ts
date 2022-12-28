export {};

declare global {
  interface Window {
    etoolsBridge: {
      toggle: () => void;
      system: () => void;
    };
  }
}
