function createFlavorOptions() {
  return `
    <div class="product-flavors">
      <label class="flavor-option original">
        <input type="radio" name="flavor" value="original" checked />
        <div class="flavor-content">
          <div class="radio-circle">
            <div class="radio-inner"></div>
          </div>
          <span class="flavor-name">Original</span>
          <img src="assets/images/product/flavors/original.png" alt="Original Flavor" class="flavor-image" />
          <div class="best-seller-tag">
            <span>Best-Seller</span>
          </div>
        </div>
      </label>
      
      <label class="flavor-option">
        <input type="radio" name="flavor" value="matcha" />
        <div class="flavor-content">
          <div class="radio-circle">
            <div class="radio-inner"></div>
          </div>
          <span class="flavor-name">Matcha</span>
          <img src="assets/images/product/flavors/matcha.png" alt="Matcha Flavor" class="flavor-image" />
        </div>
      </label>
      
      <label class="flavor-option">
        <input type="radio" name="flavor" value="cacao" />
        <div class="flavor-content">
          <div class="radio-circle">
            <div class="radio-inner"></div>
          </div>
          <span class="flavor-name">Cacao</span>
          <img src="assets/images/product/flavors/cacao.png" alt="Cacao Flavor" class="flavor-image" />
        </div>
      </label>
    </div>
  `;
}

function createPricingOptions() {
  return `
    <div class="pricing-options">
      <label class="pricing-option pricing-option-popular">
        <input type="radio" name="purchase-type" value="single-subscription" checked />
        <div class="pricing-content">
          <div class="popular-tag-container">
            <span class="most-popular-tag">Most Popular</span>
          </div>
          <div class="pricing-radio">
            <div class="pricing-radio-inner"></div>
          </div>
          <div class="pricing-info">
            <span class="pricing-label">Single Kit Subscription</span>
            <div class="pricing-value-container">
              <span class="pricing-value">$37 USD</span>
              <del>$46</del>
            </div>
          </div>
          
          <div class="subscription-details">
            <p class="subscription-included">What's Included:</p>
            <div class="subscription-products">
              <div class="monthly-product product-box">
                <div class="monthly-product-title">Every 30 Days</div>
                <img src="assets/images/product/flavors/original.png" alt="Monthly Product" />
              </div>
              <div class="one-time-products product-box">
                <div class="one-time-label">One Time (Free)</div>
                <img src="assets/images/product/one-time.png" alt="One Time Product" />
              </div>
            </div>
            <div class="subscription-item">
              <div class="subscription-icon">
                <img src="assets/icons/check.svg" alt="Check" />
              </div>
              <span class="subscription-text">30 servings shipped monthly</span>
            </div>
            <div class="subscription-item">
              <div class="subscription-icon">
                <img src="assets/icons/check.svg" alt="Check" />
              </div>
              <span class="subscription-text"><span class="highlight">Free</span> Golden Kit Gold bottle + spoon (42$ value)</span>
            </div>
            <div class="subscription-item">
              <div class="subscription-icon">
                <img src="assets/icons/check.svg" alt="Check" />
              </div>
              <span class="subscription-text"><span class="highlight">Free</span> 60 days supply of Alcami Shilajit ($78 value)</span>
            </div>
            <div class="subscription-item">
              <div class="subscription-icon">
                <img src="assets/icons/check.svg" alt="Check" />
              </div>
              <span class="subscription-text"><span class="highlight">50% OFF</span> Shipping (Over $7-$10 in savings)</span>
            </div>
            <div class="subscription-item">
              <div class="subscription-icon">
                <img src="assets/icons/check.svg" alt="Check" />
              </div>
              <span class="subscription-text">Pause or Cancel Anytime after 3 months minimum</span>
            </div>
            <div class="subscription-item">
              <div class="subscription-icon">
                <img src="assets/icons/check.svg" alt="Check" />
              </div>
              <span class="subscription-text">90 Day Money Back Guarantee*</span>
            </div>
          </div>
        </div>
      </label>
      
      <label class="pricing-option">
        <input type="radio" name="purchase-type" value="double-subscription" />
        <div class="pricing-content">
          <div class="pricing-radio">
            <div class="pricing-radio-inner"></div>
          </div>
          <div class="pricing-info">
            <span class="pricing-label">Double Kit Subscription</span>
            <div class="pricing-value-container">
              <span class="pricing-value">$68 USD</span>
              <del>$83</del>
            </div>
          </div>
        </div>
      </label>
      
      <label class="pricing-option">
        <input type="radio" name="purchase-type" value="one-time" />
        <div class="pricing-content">
          <div class="pricing-radio">
            <div class="pricing-radio-inner"></div>
          </div>
          <div class="pricing-info">
            <span class="pricing-label">Try Once</span>
            <div class="pricing-value-container">
              <span class="pricing-value">$46 USD</span>
            </div>
          </div>
        </div>
      </label>
    </div>
  `;
}

export function createProductSection() {
  return `
    <section class="product-section">
      <div class="product-container">
        <!-- Left Content - Product Gallery -->
        <div class="product-gallery">
          <div class="product-main-slider">
            <div><img src="assets/images/product/main-product.png" alt="Alcami Elements" data-lazy="assets/images/product/main-product.png" /></div>
            <div><img src="assets/images/product/product-1.png" alt="Alcami Elements Side" data-lazy="assets/images/product/product-1.png" /></div>
            <div><img src="assets/images/product/product-2.png" alt="Alcami Elements Top" data-lazy="assets/images/product/product-2.png" /></div>
            <div><img src="assets/images/product/product-3.png" alt="Alcami Elements Ingredients" data-lazy="assets/images/product/product-3.png" /></div>
            <div><img src="assets/images/product/product-4.png" alt="Alcami Elements Packaging" data-lazy="assets/images/product/product-4.png" /></div>
            <div><img src="assets/images/product/product-5.png" alt="Alcami Elements Usage" data-lazy="assets/images/product/product-5.png" /></div>
            <div><img src="assets/images/product/product-6.png" alt="Alcami Elements Bottle" data-lazy="assets/images/product/product-6.png" /></div>
            <div><img src="assets/images/product/product-7.png" alt="Alcami Elements Complete" data-lazy="assets/images/product/product-7.png" /></div>
          </div>
          <div class="product-heading-container">
            <div class="product-nav-buttons">
              <button class="custom-prev-product">
                <img src="assets/icons/arrow-left.svg" alt="Previous" />
              </button>
              <div class="product-dots"></div>
              <button class="custom-next-product">
                <img src="assets/icons/arrow-left.svg" alt="Next" />
              </button>
            </div>
          </div>
          <div class="product-thumbnails-grid">
            ${createThumbnails()}
          </div>
        </div>

        <!-- Right Content - Product Details -->
        <div class="product-details">
          <h2 class="product-title">Alcami Elements</h2>
          <div class="product-rating">
            <span class="rating-stars">${'<img src="assets/icons/star.svg" alt="Star" />'.repeat(
              5
            )}</span>
            <span class="rating-text">4.7 (999+ reviews)</span>
          </div>
          <p class="product-description">
            Discover the ancient wisdom supported by modern science, all within the synergy of Alcami Elements. Designed for those who aspire to elevate every facet of life with awareness and intention.
          </p>
          
          <h3 class="product-options-title">Choose a flavor</h3>
          ${createFlavorOptions()}
          
          <div class="product-pricing">
            ${createPricingOptions()}
          </div>
          
          <a href="#" class="add-to-cart-btn" id="add-to-cart">Add to Cart →</a>
        </div>
      </div>
    </section>
  `;
}

function createThumbnails() {
  const thumbnails = [
    "assets/images/product/main-product.png",
    "assets/images/product/product-1.png",
    "assets/images/product/product-2.png",
    "assets/images/product/product-3.png",
    "assets/images/product/product-4.png",
    "assets/images/product/product-5.png",
    "assets/images/product/product-6.png",
    "assets/images/product/product-7.png",
  ];

  return thumbnails
    .map(
      (src, index) =>
        `<div class="product-thumbnail ${
          index === 0 ? "active" : ""
        }" data-slide="${index}">
      <img src="${src}" alt="Thumbnail ${index + 1}" />
    </div>`
    )
    .join("");
}

export function initProductSection(imagePaths) {
  $(document).ready(function () {
    // Preload first image for immediate display
    const firstImage = new Image();
    firstImage.src = "assets/images/product/main-product.png";
    
    // Force images to load before slider initialization (add timestamp to prevent caching)
    $('.product-main-slider img').each(function() {
      $(this).attr('src', $(this).attr('src') + '?v=' + new Date().getTime());
    });

    // Destroy any existing slider
    if ($('.product-main-slider').hasClass('slick-initialized')) {
      $('.product-main-slider').slick('unslick');
    }
    
    // Initialize slider with working configuration
    $('.product-main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: true,
      appendDots: $(".product-dots"),
      autoplay: false,
      infinite: true,
      adaptiveHeight: false,
      cssEase: "linear",
      speed: 300,
      waitForAnimate: false,
      lazyLoad: 'ondemand' // Try lazy loading with ondemand strategy
    });

    // Force slider refresh after initialization
    setTimeout(function() {
      $('.product-main-slider').slick('refresh');
    }, 200);

    // Custom navigation handlers
    $(".custom-prev-product").on("click", function () {
      $('.product-main-slider').slick('slickPrev');
    });

    $(".custom-next-product").on("click", function () {
      $('.product-main-slider').slick('slickNext');
    });

    // Thumbnail click functionality
    $(".product-thumbnail").on("click", function () {
      const slideIndex = $(this).data("slide");
      $('.product-main-slider').slick("slickGoTo", slideIndex);
      
      $(".product-thumbnail").removeClass("active");
      $(this).addClass("active");
    });

    // Keep thumbnails in sync with slider
    $(".product-main-slider").on(
      "afterChange",
      function (event, slick, currentSlide) {
        $(".product-thumbnail").removeClass("active");
        $(`.product-thumbnail[data-slide="${currentSlide}"]`).addClass("active");
      }
    );

    // Fix width issues
    $(window).on("load resize", function () {
      setTimeout(function () {
        $(".product-main-slider .slick-list, .product-main-slider .slick-track").css({
          width: "100%",
        });
      }, 100);
    });

    // Update Add to Cart link based on radio selections
    updateAddToCartLink();

    // Add event listeners for radio button changes
    $('input[name="flavor"], input[name="purchase-type"]').change(function () {
      updateAddToCartLink();
    });
  });
}

// Function to update the Add to Cart link based on selections
function updateAddToCartLink() {
  const flavor = $('input[name="flavor"]:checked').val();
  const purchaseType = $('input[name="purchase-type"]:checked').val();

  // Create cart link based on selections
  let cartLink = "https://example.com/cart?product=alcami-elements";

  if (flavor) {
    cartLink += `&flavor=${flavor}`;
  }

  if (purchaseType) {
    cartLink += `&type=${purchaseType}`;
  }

  // Update the href attribute of the Add to Cart button
  $("#add-to-cart").attr("href", cartLink);
}
