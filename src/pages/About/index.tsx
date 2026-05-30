import CircularText from '../../components/Circular_text';

const About = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-margin py-section_gap w-full max-w-max_width mx-auto">
      <div className="w-full max-w-2xl flex flex-col items-center text-center">

        {/* Section Label */}
        <div className="flex items-center w-full mb-16">
          <div className="flex-grow h-px bg-rule" />
          <h1 className="px-6 font-label-caps text-label-caps uppercase tracking-[0.15em] text-[#E8C84A]">
            — ABOUT ME —
          </h1>
          <div className="flex-grow h-px bg-rule" />
        </div>

        {/* Monogram + circular text */}
        <div className="circular-text-wrap mb-12">
          <CircularText
            text="ABOUT*SUNNY*AI*PM*"
            onHover="speedUp"
            spinDuration={20}
            className="about-circular-text"
          />
          <div className="circular-text-wrap__center">
            <div className="w-[120px] h-[120px] bg-surface-container-lowest border border-rule border-t-2 border-t-accent rounded-lg flex items-center justify-center shadow-[0_4px_12px_rgba(26,26,26,0.06)]">
              <span className="font-headline-md text-[3rem] text-accent italic leading-none">S</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed">
          I am a continuously upgrading AI Product Manager, with keen perception of
          cutting-edge AI technology. I love trying things hands-on and turning ideas
          into reality.
        </p>

        {/* Divider */}
        <div className="w-[120px] h-px bg-rule mb-12" />

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {['AI', 'Product', 'Builder'].map(tag => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-accent text-accent font-label-mono text-label-mono bg-surface"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
