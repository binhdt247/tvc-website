import React from 'react';
import { Phone, ChevronRight, Award, Server, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { STATS } from '../data';

const heroBannerImage = '/src/assets/images/me_hero_banner_1781145412636.png';

interface HeroProps {
  onLearnMore: () => void;
  onConsult?: () => void;
}

export default function Hero({ onLearnMore, onConsult }: HeroProps) {
  const handleConsultClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onConsult) {
      onConsult();
    } else {
      const el = document.getElementById('lien-he');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="trang-chu"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#cbd5e1] text-slate-900 pt-24 overflow-hidden"
    >
      {/* Background Graphic Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.04),transparent_50%)]" />
        {/* Subtle digital grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(#2563eb 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        {/* Abstract structural line decorations */}
        <svg className="absolute right-0 bottom-0 w-1/2 h-full text-brand-500/5 select-none pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M100,100 L50,100 L100,0 Z" fill="currentColor" />
          <line x1="30" y1="100" x2="100" y2="30" stroke="currentColor" strokeWidth="0.5" />
          <line x1="10" y1="100" x2="100" y2="10" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side: Text and CTAs */}
        <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
          {/* Tag Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-200/60 px-4 py-1.5 rounded-full text-xs sm:text-sm text-brand-700 font-medium font-sans"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Đối Tác Cơ Điện & Nội Thất TVC Uy Tín</span>
          </motion.div>

          {/* Slogan Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
              TVC <br />
              <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-500 bg-clip-text text-transparent drop-shadow-sm font-sans block mt-1 py-1">
                Giải Pháp Cơ Điện Toàn Diện & Chuyên Nghiệp
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Nhà thầu uy tín chuyên thiết kế, thi công trạm biến áp trung hạ thế, tủ bảng điện động lực và tích hợp hạ tầng âm thanh nghe nhìn AV văn phòng hành chính theo chuẩn quốc tế.
            </p>
          </motion.div>

          {/* Call-to-action block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            {/* Primary Action Button */}
            <a
              id="hero-consult-cta"
              href="#lien-he"
              onClick={handleConsultClick}
              className="group flex items-center justify-center space-x-2.5 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-brand-500/10 transform hover:-translate-y-1 w-full sm:w-auto text-center cursor-pointer"
            >
              <span>Nhận tư vấn ngay</span>
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Hotline number dialer */}
            <a
              id="hero-phone-cta"
              href="tel:0982982303"
              className="group flex items-center justify-center space-x-2 border border-slate-200 hover:border-brand-300 bg-white hover:bg-brand-50/20 text-slate-755 hover:text-brand-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto cursor-pointer shadow-sm"
            >
              <Phone className="h-4 w-4 text-brand-500 group-hover:scale-110 transition-transform" />
              <span>Gọi ngay: 0982 982 303</span>
            </a>
          </motion.div>

          {/* Quick trust metrics logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-6 border-t border-slate-250 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-left"
          >
            <div className="flex items-center space-x-2 text-slate-500">
              <Award className="h-5 w-5 text-amber-500" />
              <span className="text-xs font-semibold">ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-500">
              <Server className="h-5 w-5 text-brand-500" />
              <span className="text-xs font-semibold">Thiết Bị G7</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-500">
              <Cpu className="h-5 w-5 text-brand-600" />
              <span className="text-xs font-semibold">Tự động hóa</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Scenic image with overlays */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-xl lg:max-w-none"
          >
            {/* Visual Photo Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">
              <img
                src={heroBannerImage}
                alt="Cơ Điện TVC - Kỹ sư thi công vận hành chuyên nghiệp"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover aspect-[4/3] sm:aspect-[16:10] lg:aspect-[4/3] transform group-hover:scale-102 transition-transform duration-700 ease-out z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              
              {/* Floating glass overlay inside image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg text-slate-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Hệ thống trạm biến áp chuyên dụng</span>
                  </div>
                  <span className="text-[10px] bg-brand-100 text-brand-700 font-extrabold px-2 py-0.5 rounded-full">Tiêu chuẩn EVN</span>
                </div>
                <p className="text-xs text-slate-800 font-bold mt-1.5 leading-snug">
                  Triển khai giải pháp cơ điện hiện đại mang lại hiệu năng tối ưu và vận hành tuyệt đối an toàn.
                </p>
              </div>
            </div>

            {/* Quick mini credentials list below photo */}
            <div className="mt-4 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {STATS.slice(0, 2).map((stat, idx) => (
                <div key={idx} className="bg-white/80 border border-slate-200/60 rounded-xl p-3 text-center shadow-sm">
                  <p className="text-xl font-bold bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">{stat.value}</p>
                  <p className="text-[10px] text-slate-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
