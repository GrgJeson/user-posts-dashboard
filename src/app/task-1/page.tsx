'use client';

import React from 'react';
import JourneyCard from '@/components/task1/journeycard';
import thinkingImg from '@/assets/task1/thinking.png';
import writingImg from '@/assets/task1/writing.png';
import listeningImg from '@/assets/task1/listening.png';
import laptopImg from '@/assets/task1/laptop.png';
import Link from 'next/link';

const Task1Page = () => {
  const cards = [
    {
      title: "Start with Clarity",
      description: "Step into a better learning path. Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
      image: thinkingImg.src,
      bgColor: "bg-brand-red",
    },
    {
      title: "Learn by Doing",
      description: "Practical skills, real projects. Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
      image: writingImg.src,
      bgColor: "bg-brand-teal",
    },
    {
      title: "Get Mentored & Supported",
      description: "You're not learning alone. Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
      image: listeningImg.src,
      bgColor: "bg-brand-purple",
    },
    {
      title: "Achieve & Showcase",
      description: "Build your portfolio, get job-ready. Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
      image: laptopImg.src,
      bgColor: "bg-brand-gold",
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] py-16 px-4 sm:px-8 lg:px-16 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        {/* Navigation */}
        <div className="flex justify-start mb-8">
           <Link href="/" className="text-blue-600 hover:underline">← Back to Dashboard</Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 font-semibold mb-2">Your SkillShikshya Journey</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-brand-green">Step In.</span>{' '}
            <span className="text-brand-teal">Skill Up.</span>{' '}
            <span className="text-brand-green">Stand Out. 🚀</span>
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <JourneyCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task1Page;
