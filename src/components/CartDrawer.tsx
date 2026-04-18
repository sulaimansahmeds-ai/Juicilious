import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, ShieldCheck, Truck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string, isSub: boolean) => void;
  onUpdateQty: (id: string, isSub: boolean, delta: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.isSubscription ? item.subscriptionPrice : item.price) * item.quantity, 0);
  const isFreeShipping = subtotal > 40;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-bottom flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6" />
                <h2 className="font-display font-bold text-2xl">Your Basket</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="px-6 py-4 bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase truncate">
                  <Truck className="w-4 h-4 text-brand-primary" />
                  {isFreeShipping ? 'You have Free Shipping!' : `Spend $${(40 - subtotal).toFixed(2)} more for free shipping`}
                </div>
              </div>
              <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((subtotal / 40) * 100, 100)}%` }}
                  className="h-full bg-brand-primary"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag className="w-16 h-16 mb-4" />
                  <p className="text-sm">Your cart is feeling light...</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.isSubscription}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h4 className="font-bold text-sm">{item.name}</h4>
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider">{item.category}</p>
                          {item.isSubscription && (
                            <span className="inline-block mt-1 px-2 py-0.5 bg-brand-primary/10 text-brand-primary text-[10px] font-bold rounded">
                              WEEKLY SUBSCRIPTION
                            </span>
                          )}
                        </div>
                        <span className="font-bold text-sm">${(item.isSubscription ? item.subscriptionPrice : item.price).toFixed(2)}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-100 rounded-lg overflow-hidden">
                          <button 
                            onClick={() => onUpdateQty(item.id, item.isSubscription, -1)}
                            className="px-2 py-1 hover:bg-gray-50 text-xs disabled:opacity-30"
                            disabled={item.quantity <= 1}
                          >-</button>
                          <span className="px-3 py-1 text-xs font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQty(item.id, item.isSubscription, 1)}
                            className="px-2 py-1 hover:bg-gray-50 text-xs"
                          >+</button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.id, item.isSubscription)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 bg-white border-t border-gray-100">
              <div className="flex justify-between mb-4">
                <span className="text-gray-500 font-medium tracking-tight">Estimated Total</span>
                <span className="font-display font-bold text-2xl text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <button 
                disabled={items.length === 0}
                className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-gray-200 uppercase tracking-wider text-sm"
              >
                Checkout Now <ShieldCheck className="w-4 h-4 ml-1" />
              </button>
              <p className="text-[10px] text-center text-gray-400 mt-4 px-4 leading-normal">
                Tax and shipping calculated at checkout. All bottles are cold-pressed and delivered fresh.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
