document.getElementById('header').innerHTML = `
<div>
  <!-- Navigation -->
  <nav class="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        
        <!-- Logo -->
        
        <a href="../landingpage/index.html">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <i class="fas fa-chart-line text-white text-sm"></i>
          </div>
          <span class="text-xl font-bold text-slate-900">FinTrackAI</span>
        </div>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="../help,feature,privacy/feature.html" class="text-slate-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="../login_insights_pricing_term/pricing.html" class="text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#about" class="text-slate-600 hover:text-blue-600 transition-colors">About</a>
          <button id="desktop-get-started" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium">Get Started</button>
        </div>

        <!-- Mobile Hamburger -->
        <button id="hamburger" class="md:hidden text-slate-700 hover:text-blue-600 text-xl focus:outline-none">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-slate-200 px-4 py-4">
      <div class="flex flex-col space-y-3">
        <a href="../help,feature,privacy/feature.html" class="block py-2 text-slate-600 hover:text-blue-600 transition-colors">Features</a>
        <a href="../login_insights_pricing_term/pricing.html" class="block py-2 text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
        <a href="#about" class="block py-2 text-slate-600 hover:text-blue-600 transition-colors">About</a>
        <button id="mobile-get-started" class="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium transition-colors">Get Started</button>
      </div>
    </div>
  </nav>
</div>
`;

// Add functionality after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("hidden");
      
      // Toggle hamburger icon
      const icon = hamburger.querySelector("i");
      if (mobileMenu.classList.contains("hidden")) {
        icon.className = "fas fa-bars";
      } else {
        icon.className = "fas fa-times";
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add("hidden");
        const icon = hamburger.querySelector("i");
        icon.className = "fas fa-bars";
      }
    });
  }

  // Get Started button functionality
  const desktopBtn = document.getElementById("desktop-get-started");
  const mobileBtn = document.getElementById("mobile-get-started");
  const url = "../login_insights_pricing_term/login.html";

  if (desktopBtn) {
    desktopBtn.onclick = () => window.open(url, "_blank");
  }
  if (mobileBtn) {
    mobileBtn.onclick = () => window.open(url, "_blank");
  }
});
