const QRPlaceholder = () => (
  <div
    aria-label="QR Code Placeholder"
    className="w-20 h-20 mb-6 bg-surface-container flex flex-wrap gap-1 p-2 rounded-sm"
  >
    {[1,0,1,1,0,0,1,1,0,1,1,1,0,1,1].map((filled, i) => (
      <div
        key={i}
        className={`w-3 h-3 ${filled ? 'bg-on-background' : 'bg-transparent'}`}
      />
    ))}
  </div>
);

const GitHubIcon = () => (
  <svg
    width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    className="opacity-80"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Contact = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center w-full px-margin">
      <div className="w-full max-w-lg mx-auto text-center">

        {/* Section Label */}
        <div className="mb-section_gap flex flex-col items-center">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.2em] mb-2">
            — CONTACT ME —
          </span>
          <h1 className="font-display-lg-mobile md:text-display-lg text-display-lg-mobile text-primary">
            Get in Touch
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-md mx-auto">
            Let's discuss how we can build something beautiful together.
            Reach out via the channels below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

          {/* WeChat Card */}
          <div className="bg-surface-container-lowest border border-outline-variant border-t-[2px] border-t-secondary-fixed-dim rounded shadow-[0px_4px_12px_rgba(26,28,27,0.06)] p-margin flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-300">
            <QRPlaceholder />
            <h3 className="font-label-caps text-label-caps text-primary mb-1 uppercase tracking-widest">WeChat</h3>
            <p className="font-label-mono text-label-mono text-on-surface-variant">Scan to connect</p>
          </div>

          {/* GitHub Card */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="bg-surface-container-lowest border border-outline-variant border-t-[2px] border-t-secondary-fixed-dim rounded shadow-[0px_4px_12px_rgba(26,28,27,0.06)] p-margin flex flex-col items-center justify-center relative group hover:-translate-y-1 transition-transform duration-300 overflow-hidden block"
          >
            <div className="absolute inset-0 bg-surface-container opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="w-12 h-12 mb-8 bg-surface-container rounded-full flex items-center justify-center text-primary relative">
              <GitHubIcon />
            </div>
            <div className="flex flex-col items-center w-full relative z-10">
              <h3 className="font-label-caps text-label-caps text-primary mb-1 uppercase tracking-widest">GitHub</h3>
              <p className="font-label-mono text-label-mono text-on-surface-variant">@sunny</p>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant absolute bottom-4 right-4 text-[18px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Email */}
        <div className="mt-16 pt-8 border-t border-outline-variant w-full max-w-sm mx-auto">
          <p className="font-label-mono text-label-mono text-on-surface-variant text-center">
            or send a direct inquiry to
            <br />
            <a
              href="mailto:hello@sunny.design"
              className="text-primary hover:text-secondary transition-colors border-b border-primary pb-[1px] mt-2 inline-block"
            >
              hello@sunny.design
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
