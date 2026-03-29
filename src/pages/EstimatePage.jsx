import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PrimaryButton, GhostButton } from '../components/ui/Buttons';
import { Card } from '../components/ui/Card';
import { ConditionBadge, CategoryChip } from '../components/ui/Badges';

const SUBTEXTS = [
  "Checking fabric quality...",
  "Assessing brand value...",
  "Calculating market demand..."
];

const ITEMS = [
  { name: 'Blue Oxford Shirt', condition: 'Good', category: 'Tops', vmc: 95 },
  { name: "Levi's 511 Jeans", condition: 'Like New', category: 'Bottoms', vmc: 145 },
  { name: 'Bomber Jacket', condition: 'Fair', category: 'Outerwear', vmc: 60 },
  { name: 'Woman Black Tee', condition: 'Good', category: 'Streetwear', vmc: 40 }
];

export default function EstimatePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [subtextIndex, setSubtextIndex] = useState(0);
  const [confidence, setConfidence] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setSubtextIndex(prev => (prev + 1) % SUBTEXTS.length);
    }, 600);

    const loadTimer = setTimeout(() => {
      setLoading(false);
      clearInterval(textInterval);
      
      // Animate confidence bar
      setTimeout(() => setConfidence(87), 100);
    }, 1500);

    return () => {
      clearInterval(textInterval);
      clearTimeout(loadTimer);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-[600px] mx-auto p-6 animate-in fade-in duration-300">
        <div className="relative w-[120px] h-[120px] mb-8 overflow-hidden rounded-[20px] bg-surfaceContainer">
          {/* Shirt Silhouette */}
          <svg className="absolute inset-0 w-full h-full p-4 text-textMuted opacity-20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C11 2 10 2 10 3L6 4C4.89543 4.27614 4 5.3 4 6.5V10L7 9V20C7 21.1046 7.89543 22 9 22H15C16.1046 22 17 21.1046 17 20V9L20 10V6.5C20 5.3 19.1046 4.27614 18 4L14 3C14 2 13 2 12 2Z"/>
          </svg>
          
          {/* Scanner Lines */}
          <div className="absolute inset-0 flex flex-col justify-between animate-[scan_400ms_linear_infinite]">
             <div className="h-[2px] w-full bg-secondary shadow-[0_0_8px_rgba(58,104,77,0.8)]"></div>
             <div className="h-[2px] w-full bg-secondary shadow-[0_0_8px_rgba(58,104,77,0.8)] mt-10"></div>
             <div className="h-[2px] w-full bg-secondary shadow-[0_0_8px_rgba(58,104,77,0.8)] mt-10"></div>
          </div>
        </div>

        <h2 className="font-sans font-semibold text-[16px] text-primary mb-2">Analyzing your items...</h2>
        <p className="font-sans font-normal text-[14px] text-textMuted animate-pulse transition-opacity duration-300">
          {SUBTEXTS[subtextIndex]}
        </p>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}} />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-[600px] mx-auto w-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-[120px]">
      
      {/* Amber notice strip */}
      <div className="bg-tertiaryContainer rounded-[12px] py-[12px] px-[20px] shadow-sm">
        <span className="font-sans font-semibold text-[11px] text-onTertiary uppercase tracking-[0.05em]">
          ✦ AI ESTIMATE READY
        </span>
      </div>

      {/* Credit display */}
      <div className="flex flex-col items-center gap-1 my-4">
        <div className="flex items-end gap-3 justify-center mb-1">
          <span className="font-sans font-normal text-[16px] text-textSecondary pb-2">You'll earn</span>
          <span className="font-serif italic font-bold text-[48px] text-secondary leading-[1] inline-block">340 VMC</span>
        </div>
        <span className="font-sans font-normal text-[14px] text-textMuted">≈ ₹3,400 in marketplace credits</span>
      </div>

      {/* Breakdown Card */}
      <Card className="flex flex-col gap-[1.4rem]">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 pb-2 border-b-transparent">
          <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider col-span-3">ITEM / CONDITION / CATEGORY</span>
          <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider text-right">CREDITS</span>
        </div>
        
        {ITEMS.map((item, i) => (
          <div key={i} className="flex items-center justify-between min-h-[40px] gap-2">
            <div className="flex items-center gap-3 md:gap-4 flex-1">
              <span className="font-sans font-semibold text-[14px] text-primary min-w-[120px]">{item.name}</span>
              <div className="relative w-[30px] h-6 flex items-center justify-center">
                 {/* Position absolute condition badge inside layout requires relative hack. Reusing original badge logic but relative for list form */}
                 <span className={`static px-2 py-1 font-semibold text-[9px] uppercase tracking-[0.05em] rounded-sm whitespace-nowrap ${
                   item.condition === 'Like New' ? 'bg-secondary text-white' : 
                   item.condition === 'Good' ? 'bg-tertiary text-white' : 
                   'bg-textSecondary text-white'
                 }`}>{item.condition}</span>
              </div>
              <div className="flex-1 ml-4 hidden md:block">
                 <span className="bg-surfaceContainer text-textSecondary font-semibold text-[10px] px-3 py-1 rounded-full">{item.category}</span>
              </div>
            </div>
            <span className="font-sans font-bold text-[14px] text-secondary whitespace-nowrap">{item.vmc} VMC</span>
          </div>
        ))}

        <div className="flex items-center justify-between pt-[1.4rem]">
          <span className="font-sans font-bold text-[14px] text-primary">Total</span>
          <span className="font-sans font-bold text-[18px] text-secondary">340 VMC</span>
        </div>
      </Card>

      {/* Confidence bar */}
      <div className="flex flex-col gap-3 mt-2">
        <span className="font-sans font-semibold text-[13px] text-primary">AI Confidence: 87%</span>
        <div className="w-full h-[6px] bg-surfaceContainer rounded-full overflow-hidden">
          <div 
            className="h-full bg-secondary rounded-full transition-all duration-800 ease-out"
            style={{ width: `${confidence}%` }}
          />
        </div>
      </div>

      <p className="font-sans font-normal text-[12px] text-textMuted text-center mt-2 px-4">
        Estimates are calculated based on current market trends and condition. Final valuation may vary slightly after physical inspection.
      </p>

      {/* CTAs */}
      <div className="flex flex-col md:flex-row gap-4 mt-2">
        <PrimaryButton className="w-full" onClick={() => navigate('/upload/schedule')}>
          Accept & Schedule Pickup
        </PrimaryButton>
        <GhostButton className="w-full md:w-auto" onClick={() => navigate('/upload')}>
          Edit Items
        </GhostButton>
      </div>

      {/* Expandable How credits are calculated */}
      <div className="mt-6 flex flex-col gap-2 relative">
        <button 
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-center gap-2 font-sans font-medium text-[13px] text-textSecondary hover:text-primary transition-colors"
        >
          How credits are calculated
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <div className={`transition-all duration-250 ease-out overflow-hidden ${expanded ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
          <Card className="flex flex-col gap-4 bg-surfaceLow shadow-none">
            {[
              { label: 'Brand Weight', val: 30 },
              { label: 'Condition Score', val: 40 },
              { label: 'Market Demand', val: 20 },
              { label: 'Sustainability Bonus', val: 10 },
            ].map((row, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex justify-between items-center w-full">
                  <span className="font-sans font-medium text-[14px] text-primary">{row.label}</span>
                  <span className="font-sans font-medium text-[12px] text-textMuted">{row.val}%</span>
                </div>
                <div className="w-full h-[4px] bg-surfaceContainer rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: `${row.val}%` }} />
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
      
    </div>
  );
}
