import React from 'react';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="login-layout">
      <div className="login-banner d-none d-md-block"></div>
      <section className="login-wrap">
        <div className="login-content">{children}</div>
      </section>
    </div>
  );
}
