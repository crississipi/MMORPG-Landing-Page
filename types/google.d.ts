export {};

declare global {
  interface Window {
    google?: typeof google;
  }

  const google: {
    accounts: {
      id: {
        initialize: (config: {
          client_id: string;
          callback: (response: { credential: string }) => void;
          auto_select?: boolean;
          context?: 'signin' | 'signup' | 'use';
        }) => void;
        prompt: () => void;
      };
    };
  };
}
