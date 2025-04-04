export function createHeader() {
  return `
      <header>
        <div class="top-bar">
          GET 25% OFF YOUR FIRST MONTH. FREE SHIPPING ON U.S ORDERS.
        </div>
        <div class="main-header">
          <!-- Logo always on left -->
          <div class="header-logo">
            <a href="#home"><img src="assets/images/logo.png" alt="Alcami Logo"></a>
          </div>
          
          <!-- Desktop navigation in center (hidden on mobile) -->
          <nav class="desktop-nav" id="desktop-nav">
            <ul class="nav-links" id="nav-links">
              <li><a href="#home">Home</a></li>
              <li class="dropdown">
                <a href="#shop" class="dropdown-toggle">Shop <img src="./assets/icons/dropdown-arrow.svg" alt="dropdown-arrow" /></a>
                <ul class="dropdown-menu">
                  <li><a href="#shop-all">Shop All</a></li>
                  <li><a href="#original">Alcami Elements Original</a></li>
                  <li><a href="#cacao">Alcami Elements Cacao</a></li>
                  <li><a href="#matcha">Alcami Elements Matcha</a></li>
                  <li><a href="#colostrum">Alcami Colostrum</a></li>
                  <li><a href="#shilajit">Shilajit</a></li>
                </ul>
              </li>
              <li><a href="#elements">Elements</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          
          <!-- Search bar (toggles visibility) -->
          <div class="search-bar" id="search-bar">
            <input type="text" placeholder="Search For Products..." />
          </div>
          
          <!-- Mobile search bar (between logo and icons) -->
          <div class="mobile-search-bar">
            <input type="text" placeholder="Search For Products..." />
          </div>
          
          <!-- Actions on the right -->
          <div class="header-actions">
            <button class="search-btn" id="search-toggle">
              <img src="assets/icons/search-icon.svg" alt="Search Icon" />
            </button>
            <a href="#try" class="try-btn desktop-only">
              <p>Try Alcami</p>
              <div>
                <img src="./assets/icons/arrow-right.svg" alt="arrow-right" />
              </div>
            </a>
            <button class="hamburger" id="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        
        <!-- Mobile navigation drawer -->
        <nav class="mobile-nav" id="mobile-nav">
          <div class="mobile-nav-container">
            <div class="mobile-nav-main" id="mobile-nav-main">
              <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li class="dropdown">
                  <a href="#" class="mobile-dropdown-toggle">Shop</a>
                </li>
                <li><a href="#elements">Elements</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
                <li class="mobile-try-btn">
                  <a href="#try" class="try-btn try-btn-mobile">
                    <div>
                        <p>Try Alcami</p>
                    </div>
                    <div>
                      <img src="./assets/icons/arrow-right.svg" alt="arrow-right" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="mobile-dropdown-menu" id="shop-dropdown">
              <button class="back-btn">
                <img src="./assets/icons/arrow-left.svg" alt="back" /> Back
              </button>
              <h3>Shop</h3>
              <ul>
                <li><a href="#shop-all">Shop All</a></li>
                <li><a href="#original">Alcami Elements Original</a></li>
                <li><a href="#cacao">Alcami Elements Cacao</a></li>
                <li><a href="#matcha">Alcami Elements Matcha</a></li>
                <li><a href="#colostrum">Alcami Colostrum</a></li>
                <li><a href="#shilajit">Shilajit</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    `;
}
