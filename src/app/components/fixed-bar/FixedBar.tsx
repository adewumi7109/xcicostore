import React from 'react';
import { FaWhatsapp, FaArrowAltCircleUp } from 'react-icons/fa'; // Import icons from react-icons

function FixedBar() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Go to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-[4.6rem] right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50"
        aria-label="Go to Top"
      >
        <FaArrowAltCircleUp size={30} />
      </button>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+2348165543283"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all z-50"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
}

export default FixedBar;
