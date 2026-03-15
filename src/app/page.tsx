import Image from "next/image";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Igreja Moriá</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #0a0a0a;
          --bg2: #111111;
          --bg3: #181818;
          --border: rgba(255,255,255,0.07);
          --border-hover: rgba(255,255,255,0.16);
          --text: #f5f5f5;
          --muted: rgba(245,245,245,0.45);
          --muted2: rgba(245,245,245,0.22);
          --accent: #ffffff;
          --accent-glow: rgba(255,255,255,0.1);
        }
        html, body {
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }
        body::after {
          content: '';
          position: fixed;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        .page {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 20px 48px;
        }
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          margin-bottom: 52px;
          animation: fadeDown 0.8s cubic-bezier(.22,1,.36,1) both;
        }
        .logo {
          width: 88px;
          height: 88px;
          margin-bottom: 22px;
          filter: drop-shadow(0 0 28px rgba(255,255,255,0.2));
          animation: pulse-glow 4s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(255,255,255,0.15)); }
          50%       { filter: drop-shadow(0 0 36px rgba(255,255,255,0.35)); }
        }
        .church-name {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--text);
          text-align: center;
          line-height: 1;
          margin-bottom: 10px;
        }
        .tagline {
          font-size: 0.83rem;
          font-weight: 400;
          color: var(--muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-align: center;
        }
        .family-card {
          width: 100%;
          max-width: 400px;
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 22px 24px;
          margin-bottom: 32px;
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: fadeUp 0.7s 0.2s cubic-bezier(.22,1,.36,1) both;
        }
        .family-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }
        .family-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-style: italic;
          color: var(--text);
          margin-bottom: 5px;
        }
        .family-sub {
          font-size: 0.78rem;
          color: var(--muted);
          letter-spacing: 0.04em;
          line-height: 1.5;
        }
        .links {
          width: 100%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
          text-decoration: none;
          color: var(--text);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.25s, background 0.25s, transform 0.25s cubic-bezier(.22,1,.36,1);
          animation: fadeUp 0.7s both;
        }
        .btn:nth-child(1) { animation-delay: 0.35s; }
        .btn:nth-child(2) { animation-delay: 0.48s; }
        .btn:nth-child(3) { animation-delay: 0.61s; }
        .btn:nth-child(4) { animation-delay: 0.74s; }
        .btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%);
          pointer-events: none;
        }
        .btn:hover {
          border-color: var(--border-hover);
          background: var(--bg3);
          transform: translateY(-2px);
        }
        .btn:hover .btn-icon-wrap {
          background: var(--accent-glow);
          border-color: rgba(201,169,110,0.35);
        }
        .btn:hover .btn-icon-wrap svg {
          stroke: var(--accent);
        }
        .btn:active {
          transform: translateY(0);
        }
        .btn-icon-wrap {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.25s, border-color 0.25s;
        }
        .btn-icon-wrap svg {
          width: 18px;
          height: 18px;
          stroke: var(--muted);
          fill: none;
          stroke-width: 1.7;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke 0.25s;
        }
        .btn-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .btn-title {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text);
          letter-spacing: 0.01em;
        }
        .btn-desc {
          font-size: 0.74rem;
          color: var(--muted);
          font-weight: 300;
        }
        .btn-chevron {
          flex-shrink: 0;
          width: 16px;
          height: 16px;
          stroke: var(--muted2);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke 0.25s, transform 0.25s;
        }
        .btn:hover .btn-chevron {
          stroke: var(--muted);
          transform: translateX(3px);
        }
        .sep {
          width: 100%;
          max-width: 400px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 28px 0 0;
          animation: fadeIn 0.8s 0.9s both;
        }
        .sep-line {
          flex: 1;
          height: 1px;
          background: var(--border);
        }
        .sep-cross {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer {
          margin-top: 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          animation: fadeIn 0.8s 1s both;
        }
        .footer-name {
          font-size: 0.72rem;
          color: var(--muted2);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @media (max-width: 480px) {
          .church-name { font-size: 1.7rem; }
          .page { padding: 48px 16px 40px; }
        }
      `}</style>
      <div className="page">
        <div className="header">
          <Image className="logo" src="/logo.png" alt="Igreja Moriá" width={88} height={88} />
          <div className="church-name">Igreja Moriá</div>
          <div className="tagline">@somosamoria</div>
        </div>
        <div className="family-card">
          <div className="family-title">Uma família para pertencer.</div>
          <div className="family-sub">Aqui você encontra comunidade, propósito<br/>e um lar espiritual para chamar de seu.</div>
        </div>
        <div className="links">
          <a href="https://www.google.com/maps/place/Igreja+Batista+Mori%C3%A1+(Sede)/@-8.8669174,-36.4821134,17z/data=!3m1!4b1!4m6!3m5!1s0x707731ed2d439cb:0x7ed1d15f82f5da7!8m2!3d-8.8669174!4d-36.4821134!16s%2Fg%2F11w1lh67yl?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D" className="btn" target="_blank" rel="noopener noreferrer">
            <span className="btn-icon-wrap">
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            </span>
            <span className="btn-body">
              <span className="btn-title">Localização</span>
              <span className="btn-desc">Como chegar até nós</span>
            </span>
            <svg className="btn-chevron" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </a>
          <a href="https://somosamoria.com.br" className="btn" target="_blank" rel="noopener noreferrer">
            <span className="btn-icon-wrap">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
            </span>
            <span className="btn-body">
              <span className="btn-title">Nosso Site</span>
              <span className="btn-desc">somosamoria.com.br</span>
            </span>
            <svg className="btn-chevron" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.moriaapp.nativo" className="btn" target="_blank" rel="noopener noreferrer">
            <span className="btn-icon-wrap">
              <svg viewBox="0 0 24 24"><path d="M3 3.5v17l9-8.5-9-8.5z"/><path d="M3 3.5l13 6-4 3.8-9-9.8z"/><path d="M3 20.5l9-8.5 4 3.8-13 4.7z"/><path d="M16 9.5l3 1.5-3 1.5V9.5z"/></svg>
            </span>
            <span className="btn-body">
              <span className="btn-title">Baixe o App Moriá</span>
              <span className="btn-desc">Google Play Store · Android</span>
            </span>
            <svg className="btn-chevron" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </a>
          <a href="https://apps.apple.com/br/app/moria-app/id6759354783" className="btn" target="_blank" rel="noopener noreferrer">
            <span className="btn-icon-wrap">
              <Image src="/icons8-loja-de-aplicativos-24.png" alt="App Store" width={28} height={28} style={{objectFit:'contain',background:'transparent',borderRadius:'6px'}} />
            </span>
            <span className="btn-body">
              <span className="btn-title">Baixe o App Moriá</span>
              <span className="btn-desc">Apple App Store · iOS</span>
            </span>
            <svg className="btn-chevron" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </a>
        </div>
        <div className="sep">
          <div className="sep-line"></div>
          <div className="sep-cross">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <line x1="7" y1="1" x2="7" y2="13" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" strokeLinecap="round"/>
              <line x1="1" y1="4.5" x2="13" y2="4.5" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="sep-line"></div>
        </div>
        <div className="footer">
          <span className="footer-name">Igreja Moriá © 2026</span>
        </div>
      </div>
    </>
  );
}
