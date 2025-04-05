export function createTestimonialSection() {
  return `
    <section class="testimonial-section">
      <div class="testimonial-container">
        <div class="testimonial-heading-container">
          <h2 class="testimonial-heading">What our customers are saying</h2>
          <div class="testimonial-nav-buttons">
            <button class="testimonial-prev-btn">
              <img src="assets/icons/arrow-left.svg" alt="Previous" />
            </button>
            <button class="testimonial-next-btn">
              <img src="assets/icons/arrow-left.svg" class="custom-next" alt="Next" />
            </button>
          </div>
        </div>
        <p class="testimonial-subheading">Real people, real reviews.</p>
        <div class="testimonial-slick-slider">
          ${createTestimonials()}
        </div>
      </div>
    </section>
  `;
}

function createTestimonials() {
  // ...existing code...
  const testimonials = [
    {
      text: "Alcami has completely transformed my morning routine. The mental clarity and energy I get is unlike anything else I've tried.",
      name: "Sarah Johnson",
      position: "Marketing Director",
    },
    {
      text: "I've tried many adaptogens before, but Alcami stands out with its potency. The effects are noticeable from day one.",
      name: "Michael Chen",
      position: "Software Engineer",
    },
    {
      text: "As someone who has struggled with focus, Alcami has been a game-changer. I'm more productive than ever.",
      name: "Emily Rodriguez",
      position: "Creative Director",
    },
    {
      text: "The taste is incredible and the benefits are real. My energy is sustained throughout the day without any crash.",
      name: "David Kim",
      position: "Fitness Trainer",
    },
    {
      text: "I appreciate that Alcami contains no caffeine. It gives me energy without the jitters or afternoon crash.",
      name: "Lisa Williams",
      position: "Teacher",
    },
    {
      text: "Since starting Alcami, I've noticed improved skin health and digestion. It's more than just mental benefits.",
      name: "James Taylor",
      position: "Healthcare Professional",
    },
    {
      text: "The quality of ingredients in Alcami is unmatched. You can truly taste and feel the difference.",
      name: "Olivia Brown",
      position: "Nutritionist",
    },
    {
      text: "As a busy parent, I need sustainable energy. Alcami has been my secret weapon for getting through long days.",
      name: "Robert Garcia",
      position: "Business Owner",
    },
    {
      text: "My mood has been noticeably better since I started using Alcami. It's subtle but significant.",
      name: "Jennifer Lee",
      position: "Project Manager",
    },
    {
      text: "I love that I can mix Alcami into any drink. It's become a versatile part of my wellness routine.",
      name: "Thomas Wilson",
      position: "Architect",
    },
    {
      text: "The difference in concentration is remarkable. I can focus on tasks for much longer periods now.",
      name: "Nicole Martinez",
      position: "Researcher",
    },
    {
      text: "After trying several mushroom blends, Alcami is by far the most effective. The blend is perfectly balanced.",
      name: "Andrew Davis",
      position: "Tech Executive",
    },
  ];

  return testimonials
    .map(
      (testimonial) => `
        <div class="testimonial-card">
          <div class="testimonial-rating">
            ${'<img src="assets/icons/star-green.svg" alt="Star" />'.repeat(5)}
          </div>
          <p class="testimonial-text">
            "${testimonial.text}"
          </p>
          <div class="testimonial-author">
            <img src="assets/images/avatar-image.jpeg" alt="${testimonial.name}" class="author-image" />
            <div class="author-info">
              <p class="author-name">${testimonial.name}</p>
              <p class="author-position">${testimonial.position}</p>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

export function initTestimonialSection() {
  // Use jQuery's document ready instead of vanilla JS
  $(document).ready(function() {
    console.log("Document ready, initializing testimonial slider");
    
    // Use jQuery to select elements
    const $testimonialsContainer = $('.testimonial-section');
    if ($testimonialsContainer.length === 0) {
      console.error("Testimonial section not found");
      return;
    }
    
    const $slider = $testimonialsContainer.find('.testimonial-slick-slider');
    const $prevBtn = $testimonialsContainer.find('.testimonial-prev-btn');
    const $nextBtn = $testimonialsContainer.find('.testimonial-next-btn');
    
    // Check if slider is already initialized
    if ($slider.hasClass('slick-initialized')) {
      console.log("Testimonial slider already initialized");
      return;
    }
    
    // Initialize slick carousel using jQuery
    console.log("Initializing Slick slider");
    try {
      $slider.slick({
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $prevBtn,
        nextArrow: $nextBtn,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      
      console.log("Testimonial slider initialized successfully");
    } catch (error) {
      console.error("Error initializing Slick slider:", error);
      // If Slick fails, we can still use our fallback
      fallbackToCustomCarousel($slider[0], $prevBtn[0], $nextBtn[0]);
    }
  });
}

// Fallback to custom carousel if Slick fails or is not available
function fallbackToCustomCarousel(slider, prevBtn, nextBtn) {
  console.log("Using fallback carousel for testimonials");
  let initialized = false;
  
  if (!slider) {
    console.error("Testimonial slider element not found");
    return;
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  // Settings
  let currentIndex = 0;
  let slidesToShow = 3;
  let autoPlayInterval;
  const autoPlaySpeed = 5000;
  let slides;

  function updateSlidesToShow() {
    const width = window.innerWidth;
    if (width < 768) {
      slidesToShow = 1;
    } else if (width < 1024) {
      slidesToShow = 2;
    } else {
      slidesToShow = 3;
    }
  }

  function updateCarousel() {
    if (!slides || slides.length === 0) return;
    
    // Each "page" or "step" in the carousel
    const stepSize = 100 / slidesToShow;
    
    // Calculate maximum index to prevent empty slides
    const maxIndex = Math.max(0, slides.length - slidesToShow);
    
    // Ensure currentIndex is within valid range
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    
    slider.style.transform = `translateX(-${currentIndex * stepSize}%)`;
    
    // Set consistent card width based on slidesToShow
    slides.forEach(slide => {
      slide.style.width = `calc(${100 / slidesToShow}% - 20px)`;
      slide.style.margin = '0 10px';
    });
  }

  function showNext() {
    if (!slides || slides.length === 0) return;
    const maxIndex = Math.max(0, slides.length - slidesToShow);
    
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0; // loop back to start
    }
    updateCarousel();
  }

  function showPrev() {
    if (!slides || slides.length === 0) return;
    const maxIndex = Math.max(0, slides.length - slidesToShow);
    
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = maxIndex; // loop to end
    }
    updateCarousel();
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(showNext, autoPlaySpeed);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  function initCustomCarousel() {
    if (!slider) return;
    slides = Array.from(slider.children);
    if (slides.length === 0) return;

    // Basic styling to allow horizontal sliding
    slider.style.display = 'flex';
    slider.style.transition = 'transform 0.3s ease';
    slider.style.width = '100%';
    slider.style.overflow = 'hidden';
    
    updateSlidesToShow();
    updateCarousel();
    startAutoPlay();

    // Listen for nav button clicks
    if (prevBtn) prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showPrev();
      stopAutoPlay();
      setTimeout(startAutoPlay, 10000);
    });
    
    if (nextBtn) nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showNext();
      stopAutoPlay();
      setTimeout(startAutoPlay, 10000);
    });

    // Pause on hover
    slider.addEventListener("mouseenter", stopAutoPlay);
    slider.addEventListener("mouseleave", startAutoPlay);

    // Update on resize
    window.addEventListener("resize", () => {
      const oldSlidesToShow = slidesToShow;
      updateSlidesToShow();
      if (oldSlidesToShow !== slidesToShow) {
        currentIndex = 0;
      }
      updateCarousel();
    });
  }

  function initCarouselIfInView() {
    if (!initialized && slider && isInViewport(slider)) {
      initCustomCarousel();
      initialized = true;
    }
  }

  // Check carousel position on scroll/resize/load
  window.addEventListener("load", initCarouselIfInView);
  window.addEventListener("scroll", initCarouselIfInView);
  window.addEventListener("resize", initCarouselIfInView);
  initCarouselIfInView();
}