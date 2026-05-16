import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  type?: 'main' | 'vertical';
  title?: string;
  subtitle?: string;
  count: string;
  description: string;
  icons?: string;
  bgColor: string;
  textColor?: string;
  className?: string;
}

const CourseCard = ({ 
  type = 'main', 
  title, 
  subtitle, 
  count, 
  description, 
  icons, 
  bgColor, 
  textColor = 'text-white',
  className 
}: CourseCardProps) => {
  if (type === 'main') {
    return (
      <motion.div
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative flex flex-col justify-between p-10 rounded-[40px] min-h-[400px] cursor-pointer shadow-xl",
          bgColor,
          textColor,
          className
        )}
      >
        <div className="flex justify-end">
          <button className="flex items-center gap-2 text-sm font-semibold opacity-90 hover:opacity-100 transition-opacity">
            View all Courses <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 mb-8">
          <img src={icons} alt="Tech Icons" className="h-16 w-auto object-contain" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-8xl font-black">{count}</span>
            <span className="text-4xl font-bold mb-2">+</span>
            <span className="text-3xl font-bold ml-2">All Courses</span>
          </div>
          <p className="text-lg opacity-80 max-w-[200px] leading-tight font-medium mt-2">
            {description}
          </p>
        </div>
      </motion.div>
    );
  }

    return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex flex-col justify-between p-8 rounded-[40px] min-h-[400px] w-full lg:w-[280px] cursor-pointer border border-pink-100 shadow-sm",
        bgColor,
        textColor,
        className
      )}
    >
      <div className="flex flex-row items-start justify-between h-full">
        <div className="[writing-mode:vertical-lr] rotate-180 text-4xl font-black tracking-tighter opacity-80 h-full flex items-center">
          {title}
        </div>

        <div className="flex flex-col items-end justify-between h-full text-right max-w-[140px]">
          <p className="text-sm font-medium leading-tight text-gray-500 italic">
            {description}
          </p>
          <div className="flex items-baseline gap-0.5 mt-auto">
            <span className="text-7xl font-black text-brand-red">{count}</span>
            <span className="text-3xl font-black text-brand-red mb-1.5">+</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
