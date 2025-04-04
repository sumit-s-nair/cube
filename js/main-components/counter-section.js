export function createCounterSection() {
  return `
    <section class="counter-section">
      <div class="counter-container">
        <div class="counter-item">
          <p class="counter-heading"><span class="counter-number" data-target="84">0</span>%</p>
          <p class="counter-description">Reported increased energy throughout their day</p>
        </div>
        <div class="counter-item">
          <p class="counter-heading"><span class="counter-number" data-target="78">0</span>%</p>
          <p class="counter-description">Reported feeling more focused</p>
        </div>
        <div class="counter-item">
          <p class="counter-heading"><span class="counter-number" data-target="89">0</span>%</p>
          <p class="counter-description">Reported a sense of calmness & steady mood</p>
        </div>
        <div class="counter-item">
          <p class="counter-heading"><span class="counter-number" data-target="90">0</span>%</p>
          <p class="counter-description">Reported feeling an overall increased wellness in their gut, skin, hair, and physical health</p>
        </div>
      </div>
    </section>
  `;
}

export function initCounterSection() {
  const counters = document.querySelectorAll(".counter-number");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute("data-target");
          const increment = target / 150;

          let current = 0;
          const updateCounter = () => {
            current += increment;
            if (current < target) {
              counter.textContent = Math.ceil(current);
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          };

          updateCounter();
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}
