import React, { useState } from 'react';
import { Code, FileText, CheckCircle, Copy, Terminal, Minimize2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function NextJsCodeExporter() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'page' | 'layout'>('page');
  const [copied, setCopied] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const layoutCode = `// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['vietnamese', 'latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['vietnamese', 'latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Xây Dựng & Cơ Điện M&E - Giữ Chữ Tín Hơn Giữ Vàng',
  description: 'Nhà thầu tư vấn giải pháp cơ điện hiện đại và lắp đặt thiết bị nghe nhìn chuyên sâu cao cấp.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={\`\${inter.variable} \${spaceGrotesk.variable} font-sans bg-slate-50 text-slate-900 antialiased\`}>
        {children}
      </body>
    </html>
  );
}`;

  const pageCode = `"use client";

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, ShieldCheck, Zap, Tv, Settings, 
  CheckCircle, ArrowRight, MapPin, Mail, Clock, Send, 
  Award, Server, Cpu, CheckCircle2, ChevronRight, CheckSquare, History, Trash2, AlertCircle
} from 'lucide-react';

// Dữ liệu tĩnh
const SERVICES_DATA = [
  {
    id: 'system-me-substation',
    title: 'Hệ thống Cơ Điện & Trạm Biến Áp',
    shortDesc: 'Tư vấn thiết kế, thi công lắp đặt trọn gói hệ thống phân phối điện và trạm biến áp trung/hạ thế đáp ứng tiêu chuẩn ngành khắt khe.',
    fullDesc: 'Chúng tôi cung cấp giải pháp tổng thể từ khảo sát, thiết kế kỹ thuật, lập dự toán đến thi công lắp đặt và đấu nối nghiệm thu các hạng mục cơ điện động lực. Hệ thống đảm bảo tính an toàn cao, vận hành bền bỉ và tiết kiệm năng lượng tối đa cho nhà xưởng, tòa nhà cao tầng và các tổ hợp công nghiệp.',
    features: [
      'Thiết kế, lắp đặt trạm biến áp kiểu phòng, bệt, Kiosk, giàn treo từ 110kV trở xuống.',
      'Hệ thống tủ điện động lực chính MSB, tủ phân phối DB, tủ bù tủ điều khiển tự động hóa.',
      'Cáp động lực lực lớn, thanh dẫn điện Busway chuyên dùng cho tòa nhà và nhà máy.',
      'Hệ thống điện nhẹ (Mạng LAN, camera giám sát CCTV, âm thanh thông báo PA).',
      'Hệ thống chống sét tiếp địa trực tiếp lan truyền và bảo vệ quá áp.',
      'Hệ thống phòng cháy chữa cháy (PCCC) tiêu chuẩn quốc gia.'
    ],
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'audiovisual-solutions',
    title: 'Thiết bị Nghe Nhìn Chuyên Dụng',
    shortDesc: 'Tích hợp hệ thống trình chiếu LED lớn, rạp chiếu phim, trung tâm chỉ huy điều hành hiện đại và phòng hội thảo đa năng cao cấp.',
    fullDesc: 'Mang đến trải nghiệm nghe nhìn vượt trội bằng cách tích hợp và tối ưu hóa các thiết bị hàng đầu thế giới. Gồm hệ thống âm thanh biểu diễn chuyên nghiệp, màn hình ghép hiển thị cao cấp ghép nối liền mạch và hệ thống điều khiển trung tâm giúp tự động hóa quá trình họp tập, hội thảo và quản lý vận hành chỉ với một nút chạm.',
    features: [
      'Màn hình hiển thị ghép Videowall (COB, LED Cabinet, LCD viền siêu mỏng).',
      'Hệ thống âm thanh phòng họp hội thảo kỹ thuật số Bosch, Shure, Sennheiser.',
      'Giải pháp âm thanh ánh sáng sân khấu nghệ thuật chuyên nghiệp cho hội trường lớn.',
      'Hệ thống họp trực tuyến đa điểm (Cloud & Hardware Video Conference).',
      'Giải pháp phòng điều hành thông minh, trung tâm chỉ huy TOC/NOC hiện đại.',
      'Phần mềm phân phối, hiển thị nội dung số tập trung Digital Signage.'
    ],
    icon: Tv,
    image: 'https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'maintenance-renovation',
    title: 'Cải Tạo & Bảo Trì',
    shortDesc: 'Dịch vụ xử lý sự cố cấp tốc, cải tạo nâng cấp hạ tầng cơ điện hiện hữu và bảo trì định kỳ đảm bảo hệ thống chạy xuyên suốt 24/7.',
    fullDesc: 'Hệ thống cơ điện hoạt động ổn định giúp doanh nghiệp tránh thiệt hại hàng tỷ đồng do khâu gián đoạn sản xuất. Chúng tôi cung cấp gói bảo trì định kỳ chuyên sâu, đo kiểm phân tích chất lượng điện năng, chụp hồng ngoại phát hiện nóng cục bộ và cử đội kỹ sư chuyên môn ứng cứu xử lý sự cố khẩn cấp mọi lúc, mọi nơi.',
    features: [
      'Bảo dưỡng định kỳ Máy biến áp, đo điện trở cách điện, lọc dầu tuần hoàn máy biến áp.',
      'Nâng cấp cải tạo tủ phân phối điện, thay thế aptomat, cầu dao tự động quá tải.',
      'Bảo dưỡng định kỳ hệ thống điều hòa không khí trung tâm Chiller, VRV, AHU.',
      'Đo kiểm, phân tích và cấp chứng thư đo sóng hài điện năng theo thông tư Bộ Công Thương.',
      'Khảo sát bằng camera nhiệt hồng ngoại phát hiện điểm phát nhiệt bất thường.',
      'Đội ngũ kỹ thuật túc trực 24/7 xử lý hư hỏng đột xuất tại công trình.'
    ],
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
  }
];

const PROJECTS_DATA = [
  {
    id: 'proj-1',
    title: 'Trạm Biến Áp 2500kVA & Cơ Điện Nhà Máy TechLink Bắc Giang',
    category: 'me',
    categoryLabel: 'Hệ thống Cơ Điện',
    description: 'Thi công trọn gói trạm biến áp, cáp nguồn trung thế lực lớn, tủ phân phối MSB và mạng điện nhẹ phụ trợ sản xuất.',
    location: 'KCN Đình Trám, Bắc Giang',
    year: '2025',
    solutions: ['Trạm biến áp Kiosk 2500kVA', 'Tủ điện tổng MSB 4000A', 'Bảo vệ rơle số'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'proj-2',
    title: 'Trung Tâm Chỉ Huy Giám Sát Điều Hành Thông Minh TOC',
    category: 'audiovisual',
    categoryLabel: 'Thiết bị Nghe Nhìn',
    description: 'Thiết kế trang bị màn hình ghép LCD 55 inch viền ghép 0.88mm, hệ thống điều khiển ma trận Crestron tích hợp quản lý camera thông minh.',
    location: 'Quận 1, TP. Hồ Chí Minh',
    year: '2025',
    solutions: ['Hệ màn hình ghép 4x3 LCD 55"', 'Mạng âm thanh cao cấp', 'Phòng TOC hiện đại'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'proj-3',
    title: 'Bảo Trì Định Kỳ Và Tối Ưu Hệ Thống Chiller - Tòa Nhà V-Tower',
    category: 'maintenance',
    categoryLabel: 'Cải Tạo & Bảo Trì',
    description: 'Lập kế hoạch đo kiểm cách điện cáp, lọc bụi làm sạch dàn ống đồng, bơm gas bổ sung và nâng cấp phần mềm điều khiển tòa nhà BMS.',
    location: 'Cầu Giấy, Hà Nội',
    year: '2026',
    solutions: ['Chẩn đoán camera nhiệt', 'Bảo dưỡng AHU & Chiller', 'Lọc dầu biến áp'],
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800'
  }
];

export default function HomePage() {
  const [activeSegment, setActiveSegment] = useState('trang-chu');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [projFilter, setProjFilter] = useState('all');

  // Contact form States
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceInterest, setServiceInterest] = useState('SystemM&E');
  const [message, setMessage] = useState('');
  const [errorText, setErrorText] = useState('');
  const [okSent, setOkSent] = useState(false);

  // Monitor Window scroll to active navigation block
  useEffect(() => {
    const handleViewportScroll = () => {
      const sections = ['trang-chu', 'gioi-thieu', 'dich-vu', 'du-an', 'lien-he'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSegment(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleViewportScroll);
    return () => window.removeEventListener('scroll', handleViewportScroll);
  }, []);

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText('');

    if (!fullName.trim() || !phone.trim()) {
      setErrorText('Vui lòng điền họ tên và số điện thoại liên lạc.');
      return;
    }
    
    setOkSent(true);
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setTimeout(() => setOkSent(false), 5000);
  };

  const filteredProjects = projFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === projFilter);

  return (
    <div className="relative min-h-screen selection:bg-brand-500 selection:text-white">
      
      {/* 1. Header / Navigation bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-brand-900/95 backdrop-blur-md py-4 shadow-lg border-b border-brand-800/50 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToAnchor('trang-chu')}>
            <div className="bg-sky-500 text-white p-2 rounded-lg">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight">CƠ ĐIỆN <span className="text-sky-400">M&E</span></span>
            </div>
          </div>

          {/* Menu Items for Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6 text-sm font-medium">
              {[
                { id: 'trang-chu', label: 'Trang chủ' },
                { id: 'gioi-thieu', label: 'Giới thiệu' },
                { id: 'dich-vu', label: 'Dịch vụ' },
                { id: 'du-an', label: 'Dự án' },
                { id: 'lien-he', label: 'Liên hệ' }
              ].map(item => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToAnchor(item.id)}
                    className={\`hover:text-sky-400 transition-colors \${activeSegment === item.id ? 'text-sky-400 font-bold' : 'text-gray-250'}\`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <a href="tel:0982982303" className="flex items-center space-x-2 bg-sky-500 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-sky-600 transition-all">
              <Phone className="h-4 w-4 animate-bounce" />
              <span>0982 982 303</span>
            </a>
          </nav>

          {/* Mobile menu trigger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Box */}
        {mobileOpen && (
          <div className="md:hidden bg-brand-900 border-t border-brand-800 p-4 space-y-4">
            <ul className="space-y-2 text-sm">
              {['trang-chu', 'gioi-thieu', 'dich-vu', 'du-an', 'lien-he'].map(id => (
                <li key={id}>
                  <button onClick={() => scrollToAnchor(id)} className="block w-full text-left py-2 hover:bg-brand-800 rounded px-2">
                    {id === 'trang-chu' ? 'Trang chủ' : id === 'gioi-thieu' ? 'Giới thiệu' : id === 'dich-vu' ? 'Dịch vụ' : id === 'du-an' ? 'Dự án' : 'Liên hệ'}
                  </button>
                </li>
              ))}
            </ul>
            <a href="tel:0982982303" className="flex items-center justify-center space-x-2 bg-sky-500 py-3 rounded-xl font-bold">
              <Phone className="h-4 w-4" />
              <span>GỌI HOTLINE: 0982 982 303</span>
            </a>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section id="trang-chu" className="relative min-h-screen flex items-center justify-center bg-brand-950 text-white pt-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-block bg-brand-900 border border-brand-700 text-sky-400 px-4 py-1.5 rounded-full text-xs font-semibold">Đối Tác Cơ Điện M&E Toàn Cầu</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none font-display">
              Khẩu Hiệu <br />
              <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent block mt-1">
                &ldquo;Giữ chữ TÍN hơn giữ VÀNG&rdquo;
              </span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
              Chuyên nghiệp hàng đầu về Trạm Biến Áp, hệ thống cung cấp phân phối điện cao kỹ thuật và thiết bị nghe nhìn AV tích hợp cho tổ chức quy mô lớn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="tel:0982982303" className="flex items-center justify-center space-x-2 bg-sky-500 text-slate-900 px-8 py-4 rounded-xl font-extrabold shadow-lg hover:bg-sky-450 transition-colors">
                <Phone className="h-5 w-5" />
                <span>Gọi ngay Hotline: 0982 982 303</span>
              </a>
              <button onClick={() => scrollToAnchor('dich-vu')} className="border border-slate-700 bg-slate-900/50 hover:bg-slate-950 px-8 py-4 rounded-xl">
                Xem Dịch Vụ
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 bg-brand-900/60 p-6 sm:p-8 rounded-3xl border border-brand-800">
            <h3 className="text-lg font-bold mb-4 font-display">Tiêu chuẩn Kỹ thuật Cam kết:</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-350">
              <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" /> <span>Nghiệm thu ngành với EVN đạt 100% yêu cầu kỹ thuật.</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" /> <span>Bảo trì trạm hạ cáp vận hành bền bỉ 24/7.</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" /> <span>Hệ thống Videowall hiển thị đúng 4K đồng bộ.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Section Giới thiệu */}
      <section id="gioi-thieu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-sky-600 font-bold uppercase tracking-wider text-xs">Về Chúng Tôi</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">Triết Lý Thiết Kế Cơ Điện Chuyên Sâu</h2>
              <p className="text-slate-600 justify">
                Bảo Khánh M&E là tập hợp đội ngũ kỹ sư dày dạn kinh nghiệm thi công hàng trăm công trình trải rộng từ Bắc vào Nam. Chữ Tín được đặt lên tối cao, thi công an toàn, bàn giao chuẩn nghiệm thu.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <h4 className="font-extrabold text-2xl text-sky-600 font-display">12+ Năm</h4>
                  <p className="text-xs text-slate-500 font-light">Sát cánh công trình</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <h4 className="font-extrabold text-2xl text-sky-600 font-display">350+</h4>
                  <p className="text-xs text-slate-500 font-light font-sans">Dự án đóng lưới</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 sm:h-96">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" alt="construction" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section Dịch vụ (Grid 3-Columns requested) */}
      <section id="dich-vu" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sky-600 font-bold uppercase text-xs">Dịch vụ thế mạnh</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">Các Giải Pháp Cơ Điện (M&E) Trọng Điểm</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border hover:border-sky-500/35 transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="bg-sky-100 text-sky-600 p-4 rounded-xl inline-block">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{service.shortDesc}</p>
                    <ul className="text-xs text-slate-600 space-y-2 pt-2">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center space-x-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" /> <span>{feat}</span></li>
                      ))}
                    </ul>
                  </div>
                  <button onClick={() => setSelectedService(service)} className="text-sky-600 hover:text-sky-700 font-bold text-sm mt-6 flex items-center space-x-1.5">
                    <span>Xem đầy đủ giải pháp</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Section Dự án */}
      <section id="du-an" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sky-600 font-bold uppercase text-xs">Tham khảo thi công</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">Hồ Sơ Dự Án Thực Thực Chứng</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((proj) => (
              <div key={proj.id} className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer" onClick={() => setSelectedProject(proj)}>
                <div className="relative h-48 bg-slate-200">
                  <img src={proj.image} alt={proj.title} className="h-full w-full object-cover group-hover:scale-102 transition-transform" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] text-sky-600 font-bold uppercase">{proj.categoryLabel}</span>
                  <h4 className="font-bold text-lg text-slate-900 line-clamp-1">{proj.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{proj.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section Liên hệ */}
      <section id="lien-he" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold font-display">Thông tin liên lạc</h3>
            <p className="text-slate-600">Đơn vị tiếp nhận tư vấn thiết kế thi công lắp điện, trạm biến áp, bảo trì cơ sở hạ tầng.</p>
            <ul className="space-y-4 text-sm text-slate-700 font-light">
              <li className="flex items-center space-x-2"><MapPin className="h-5 w-5 text-sky-500 shrink-0" /> <span>Hào Nam, Ô Chợ Dừa, Đống Đa, Hà Nội</span></li>
              <li className="flex items-center space-x-2"><Phone className="h-5 w-5 text-sky-500 shrink-0" /> <a href="tel:0982982303" className="font-bold">0982 982 303</a></li>
              <li className="flex items-center space-x-2"><Mail className="h-5 w-5 text-sky-500 shrink-0" /> <span>contact@codienme.vn</span></li>
            </ul>
          </div>
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border">
            {okSent ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto" />
                <h4 className="text-xl font-bold">Gửi Liên Hệ Thành Công</h4>
                <p className="text-slate-500">Chúng tôi sẽ gọi điện trực tiếp lại cho quý đối tác.</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Họ và tên *" value={fullName} onChange={(e) => setFullName(e.target.value)} className="p-3 bg-slate-50 border rounded-lg focus:outline-sky-500" />
                  <input type="tel" placeholder="Số điện thoại *" value={phone} onChange={(e) => setPhone(e.target.value)} className="p-3 bg-slate-50 border rounded-lg focus:outline-sky-500" />
                </div>
                <input type="email" placeholder="Email liên lạc" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 bg-slate-50 border w-full rounded-lg focus:outline-sky-500" />
                <textarea rows={3} placeholder="Nội dung yêu cầu chi tiết..." value={message} onChange={(e) => setMessage(e.target.value)} className="p-3 bg-slate-50 border w-full rounded-lg focus:outline-sky-500"></textarea>
                <button type="submit" className="w-full bg-slate-900 border text-white py-3.5 rounded-xl font-bold hover:bg-slate-950 transition-colors">
                  Gửi Yêu Cầu Tư Vấn Khảo Sát
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-brand-950 text-white py-12 text-center text-xs">
        <p>© 2026 Xây dựng & Cơ điện M&E. Toàn quyền bảo lưu.</p>
        <p className="text-gray-500 mt-2">Kim chỉ nam: &ldquo;Giữ chữ TÍN hơn giữ VÀNG&rdquo; - ĐT: 0982 982 303</p>
      </footer>

      {/* Modal Detail Dịch Vụ */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-2xl w-full max-w-xl p-6 sm:p-8 text-slate-800" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold font-display mb-4">{selectedService.title}</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">{selectedService.fullDesc}</p>
            <h4 className="font-bold text-sm text-slate-700 mb-3">Các hạng mục chính:</h4>
            <ul className="space-y-2 text-xs text-slate-600 mb-6">
              {selectedService.features.map((feat: any, idx: number) => (
                <li key={idx} className="flex items-start space-x-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> <span>{feat}</span></li>
              ))}
            </ul>
            <button onClick={() => setSelectedService(null)} className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-lg">Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
}`;

  return (
    <div
      id="code-exporter-panel"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="bg-slate-900 border border-slate-705/80 text-white rounded-3xl shadow-2xl p-6 w-[90vw] sm:w-[600px] mb-4 overflow-hidden flex flex-col max-h-[80vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 shrink-0">
              <div className="flex items-center space-x-2">
                <div className="bg-brand-500/20 text-brand-400 p-2 rounded-xl">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-display text-white">Trình Xuất Code Next.js</h4>
                  <p className="text-[10px] text-gray-400">Copy toàn bộ file code cho dự án App Router của bạn</p>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-2.5 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <Minimize2 className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Code Tabs selection */}
            <div className="flex space-x-2 my-4 shrink-0">
              <button
                onClick={() => setActiveTab('page')}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'page'
                    ? 'bg-slate-800 text-white border border-slate-700'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <FileText className="h-4 w-4" />
                <span>page.tsx (Trang chủ)</span>
              </button>
              
              <button
                onClick={() => setActiveTab('layout')}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'layout'
                    ? 'bg-slate-800 text-white border border-slate-700'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Terminal className="h-4 w-4" />
                <span>layout.tsx (Cấu trúc file)</span>
              </button>
            </div>

            {/* Code Window */}
            <div className="relative layout-code-container flex-grow overflow-y-auto bg-slate-950 p-4 rounded-2xl border border-slate-800/80 max-h-[45vh] font-mono text-[11px] leading-relaxed text-blue-300">
              <pre className="whitespace-pre-wrap select-all">
                {activeTab === 'page' ? pageCode : layoutCode}
              </pre>

              {/* Copy prompt button inside window */}
              <button
                onClick={() => handleCopy(activeTab === 'page' ? pageCode : layoutCode)}
                className="absolute top-4 right-4 bg-brand-500 hover:bg-brand-650 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 shadow transition-all cursor-pointer active:scale-95"
              >
                {copied ? <CheckCircle className="h-4 w-4 stroke-slate-900" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? 'Đã Sao Chép!' : 'Copy Code'}</span>
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-[11px] text-gray-400 shrink-0">
              <span>* Code sử dụng font Tailwind + Lucide Icons chuẩn Next.js.</span>
              <span className="text-brand-400 font-semibold">Tương thích hoàn toàn</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button floating style */}
      <button
        id="code-exporter-launcher"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-slate-905 hover:bg-slate-950 border border-slate-700 text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer font-sans"
      >
        <Code className="h-5 w-5 text-amber-400" />
        <span className="text-sm font-bold">Lấy Code Next.js (Vietnamese)</span>
      </button>
    </div>
  );
}
