import React, { useState } from 'react';
import { ShoppingCart, CheckCircle, Users, Upload, Star, Gift } from 'lucide-react';
import { transactions } from '../data/mockData';
import { Card } from '../components/ui/Card';
import { PrimaryButton } from '../components/ui/Buttons';

const ICONS = {
  CheckCircle,
  ShoppingCart,
  Users,
  Upload,
  Star,
  Gift
};

export default function WalletPage() {
  const [filter, setFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [redeemAmt, setRedeemAmt] = useState(100);
  const [redeemMethod, setRedeemMethod] = useState('bank');

  const filteredTxs = transactions.filter(t => filter === 'All' || t.type.toLowerCase() === filter.toLowerCase());

  return (
    <div className="p-6 md:p-10 max-w-[720px] mx-auto w-full flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-300 pb-[120px]">
      
      {/* Hero Balance Card */}
      <div className="bg-[#1A1A1A] rounded-[24px] p-10 md:px-12 md:py-10 flex flex-col gap-6 relative shadow-ambient">
        <span className="font-sans font-semibold text-[10px] text-white opacity-60 uppercase tracking-widest leading-none">
          VINIMAY WALLET
        </span>
        <div className="flex flex-col gap-1 -mt-2">
          <span className="font-serif italic font-bold text-[52px] text-white leading-tight">
            2,340 VMC
          </span>
          <span className="font-sans font-normal text-[14px] text-[rgba(255,255,255,0.65)] pl-1">
            ₹23,400 equivalent
          </span>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <button 
            onClick={() => setShowModal(true)}
            className="bg-white text-primary font-sans font-semibold text-[14px] px-[32px] py-[14px] rounded-full hover:bg-gray-100 transition-colors"
          >
            Redeem
          </button>
          <button className="bg-transparent border-[1.5px] border-[rgba(255,255,255,0.35)] text-white font-sans font-semibold text-[14px] px-[32px] py-[14px] rounded-full hover:bg-[rgba(255,255,255,0.05)] transition-colors">
            Transfer
          </button>
        </div>
        <div className="w-full h-[1px] bg-[rgba(255,255,255,0.12)] my-2"></div>
        <span className="font-sans font-medium text-[14px] text-tertiary">
          Pending Credits: 340 VMC
        </span>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { label: 'Credits Earned', val: '3,180 VMC' },
          { label: 'Credits Spent', val: '840 VMC' },
          { label: 'Redemptions', val: '₹4,200' },
        ].map(stat => (
          <Card key={stat.label} className="flex flex-col gap-1 p-[20px] shadow-none hover:shadow-ambient hover:-translate-y-1 transition-all border border-[rgba(90,90,90,0.05)] cursor-pointer">
            <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">{stat.label}</span>
            <span className="font-sans font-bold text-[18px] text-primary">{stat.val}</span>
          </Card>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-col gap-4">
        <div className="flex bg-surfaceContainer rounded-full p-1 w-fit mt-2 overflow-hidden shadow-inner">
          {['All', 'Earned', 'Spent', 'Pending'].map(tab => (
            <button 
              key={tab}
              onClick={() => setFilter(tab)}
              className={`font-sans font-semibold text-[13px] px-[20px] py-[8px] rounded-full transition-colors ${
                filter === tab ? 'bg-primary text-white shadow-ambient' : 'bg-transparent text-textSecondary hover:text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Transaction List */}
        <div className="flex flex-col gap-4">
          {filteredTxs.map(tx => {
            const Icon = ICONS[tx.icon];
            const isEarned = tx.type === 'earned';
            const isPending = tx.type === 'pending';
            
            return (
              <Card key={tx.id} className="flex items-center justify-between p-[16px] px-[20px] !shadow-none border border-[rgba(90,90,90,0.08)]">
                <div className="flex items-center gap-4">
                  <div className={`w-[36px] h-[36px] rounded-full flex items-center justify-center ${
                    isEarned ? 'bg-[#EAF3EC] text-secondary' : 
                    isPending ? 'bg-tertiaryContainer text-tertiary' : 
                    'bg-surfaceContainer text-textSecondary'
                  }`}>
                    <Icon size={16} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-sans font-semibold text-[14px] text-primary">{tx.title}</span>
                    <span className="font-sans font-normal text-[12px] text-textMuted">{tx.date}</span>
                  </div>
                </div>
                <span className={`font-sans font-bold text-[14px] ${
                  isEarned ? 'text-secondary' : 
                  isPending ? 'text-tertiary' : 
                  'text-primary'
                }`}>
                  {isEarned || isPending ? '+' : ''}{tx.amount} VMC
                </span>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Redeem Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[rgba(26,26,26,0.5)] transition-opacity duration-200" 
            style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
            onClick={() => setShowModal(false)}
          />
          <div className="w-full max-w-[440px] bg-white rounded-[24px] p-[32px] shadow-ambient relative z-10 animate-in zoom-in-95 fade-in duration-200">
            
            <h2 className="font-sans font-bold text-[22px] text-primary mb-6">Redeem VINIMAY Credits</h2>

            <div className="flex flex-col gap-3 mb-8">
              {[
                { id: 'bank', title: 'Bank Transfer', subtitle: 'Takes 2-3 business days' },
                { id: 'upi', title: 'UPI Transfer', subtitle: 'Instant transfer' },
                { id: 'charity', title: 'Donate to Charity', subtitle: 'Goes to sustainability programs' },
              ].map(opt => (
                <Card 
                  key={opt.id} 
                  hoverEffect={false}
                  onClick={() => setRedeemMethod(opt.id)}
                  className={`flex flex-col p-4 cursor-pointer shadow-none transition-colors border-[1.5px] ${
                    redeemMethod === opt.id ? 'border-secondary bg-[#F0F7F3]' : 'border-[rgba(90,90,90,0.1)] hover:bg-surfaceLow'
                  }`}
                >
                  <div className="flex items-center justify-between">
                     <span className="font-sans font-semibold text-[14px] text-primary">{opt.title}</span>
                     <div className={`w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center ${redeemMethod === opt.id ? 'border-secondary' : 'border-textMuted'}`}>
                        {redeemMethod === opt.id && <div className="w-2 h-2 bg-secondary rounded-full" />}
                     </div>
                  </div>
                  <span className="font-sans font-normal text-[12px] text-textMuted mt-1">{opt.subtitle}</span>
                </Card>
              ))}
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex justify-between items-center text-primary font-sans">
                <span className="font-semibold text-[14px]">Amount to Redeem</span>
                <span className="font-bold text-[16px]">{redeemAmt} VMC</span>
              </div>
              
              <div className="relative w-full h-2">
                <input 
                  type="range" 
                  min="100" max="2340" step="50"
                  value={redeemAmt}
                  onChange={e => setRedeemAmt(e.target.value)}
                  className="absolute inset-0 w-full opacity-0 cursor-pointer z-10" 
                />
                <div className="absolute inset-y-0 left-0 right-0 h-2 bg-surfaceContainer rounded-full"></div>
                <div className="absolute inset-y-0 left-0 h-2 bg-secondary rounded-full" style={{ width: `${(redeemAmt / 2340) * 100}%` }}></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full transform -translate-x-2" style={{ left: `${(redeemAmt / 2340) * 100}%` }}></div>
              </div>

              <div className="flex items-center justify-center mt-2">
                <span className="font-sans font-bold text-[18px] text-secondary">
                  = ₹{(redeemAmt * 10).toLocaleString('en-IN')} equivalent
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
               <GhostButton className="flex-1" onClick={() => setShowModal(false)}>Cancel</GhostButton>
               <PrimaryButton className="flex-1" onClick={() => { setShowModal(false); alert('Redemption Initiated.'); }}>
                 Confirm Redemption
               </PrimaryButton>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
