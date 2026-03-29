import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Share, Heart, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/mockData';
import { StatusChip, ConditionBadge } from '../components/ui/Badges';
import { PrimaryButton, SecondaryButton, GhostButton } from '../components/ui/Buttons';
import { Card } from '../components/ui/Card';

const MOCK_PICS = [
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800",
  "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=800",
  "https://images.unsplash.com/photo-1582216514151-244eb51da039?q=80&w=800",
  "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800"
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(0);
  const [activeSize, setActiveSize] = useState('M');
  const [accordion, setAccordion] = useState({ details: false, delivery: false, reviews: true });

  // Use 1 as default param if missing
  const product = products.find(p => p.id === parseInt(id || 1)) || products[0];

  return (
    <div className="flex flex-col w-full pb-[120px] bg-background">
      {/* Top Nav explicitly mapped in AppLayout but back button helps here */}
      <div className="h-[56px] px-6 w-full flex items-center justify-between text-primary bg-background sticky top-0 md:top-[56px] z-30">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 font-sans text-[14px] hover:text-secondary">
          <ChevronLeft size={18} /> Back
        </button>
        <div className="flex items-center gap-4">
          <button className="hover:text-secondary transition-colors"><Share size={18} /></button>
          <button className="hover:text-secondary transition-colors"><Heart size={18} /></button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row max-w-[1240px] mx-auto w-full px-4 md:px-8 gap-8 lg:gap-14 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Left — Image Gallery (55%) */}
        <div className="w-full lg:w-[55%] flex flex-col gap-4">
          <div className="w-full aspect-square relative rounded-[24px] overflow-hidden bg-surfaceContainer">
            <img src={MOCK_PICS[activeImg]} alt={product.name} className="w-full h-full object-cover transition-opacity duration-300" />
            <div className="absolute bottom-[16px] left-[16px] z-10">
              <StatusChip>VERIFIED BY VINIMAY</StatusChip>
            </div>
          </div>
          <div className="flex gap-2 w-full overflow-x-auto hide-scrollbar">
            {MOCK_PICS.map((img, i) => (
              <div 
                key={i} 
                className={`w-[72px] h-[72px] rounded-[10px] overflow-hidden cursor-pointer flex-shrink-0 transition-all ${
                  activeImg === i ? 'border-[2px] border-secondary' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => setActiveImg(i)}
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Right — Product Details (45%) */}
        <div className="w-full lg:w-[45%] flex flex-col">
          <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider mb-2">
            {product.brand}
          </span>
          <h1 className="font-sans font-bold text-[28px] text-primary leading-tight mb-3">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              {[1,2,3,4].map(star => <Star key={star} size={16} fill="#C8870A" stroke="none" />)}
              <Star size={16} fill="none" stroke="#C8870A" strokeWidth="2" />
            </div>
            <span className="font-sans font-normal text-[13px] text-textMuted tracking-wider">12 reviews</span>
          </div>

          <div className="flex flex-col gap-1 mb-8">
            <div className="flex items-baseline gap-2">
              <span className="font-sans font-bold text-[28px] text-secondary">{product.vmc} VMC</span>
              <span className="font-sans font-normal text-[14px] text-textMuted mb-1">or ₹{product.inr}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-sans font-normal text-[13px] text-textMuted line-through">₹5,499 retail</span>
              <span className="font-sans font-semibold text-[13px] text-secondary">You save ₹3,299 vs retail</span>
            </div>
          </div>

          {/* Sizes */}
          <div className="flex flex-col gap-3 mb-8">
            <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">SIZE</span>
            <div className="flex gap-2">
              {['S','M','L','XL'].map(size => (
                <button 
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`px-5 py-2 rounded-full font-sans font-medium text-[14px] transition-colors flexitems-center justify-center ${
                    activeSize === size ? 'bg-primary text-white' : 'bg-surfaceContainer text-primary hover:bg-surfaceLow'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Condition Card */}
          <div className="bg-surfaceLow rounded-[12px] p-4 flex flex-col gap-3 mb-6 relative">
             <div className="flex">
               <span className={`inline-block font-semibold text-[10px] uppercase tracking-[0.05em] rounded-sm px-2 py-1 ${
                 product.condition === 'Like New' ? 'bg-secondary text-white' : 
                 product.condition === 'Good' ? 'bg-tertiary text-white' : 
                 'bg-textSecondary text-white'
               }`}>{product.condition}</span>
             </div>
             <p className="font-sans font-normal text-[13px] text-textSecondary leading-relaxed">
               Worn approximately 5–8 times. No stains, minor fabric pilling at collar. All buttons intact.
             </p>
          </div>

          {/* Seller Card */}
          <Card className="flex items-center justify-between p-4 mb-8 !shadow-none border border-[rgba(90,90,90,0.08)]">
            <div className="flex items-center gap-4">
              <div className="w-[36px] h-[36px] bg-surfaceContainer rounded-full flex items-center justify-center font-sans font-bold text-[14px] text-secondary">
                PS
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-[14px] text-primary">Sold by Priya S., Mumbai</span>
                <span className="font-sans font-normal text-[12px] text-textMuted">4.8 ★ seller rating · 12 items sold</span>
              </div>
            </div>
          </Card>

          {/* CTAs */}
          <div className="flex flex-col gap-3 mb-10 w-full">
             <SecondaryButton className="w-full">Add to Cart</SecondaryButton>
             <PrimaryButton className="w-full">Buy with Credits</PrimaryButton>
             <GhostButton className="w-full flex justify-center gap-2 items-center">
                 <Heart size={16} /> Wishlist
             </GhostButton>
          </div>

          {/* Accordions */}
          <div className="flex flex-col w-full mb-10 border-t border-[rgba(90,90,90,0.1)]">
            {[
              { id: 'details', title: 'Item Details' },
              { id: 'delivery', title: 'Pickup & Delivery' },
              { id: 'reviews', title: 'Reviews' }
            ].map(section => (
              <div key={section.id} className="flex flex-col border-b border-[rgba(90,90,90,0.1)]">
                <button 
                  onClick={() => setAccordion(prev => ({...prev, [section.id]: !prev[section.id]}))}
                  className="w-full flex justify-between items-center py-4 px-2 hover:bg-surfaceContainer transition-colors font-sans font-semibold text-[14px] text-primary"
                >
                  {section.title}
                  {accordion[section.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${accordion[section.id] ? (section.id === 'reviews' ? 'max-h-[800px] pb-4 bg-background' : 'max-h-[200px] p-4 bg-surfaceLow') : 'max-h-0'}`}>
                  {section.id !== 'reviews' ? (
                     <p className="font-sans text-[13px] text-textSecondary leading-relaxed">
                       {section.id === 'details' ? 'Material: 100% Organic Cotton. Care: Machine wash cold. Fit: Relaxed boxy fit.' : 'Free shipping on orders over ₹2000. Express delivery available for Mumbai.'}
                     </p>
                  ) : (
                    <div className="flex flex-col gap-4 mt-2 px-2">
                       {[1,2,3].map(rev => (
                         <Card key={rev} className="!shadow-none border border-[rgba(90,90,90,0.08)] p-4 flex flex-col gap-2">
                           <div className="flex justify-between items-center w-full">
                             <div className="flex items-center gap-2">
                               <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden"><img src={`https://i.pravatar.cc/100?img=${rev+10}`} className="w-full h-full object-cover"/></div>
                               <span className="font-sans font-semibold text-[13px] text-primary">Ananya V.</span>
                             </div>
                             <span className="font-sans text-[11px] text-textMuted">2 weeks ago</span>
                           </div>
                           <div className="flex gap-[2px] mt-1">
                             {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#C8870A" stroke="none" />)}
                           </div>
                           <p className="font-sans font-normal text-[13px] text-textSecondary mt-1 leading-relaxed">
                             Exactly as described! The condition was actually better than I expected. Priya was very helpful in packaging it securely. Will buy again.
                           </p>
                         </Card>
                       ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
