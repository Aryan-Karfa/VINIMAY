import React, { useEffect, useState } from 'react';
import { Search, Bell, Star, Leaf, Wind, Truck, ShoppingBag, CheckCircle, ShoppingCart, Sparkles, Globe, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import profilePic from '../assets/profile.png';
import { currentUser, activities, products } from '../data/mockData';
import { Card } from '../components/ui/Card';
import { StatusChip, ConditionBadge } from '../components/ui/Badges';
import { SecondaryButton } from '../components/ui/Buttons';

export default function DashboardPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate stroke dashoffset 0->75% 
    setTimeout(() => {
      setProgress(75);
    }, 100);
  }, []);

  // For the SVG circle math
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="p-6 md:p-10 max-w-[1200px] mx-auto w-full flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Top Bar (inside main content) */}
      <div className="flex items-center justify-between gap-6">
        <div className="relative flex-1 max-w-[480px]">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-textMuted" />
          <input 
            type="text" 
            placeholder="Search marketplace..." 
            className="w-full bg-surfaceContainer rounded-full py-3 pl-12 pr-4 text-[14px] text-textPrimary placeholder:text-textMuted outline-none focus:border-[1.5px] border-[1.5px] border-transparent focus:border-secondary transition-colors"
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer text-textSecondary hover:text-primary transition-colors">
            <Bell size={20} />
            <div className="absolute top-0 right-0 w-[6px] h-[6px] bg-tertiary rounded-full"></div>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={profilePic} alt="Aryan Karfa" className="w-[36px] h-[36px] rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="font-sans font-semibold text-[13px] text-primary leading-tight">Aryan Karfa</span>
              <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider leading-tight mt-1">GOLD MEMBER</span>
            </div>
          </div>
        </div>
      </div>

      {/* Credit Hero Card */}
      <div className="w-full bg-[#1A1A1A] rounded-[24px] p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="flex flex-col gap-4 z-10 w-full md:w-auto">
          <div className="w-fit">
            <StatusChip>AVAILABLE BALANCE</StatusChip>
          </div>
          <div className="flex flex-col">
            <span className="font-serif italic font-bold text-[52px] text-white leading-tight">2,340 VMC</span>
            <span className="font-sans font-normal text-[16px] text-[rgba(255,255,255,0.65)]">≈ ₹23,400 marketplace value</span>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="bg-white text-primary font-sans font-semibold text-[14px] px-8 py-[14px] rounded-full hover:bg-gray-100 transition-colors">
              Redeem Credits
            </button>
            <button className="bg-transparent border-[1.5px] border-[rgba(255,255,255,0.35)] text-white font-sans font-semibold text-[14px] px-8 py-[14px] rounded-full hover:bg-[rgba(255,255,255,0.05)] transition-colors">
              Upload Clothes
            </button>
          </div>
        </div>
        <div className="relative w-[100px] h-[100px] flex-shrink-0 z-10">
          <svg className="w-[100px] h-[100px] -rotate-90">
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#C8870A"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <Star size={20} color="#C8870A" fill="#C8870A" />
            <span className="font-sans font-semibold text-[11px] text-white mt-1 uppercase">GOLD LEVEL</span>
            <span className="font-sans font-normal text-[10px] text-[rgba(255,255,255,0.55)] w-[80px] text-center leading-tight">75% to Platinum</span>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Leaf, label: "ITEMS RECYCLED", value: currentUser.itemsRecycled },
          { icon: Wind, label: "CO2 SAVED", value: `${currentUser.co2Saved} kg` },
          { icon: Truck, label: "PICKUPS", value: currentUser.pickupsDone },
          { icon: ShoppingBag, label: "PURCHASED", value: currentUser.itemsPurchased }
        ].map((stat, i) => (
          <Card key={i} className="flex flex-col gap-3 p-5 md:px-[24px] md:py-[20px] shadow-none hover:-translate-y-[2px] cursor-pointer hover:shadow-ambient transition-all duration-200">
            <div className="w-8 h-8 rounded-full bg-surfaceContainer flex items-center justify-center">
              <stat.icon size={16} className="text-secondary" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-[0.05em]">{stat.label}</span>
              <span className="font-sans font-bold text-[28px] text-primary">{stat.value}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Two column split */}
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-[24px] mt-2">
        {/* LEFT - Recent Activity */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-serif font-bold text-[22px] text-primary">Recent Activity</h2>
            <button className="font-sans font-semibold text-[12px] text-secondary uppercase tracking-wider hover:underline">
              VIEW ALL
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {activities.slice(0, 3).map((act, i) => {
              const Icon = act.icon === 'CheckCircle' ? CheckCircle : act.icon === 'ShoppingCart' ? ShoppingCart : Sparkles;
              const bgClass = act.colorScheme === 'green' ? 'bg-[#EAF3EC] text-secondary' : 
                              act.colorScheme === 'muted' ? 'bg-surfaceContainer text-textSecondary' : 
                              'bg-tertiaryContainer text-tertiary';
              const textClass = act.sign === 'positive' ? 'text-secondary' : 
                                act.sign === 'negative' ? 'text-primary' : 
                                'text-tertiary';
              return (
                <Card key={i} className="px-5 py-4 flex flex-row items-center gap-4 justify-between !shadow-none border border-[rgba(90,90,90,0.08)]">
                  <div className="flex items-center gap-4">
                    <div className={`w-[36px] h-[36px] rounded-full flex items-center justify-center ${bgClass}`}>
                      <Icon size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans font-semibold text-[14px] text-primary">{act.title}</span>
                      <span className="font-sans font-normal text-[12px] text-textMuted">{act.sub}</span>
                    </div>
                  </div>
                  <span className={`font-sans font-bold text-[14px] ${textClass}`}>{act.amount}</span>
                </Card>
              );
            })}
          </div>

          {/* Impact Badges */}
          <div className="bg-secondary rounded-[16px] p-6 flex flex-col mt-4 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-[150px] opacity-10 pointer-events-none">
                <Globe size={200} className="absolute -right-10 -top-10 text-white" />
            </div>
            <span className="font-sans font-semibold text-[10px] text-white uppercase tracking-[0.05em] mb-6">IMPACT BADGES</span>
            <div className="flex justify-evenly relative z-10 w-full mb-2">
              <div className="flex flex-col items-center gap-2">
                <Globe size={24} color="white" />
                <span className="font-sans font-semibold text-[11px] text-white text-center">EARTH SAVER</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                   <Leaf size={24} color="white" />
                   <div className="absolute -bottom-1 -right-2 bg-textPrimary w-[16px] h-[16px] rounded-full flex items-center justify-center text-[8px] text-white font-bold">5X</div>
                </div>
                <span className="font-sans font-semibold text-[11px] text-white text-center">5X RECYCLER</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield size={24} color="white" />
                <span className="font-sans font-semibold text-[11px] text-white text-center">WARRIOR</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - Curated for You */}
        <div className="flex flex-col gap-4 overflow-hidden w-full">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-serif font-bold text-[22px] text-primary">Curated for You</h2>
            <div className="flex gap-2">
              <button className="w-6 h-6 rounded-full border-[1.5px] border-[rgba(90,90,90,0.40)] flex items-center justify-center hover:bg-surfaceLow text-textPrimary transition-colors">
                <ChevronLeft size={14} />
              </button>
              <button className="w-6 h-6 rounded-full border-[1.5px] border-[rgba(90,90,90,0.40)] flex items-center justify-center hover:bg-surfaceLow text-textPrimary transition-colors">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar -mx-2 px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {products.slice(0, 4).map((item, i) => (
              <div key={i} className="w-[180px] md:w-[200px] flex-shrink-0 flex flex-col group cursor-pointer">
                <div className="w-full aspect-square rounded-[16px] relative overflow-hidden mb-3">
                  <img src={`https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop&sig=${i}`} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <ConditionBadge condition={item.condition} />
                  {i === 0 && (
                    <span className="absolute bottom-3 right-3 bg-surfaceContainer text-secondary font-sans font-semibold text-[10px] uppercase px-2 py-1 rounded-sm z-10">
                      8.5 CO2 SAVED
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1 px-1">
                  <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">{item.brand}</span>
                  <span className="font-sans font-semibold text-[14px] text-primary truncate">{item.name}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-sans font-bold text-[15px] text-secondary">{item.vmc} VMC</span>
                    <span className="font-sans font-normal text-[12px] text-textMuted">≈ ₹{item.inr}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="w-full bg-surfaceLow rounded-[24px] p-10 flex flex-col items-center justify-center text-center mt-4 mb-20 md:mb-8">
        <h2 className="font-serif italic font-bold text-[28px] text-primary mb-3">Earn more by recycling.</h2>
        <p className="font-sans font-normal text-[14px] text-textSecondary max-w-[400px] mb-8">
          Our AI accurately estimates the resale value of your pre-loved clothes within seconds.
        </p>
        <SecondaryButton>Start New Valuation</SecondaryButton>
      </div>

    </div>
  );
}
