import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="fixed bottom-0 left-0 w-full bg-[#0f172a]/90 backdrop-blur text-white text-center text-sm py-4 z-40 border-t border-indigo-500/30">
        <p>
          Made with <span className="text-pink-400">♥</span> by{" "}
          <span className="text-pink-300 font-semibold">Akshay</span> © 2026
        </p>
      </footer>
    </div>
  );
}

export default Footer;
