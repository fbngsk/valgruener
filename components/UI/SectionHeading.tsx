import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, light = false }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-0.5 ${light ? 'bg-moss-500' : 'bg-moss-600'}`} />
        <p className={`font-bold uppercase tracking-[0.3em] text-sm ${light ? 'text-moss-400' : 'text-moss-600'}`}>
          {eyebrow}
        </p>
      </div>
      <h2 className={`font-display font-black text-4xl md:text-6xl uppercase tracking-tight ${light ? 'text-white' : 'text-zinc-900'}`}>
        {title}
      </h2>
    </div>
  );
};
