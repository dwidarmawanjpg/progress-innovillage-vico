import React from 'react';
import { 
  Smartphone, 
  Youtube, 
  FileText, 
  Instagram, 
  Database, 
  Phone, 
  ExternalLink, 
  MapPin, 
  Mail,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const links = {
    app: "https://vico-app.vercel.app/",
    youtube: "https://www.youtube.com/@TeamVCOSekarJepun",
    instagram: "https://www.instagram.com/sekarjepun.innovate?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    drive: "https://drive.google.com/drive/folders/1cJB7lxL-23iv3aGGI8wDI8F3xA6weDtY?usp=sharing",
    wa1: "https://wa.me/6281238643382",
    wa2: "https://wa.me/6281337522119"
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-emerald-200">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-800 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 2px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-block bg-emerald-500/30 backdrop-blur-sm border border-emerald-400/50 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              ✨ Progress Update Innovillage 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Aplikasi VICO <br/>
              <span className="text-emerald-300">Tim Sekar Jepun Innovate</span>
            </h1>
            <p className="text-lg text-emerald-50 max-w-xl leading-relaxed">
              Dashboard pemantauan terpusat untuk melihat perkembangan prototipe, dokumentasi, dan data terkait inovasi aplikasi VICO.
            </p>
          </div>
          {/* Logo / Badge Placeholder */}
          <div className="hidden md:flex items-center justify-center w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <Smartphone size={48} className="text-emerald-200" />
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Mobile Prototype Frame (Takes 4 cols on large screens) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-6 px-2">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <Smartphone className="text-emerald-600" /> Live Prototype
              </h2>
              <a 
                href={links.app} 
                target="_blank" 
                rel="noreferrer"
                className="text-sm text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-1 transition-colors"
              >
                Buka di Tab Baru <ExternalLink size={14} />
              </a>
            </div>

            {/* CSS Mobile Phone Frame */}
            <div className="relative mx-auto border-gray-900 bg-gray-900 border-[12px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl transition-transform hover:scale-[1.02] duration-300">
              {/* Top Notch */}
              <div className="w-[120px] h-[25px] bg-gray-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[1rem] z-20 flex justify-center items-center gap-2">
                 <div className="w-12 h-1.5 bg-gray-800 rounded-full"></div>
                 <div className="w-2.5 h-2.5 bg-gray-800 rounded-full"></div>
              </div>
              {/* Side Buttons */}
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[15px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[15px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[15px] top-[142px] rounded-r-lg"></div>
              
              {/* Screen Content */}
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative z-10">
                <iframe 
                  src={links.app} 
                  className="w-full h-full border-none" 
                  title="VICO App Prototype"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-6 text-center max-w-[300px]">
              Prototipe VICO interaktif. Anda dapat mencoba navigasi dan fitur secara langsung pada frame di atas.
            </p>
          </div>

          {/* Right Column: Information & Links (Takes 8 cols on large screens) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Database className="text-emerald-600" /> Informasi & Dokumen
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Youtube Card */}
              <a href={links.youtube} target="_blank" rel="noreferrer" className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                <div className="bg-red-100 text-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Youtube size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Dokumentasi Video</h3>
                <p className="text-slate-600 text-sm flex-grow mb-4">
                  Tonton video log dan pembaruan visual progress proyek Innovillage kami di YouTube.
                </p>
                <div className="flex items-center text-sm font-semibold text-red-600 group-hover:translate-x-1 transition-transform">
                  Kunjungi Channel <ChevronRight size={16} />
                </div>
              </a>

              {/* Data Drive Card */}
              <a href={links.drive} target="_blank" rel="noreferrer" className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                <div className="bg-emerald-100 text-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Database size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Data Pengembangan</h3>
                <p className="text-slate-600 text-sm flex-grow mb-4">
                  Akses *raw data* dan informasi terkait pengembangan sebelum diimplementasikan ke aplikasi.
                </p>
                <div className="flex items-center text-sm font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">
                  Buka Google Drive <ChevronRight size={16} />
                </div>
              </a>

              {/* Instagram Card */}
              <a href={links.instagram} target="_blank" rel="noreferrer" className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-pink-200 transition-all flex flex-col h-full relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Instagram size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Instagram Sekar Jepun</h3>
                <p className="text-slate-600 text-sm flex-grow mb-4">
                  Ikuti keseharian, info terbaru, dan interaksi langsung dengan tim kami di media sosial.
                </p>
                <div className="flex items-center text-sm font-semibold text-pink-600 group-hover:translate-x-1 transition-transform">
                  Lihat Profil IG <ChevronRight size={16} />
                </div>
              </a>

              {/* PPTX Card (Pending state) */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-300 flex flex-col h-full relative opacity-80 cursor-not-allowed">
                <div className="bg-slate-200 text-slate-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <FileText size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Presentasi (PPTX)</h3>
                <p className="text-slate-500 text-sm flex-grow mb-4">
                  Dokumen presentasi (*slide deck*) berisi rincian proyek. Link akses sedang dalam persiapan.
                </p>
                <div className="inline-flex items-center justify-center px-4 py-2 bg-slate-200 text-slate-600 rounded-lg text-sm font-medium w-max">
                  Menunggu Link Update...
                </div>
              </div>
            </div>
            
            {/* Project Summary Banner */}
            <div className="mt-4 bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex items-start gap-4">
               <div className="bg-white p-2 rounded-full shadow-sm">
                 <MapPin className="text-emerald-600" size={20} />
               </div>
               <div>
                 <h4 className="font-bold text-emerald-900 mb-1">Inovasi Desa (Innovillage)</h4>
                 <p className="text-sm text-emerald-800 leading-relaxed">
                   Aplikasi VICO dikembangkan untuk memberikan solusi digital nyata di tingkat desa. Dukungan data, sosialisasi via media sosial, dan prototipe yang matang adalah fokus utama Tim Sekar Jepun Innovate saat ini.
                 </p>
               </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer & Contacts */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              Tim Sekar Jepun Innovate
            </h3>
            <p className="text-slate-400 max-w-sm mb-6">
              Membangun inovasi bersama dari desa untuk Indonesia. Jangan ragu untuk menghubungi kami terkait pertanyaan, masukan, atau kolaborasi.
            </p>
            <div className="flex gap-4">
              <a href={links.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href={links.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="md:justify-self-end">
            <h4 className="text-lg font-semibold text-white mb-4">Hubungi Kami (WhatsApp)</h4>
            <div className="flex flex-col gap-3">
              <a 
                href={links.wa1} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 hover:bg-emerald-900/50 hover:border-emerald-600/50 transition-colors group"
              >
                <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">Narahubung 1</div>
                  <div className="text-xs text-slate-400">+62 812-3864-3382</div>
                </div>
              </a>
              
              <a 
                href={links.wa2} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 hover:bg-emerald-900/50 hover:border-emerald-600/50 transition-colors group"
              >
                <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">Narahubung 2</div>
                  <div className="text-xs text-slate-400">+62 813-3752-2119</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-slate-800/50 text-center text-sm text-slate-500 flex flex-col sm:flex-row justify-between items-center">
          <p>© 2026 Tim VICO Sekar Jepun Innovate. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Innovillage Progress Dashboard</p>
        </div>
      </footer>
    </div>
  );
}