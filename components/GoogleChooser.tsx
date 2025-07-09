'use client';

import { useEffect } from 'react';

export default function GoogleChooser() {
  useEffect(() => {
    if (!window.google) return;

    window.google.accounts.id.initialize({
      client_id: '66166585301-2ucbnivpqdvcdufo1u7ui7i9aub8kv50.apps.googleusercontent.com',
      callback: handleCredentialResponse,
      auto_select: false,
    });
  }, []);

  const handleCredentialResponse = (response: { credential: string }) => {
    // This is a JWT. You can decode it to get email.
    console.log('Google token:', response.credential);

    // Optional: decode it client-side
    const payload = JSON.parse(
      atob(response.credential.split('.')[1])
    );
    console.log('Decoded Google user:', payload); // Contains email, name, etc.
  };

  const showChooser = () => {
    window.google?.accounts.id.prompt(); // Open account picker
  };

  return (
    <div>
      <button onClick={showChooser} className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign up with Google Email
      </button>
    </div>
  );
}
