import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularText from '../../components/Circular_text';
import avatarImg from '../../assets/hero.png';

const Avatar = () => (
  <div className="home-avatar" aria-label="Sunny avatar">
    <img src={avatarImg} alt="Sunny" className="home-avatar__img" />
  </div>
);

const CRTOverlay = ({ onDone }: { onDone: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onDone, 1300);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div id="crt-overlay" className="crt-flicker">
      <div className="crt-scanline" />
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const mainRef = useRef<HTMLElement>(null);
  const crtDone = useRef(false);

  const revealHero = () => {
    const overlay = document.getElementById('crt-overlay');
    if (overlay) overlay.style.display = 'none';
    if (mainRef.current) {
      mainRef.current.style.animation = 'none';
      mainRef.current.style.opacity = '1';
    }
  };

  const handleCRTDone = () => {
    if (crtDone.current) return;
    crtDone.current = true;
    revealHero();
  };

  /* Fallback: never leave hero invisible if animation fails */
  useEffect(() => {
    const fallback = setTimeout(revealHero, 2500);
    return () => clearTimeout(fallback);
  }, []);

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (mainRef.current) {
      mainRef.current.style.transition = 'opacity 200ms ease-out';
      mainRef.current.style.opacity = '0';
    }
    setTimeout(() => navigate('/contact'), 220);
  };

  return (
    <>
      <CRTOverlay onDone={handleCRTDone} />
      <main
        ref={mainRef}
        className="home-hero relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Decorative horizontal rules */}
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-custom-border opacity-50 pointer-events-none" />
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-custom-border opacity-50 pointer-events-none" />

        {/* Ambient glow */}
        <div className="bg-glow" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-gutter max-w-max_width">
          {/* Sunflower + circular text */}
          <div className="circular-text-wrap">
            <CircularText
              text="SUNNY*AI*PRODUCT*BUILDER*"
              onHover="slowDown"
              spinDuration={55}
              className="home-circular-text"
            />
            <div className="circular-text-wrap__center circular-text-wrap__center--avatar">
              <Avatar />
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-custom-black mb-6 tracking-tight">
            HI, HERE IS SUNNY
          </h1>

          {/* Subheading with rule lines */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-custom-border" />
            <span className="font-label-caps text-label-caps text-custom-black tracking-widest uppercase">
              AI Product Manager · Builder · Dreamer
            </span>
            <div className="w-12 h-[1px] bg-custom-border" />
          </div>

          {/* CTA Button */}
          <a
            href="/contact"
            onClick={handleContact}
            className="inline-flex items-center justify-center px-8 py-3 bg-custom-green text-white font-label-caps text-label-caps rounded-md hover:opacity-90 transition-opacity duration-200 uppercase tracking-widest"
          >
            Contact Me
          </a>
        </div>

      </main>
    </>
  );
};

export default Home;
