import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'trang-chu', label: 'Trang chủ' },
    { id: 'gioi-thieu', label: 'Giới thiệu' },
    { id: 'dich-vu', label: 'Dịch vụ' },
    { id: 'du-an', label: 'Dự án' },
    { id: 'lien-he', label: 'Liên hệ' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-4 shadow-md border-b border-slate-200/80'
          : 'bg-gradient-to-b from-white/95 via-white/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="nav-logo"
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('trang-chu')}
          >
            <div className="bg-brand-500 text-white p-2 rounded-lg">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                CƠ ĐIỆN <span className="text-brand-600">TVC</span>
              </span>
              <p className="text-[9px] text-brand-600 font-bold tracking-widest uppercase hidden sm:block">
                Giữ Chữ Tín Hơn Giữ Vàng
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul id="desktop-menu-list" className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`font-sans text-sm font-medium transition-colors relative py-1 cursor-pointer ${
                      activeSection === item.id
                        ? 'text-brand-600'
                        : 'text-slate-650 hover:text-brand-500'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-400 rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Hotline Desk CTA */}
            <a
              id="desktop-hotline-btn"
              href="tel:0982982303"
              className="flex items-center space-x-2 bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Phone className="h-4 w-4 animate-bounce" />
              <span>0982 982 303</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-burger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-slate-950 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        activeSection === item.id
                          ? 'bg-slate-100 text-brand-600'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200 px-4">
                <a
                  href="tel:0982982303"
                  className="flex items-center justify-center space-x-2 bg-brand-500 hover:bg-brand-600 text-white py-3 rounded-xl font-bold transition-all"
                >
                  <Phone className="h-5 w-5 animate-bounce" />
                  <span>Gọi ngay: 0982 982 303</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
