import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloudUpload, X, Plus, Leaf, Check, Clock, Wrench } from 'lucide-react';
import { PrimaryButton } from '../components/ui/Buttons';
import { CategoryChip } from '../components/ui/Badges';
import { InputField } from '../components/ui/InputField';
import { Card } from '../components/ui/Card';

const MOCK_IMAGES = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=240&auto=format&fit=crop", // sneaker
  "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=240&auto=format&fit=crop", // denim jacket
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=240&auto=format&fit=crop", // jeans
  "https://images.unsplash.com/photo-1583391733959-b9a5eb40854d?q=80&w=240&auto=format&fit=crop", // kurta
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=240&auto=format&fit=crop", // black graphic tee
];

const COLORS = [
  '#FFFFFF', '#1A1A1A', '#3A684D', '#FDE047', '#991B1B', 
  '#2563EB', '#F472B6', '#9CA3AF', '#1E3A8A', '#F97316'
];

export default function UploadPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Tops');
  const [selectedCondition, setSelectedCondition] = useState('Like New');
  const [selectedColor, setSelectedColor] = useState('#3A684D');

  const conditions = [
    { id: 'Like New', title: 'Like New', desc: 'Tags on or unworn', icon: Leaf, bgClass: 'bg-secondary text-white' },
    { id: 'Good', title: 'Good', desc: 'Minor visible wear', icon: Check, bgClass: 'bg-surfaceContainer text-textSecondary' },
    { id: 'Fair', title: 'Fair', desc: 'Visible pilling/fade', icon: Clock, bgClass: 'bg-surfaceContainer text-textSecondary' },
    { id: 'Poor', title: 'Poor', desc: 'Needs repair', icon: Wrench, bgClass: 'bg-surfaceContainer text-textSecondary' }
  ];

  return (
    <div className="p-6 md:p-10 max-w-[760px] mx-auto w-full flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-4 duration-300 pb-[120px] md:pb-10">
      
      {/* Page Title */}
      <h1 className="flex items-center gap-2">
        <span className="font-sans font-bold text-[28px] text-primary">Curate Your</span>
        <span className="font-serif italic font-bold text-[28px] text-primary">Archive</span>
      </h1>

      {/* Step Indicator */}
      <div className="flex items-center justify-between relative max-w-[500px] mx-auto w-full mb-4">
        <div className="absolute left-0 right-0 top-[14px] h-[1px] bg-surfaceContainer -z-10"></div>
        {['UPLOAD PHOTOS', 'ADD DETAILS', 'GET ESTIMATE', 'SCHEDULE PICKUP'].map((step, i) => {
          const isActive = i === 0;
          return (
            <div key={i} className="flex flex-col items-center gap-3 bg-background px-2">
              <div className={`w-[28px] h-[28px] rounded-full flex items-center justify-center font-sans font-semibold text-[13px] transition-colors ${isActive ? 'bg-secondary text-white' : 'bg-surfaceContainer text-textMuted'}`}>
                {i + 1}
              </div>
              <span className={`font-sans font-semibold text-[10px] uppercase tracking-widest text-center max-w-[80px] leading-tight ${isActive ? 'text-secondary' : 'text-textMuted'}`}>
                {step}
              </span>
            </div>
          );
        })}
      </div>

      {/* Upload Drop Zone */}
      <div className="w-full bg-surface rounded-[16px] border-[2px] border-dashed border-[rgba(90,90,90,0.25)] min-h-[160px] flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-surfaceLow transition-colors">
        <div className="w-[48px] h-[48px] bg-[#EAF3EC] rounded-full flex items-center justify-center mb-4">
          <CloudUpload size={24} className="text-secondary" />
        </div>
        <p className="font-serif italic text-[20px] text-primary mb-2">Drag & drop or tap to upload</p>
        <p className="font-sans font-normal text-[13px] text-textMuted">PNG, JPG up to 10MB each</p>
      </div>

      {/* Uploaded Items Grid */}
      <div className="flex flex-col gap-3">
        <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">UPLOADED ITEMS (5/9)</span>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {MOCK_IMAGES.map((img, i) => (
            <div key={i} className="aspect-square bg-surfaceContainer rounded-[12px] relative overflow-hidden group">
              <img src={img} alt="Uploaded" className="w-full h-full object-cover" />
              <button className="absolute top-[8px] right-[8px] w-[20px] h-[20px] bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <X size={12} color="white" />
              </button>
            </div>
          ))}
          {/* Empty Cell */}
          <div className="aspect-square bg-surfaceLow rounded-[12px] flex items-center justify-center cursor-pointer hover:bg-surfaceContainer border border-dashed border-transparent hover:border-textMuted transition-all">
            <Plus size={24} className="text-textMuted" />
          </div>
        </div>
      </div>

      {/* Category Chips */}
      <div className="flex flex-col gap-3">
        <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">CATEGORY</span>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {['Tops', 'Bottoms', 'Outerwear', 'Ethnic', 'Dresses', 'Accessories'].map((cat) => (
            <CategoryChip 
              key={cat} 
              selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </CategoryChip>
          ))}
        </div>
      </div>

      {/* Condition Grid */}
      <div className="flex flex-col gap-3">
        <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">CONDITION</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
          {conditions.map((cond) => {
            const isSelected = selectedCondition === cond.id;
            return (
              <Card 
                key={cond.id}
                className={`flex gap-4 items-center cursor-pointer p-[16px] px-[20px] transition-colors shadow-none ${isSelected ? 'bg-[#F0F7F3] border-[1.5px] border-secondary' : 'bg-surface shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-[1.5px] border-transparent'}`}
                onClick={() => setSelectedCondition(cond.id)}
              >
                <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center flex-shrink-0 ${cond.bgClass}`}>
                  <cond.icon size={16} color={isSelected && cond.id === 'Like New' ? 'white' : 'currentColor'} />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-semibold text-[14px] text-primary">{cond.title}</span>
                  <span className="font-sans font-normal text-[12px] text-textMuted">{cond.desc}</span>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Form Fields Section */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <InputField label="BRAND" placeholder="e.g. Zara, Levi's" />
          <InputField label="ESTIMATED PRICE (INR)" placeholder="e.g. 2500" type="number" />
        </div>
        
        <div className="flex flex-col gap-[6px] w-full">
          <label className="uppercase font-semibold text-[10px] text-textMuted tracking-[0.05em]">DESCRIPTION</label>
          <textarea 
            rows="4"
            className="w-full bg-surfaceContainer border border-transparent rounded-md px-4 py-3 text-[14px] text-textPrimary font-normal placeholder:text-textMuted outline-none focus:border-[1.5px] focus:border-secondary transition-colors resize-none"
            placeholder="Tell us about the fabric, fit, and any memories attached to this piece..."
          />
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-sans font-semibold text-[10px] text-textMuted uppercase tracking-wider">PRIMARY COLOR</span>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 py-2">
            {COLORS.map((c, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedColor(c)}
                className={`w-[28px] h-[28px] rounded-full flex-shrink-0 transition-transform ${selectedColor === c ? 'scale-110 shadow-[0_0_0_3px_white,0_0_0_5px_#3A684D]' : 'border-[1.5px] border-[rgba(0,0,0,0.1)]'}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pt-4 flex flex-col items-center w-full gap-3">
        <PrimaryButton className="w-full" onClick={() => navigate('/upload/estimate')}>
          ✦ Analyze with AI
        </PrimaryButton>
        <span className="font-sans font-normal text-[12px] text-textMuted text-center max-w-[300px]">
          Our AI will verify the quality and suggest a competitive price range.
        </span>
      </div>

    </div>
  );
}
