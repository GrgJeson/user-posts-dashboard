import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface JourneyCardProps {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  className?: string;
}

const JourneyCard = ({ title, description, image, bgColor, className }: JourneyCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
      className={cn(
        "relative flex flex-row items-center p-8 rounded-[40px] overflow-hidden min-h-[280px] w-full cursor-pointer transition-shadow",
        bgColor,
        className
      )}
    >
      <div className="relative z-10 w-1/3 flex justify-center items-center">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-contain drop-shadow-2xl" 
        />
      </div>

      <div className="relative z-10 w-2/3 pl-8 flex flex-col justify-center text-white">
        <h3 className="text-2xl font-bold mb-2 leading-tight">{title}</h3>
        <p className="text-sm opacity-90 leading-relaxed font-medium">
          {description}
        </p>
      </div>

      <div className="absolute top-8 right-8">
        <motion.div 
          whileHover={{ rotate: 45 }}
          className="bg-white/20 p-2 rounded-full backdrop-blur-sm"
        >
          <ArrowUpRight className="w-5 h-5 text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JourneyCard;
