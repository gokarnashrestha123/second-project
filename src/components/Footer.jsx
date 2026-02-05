import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0B1E]   text-white">
      {/* CTA Section */}
      <div className="max-w-[1400px] mx-auto px-10 pt-32 pb-24">
        <h1 className="font-bold text-5xl md:text-6xl leading-tight">
          Ready to run buttery-smooth virtual sessions?
        </h1>
        <h2 className="font-light text-5xl md:text-6xl mt-4">
          It’s time to experience Butter for yourself!
        </h2>

        <button className="mt-16 w-full h-[120px] rounded-[48px] bg-white text-black font-bold text-2xl hover:scale-[1.02] transition-transform">
          Get started for free
        </button>
      </div>


      {/* Footer Content */}
      <div className="max-w-[1400px] mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Brand */}
        <div>
          <h3 className="font-bold text-xl mb-4">Butter</h3>
          <p className="text-white/60">
            The smoothest way to run engaging and structured virtual workshops.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-white/60">
            <li>Features</li>
            <li>Templates</li>
            <li>Pricing</li>
            <li>Updates</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-white/60">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-white/60">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
