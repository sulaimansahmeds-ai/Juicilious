import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fafafa]">
      {/* Background accidental shapes */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-secondary text-xs font-bold mb-6 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              Fresh Batch Just Pressed
            </div>
            
            <h1 className="font-display text-5xl sm:text-7xl font-bold leading-[1.1] mb-6 text-balance text-gray-900">
              Fuel Your Vibe with <span className="text-brand-primary italic">Pure</span> Energy.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              No preservatives. No added sugar. Just raw, cold-pressed goodness delivered from farm to fridge in 24 hours.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-brand-primary hover:scale-105 transition-all flex items-center gap-2 shadow-xl shadow-gray-200">
                Shop Best Sellers <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-100 rounded-2xl font-bold hover:border-brand-primary hover:text-brand-primary transition-all flex items-center gap-2">
                <Play className="w-4 h-4 fill-current" /> Watch Our Process
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Farm Fresh', text: 'Local Sourcing' },
                { label: '100% Raw', text: 'Cold Pressed' },
                { label: 'Fast Fix', text: '24hr Delivery' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-bold text-gray-900">{item.label}</span>
                  </div>
                  <span className="text-xs text-gray-500">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-transparent rounded-[40px]" />
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img 
                src="https://picsum.photos/seed/juice-hero/600/800" 
                alt="Juicilisious Hero" 
                className="w-72 h-auto rounded-3xl shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Trust Badge Floating */}
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -bottom-10 -right-10 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center p-2 border-2 border-brand-accent"
              >
                <div className="text-[10px] font-bold text-center leading-tight">
                  CERTIFIED<br/>ORGANIC<br/>2026
                </div>
              </motion.div>
            </motion.div>
            
            {/* Reviews floating card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-1/4 right-0 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 max-w-[180px]"
            >
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-2 h-2 rounded-full bg-brand-accent" />
                ))}
              </div>
              <p className="text-[10px] text-gray-600 italic">"The best energy boost I've ever had. 100% natural!"</p>
              <p className="text-[10px] font-bold mt-2">— Sarah J.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
