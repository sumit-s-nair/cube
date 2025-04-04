export function createHero() {
  return `
    <section class="hero-section">
      <div class="hero-container">
        <!-- Left Content -->
        <div class="hero-content">
          <div class="hero-rating">
            <div class="rating">
                <img src="assets/icons/star.svg" alt="Star" class="star-icon" />
                <span class="rating-text">4.8 star rating</span>
            </div>
            <span class="rating-subtext">awarded the top adaptogen blend in the world</span>
          </div>
          <h1 class="hero-headline">Achieve your highest self.</h1>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-value">10x</span>
              <span class="stat-label">concentration</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">9</span>
              <span class="stat-label">powerful ingredients</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">1000</span>
              <span class="stat-unit">mg</span>
              <span class="stat-label">of Adaptogens per dose</span>
            </div>
          </div>
          <div class="hero-cta">
            <a href="#shop" class="shop-now-btn">
              Shop Now <img src="assets/icons/arrow-right.svg" alt="Arrow" />
            </a>
          </div>
        </div>

        <!-- Right Image Placeholder -->
        <div class="hero-image">
          <img src="assets/images/product-image.png" alt="Product Display" />
        </div>
      </div>
    </section>
  `;
}
