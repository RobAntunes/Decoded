"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaLightbulb, FaChartLine } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const HiW: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Connect Data Source",
      description: "Seamlessly integrate your existing data sources with our platform, including through AI Vision.",
      icon: <FaDatabase />,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      delay: 0.1,
    },
    {
      id: 2,
      title: "AI-Powered Analysis",
      description: "Our advanced AI analyzes your data to identify patterns, anomalies, and opportunities for optimization.",
      icon: <FaLightbulb />,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      textColor: "text-indigo-600",
      delay: 0.3,
    },
    {
      id: 3,
      title: "Actionable Insights",
      description: "Receive clear, actionable insights that drive meaningful improvements in your business operations.",
      icon: <FaChartLine />,
      color: "bg-gradient-to-br from-blue-600 to-blue-700",
      textColor: "text-blue-700",
      delay: 0.5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (delay: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay,
      },
    }),
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-5"
          >
            <span className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
              <HiSparkles className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
            How It Works
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Our streamlined process makes it easy to transform your data into actionable insights that drive business growth.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              custom={step.delay}
              variants={itemVariants}
              className="relative flex flex-col bg-white dark:bg-gray-800/60 backdrop-blur rounded-2xl shadow-xl dark:shadow-blue-900/10 overflow-hidden transform transition duration-300 hover:scale-[1.02] group"
            >
              {/* Gradient Line on Top */}
              <div className={`h-2 w-full ${step.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`flex items-center justify-center w-12 h-12 mr-4 ${step.color} text-white rounded-xl shadow-lg group-hover:shadow-xl transition-all`}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-blue-500 dark:text-blue-400 mb-1">Step {step.id}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                
                {/* Connecting lines between steps (visible on mobile) */}
                {step.id < steps.length && (
                  <div className="md:hidden flex justify-center mt-8">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500 dark:text-blue-400">
                      <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Decorative Corner Elements */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-tl-[100px] transform translate-x-10 translate-y-10"></div>
              <div className="absolute top-1/2 left-0 w-2 h-16 bg-gradient-to-b from-transparent via-blue-200 dark:via-blue-700/30 to-transparent transform -translate-x-1"></div>
            </motion.div>
          ))}
        </motion.div>
        
        
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform transition duration-300 hover:-translate-y-1">
            Get Started Today
          </button>
          
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            No credit card required • Free 14-day trial
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HiW;
