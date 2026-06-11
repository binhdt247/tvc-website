import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, History, Trash2, AlertCircle, Shield } from 'lucide-react';
import { Inquiry } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceInterest, setServiceInterest] = useState('SystemM&E');
  const [message, setMessage] = useState('');
  
  const [formError, setFormError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load inquiries from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('company_me_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse inquiries', e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim()) {
      setFormError('Vui lòng điền họ và tên của bạn.');
      return;
    }
    if (!phone.trim()) {
      setFormError('Vui lòng điền số điện thoại liên lạc.');
      return;
    }
    
    // Simple phone regex check
    const phoneRegex = /^[0-9+\s-]{9,15}$/;
    if (!phoneRegex.test(phone)) {
      setFormError('Số điện thoại không đúng định dạng kỹ thuật.');
      return;
    }

    const newInquiry: Inquiry = {
      id: `inq-${Date.now()}`,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim() || 'Không cung cấp',
      serviceInterest,
      message: message.trim() || 'Khảo sát và tư vấn giải pháp kỹ thuật.',
      createdAt: new Date().toLocaleString('vi-VN')
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('company_me_inquiries', JSON.stringify(updated));

    // Clear form and show success screen
    setFullName('');
    setPhone('');
    setEmail('');
    setServiceInterest('SystemM&E');
    setMessage('');
    setIsSubmitted(true);

    // Auto dismiss success screen after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleClearInquiries = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa đi lịch sử liên hệ?')) {
      setInquiries([]);
      localStorage.removeItem('company_me_inquiries');
    }
  };

  const serviceOptions = [
    { value: 'SystemM&E', label: 'Hệ thống Cơ Điện & Trạm Biến Áp' },
    { value: 'Audiovisual', label: 'Thiết bị Nghe Nhìn Chuyên Dụng' },
    { value: 'Maintenance', label: 'Cải Tạo & Bảo Trì Định Kỳ' },
    { value: 'Other', label: 'Tư vấn / Thẩm định / Đo sóng hài' }
  ];

  return (
    <section id="lien-he" className="py-20 md:py-28 bg-white text-slate-900 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-brand-600 font-bold uppercase tracking-widest text-xs sm:text-md mb-2">
            <span className="h-1.5 w-10 bg-brand-500 rounded-full" />
            <span>Liên hệ tư vấn</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight font-display">
            Kết Nối Ngay Cho Giải Pháp Cơ Điện Của Bạn
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-light">
            Đội ngũ chuyên viên và kỹ sư trưởng sẵn sàng phản hồi trong vòng 2 giờ nhận thông tin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 text-slate-850 rounded-3xl p-8 sm:p-10 shadow-lg space-y-8 relative overflow-hidden border border-slate-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl" />
              
              <div className="space-y-3">
                <span className="text-[10.5px] uppercase font-bold tracking-widest text-brand-600">TRỤ SỞ CHÍNH & VĂN PHÒNG ĐẠI DIỆN</span>
                <h3 className="text-2xl font-black font-display text-slate-950 leading-tight">ĐƠN VỊ CƠ ĐIỆN M&E CHUYÊN NGHIỆP</h3>
                <p className="text-slate-600 text-sm font-light">Tư vấn tận tâm, cam kết thực tiễn. Đơn vị thi công cáp trung hạ thế hàng đầu.</p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-6">
                
                {/* Hotline block */}
                <a
                  href="tel:0982982303"
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="bg-brand-50 group-hover:bg-brand-500 text-brand-600 group-hover:text-white p-3 rounded-xl transition-colors shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-600 uppercase tracking-wider">Hotline Báo Giá 24/7</h4>
                    <p className="text-lg font-bold text-slate-950 mt-1 group-hover:text-brand-600 transition-colors">0982 982 303</p>
                  </div>
                </a>

                {/* Address block */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-50 text-brand-600 p-3 rounded-xl shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-600 uppercase tracking-wider">Địa Chỉ Trụ Sở</h4>
                    <p className="text-sm text-slate-700 font-semibold mt-1 max-w-sm">3/670/38/52 Hà Huy Tập, Phù Đổng, Gia Lâm, Hà Nội</p>
                  </div>
                </div>

                {/* Tax ID & Bank details block */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-50 text-brand-600 p-3 rounded-xl shrink-0">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold text-brand-600 uppercase tracking-wider">Thông Tin Pháp Lý</h4>
                    <p className="text-xs text-slate-700 font-light">Mã số thuế: <strong className="font-semibold text-slate-900">0110633478</strong></p>
                    <p className="text-xs text-slate-700 font-light leading-snug">Số tài khoản: <strong className="font-semibold text-slate-900">982982579</strong><br />Tại Ngân hàng TMCP Quân đội (MBBank)</p>
                  </div>
                </div>

                {/* Email block */}
                <a
                  href="mailto:contact@codienme.vn"
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="bg-brand-50 group-hover:bg-brand-500 text-brand-600 group-hover:text-white p-3 rounded-xl transition-colors shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-600 uppercase tracking-wider">Hòm Thư Kỹ Thuật điện</h4>
                    <p className="text-sm font-bold text-slate-700 mt-1 group-hover:text-brand-600 transition-colors">contact@codienme.vn</p>
                  </div>
                </a>

                {/* Hours block */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-50 text-brand-600 p-3 rounded-xl shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-600 uppercase tracking-wider">Giờ Làm Việc</h4>
                    <p className="text-sm text-slate-700 font-light mt-1">Từ Thứ 2 - Chủ Nhật (8h00 - 21h00), Bảo trì hỗ trợ khẩn 24/7/365.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Inquiry History button */}
            {inquiries.length > 0 && (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center space-x-2.5">
                  <History className="h-5 w-5 text-brand-600" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">Yêu cầu liên hệ của bạn ({inquiries.length})</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setShowHistory(!showHistory)}
                    className="text-xs font-bold bg-brand-500/10 text-brand-700 hover:bg-brand-500/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    {showHistory ? 'Ẩn' : 'Xem'}
                  </button>
                  <button
                    onClick={handleClearInquiries}
                    className="text-slate-400 hover:text-red-500 p-1.5 rounded-lg transition-colors cursor-pointer"
                    title="Xóa lịch sử"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive CRM Contact Input Form */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-slate-50 rounded-3xl p-8 sm:p-12 shadow-md border border-emerald-500/20 text-center space-y-6 flex flex-col items-center justify-center min-h-[440px]"
                >
                  <div className="bg-emerald-50 text-emerald-600 p-4 rounded-full border border-emerald-100">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950">Gửi Yêu Cầu Thành Công!</h3>
                    <p className="text-slate-600 text-sm sm:text-base font-light max-w-md mx-auto">
                      Cảm ơn bạn đã quan tâm. Hệ thống chăm sóc khách hàng của chúng tôi đã ghi nhận yêu cầu tư vấn. Chúng tôi sẽ gọi lại ngay lập tức.
                    </p>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-left text-xs font-mono space-y-1 w-full max-w-sm text-slate-300">
                    <div className="text-brand-400 uppercase text-[9px] font-bold">Xác nhận gửi thành công</div>
                    <div className="text-slate-300">Lịch hẹn khảo sát: Kỹ sư trưởng liên hệ.</div>
                    <div className="text-slate-300">Tổng đài tiếp nhận khẩn: 0982 982 303</div>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-brand-600 hover:text-brand-700 underline transition-colors cursor-pointer"
                  >
                    Gửi thêm một nội dung khác
                  </button>
                </motion.div>
              ) : showHistory ? (
                <motion.div
                  key="history"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200 min-h-[440px] flex flex-col"
                >
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4 shrink-0">
                    <div className="flex items-center space-x-2">
                      <History className="h-5 w-5 text-brand-600" />
                      <h3 className="text-lg font-bold font-display text-slate-950">Lịch sử gửi Liên hệ</h3>
                    </div>
                    <button
                      onClick={() => setShowHistory(false)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-900"
                    >
                      Đóng
                    </button>
                  </div>

                  <div className="space-y-4 overflow-y-auto max-h-[320px] flex-grow pr-1">
                    {inquiries.map((inq) => (
                      <div key={inq.id} className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-left space-y-2">
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-bold text-brand-600">{inq.fullName} ({inq.phone})</span>
                          <span className="text-[10px] text-slate-500">{inq.createdAt}</span>
                        </div>
                        <div className="text-xs text-slate-700">
                          <span className="font-bold text-slate-500">Dịch vụ quan tâm:</span> {
                            serviceOptions.find(o => o.value === inq.serviceInterest)?.label || inq.serviceInterest
                          }
                        </div>
                        {inq.email && <div className="text-xs text-slate-700"><span className="font-bold text-slate-500">Email:</span> {inq.email}</div>}
                        <div className="text-xs bg-white border border-slate-200 p-2 rounded-lg text-slate-600 font-light mt-1">
                          {inq.message}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowHistory(false)}
                    className="w-full mt-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl text-center text-xs sm:text-sm cursor-pointer transition-colors"
                  >
                    Quay lại Form Liên Hệ
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-slate-50 rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200 text-slate-800"
                >
                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-950 mb-6">Gửi Yêu Cầu Khảo Sát & Báo Giá Miễn Phí</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {formError && (
                      <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-start space-x-2.5 text-xs text-red-650 font-medium animate-pulse-subtle">
                        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-red-600" />
                        <span>{formError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Họ và Tên <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Nguyễn Văn A"
                          className="w-full px-4 py-3 bg-white border border-slate-250/80 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm transition-all text-slate-900 placeholder-slate-400 shadow-inner"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Số điện thoại <span className="text-red-500">*</span></label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="0982 982 303"
                          className="w-full px-4 py-3 bg-white border border-slate-250/80 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm transition-all text-slate-900 placeholder-slate-400 shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Email Liên Hệ <span className="text-slate-400 font-normal shadow-none">(Tùy chọn)</span></label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="hotro@doanhnghiep.vn"
                        className="w-full px-4 py-3 bg-white border border-slate-250/80 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm transition-all text-slate-900 placeholder-slate-400 shadow-inner"
                      />
                    </div>

                    {/* Service Type Selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Dịch vụ cần tham vấn</label>
                      <select
                        value={serviceInterest}
                        onChange={(e) => setServiceInterest(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-slate-250/80 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm transition-all cursor-pointer text-slate-900"
                      >
                        {serviceOptions.map(opt => (
                          <option key={opt.value} value={opt.value} className="bg-white text-slate-900">{opt.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message description box */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Nội dung chi tiết yêu cầu <span className="text-slate-400 font-normal">(Khảo sát / Diện tích / CS Trạm)</span></label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                        placeholder="Ghi chú thêm quy mô công trình, công suất trạm biến áp, hoặc cấu hình phòng họp yêu cầu của bạn..."
                        className="w-full px-4 py-3 bg-white border border-slate-250/80 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm transition-all resize-none text-slate-900 placeholder-slate-400 shadow-inner"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="submit-contact-form"
                      type="submit"
                      className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Send className="h-4.5 w-4.5" />
                      <span>Gửi yêu cầu Báo Giá & Khảo Sát</span>
                    </button>

                    <p className="text-[11px] text-slate-500 text-center font-light leading-snug">
                      * Chúng tôi tuân thủ nghiêm ngặt chính sách bảo mật thông tin khách hàng, cam kết không cung cấp liên lạc cho bên thứ 3 phục vụ quảng cáo.
                    </p>

                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
