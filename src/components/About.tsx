import React from 'react';
import { ShieldCheck, Lightbulb, HardHat, Clock, CheckCircle2 } from 'lucide-react';
import { CORE_VALUES } from '../data';
import { motion } from 'motion/react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Lightbulb,
  HardHat,
  Clock
};

export default function About() {
  return (
    <section id="gioi-thieu" className="py-20 md:py-28 bg-[#f8fafc] text-slate-900 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Text info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2 text-brand-600 font-bold uppercase tracking-widest text-xs sm:text-md">
              <span className="h-1.5 w-10 bg-brand-500 rounded-full" />
              <span>Về Chúng Tôi</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Kỹ Thuật Chính Xác <br />
              <span className="text-brand-600">Đồng Hành Phát Triển Bền Vững</span>
            </h2>

            <p className="text-slate-650 leading-relaxed text-sm">
              Tại TVC, chúng tôi hiểu rằng một ngôi nhà hoàn hảo hay một công trình bền vững không chỉ nằm ở vẻ ngoài mà còn ở hệ thống vận hành thông minh, tiết kiệm năng lượng, tối ưu thiết bị và không gian nội thất tiện nghi. Với nền tảng chuyên môn sâu trong lĩnh vực Cơ điện, Sửa chữa cải tạo và Xây dựng, TVC tự hào là đối tác tin cậy mang đến các giải pháp tối ưu cho mọi công trình.
            </p>

            {/* Corporate Profile Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3.5 text-xs sm:text-sm text-slate-800">
              <h3 className="font-bold text-slate-950 uppercase tracking-wide border-b border-slate-100 pb-2">Hồ sơ pháp lý doanh nghiệp:</h3>
              <div className="grid grid-cols-1 gap-2.5">
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-dashed border-slate-100 pb-1.5">
                  <span className="text-slate-500 font-medium shrink-0">Tên công ty:</span>
                  <span className="text-slate-900 font-semibold sm:text-right">Công ty TNHH Cơ điện và TMDV TVC</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-dashed border-slate-100 pb-1.5">
                  <span className="text-slate-500 font-medium shrink-0">Năm thành lập:</span>
                  <span className="text-slate-900 font-bold">2024</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-dashed border-slate-100 pb-1.5">
                  <span className="text-slate-500 font-medium shrink-0">Trụ sở đăng ký:</span>
                  <span className="text-slate-900 font-semibold sm:text-right">3/670/38/52 Hà Huy Tập - Phù Đổng - Gia Lâm - Hà Nội</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-dashed border-slate-100 pb-1.5">
                  <span className="text-slate-500 font-medium shrink-0">Mã số thuế (MST):</span>
                  <span className="text-slate-900 font-mono font-bold">0110633478</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-slate-500 font-medium shrink-0">Tài khoản ngân hàng:</span>
                  <span className="text-slate-900 font-semibold sm:text-right">982982579 - Tại Ngân hàng TMCP Quân đội (MBBank)</span>
                </div>
              </div>
            </div>

            {/* Criteria check points list */}
            <div className="space-y-3.5 pt-2">
              <h4 className="font-bold text-slate-950 text-sm uppercase">Tiêu chí Cam kết Sản phẩm Dịch vụ:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Kỹ thuật', desc: 'An toàn, chất lượng, hiện đại, tối ưu công năng và tiết kiệm năng lượng' },
                  { title: 'Thẩm mỹ', desc: 'Cập nhật xu hướng nội thất mới nhất, phù hợp cá tính gia chủ' },
                  { title: 'Tiến độ', desc: 'Thi công bàn giao Đúng hẹn kỷ luật cao' },
                  { title: 'Bảo hành', desc: 'Thời gian Bảo hành trọn đời, hỗ trợ đắc lực 24/7 tức thì' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">{item.title}: </span>
                      <span className="text-xs sm:text-sm text-slate-650 font-light">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Abstract graphics representing safety/construction */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer visual decor */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl z-0" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl z-0" />

              {/* Main Illustration Collage (CSS-Based layout to look crisp) */}
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 rounded-2xl overflow-hidden shadow-md transform hover:scale-102 transition duration-300 border border-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600"
                      alt="Công trường thi công"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="bg-white border border-slate-200 text-slate-900 p-6 rounded-2xl shadow-lg space-y-3">
                    <HardHat className="h-8 w-8 text-yellow-500" />
                    <h3 className="text-lg font-bold font-display text-slate-950">An Toàn Thi Công</h3>
                    <p className="text-xs text-slate-600 font-light">
                      Chính sách 0 tai nạn lao động là kỷ luật thép trong vận hành xây dựng tại công trường.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="bg-white border border-slate-200 text-slate-900 p-6 rounded-2xl shadow-lg space-y-3">
                    <ShieldCheck className="h-8 w-8 text-brand-500" />
                    <h3 className="text-lg font-bold font-display text-slate-950">Thế Mạnh Uy Tín</h3>
                    <p className="text-xs font-semibold text-slate-600">
                      Tự hào đối tác vàng của Tập đoàn Điện lực EVN và các thương hiệu lọc dầu máy biến áp hàng đầu.
                    </p>
                  </div>
                  <div className="h-48 rounded-2xl overflow-hidden shadow-md transform hover:scale-102 transition duration-300 border border-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=600"
                      alt="Bản vẽ sơ đồ kỹ thuật"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Core Values Cards */}
        <div className="border-t border-slate-200/80 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] font-display">
              Giá Trị Cốt Lõi Tạo Nên Sự Khác Biệt
            </h3>
            <p className="text-slate-650 text-sm sm:text-base mt-2">
              Chúng tôi không đo lường thành công bằng lợi nhuận trước mắt, mà khẳng định vị thế bằng sự phát triển vững chắc của dịch vụ.
            </p>
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const Icon = iconMap[val.iconName] || ShieldCheck;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-slate-200/80 hover:bg-white hover:border-[#3b82f6]/40 text-slate-900 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-305 group"
                >
                  <div className="bg-brand-50 group-hover:bg-brand-100 text-brand-600 group-hover:text-brand-750 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-350">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-slate-950 mb-3">
                    {val.title}
                  </h4>
                  <p className="text-slate-600 group-hover:text-slate-700 text-xs sm:text-sm font-light leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
