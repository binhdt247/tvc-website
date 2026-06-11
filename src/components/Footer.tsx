import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#020617] text-white pt-16 pb-8 border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 space-y-4">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={handleScrollToTop}
            >
              <div className="bg-brand-500 text-white p-2.5 rounded-xl">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <span className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                CƠ ĐIỆN <span className="text-brand-400">TVC</span>
              </span>
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
             
              Giải pháp Cơ điện, Sửa chữa cải tạo và Nội thất chuyên nghiệp. Kim chỉ nam: &ldquo;Giữ chữ TÍN hơn giữ VÀNG&rdquo;.
            </p>
            
            <button
              id="footer-back-to-top"
              onClick={handleScrollToTop}
              className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
            >
              <ArrowUp className="h-4 w-4 text-brand-400" />
              <span>Về đầu trang</span>
            </button>
          </div>

          {/* Quick Nav links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-bold text-gray-300 tracking-wider">Đường dẫn nhanh</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              {[
                { id: 'trang-chu', label: 'Trang chủ' },
                { id: 'gioi-thieu', label: 'Giới thiệu' },
                { id: 'dich-vu', label: 'Dịch vụ' },
                { id: 'du-an', label: 'Dự án' },
                { id: 'lien-he', label: 'Liên hệ' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-brand-400 font-light cursor-pointer transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Nav Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold text-gray-300 tracking-wider">Lĩnh vực hoạt động</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400 font-light">
              <li className="hover:text-brand-400 transition-colors cursor-pointer" onClick={() => onNavigate('dich-vu')}>Hệ Thống Cơ Điện & Điện Nước</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer" onClick={() => onNavigate('dich-vu')}>Trạm Biến Áp Trung & Hạ Thế</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer" onClick={() => onNavigate('dich-vu')}>Thiết Kế & Thi Công Nội Thất</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer" onClick={() => onNavigate('dich-vu')}>Sửa Chữa & Cải Tạo Nhà Cửa</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer" onClick={() => onNavigate('dich-vu')}>Trình Chiếu LED & Thiết Bị Nghe Nhìn</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer" onClick={() => onNavigate('dich-vu')}>Bảo Trì Hệ Thống Điện 24/7</li>
            </ul>
          </div>
 
          {/* Quick Contact Info Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold text-gray-300 tracking-wider">Liên hệ khẩn 24/7</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4.5 w-4.5 text-brand-400 shrink-0 mt-0.5" />
                <span className="font-light">3/670/38/52 Hà Huy Tập, Phù Đổng, Gia Lâm, Hà Nội</span>
              </li>
              <li>
                <a href="tel:0982982303" className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors">
                  <Phone className="h-4 w-4 text-brand-400" />
                  <span className="font-bold">0982 982 303</span>
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-400" />
                <span className="font-light">contact@codienme.vn</span>
              </li>
            </ul>
          </div>
 
        </div>
 
        {/* Bottom copyright and standard credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 font-light gap-4">
          <p>© 2026 Công ty TNHH Cơ điện và TMDV TVC. Đã đăng ký bản quyền thương hiệu.</p>
          <div className="flex space-x-4">
            <span className="cursor-pointer hover:text-brand-400 transition-colors">Điều khoản dịch vụ</span>
            <span>•</span>
            <span className="cursor-pointer hover:text-brand-400 transition-colors">Chính sách bảo mật điện năng</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
