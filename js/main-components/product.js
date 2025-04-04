export function createProductSection() {
  const imagePaths = [
    "assets/images/product/main-product.png",
    "assets/images/product/product-1.png",
    "assets/images/product/product-2.png",
    "assets/images/product/product-3.png",
    "assets/images/product/product-4.png",
    "assets/images/product/product-5.png",
    "assets/images/product/product-6.png",
    "assets/images/product/product-7.png",
  ];

  // Dots for all images
  const dotsHTML = imagePaths
    .map((_, index) => `<span class="gallery-dot ${index === 0 ? "active" : ""}" data-index="${index}"></span>`)
    .join("");

  // Thumbnails (excluding the first main image)
  let thumbnailsHTML = '<div class="thumbnails-row">';
  imagePaths.slice(1).forEach((path, i) => {
    const actualIndex = i + 1;
    if (i > 0 && i % 4 === 0) {
      thumbnailsHTML += '</div><div class="thumbnails-row">';
    }
    thumbnailsHTML += `
      <img src="${path}" alt="Thumbnail ${actualIndex}" 
           class="${actualIndex === 1 ? "active" : ""}" 
           data-index="${actualIndex}" />
    `;
  });
  thumbnailsHTML += "</div>";

  return `
    <section class="product-section">
      <!-- Gallery -->
      <div class="product-gallery">
        <div class="product-main-image">
          <img src="${imagePaths[0]}" alt="Main Product Image" id="main-image" />
        </div>
        <div class="gallery-controls">
          <button class="gallery-prev" id="gallery-prev">←</button>
          <div class="gallery-dots">
            ${dotsHTML}
          </div>
          <button class="gallery-next" id="gallery-next">→</button>
        </div>
        <div class="product-thumbnails">
          ${thumbnailsHTML}
        </div>
      </div>

      <!-- Product Options -->
      <div class="product-options">
        <h2>Alcami Elements</h2>
        <div class="flavor-options">
          <h3>Choose a flavor</h3>
          <label><input type="radio" name="flavor" value="original" checked /> Original</label>
          <label><input type="radio" name="flavor" value="matcha" /> Matcha</label>
          <label><input type="radio" name="flavor" value="cacao" /> Cacao</label>
        </div>
        <div class="purchase-options">
          <h3>Choose purchase type</h3>
          <label><input type="radio" name="purchase" value="single" checked /> Single Kit Subscription</label>
          <label><input type="radio" name="purchase" value="double" /> Double Kit Subscription</label>
          <label><input type="radio" name="purchase" value="try" /> Try Once</label>
        </div>
        <button class="add-to-cart-btn" id="add-to-cart-btn">Add to Cart →</button>
      </div>
    </section>
  `;
}

export function initProductSection(imagePaths) {
  let currentIndex = 0;

  const mainImage = document.getElementById('main-image');
  const thumbnails = document.querySelectorAll('.product-thumbnails img');
  const dots = document.querySelectorAll('.gallery-dots .gallery-dot');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');
  const addToCartBtn = document.getElementById('add-to-cart-btn');

  // Set initial image
  mainImage.src = imagePaths[currentIndex];

  // Navigation buttons
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    updateCarousel();
  });

  // Dot click
  dots.forEach(dot => {
    dot.addEventListener('click', function () {
      currentIndex = parseInt(this.dataset.index, 10);
      updateCarousel();
    });
  });

  // Thumbnail click
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function () {
      currentIndex = parseInt(this.dataset.index, 10);
      updateCarousel();
    });
  });

  function updateCarousel() {
    mainImage.style.opacity = '0.5';
    setTimeout(() => {
      mainImage.src = imagePaths[currentIndex];
      mainImage.style.opacity = '1';
    }, 150);

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });

    thumbnails.forEach((thumb) => {
      const actualIndex = parseInt(thumb.dataset.index, 10);
      thumb.classList.toggle('active', actualIndex === currentIndex);
    });
  }

  // Flavor + Purchase option logic
  function updateAddToCartLink() {
    const selectedFlavor = document.querySelector('input[name="flavor"]:checked').value;
    const selectedPurchase = document.querySelector('input[name="purchase"]:checked').value;

    const prices = {
      single: { original: 37, matcha: 37, cacao: 37 },
      double: { original: 68, matcha: 68, cacao: 68 },
      try: { original: 46, matcha: 46, cacao: 46 },
    };

    const price = prices[selectedPurchase][selectedFlavor];
    addToCartBtn.textContent = `Add to Cart ($${price}) →`;
    addToCartBtn.onclick = () => {
      window.location.href = `https://shop.alcamielements.com/cart/add?product=${selectedFlavor}-${selectedPurchase}&price=${price}`;
    };
  }

  // Attach radio change events
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', updateAddToCartLink);
  });

  updateAddToCartLink(); // initialize
}
