export function createNewsletterSection() {
  return `
    <section class="newsletter-section">
      <div class="newsletter-container">
        <h2 class="newsletter-headline">
          Sign up and receive up to <strong>15% OFF</strong> on your first order
        </h2>
        <p class="newsletter-description">
          Get weekly recipes, insights, and freebies when you sign up to our newsletter.
        </p>
        <form class="newsletter-form">
          <input
            type="email"
            class="newsletter-input"
            placeholder="Enter your email"
            required
          />
          <button type="submit" class="newsletter-btn">Subscribe</button>
        </form>
      </div>
    </section>
  `;
}
