export function createTestimonialSection() {
  return `
    <section class="testimonial-section">
      <div class="testimonial-container">
        <div class="testimonial-heading-container">
          <h2 class="testimonial-heading">What our customers are saying</h2>
          <div class="testimonial-nav-buttons">
            <button class="prev-btn">
              <img src="assets/icons/arrow-left.svg" alt="Previous" />
            </button>
            <button class="next-btn">
              <img src="assets/icons/arrow-left.svg" alt="Next" />
            </button>
          </div>
        </div>
        <p class="testimonial-subheading">Real people, real reviews.</p>
        <div class="testimonial-slider">
          ${createTestimonials()}
        </div>
      </div>
    </section>
  `;
}

function createTestimonials() {
  // Sample data for testimonialss
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
        <img src="assets/images/avatar-image.jpeg" alt="${
          testimonial.name
        }" class="author-image" />
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
  $(document).ready(function () {
    $(".testimonial-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // Set up custom navigation
    $(".prev-btn").on("click", function () {
      $(".testimonial-slider").slick("slickPrev");
    });

    $(".next-btn").on("click", function () {
      $(".testimonial-slider").slick("slickNext");
    });
  });
}
