import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, X, ChevronDown } from 'lucide-react';
import { products } from '../data/mockData';
import { ConditionBadge } from '../components/ui/Badges';

export default function MarketplacePage() {
  const navigate = useNavigate();
  const [val, setVal] = useState(1000); // 0-1000 VMC
  const [liked, setLiked] = useState({});

  const handleLike = (e, id) => {
    e.stopPropagation();
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex w-full animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Left Filter Panel */}
      <aside className="w-[210px] hidden md:flex flex-col flex-shrink-0 px-6 py-8 h-[calc(100vh-56px)] overflow-y-auto sticky top-[56px] border-none bg-background gap-12 hide-scrollbar">
        <div className="flex items-center justify-between">
          <h2 className="font-serif font-bold text-[20px] text-primary">Filters</h2>
          <button className="font-sans font-semibold text-[11px] text-secondary tracking-wider hover:underline">
            CLEAR ALL
          </button>
        </div>

        {/* Payment */}
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative w-4 h-4 flex items-center justify-center">
              <input type="radio" name="payment" className="peer sr-only" defaultChecked />
              <div className="w-4 h-4 rounded-full border border-textMuted peer-checked:border-secondary transition-colors"></div>
              <div className="absolute w-2 h-2 rounded-full bg-secondary scale-0 peer-checked:scale-100 transition-transform"></div>
            </div>
            <span className="font-sans font-medium text-[14px] text-primary group-hover:text-secondary transition-colors">Pay with Credits</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative w-4 h-4 flex items-center justify-center">
              <input type="radio" name="payment" className="peer sr-only" />
              <div className="w-4 h-4 rounded-full border border-textMuted peer-checked:border-secondary transition-colors"></div>
              <div className="absolute w-2 h-2 rounded-full bg-secondary scale-0 peer-checked:scale-100 transition-transform"></div>
            </div>
            <span className="font-sans font-medium text-[14px] text-primary group-hover:text-secondary transition-colors">Pay with Cash</span>
          </label>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-3">
          <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">CATEGORIES</span>
          <div className="flex flex-col gap-3">
            {['Tops', 'Bottoms', 'Outerwear'].map((cat, i) => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <input type="checkbox" className="peer sr-only" defaultChecked={i === 0} />
                  <div className="w-4 h-4 rounded-[4px] border border-textMuted peer-checked:border-secondary peer-checked:bg-secondary transition-colors flex items-center justify-center">
                    <Check size={12} color="white" className="opacity-0 peer-checked:opacity-100" />
                  </div>
                </div>
                <span className="font-sans font-normal text-[14px] text-primary group-hover:text-secondary transition-colors">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Condition */}
        <div className="flex flex-col gap-3">
          <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">CONDITION</span>
          <div className="flex gap-2">
             <button className="bg-secondary text-white font-sans font-medium text-[12px] px-3 py-[6px] rounded-full">Like New</button>
             <button className="bg-surfaceContainer text-textPrimary hover:bg-surfaceLow font-sans font-medium text-[12px] px-3 py-[6px] rounded-full transition-colors">Good</button>
             <button className="bg-surfaceContainer text-textPrimary hover:bg-surfaceLow font-sans font-medium text-[12px] px-3 py-[6px] rounded-full transition-colors">Fair</button>
          </div>
        </div>

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">BRAND</span>
          <div className="flex flex-col gap-3">
            {["Levi's", 'Zara', 'H&M', 'FabIndia'].map((brand, i) => (
              <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <input type="checkbox" className="peer sr-only" defaultChecked={i === 0} />
                  <div className="w-4 h-4 rounded-[4px] border border-textMuted peer-checked:border-secondary peer-checked:bg-secondary transition-colors flex items-center justify-center">
                    <Check size={12} color="white" className="opacity-0 peer-checked:opacity-100" />
                  </div>
                </div>
                <span className="font-sans font-normal text-[14px] text-primary group-hover:text-secondary transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="flex flex-col gap-3 mb-10">
          <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">PRICE RANGE (VMC)</span>
          <div className="relative h-2 w-full mt-2">
            <input 
              type="range" 
              min="0" max="1000" 
              value={val} 
              onChange={e => setVal(e.target.value)}
              className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer z-10" 
            />
            {/* Custom Track */}
            <div className="absolute inset-x-0 top-0 h-1 bg-surfaceContainer rounded-full transform translate-y-1"></div>
            <div className="absolute left-0 top-0 h-1 bg-secondary rounded-full transform translate-y-1" style={{ width: `${(val/1000)*100}%` }}></div>
            <div className="absolute top-0 w-3 h-3 bg-secondary rounded-full transform -translate-y-[2px] -translate-x-1" style={{ left: `${(val/1000)*100}%` }}></div>
          </div>
          <div className="flex items-center justify-between mt-1">
             <span className="font-sans font-normal text-[10px] text-textMuted">0 VMC</span>
             <span className="font-sans font-normal text-[10px] text-textMuted">{val} VMC</span>
          </div>
        </div>
      </aside>

      {/* Main Content Product Grid */}
      <main className="flex-1 px-4 md:px-8 py-8 w-full  max-w-[1200px] pb-[120px]">
        
        {/* Active Filters & Sort */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="bg-surfaceContainer border border-secondary text-secondary font-sans font-semibold text-[10px] tracking-wider px-3 py-1 flex items-center gap-2 rounded-full cursor-pointer hover:bg-surfaceLow transition-colors">
              TOPS <X size={10} strokeWidth={3} />
            </div>
            <div className="bg-surfaceContainer border border-secondary text-secondary font-sans font-semibold text-[10px] tracking-wider px-3 py-1 flex items-center gap-2 rounded-full cursor-pointer hover:bg-surfaceLow transition-colors">
              LIKE NEW <X size={10} strokeWidth={3} />
            </div>
          </div>
          <div className="flex items-center gap-1 font-sans font-medium text-[14px] text-textSecondary cursor-pointer hover:text-primary transition-colors">
            Sort by: <span className="text-primary font-semibold">Featured</span> <ChevronDown size={14} className="mt-[2px]" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {products.map((item, i) => (
            <div 
              key={item.id} 
              className="flex flex-col bg-surface shadow-ambient rounded-[16px] cursor-pointer hover:-translate-y-[4px] hover:shadow-2xl transition-all duration-300 group"
              onClick={() => navigate(`/marketplace/${item.id}`)}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-[16px]">
                <img 
                  src={`https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop&sig=${i}`} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Heart Button */}
                <button 
                   className="absolute top-[10px] right-[10px] w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:scale-110 active:scale-90 transition-transform shadow-sm"
                   onClick={(e) => handleLike(e, item.id)}
                >
                  <Heart size={16} color={liked[item.id] ? '#C0392B' : '#1A1A1A'} fill={liked[item.id] ? '#C0392B' : 'transparent'} className="mt-[1px]" />
                </button>
                
                <ConditionBadge condition={item.condition} className="absolute bottom-[12px] left-[12px]" />
              </div>
              <div className="flex flex-col p-3 md:p-4 rounded-b-[16px]">
                <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider mb-[2px]">{item.brand}</span>
                <span className="font-sans font-semibold text-[15px] text-primary truncate mb-2">{item.name}</span>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-sans font-bold text-[16px] text-secondary whitespace-nowrap">{item.vmc} VMC</span>
                  <span className="font-sans font-normal text-[13px] text-textMuted whitespace-nowrap">or ₹{item.inr}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

    </div>
  );
}

// Check component for custom checkboxes since lucide Check is used
const Check = ({ size, color, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)
