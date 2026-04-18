import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Droplets, Zap, Heart, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 px-2">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">J</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight uppercase">Juicilisious</span>
            </a>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              We're on a mission to bring fresh, unpasteurized, nutrient-dense energy to every doorstep. Join the juice revolution.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-6 text-brand-primary">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bundles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Subscriptions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Juice Cleanses</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-6 text-brand-primary">Stay Fresh</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-brand-primary outline-none"
              />
              <button className="absolute right-2 top-1.5 p-1.5 bg-brand-primary rounded-lg">
                <Mail className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-500 mt-3">Get 10% off your first order when you sign up.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 px-2">
          <p>© 2026 Juicilisious. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const BenefitsSection: React.FC = () => {
  const benefits = [
    { icon: Droplets, title: 'Cold Pressed', desc: 'Preserves 5x more nutrients by avoiding heat during extraction.' },
    { icon: Leaf, title: 'Zero Waste', desc: 'We compost all pulp and use 100% recyclable glass bottles.' },
    { icon: Zap, title: 'Live Enzymes', desc: 'Unpasteurized goodness that helps boost your gut health.' },
    { icon: Heart, title: 'Farm to Door', desc: 'Bottled today, at your door tomorrow morning. Peak freshness.' },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">Why Juicilisious?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Not all juices are created equal. We prioritize health, environment, and flavor in every single drop.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[32px] border border-gray-100 hover:border-brand-primary/20 hover:bg-brand-primary/5 transition-all group"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
