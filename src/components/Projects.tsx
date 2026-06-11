import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, CheckSquare, FolderGit2, X } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'Tất cả dự án' },
    { id: 'me', label: 'Cơ Điện & Trạm Áp' },
    { id: 'audiovisual', label: 'Thiết bị Nghe Nhìn' },
    { id: 'maintenance', label: 'Cải Tạo & Bảo Trì' }
  ];

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <section id="du-an" className="py-20 md:py-28 bg-slate-50 text-slate-900 overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-brand-600 font-bold uppercase tracking-widest text-xs sm:text-md">
              <span className="h-1.5 w-10 bg-brand-500 rounded-full" />
              <span>Dự án tiêu biểu</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Hành Trình Kiến Tạo <br />
              <span className="text-brand-600">Hàng Trăm Công Trình Bền Vững</span>
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Các dự án tiêu biểu được đội ngũ kỹ sư triển khai và hoàn thành đáp ứng tiến độ bàn giao nghiêm ngặt từ phía chủ đầu tư trong nước cũng như đối tác liên doanh quốc gia.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b border-slate-200 pb-4">
          {categories.map((cat) => (
            <button
               key={cat.id}
               onClick={() => setFilter(cat.id)}
               className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all relative cursor-pointer z-10 border border-slate-200 ${
                 filter === cat.id
                   ? 'text-white border-brand-500'
                   : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900'
               }`}
            >
              <span className="relative z-20">{cat.label}</span>
              {filter === cat.id && (
                <motion.div
                  layoutId="activeFilterIndicator"
                  className="absolute inset-x-0 inset-y-0 bg-brand-500 rounded-full z-0 border border-brand-400"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Gallery Grid */}
        <motion.div
          id="projects-gallery"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all border border-slate-200/80 transform hover:-translate-y-1"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image aspect ratio container */}
                <div className="relative aspect-16/10 overflow-hidden bg-brand-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Floating category tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-bold px-3 py-1 rounded-full border border-slate-200 z-10">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Info Overlay Panel */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-slate-500 text-xs font-medium">
                    <MapPin className="h-3.5 w-3.5 text-brand-500" />
                    <span className="truncate">{project.location}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 line-clamp-1 group-hover:text-brand-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-650 text-xs sm:text-sm font-light line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-brand-600 font-semibold text-xs sm:text-sm border-t border-slate-100 group-hover:text-brand-700 mt-2">
                    <span>Xem giải pháp lắp đặt</span>
                    <span className="text-lg transition-transform group-hover:translate-x-1.5 duration-300">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal popup for Selected Project */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
               id="project-detail-overlay"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
               onClick={() => setSelectedProject(null)}
            >
              <motion.div
                id="project-detail-modal"
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative border border-slate-200 text-slate-800"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Banner */}
                <div className="relative h-48 sm:h-56 bg-brand-950">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  
                  {/* Close trigger button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/85 hover:bg-white text-slate-800 p-2.5 rounded-full transition-colors backdrop-blur-md cursor-pointer border border-slate-200 shadow-sm"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {/* Project Location label overlay */}
                  <div className="absolute bottom-4 left-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest bg-brand-50 px-2.5 py-1 rounded-full text-brand-700 border border-brand-200">
                      CÔNG TRÌNH BIỂU TIÊU BIỂU
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                  
                  {/* Title & Metadata layout */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 font-display">
                      {selectedProject.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-500">
                      <div className="flex items-center space-x-1.5 align-middle">
                        <MapPin className="h-4 w-4 text-brand-500" />
                        <span>{selectedProject.location}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 align-middle">
                        <Calendar className="h-4 w-4 text-brand-500" />
                        <span>Hoàn thành: Năm {selectedProject.year}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 align-middle">
                        <FolderGit2 className="h-4 w-4 text-brand-500" />
                        <span>Phân mục: {selectedProject.categoryLabel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Narrative paragraph */}
                  <div className="space-y-2.5">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Tổng quan thi công:</h4>
                    <p className="text-slate-650 text-sm leading-relaxed font-light">
                      {selectedProject.description} Hệ thống sau bàn giao đã hoàn toàn qua các khâu thí điểm đo kiểm chất lượng chịu lực cao, điện áp danh định định mức, rò khí cách điện và khả năng kiểm soát phòng họp kỹ thuật ổn định, bàn giao 100% tài liệu nghiệm thu tiêu chuẩn kỹ thuật đến tổ thẩm định địa phương.
                    </p>
                  </div>

                  {/* Solutions list */}
                  <div className="space-y-3.5">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Giải pháp & Thiết bị hoàn thành:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {selectedProject.solutions.map((sol, idx) => (
                        <div key={idx} className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                          <CheckSquare className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium text-slate-700">{sol}</span>
                        </div>
                      ))}
                    </div>
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
