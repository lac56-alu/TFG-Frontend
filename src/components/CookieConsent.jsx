import React, { useState } from 'react'

export default function CookieConsent() {
  const [cookies, setCookie ] = useState('');
  return (
    <div className='text-black bg-white'>
      {!cookies && (
        <div className="cookie-notice">
          <p>Este sitio web utiliza cookies para ofrecerte la mejor experiencia. Al continuar navegando, aceptas nuestro uso de cookies.</p>
          <button onClick={setCookie(true)}>Aceptar cookies</button>
        </div>
      )}
    </div>
  )
}
