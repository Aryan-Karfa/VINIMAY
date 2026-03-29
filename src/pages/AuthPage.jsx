import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Eye, EyeOff } from 'lucide-react';
import { PrimaryButton, GhostButton } from '../components/ui/Buttons';
import { InputField } from '../components/ui/InputField';

export default function AuthPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === 'demouser@mail.com' && password === 'DemoUser123') {
      setErrorMsg('');
      navigate('/dashboard');
    } else {
      setErrorMsg('Invalid credentials');
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* LEFT PANEL */}
      <div className="w-full md:w-[40%] flex-shrink-0 flex flex-col h-full bg-background overflow-y-auto px-[48px] py-[48px]">
        {/* Logo row */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <Leaf size={16} color="white" fill="white" />
          </div>
          <span className="font-sans font-bold text-[18px] text-primary">VINIMAY</span>
        </div>

        {/* Headline block */}
        <div className="flex flex-col gap-4 mb-10 max-w-[400px]">
          <h1 className="font-serif font-bold text-[52px] leading-[1.15] text-primary">
            Give your wardrobe a second life.
          </h1>
          <p className="font-sans font-normal text-[14px] text-textSecondary leading-relaxed">
            Earn VINIMAY Credits for every piece you recycle. Shop pre-loved fashion with zero guilt.
          </p>
        </div>

        {/* Form Container */}
        <div className="flex-1 w-full max-w-[440px]">
          <form className="flex flex-col gap-5 w-full mt-4" onSubmit={handleSignIn}>
            <InputField 
              label="EMAIL" 
              placeholder="demouser@mail.com" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputField 
              label="PASSWORD" 
              placeholder="••••••••" 
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              rightIcon={
                showPassword ? 
                  <EyeOff size={18} onClick={() => setShowPassword(false)} /> : 
                  <Eye size={18} onClick={() => setShowPassword(true)} />
              }
            />

            {errorMsg && (
              <span className="font-sans font-medium text-[13px] text-[#C0392B] -mt-2">
                {errorMsg}
              </span>
            )}

            <div className="mt-2">
              <PrimaryButton className="w-full" type="submit">Sign In</PrimaryButton>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center my-4 overflow-hidden relative">
              <div className="absolute w-full h-[1px] bg-surfaceContainer"></div>
              <span className="bg-background px-4 z-10 font-sans font-medium text-[12px] text-textMuted uppercase tracking-wider">
                OR CONTINUE WITH
              </span>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4">
              <GhostButton type="button" className="flex-1 flex items-center justify-center gap-2">
                <span>🌐</span> Google
              </GhostButton>
              <GhostButton type="button" className="flex-1 flex items-center justify-center gap-2">
                <span>🍎</span> Apple
              </GhostButton>
            </div>

            <p className="mt-8 text-center uppercase font-sans font-normal text-[11px] text-textMuted tracking-wider">
              BY JOINING, YOU AGREE TO OUR TERMS AND PRIVACY POLICY
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden md:block md:w-[60%] h-full relative bg-[#2C2C2A] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1536&auto=format&fit=crop" 
          alt="Fashion Jacket" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,40,30,0.85)] via-[rgba(30,40,30,0.4)] to-transparent" style={{ background: 'linear-gradient(to top, rgba(30,40,30,0.85), transparent 50%)' }}></div>
        
        {/* Floating pill badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80px] border border-[rgba(255,255,255,0.35)] rounded-full px-5 py-2 z-10 backdrop-blur-sm">
          <span className="text-white font-sans font-semibold text-[10px] uppercase tracking-[0.1em]">
            Curation & Consciousness
          </span>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-[180px] left-[56px] flex flex-col z-10">
          <span className="font-serif font-bold text-[60px] text-white leading-tight">Fashion is</span>
          <span className="font-serif font-bold italic text-[60px] text-secondary leading-tight mt-[-10px]">circular.</span>
        </div>

        <div className="absolute bottom-[40px] left-[56px] right-[56px] flex justify-between z-10">
          {/* Stats Row */}
          <div className="flex gap-10">
            <div className="flex flex-col gap-1 relative">
              <span className="font-sans font-bold text-[24px] text-white">12,000+</span>
              <span className="font-sans text-[10px] font-semibold tracking-wider text-[rgba(255,255,255,0.6)] uppercase">Items Recycled</span>
              <div className="absolute right-[-20px] top-2 bottom-2 w-[1px] bg-[rgba(255,255,255,0.15)]"></div>
            </div>
            <div className="flex flex-col gap-1 relative">
              <span className="font-sans font-bold text-[24px] text-white">₹45L+</span>
              <span className="font-sans text-[10px] font-semibold tracking-wider text-[rgba(255,255,255,0.6)] uppercase">Credits Distributed</span>
              <div className="absolute right-[-20px] top-2 bottom-2 w-[1px] bg-[rgba(255,255,255,0.15)]"></div>
            </div>
            <div className="flex flex-col gap-1 relative">
              <span className="font-sans font-bold text-[24px] text-white">3.2T</span>
              <span className="font-sans text-[10px] font-semibold tracking-wider text-[rgba(255,255,255,0.6)] uppercase">CO₂ Saved</span>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-[rgba(30,40,30,0.85)] z-30">
                  <img src="https://i.pravatar.cc/100?img=1" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-[rgba(30,40,30,0.85)] z-20">
                  <img src="https://i.pravatar.cc/100?img=2" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[rgba(30,40,30,0.85)] z-10">
                  <img src="https://i.pravatar.cc/100?img=3" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-[rgba(30,40,30,0.85)] text-white text-[10px] font-bold flex items-center justify-center z-0">
                  +5k
                </div>
              </div>
              <span className="text-[12px] font-sans text-white opacity-70">
                Join a community of 50,000+ conscious curators.
              </span>
            </div>
            <span className="text-[10px] font-sans text-white opacity-40 mt-6">
              © 2026 VINIMAY ECO-SYSTEMS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
