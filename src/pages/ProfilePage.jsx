import React, { useState } from 'react';
import { Globe, Leaf, Upload, Star, Tags, Shield, Lock, ChevronRight } from 'lucide-react';
import profilePic from '../assets/profile.png';
import { currentUser } from '../data/mockData';
import { Card } from '../components/ui/Card';
import { GhostButton } from '../components/ui/Buttons';

const BADGES = [
  { id: 1, title: 'Earth Saver', desc: 'Saved 10kg CO2', icon: Globe, unlocked: true },
  { id: 2, title: '5-Time Recycler', desc: 'Completed 5 pickups', icon: Leaf, unlocked: true },
  { id: 3, title: 'First Upload', desc: 'Listed first item', icon: Upload, unlocked: true },
  { id: 4, title: 'Referral Star', desc: 'Invited 3 friends', icon: Star, unlocked: false },
  { id: 5, title: 'Style Curator', desc: 'Sold 10 premium items', icon: Tags, unlocked: false },
  { id: 6, title: 'Green Warrior', desc: 'Top 5% recyclers', icon: Shield, unlocked: false },
];

const HISTORY = [
  { id: 1, date: 'Oct 24, 2026', desc: '3 items recycled', stat: 'Credited', vmc: '+180 VMC', type: 'credit' },
  { id: 2, date: 'Oct 15, 2026', desc: 'Levi\'s Jeans pickup', stat: 'Picked Up', vmc: '--', type: 'pickup' },
  { id: 3, date: 'Sep 28, 2026', desc: '2 items appraised', stat: 'Approved', vmc: 'Pending', type: 'approve' },
  { id: 4, date: 'Sep 10, 2026', desc: 'Zara Jacket pickup', stat: 'Pending', vmc: '--', type: 'pending' },
];

const Switch = ({ checked, onChange }) => (
  <button 
    onClick={onChange}
    className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${checked ? 'bg-secondary' : 'bg-surfaceContainer'}`}
  >
    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${checked ? 'translate-x-4' : 'translate-x-0'}`} />
  </button>
);

export default function ProfilePage() {
  const [prefs, setPrefs] = useState({ notif: true, email: true, push: false });

  return (
    <div className="p-6 md:p-10 max-w-[680px] mx-auto w-full flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-4 duration-300 pb-[120px]">
      
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <img src={profilePic} alt={currentUser.name} className="w-[80px] h-[80px] rounded-full object-cover shadow-sm" />
          <div className="flex flex-col gap-1">
            <h1 className="font-sans font-bold text-[24px] text-primary leading-tight">{currentUser.name}</h1>
            <span className="font-sans font-normal text-[14px] text-textMuted">{currentUser.username}</span>
            <div className="mt-1 w-fit bg-tertiaryContainer border-[0.5px] border-tertiary text-onTertiary font-sans font-semibold text-[12px] px-3 py-1 rounded-full">
              Gold Recycler
            </div>
          </div>
        </div>
        <GhostButton className="w-fit">Edit Profile</GhostButton>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {[
          { label: 'Recycled', val: '23 items' },
          { label: 'Earned', val: '3,180 VMC' },
          { label: 'CO₂ Saved', val: '18.4 kg' },
        ].map(stat => (
          <Card key={stat.label} className="flex flex-col gap-1 px-[16px] py-[20px] shadow-sm items-center text-center">
            <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">{stat.label}</span>
            <span className="font-sans font-bold text-[18px] text-primary">{stat.val}</span>
          </Card>
        ))}
      </div>

      {/* Achievement Badges */}
      <div className="flex flex-col gap-4">
        <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">ACHIEVEMENT BADGES</span>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {BADGES.map(badge => {
            const Icon = badge.icon;
            return (
              <Card 
                key={badge.id} 
                className={`p-4 flex flex-col items-center text-center shadow-none border border-[rgba(90,90,90,0.08)] relative ${!badge.unlocked ? 'opacity-[0.45] grayscale' : ''}`}
              >
                {!badge.unlocked && <Lock size={16} className="absolute top-2 right-2 text-textMuted" />}
                <div className="w-10 h-10 rounded-full bg-surfaceContainer flex items-center justify-center mb-3">
                  <Icon size={20} className="text-secondary" />
                </div>
                <span className="font-sans font-semibold text-[14px] text-primary">{badge.title}</span>
                <span className="font-sans font-normal text-[12px] text-textMuted mt-1">{badge.desc}</span>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recycling History Timeline */}
      <div className="flex flex-col gap-4">
        <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">RECYCLING HISTORY</span>
        <div className="flex flex-col gap-8 pl-4 relative">
          <div className="absolute left-[23px] top-2 bottom-2 w-[2px] bg-surfaceContainer -z-10"></div>
          
          {HISTORY.map((h) => (
            <div key={h.id} className="flex items-center gap-6">
              <div className="w-[8px] h-[8px] rounded-full bg-secondary ring-4 ring-background z-10"></div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 bg-surface rounded-[12px] border border-[rgba(90,90,90,0.08)]">
                <div className="flex flex-col">
                  <span className="font-sans font-normal text-[12px] text-textMuted mb-1">{h.date}</span>
                  <span className="font-sans font-semibold text-[14px] text-primary">{h.desc}</span>
                </div>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <span className={`font-sans font-semibold text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm ${
                    h.type === 'credit' ? 'bg-[#EAF3EC] text-secondary' :
                    h.type === 'pickup' ? 'bg-[#E6F3FD] text-[#185A8D]' :
                    h.type === 'approve' ? 'bg-tertiaryContainer text-tertiary' :
                    'bg-surfaceContainer text-textSecondary'
                  }`}>
                    {h.stat}
                  </span>
                  <span className={`font-sans font-bold text-[14px] w-[80px] text-right ${h.type === 'credit' ? 'text-secondary' : 'text-primary'}`}>
                    {h.vmc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Account Settings */}
      <div className="flex flex-col gap-4 mt-4 bg-surfaceLow rounded-[24px] p-8 -mx-8 md:mx-0">
        <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider mb-2">ACCOUNT SETTINGS</span>
        
        <div className="flex items-center justify-between pb-2">
          <span className="font-sans font-medium text-[14px] text-primary">Notifications</span>
          <Switch checked={prefs.notif} onChange={() => setPrefs({...prefs, notif: !prefs.notif})} />
        </div>
        <div className="flex items-center justify-between pb-2">
          <span className="font-sans font-medium text-[14px] text-primary">Email updates</span>
          <Switch checked={prefs.email} onChange={() => setPrefs({...prefs, email: !prefs.email})} />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-sans font-medium text-[14px] text-primary">Push alerts</span>
          <Switch checked={prefs.push} onChange={() => setPrefs({...prefs, push: !prefs.push})} />
        </div>

        <div className="w-full h-[1px] bg-[rgba(90,90,90,0.08)] my-4"></div>

        <button className="flex justify-between items-center group">
          <span className="font-sans font-medium text-[14px] text-primary group-hover:text-secondary transition-colors">Address Book</span>
          <ChevronRight size={16} className="text-textMuted" />
        </button>
        <button className="flex justify-between items-center group mt-4">
          <span className="font-sans font-medium text-[14px] text-primary group-hover:text-secondary transition-colors">Payment Preferences</span>
          <ChevronRight size={16} className="text-textMuted" />
        </button>

        <button className="font-sans font-normal text-[14px] text-[#C0392B] text-left mt-8 hover:underline w-fit">
          Delete Account
        </button>
      </div>

    </div>
  );
}
