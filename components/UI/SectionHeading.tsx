import React from 'react';

interface Props {
  eyebrow: string;
  title: string;
  light?: boolean;
  center?: boolean;
  large?: boolean;
}

export const SectionHeading: React.FC<Props> = ({ eyebrow, title, light = false, center = false, large = false }) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : 'text-left'} relative z-10`}>
      <div className="flex items-center gap-4 mb-2 justify-center md:justify-start">
         {center ? null : <div className="h-[3px] w-8 bg-moss-600"></div>} 
        <span className={`block text-sm font-bold tracking-[0.2em] uppercase font-sans ${light ? 'text-moss-500' : 'text-moss-600'}`}>
            {eyebrow}
        </span>
         {center ? null : <div className="h-[2px] w-full max-w-[100px] bg-white/10"></div>}
      </div>
      
      <h2 className={`font-display font-bold uppercase leading-[0.9] tracking-tight ${large ? 'text-6xl md:text-8xl' : 'text-5xl md:text-6xl'} ${light ? 'text-white' : 'text-zinc-900'}`}>
        {title}
      </h2>
    </div>
  );
};