export function createMorningRitual() {
  return `
    <section class="morning-ritual-section">
      <div class="morning-ritual-container">
        <!-- Left Content -->
        <div class="morning-ritual-content">
          <h1 class="morning-ritual-headline">Your morning ritual,<br/> made to awaken your mind.</h1>
          <p class="morning-ritual-description">
            Transform your mornings with a simple, potent, and powerful ritual that fuels your day.
          </p>
          <div class="morning-ritual-steps">
            <div class="ritual-step">
              <span class="step-number">1</span>
              <div class="step-content">
                <h3 class="step-title">Prep your favorite drink</h3>
                <p class="step-description">
                  Start your morning with your favorite beverage, whether it's a nutrient-packed smoothie or a warm cup of tea.
                </p>
              </div>
            </div>
            <div class="ritual-step">
              <span class="step-number">2</span>
              <div class="step-content">
                <h3 class="step-title">Take a scoop</h3>
                <p class="step-description">
                  Simply add one potent scoop packed with x10 the potency to boost energy, enhance clarity, and support wellness all day.
                </p>
              </div>
            </div>
            <div class="ritual-step">
              <span class="step-number">3</span>
              <div class="step-content">
                <h3 class="step-title">Customize and mix</h3>
                <p class="step-description">
                  Personalize your morning drink. Stir well for a perfectly blended, nutrient-rich beverage that awakens your mind and prepares you for the day.
                </p>
              </div>
            </div>
          </div>
          <a href="#learn-more" class="learn-more-btn">See how people are using Alcami →</a>
        </div>

        <!-- Right Video Player -->
        <div class="morning-ritual-video">
          <div class="video-thumbnail">
            <img src="assets/images/video-thumbnail.png" alt="Morning Ritual Video" />
            <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" class="play-button">
              <img src="assets/icons/play.svg" alt="Play Video" />
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
