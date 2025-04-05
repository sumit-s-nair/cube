export function createFooter() {
  return `
    <footer class="footer-section">
      <div class="footer-container">
      <!-- Logo -->
      <div class="footer-logo"></div>
      
      <!-- Link columns -->
      <div class="footer-middle">
          <div class="footer-links">
            <div class="footer-links-column">
              <a href="#home">Home</a>
              <a href="#shop">Shop</a>
              <a href="#elements">Elements</a>
            </div>
            
            <div class="footer-links-column">
              <a href="#about">About Us</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div class="footer-links-column">
              <a href="#facebook"><img src="assets/icons/facebook-icon.svg" alt="Facebook" />Facebook</a>
              <a href="#instagram"><img src="assets/icons/instagram-icon.svg" alt="Instagram" />Instagram</a>
              <a href="#twitter"><img src="assets/icons/x-icon.svg" alt="X" />X</a>
            </div>
          </div>
          
          <!-- Newsletter -->
          <div class="footer-newsletter">
            <h3>Join our newsletter to stay up to date on features and releases.</h3>
            <form class="footer-newsletter-form">
            <input
            type="email"
            class="footer-newsletter-input"
            placeholder="Enter your email"
            required
            />
            <button type="submit" class="footer-newsletter-btn">Subscribe</button>
            </form>
            <p>
            By subscribing you agree to with our <a href="#privacy-policy">Privacy Policy</a> and provide consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <!-- Bottom Section -->
        <div class="footer-bottom">
          © 2024 Alcami Elements. All rights reserved.
        </div>
      </div>

    </footer>
  `;
}
