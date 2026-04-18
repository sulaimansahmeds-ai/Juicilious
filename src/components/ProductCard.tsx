import React from 'react';
import { motion } from 'motion/react';
import { Plus, ShoppingCart, RefreshCw } from 'lucide-react';
import { Product } from '../types';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product, isSub: boolean) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isSub, setIsSub] = React.useState(false);

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-[32px] overflow-hidden border border-gray-100 p-4 transition-all hover:shadow-2xl hover:shadow-gray-200"
    >
      <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-6 bg-gray-50">
        <motion.img
          animate={{ scale: isHovered ? 1.05 : 1 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex items-end p-4">
          <div className="w-full flex justify-between items-center text-white">
            <span className="text-xs font-bold uppercase tracking-widest">{product.category}</span>
            <div className="flex gap-1">
              {product.ingredients.slice(0, 2).map((ing, i) => (
                <span key={i} className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] whitespace-nowrap">{ing}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-2">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-display font-bold text-xl">{product.name}</h3>
          <div className="flex flex-col items-end">
            <span className="text-lg font-bold text-gray-900">${isSub ? product.subscriptionPrice : product.price}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6 truncate">{product.tagline}</p>

        <div className="flex flex-col gap-3">
          {/* Subscription Toggle */}
          <div 
            onClick={() => setIsSub(!isSub)}
            className={cn(
              "flex items-center justify-between p-2 rounded-xl border cursor-pointer transition-all",
              isSub ? "border-brand-primary bg-brand-primary/5" : "border-gray-100 hover:border-gray-200"
            )}
          >
            <div className="flex items-center gap-2">
              <RefreshCw className={cn("w-4 h-4", isSub ? "text-brand-primary animate-spin-slow" : "text-gray-400")} />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase">Subscribe & Save</span>
                <span className="text-[9px] text-gray-500 italic">Save 20% on weekly delivery</span>
              </div>
            </div>
            <div className={cn("w-4 h-4 rounded-full border-2 flex items-center justify-center", isSub ? "border-brand-primary bg-brand-primary" : "border-gray-200")}>
              {isSub && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
            </div>
          </div>

          <button
            onClick={() => onAddToCart(product, isSub)}
            className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-primary transition-colors group/btn"
          >
            <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
            {isSub ? 'Subscribe Now' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
