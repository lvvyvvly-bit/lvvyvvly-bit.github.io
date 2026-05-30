const Footer = () => {
  return (
    <footer className="w-full py-margin border-t border-outline-variant bg-background mt-auto">
      <div className="max-w-max_width mx-auto px-margin flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="font-label-caps text-label-caps text-on-surface-variant">SUNNY</span>
          <span className="font-label-mono text-label-mono text-on-surface-variant">© 2026 Sunny</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com" target="_blank" rel="noreferrer"
            className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="#"
            className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="#"
            className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors">
            Archive
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
