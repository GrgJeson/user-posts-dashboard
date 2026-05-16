'use client';

import React from 'react';
import CourseCard from '@/components/task2/coursecard';
import iconsImg from '@/assets/task2/icons.png';
import Link from 'next/link';

const Task2UIPage = () => {
    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-8 lg:px-16 flex flex-col items-center text-black">
            <div className="max-w-7xl w-full">
                {/* Navigation */}
                <div className="flex justify-start mb-8">
                   <Link href="/" className="text-blue-600 hover:underline">← Back to Dashboard</Link>
                </div>

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-gray-600 font-semibold mb-2">Explore our classes and master trending skills!</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Dive Into <span className="text-brand-green">What's Hot Right Now! 🔥</span>
                    </h1>
                </div>

                {/* Cards container */}
                <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
                    {/* Main Card */}
                    <CourseCard
                        type="main"
                        count="23"
                        description="courses you're powering through right now."
                        icons={iconsImg.src}
                        bgColor="bg-[#BD3238]" // Specific red from Figma
                        className="flex-1"
                    />

                    {/* Upcoming Card */}
                    <CourseCard
                        type="vertical"
                        title="Upcoming Courses"
                        count="05"
                        description="exciting new courses waiting to boost your skills."
                        bgColor="bg-[#FFF5F5]"
                        className="text-brand-red"
                    />

                    {/* Ongoing Card */}
                    <CourseCard
                        type="vertical"
                        title="Ongoing Courses"
                        count="10"
                        description="currently happening—don't miss out on the action!"
                        bgColor="bg-[#FFF5F5]"
                        className="text-brand-red"
                    />
                </div>
            </div>
        </div>
    );
};

export default Task2UIPage;
