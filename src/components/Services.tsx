import React, { useState } from 'react';
import { Zap, Tv, Settings, CheckCircle, ArrowRight, X, Phone } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';
import { motion, AnimatePresence } from 'motion/react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Tv,
  Settings
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="dich-vu" className="py-20 md:py-28 bg-white text-slate-900 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-brand-600 font-bold uppercase tracking-widest text-xs sm:text-md mb-2">
            <span className="h-1.5 w-10 bg-brand-500 rounded-full" />
            <span>Danh mục dịch vụ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Năng Lực Phục Vụ Chuyên Nghiệp & Độ Tin Cậy Cao
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-light">
            Chúng tôi tự hào cung cấp các nhóm giải pháp hoàn thiện, vận hành bền bỉ theo vòng đời của các thiết bị và hệ thống công nghiệp.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName] || Settings;
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -8 }}
                className="bg-slate-50 border border-slate-200 hover:border-brand-500 hover:bg-white rounded-3xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full group"
              >
                {/* Service Image banner */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-brand-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4 bg-brand-500 text-white p-3.5 rounded-2xl shadow-lg ring-4 ring-black/10 z-10 transition-transform duration-300 group-hover:scale-105">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed flex-grow">
                    {service.shortDesc}
                  </p>

                  {/* Bullet previews (3 items) */}
                  <ul className="space-y-2 pt-2 border-t border-slate-200">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Custom Trigger Call-To-Action */}
                  <div className="pt-4 flex justify-between items-center mt-auto">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="group/btn flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors cursor-pointer"
                    >
                      <span>Xem đầy đủ giải pháp</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                    
                    {/* Small Call quick contact button */}
                    <a
                      href="tel:0982982303"
                      className="text-slate-400 hover:text-brand-600 p-2 rounded-xl hover:bg-slate-100 transition-colors"
                      title="Gọi tư vấn ngay"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Window for Service Details */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              id="service-detail-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                id="service-detail-modal"
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative border border-slate-200 text-slate-800"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Banner image */}
                <div className="relative h-48 sm:h-64 bg-slate-950">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 bg-white/85 hover:bg-white text-slate-800 p-2.5 rounded-full transition-colors backdrop-blur-md cursor-pointer shadow-sm border border-slate-200"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {/* Dynamic Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest bg-brand-50 px-2.5 py-1 rounded-full text-brand-700 border border-brand-200">
                      GIẢI PHÁP ĐOÀN KHÁNH M&E
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-2 drop-shadow-sm">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                  
                  {/* Explanation */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {selectedService.fullDesc}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display flex items-center space-x-2">
                      <span className="h-4 w-1 bg-brand-500 rounded-full" />
                      <span>Các hạng mục kỹ thuật chính thiết kế & thi công:</span>
                    </h4>
                    
                    {/* Full Feature checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedService.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 bg-slate-50 border border-slate-200 p-3 rounded-xl hover:bg-brand-50/40 hover:border-brand-300 transition-colors">
                          <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Advisory Quick CTA */}
                  <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-850 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left space-y-1">
                      <h5 className="text-base font-bold font-display text-white">Yêu Cầu Khảo Sát & Báo Giá Miễn Phí?</h5>
                      <p className="text-xs text-slate-300 font-light">Chúng tôi cử kỹ sư trực tiếp khảo sát dự án trong vòng 24 giờ hoàn toàn miễn phí.</p>
                    </div>
                    <a
                      href="tel:0982982303"
                      className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-slate-950 px-5 py-3 rounded-xl font-bold text-sm sm:text-base transition-colors"
                    >
                      <Phone className="h-4 w-4 animate-bounce" />
                      <span>Gọi ngay: 0982 982 303</span>
                    </a>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
