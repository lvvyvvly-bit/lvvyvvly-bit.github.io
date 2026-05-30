import CircularText from '../../components/Circular_text';

const Works = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center pt-0 pb-section_gap px-margin">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center">

        {/* Section Label */}
        <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest mb-12 block">
          — WORKS —
        </span>

        {/* Headline */}
        <h1 className="font-display-lg-mobile md:text-display-lg text-display-lg-mobile italic text-on-background mb-6">
          Coming Soon
        </h1>

        {/* Subtext */}
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto mb-16">
          Something is being crafted. Stay tuned.
        </p>

        {/* Decorative stacked rules */}
        <div className="flex flex-col items-center gap-2 mb-16 w-full max-w-[200px]">
          <div className="h-[2px] w-full bg-secondary-fixed-dim" />
          <div className="h-[2px] w-[60%] bg-secondary-fixed-dim" />
          <div className="h-[2px] w-[30%] bg-secondary-fixed-dim" />
        </div>

        {/* Circular text */}
        <div className="circular-text-wrap mb-0">
          <CircularText
            text="COMING*SOON*STAY*TUNED*"
            onHover="speedUp"
            spinDuration={20}
            className="works-circular-text"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
