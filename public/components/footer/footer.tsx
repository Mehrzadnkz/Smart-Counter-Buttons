
import React, { useEffect } from "react";
const Footer: React.FC = () => {
  
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    const html = document.documentElement;
    html.classList.toggle("dark", theme === "dark");
    html.style.colorScheme = theme;
  }, []);

  return (
    <footer className={`backdrop-blur-md bg-black/40 dark:bg-black/60 border-t border-white/10 text-gray-300 py-6 text-sm w-full mt-auto flex flex-col justify-between text-center`}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        <p>© {new Date().getFullYear()} Dashboard Pro - مدیریت هوشمند سیستم 💼</p>
        <div className="flex gap-5 text-gray-400 text-xl">
          <a href="#" className="hover:text-blue-400"></a>
          <a href="#" className="hover:text-blue-500"></a>
          <a href="#" className="hover:text-pink-500"></a>
        </div>
      </div>
      <p className="text-gray-400 text-xs mt-4">نسخه 3.2.4 — همه‌ی سرویس‌ها فعال ✅</p>
    </footer>
  );
};
export default Footer;
