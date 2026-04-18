import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { AIAdvisor } from './components/AIAdvisor';
import { BenefitsSection, Footer } from './components/InfoSections';
import { products } from './data';
import { Product, CartItem } from './types';
import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';

export default function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  const addToCart = (product: Product, isSub: boolean) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.isSubscription === isSub);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.isSubscription === isSub) 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, isSubscription: isSub }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: string, isSub: boolean) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.isSubscription === isSub)));
  };

  const updateQty = (id: string, isSub: boolean, delta: number) => {
    setCartItems(prev => prev.map(item => 
      (item.id === id && item.isSubscription === isSub)
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={totalCartCount} onOpenCart={() => setCartOpen(true)} />
      <CartDrawer 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        items={cartItems} 
        onRemove={removeFromCart}
        onUpdateQty={updateQty}
      />
      <AIAdvisor />

      <main>
        <Hero />

        {/* Brand Trust Bar */}
        <div className="bg-gray-50 py-10 border-y border-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
              {['Vogue', 'GQ', 'Wellness', 'Forbes', 'Men\'s Health'].map((brand) => (
                <span key={brand} className="text-xl font-display font-black tracking-tighter uppercase italic">{brand}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Shop Section */}
        <section id="shop" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-brand-accent fill-current" />)}
                  </div>
                  <span className="text-sm font-bold text-gray-400">Trusted by 50,000+ Health Gurus</span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-bold">Today's Fresh Harvest</h2>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2 rounded-full border border-gray-100 text-sm font-bold hover:border-brand-primary hover:text-brand-primary transition-all">All</button>
                <button className="px-6 py-2 rounded-full border border-gray-100 text-sm font-bold hover:border-brand-primary hover:text-brand-primary transition-all">Cleanses</button>
                <button className="px-6 py-2 rounded-full border border-gray-100 text-sm font-bold hover:border-brand-primary hover:text-brand-primary transition-all">Shots</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart} 
                />
              ))}
            </div>

            <div className="mt-20 bg-brand-primary/10 rounded-[48px] p-8 md:p-16 relative overflow-hidden">
              <div className="max-w-2xl relative z-10">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-balance">Become a Juicilisious Member & Save <span className="text-brand-primary">$100+</span> Monthly.</h3>
                <p className="text-gray-600 mb-8 max-w-lg">Get weekly doorstep delivery, access to limited edition flavors, and personalized wellness plans.</p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-brand-primary transition-all shadow-xl shadow-gray-200">
                    See Subscription Plans
                  </button>
                  <button className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-white rounded-2xl font-bold hover:bg-white transition-all flex items-center gap-2">
                    Take Our Quiz <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {/* Floating elements for visual interest */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 -right-10 w-64 h-64 border-[40px] border-brand-primary/20 rounded-full blur-2xl"
              />
            </div>
          </div>
        </section>

        <BenefitsSection />

        {/* Testimonial Section */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl font-bold text-center mb-16 italic">What our community is feeling.</h2>
            
            <div className="flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
              {[
                { name: 'Alex M.', role: 'Fitness Coach', text: 'Deep Green is literally my morning ritual. My skin has never looked clearer and my energy is constant.' },
                { name: 'James K.', role: 'Tech Founder', text: 'Berry Blast keeps me sharp through back-to-back meetings. Natural energy is a game changer.' },
                { name: 'Maya R.', role: 'Yoga Instructor', text: 'I love the transparency. Knowing exactly where my ingredients come from makes me feel good about what I drink.' },
                { name: 'Leo T.', role: 'Marathon Runner', text: 'Liquid Gold is the ultimate recovery shot. I noticed a huge difference in my inflammation.' },
              ].map((t, idx) => (
                <div key={idx} className="min-w-[300px] bg-white p-8 rounded-[32px] shadow-sm snap-center border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 text-brand-accent fill-current" />)}
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-[10px] uppercase tracking-widest text-brand-primary">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-white flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl sm:text-7xl font-bold mb-8 text-balance">Ready to feel <span className="text-brand-primary">incredible</span>?</h2>
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">Join 10,000+ others getting fresh juice delivered weekly.</p>
            <button className="px-12 py-5 bg-gray-900 text-white rounded-[24px] text-lg font-bold hover:bg-brand-primary hover:scale-105 transition-all shadow-2xl shadow-gray-200">
              Build Your Bundle
            </button>
            <p className="mt-8 text-xs text-brand-primary font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              Next Delivery: Tomorrow Morning
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

