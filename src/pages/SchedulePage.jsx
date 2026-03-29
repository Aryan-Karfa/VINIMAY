import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { PrimaryButton, SecondaryButton, GhostButton } from '../components/ui/Buttons';
import { Card } from '../components/ui/Card';

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const DATES = Array.from({length: 30}, (_, i) => {
  const isPast = i < 4;
  const isToday = i === 4;
  const isAvailable = i > 4 && i < 20;
  return { date: i + 1, isPast, isToday, isAvailable };
});

const SLOTS = [
  "9:00 AM–11:00 AM", "11:00 AM–1:00 PM",
  "1:00 PM–3:00 PM", "3:00 PM–5:00 PM",
  "2:00 PM–4:00 PM", "4:00 PM–6:00 PM",
]; 
// Spec asked for 2x4 grid, 8 slots total. Wait, spec says:
// 9:00 AM–11:00 AM / 11:00 AM–1:00 PM / 2:00 PM–4:00 PM / 4:00 PM–6:00 PM (×2 columns) = 4 per col? Let's assume 8 slots total.

export default function SchedulePage() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedSlot, setSelectedSlot] = useState("11:00 AM–1:00 PM");
  const [isSuccess, setIsSuccess] = useState(false);
  const [checkAnim, setCheckAnim] = useState(false);

  const handleConfirm = () => {
    setIsSuccess(true);
    setTimeout(() => setCheckAnim(true), 100);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-[500px] mx-auto p-6 animate-in fade-in duration-300">
        <svg 
          viewBox="0 0 64 64" 
          className={`w-[64px] h-[64px] transition-transform duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${checkAnim ? 'scale-100' : 'scale-0'}`}
        >
          <circle cx="32" cy="32" r="30" fill="none" stroke="#3A684D" strokeWidth="4" />
          <path 
            d="M 18,32 L 28,42 L 46,22" 
            fill="none" 
            stroke="#3A684D" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`transition-all duration-600 ease-out delay-200 ${checkAnim ? 'stroke-dasharray-[100] stroke-dashoffset-[0]' : 'stroke-dasharray-[100] stroke-dashoffset-[100]'}`}
          />
        </svg>

        <h2 className="font-sans font-bold text-[22px] text-primary mt-6 mb-2">Pickup Scheduled!</h2>
        <p className="font-sans font-normal text-[14px] text-textSecondary text-center mb-8">
          Our partner will arrive on April {selectedDate}, 2026 between {selectedSlot} at your Home address.
        </p>
        <SecondaryButton onClick={() => navigate('/dashboard')}>Back to Dashboard</SecondaryButton>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-[1000px] mx-auto w-full flex flex-col lg:flex-row gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-[120px]">
      
      {/* Left Column — Calendar */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <ChevronLeft size={20} className="text-primary cursor-pointer" />
          <h2 className="font-sans font-bold text-[18px] text-primary">April 2026</h2>
          <ChevronRight size={20} className="text-primary cursor-pointer" />
        </div>

        <div className="grid grid-cols-7 gap-y-4">
          {DAYS.map((day) => (
            <div key={day} className="text-center font-sans font-semibold text-[10px] text-textMuted uppercase tracking-widest h-8">
              {day}
            </div>
          ))}
          {/* Empty days offset */}
          <div className="col-span-3"></div>
          {DATES.map((d, i) => {
            const isSelected = selectedDate === d.date;
            
            return (
              <div key={i} className="flex justify-center items-center h-12 relative cursor-pointer" onClick={() => d.isAvailable ? setSelectedDate(d.date) : null}>
                <div className={`w-[36px] h-[36px] rounded-full flex flex-col items-center justify-center font-sans transition-colors ${
                  isSelected ? 'bg-primary text-white font-semibold text-[14px]' : 
                  d.isToday ? 'border-[1.5px] border-secondary text-secondary font-semibold text-[14px]' :
                  d.isAvailable ? 'text-primary font-medium text-[14px] hover:bg-surfaceContainer' :
                  'text-textDisabled font-medium text-[14px] cursor-not-allowed'
                }`}>
                  {d.date}
                </div>
                {d.isAvailable && !isSelected && (
                  <div className="absolute bottom-[2px] w-[4px] h-[4px] bg-secondary rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column — Slots & Summary */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        
        {/* Time Slots */}
        <div className="flex flex-col gap-4">
          <h3 className="font-sans font-semibold text-[16px] text-primary">Select Time Slot</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SLOTS.map((slot) => {
              const isSelected = selectedSlot === slot;
              return (
                <Card 
                  key={slot} 
                  hoverEffect={false}
                  className={`px-4 py-3 flex items-center justify-between cursor-pointer transition-colors shadow-none ${
                    isSelected ? 'border-[1.5px] border-secondary bg-[#F0F7F3]' : 'border-[1.5px] border-surfaceContainer bg-surface hover:bg-surfaceLow hover:border-textMuted'
                  }`}
                  onClick={() => setSelectedSlot(slot)}
                >
                  <span className={`font-sans font-medium text-[14px] ${isSelected ? 'text-secondary' : 'text-primary'}`}>{slot}</span>
                  {isSelected && <Check size={16} className="text-secondary" />}
                </Card>
              );
            })}
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-3">
          <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">PICKUP ADDRESS</span>
          <Card className="p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[rgba(90,90,90,0.08)] flex justify-between items-start">
            <div className="flex flex-col gap-1 pr-4">
              <span className="font-sans font-semibold text-[14px] text-primary">Home</span>
              <span className="font-sans font-normal text-[13px] text-textSecondary leading-relaxed">204, Rahul Apartments, Koramangala, Bengaluru 560034</span>
            </div>
            <button className="font-sans font-medium text-[13px] text-secondary hover:underline whitespace-nowrap">Edit</button>
          </Card>
          <GhostButton className="w-fit mt-1">+ Add New Address</GhostButton>
        </div>

        {/* Order Summary */}
        <div className="bg-surfaceLow rounded-[12px] p-4 flex flex-col gap-2 border-none">
          <div className="flex justify-between items-center">
            <span className="font-sans font-medium text-[13px] text-textSecondary">Items:</span>
            <span className="font-sans font-bold text-[14px] text-primary">4 pieces</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-sans font-medium text-[13px] text-textSecondary">Estimated Credits:</span>
            <span className="font-sans font-bold text-[14px] text-primary">340 VMC</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-sans font-medium text-[13px] text-textSecondary">Pickup Date:</span>
            <span className="font-sans font-bold text-[14px] text-primary">April {selectedDate}, 2026</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-sans font-medium text-[13px] text-textSecondary">Time:</span>
            <span className="font-sans font-bold text-[14px] text-primary">{selectedSlot}</span>
          </div>
        </div>

        {/* Confirm */}
        <PrimaryButton className="w-full mt-2" onClick={handleConfirm}>
          Confirm Pickup
        </PrimaryButton>

      </div>
    </div>
  );
}
