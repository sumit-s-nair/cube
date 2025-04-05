export function createFoundersSection() {
  return `
    <section class="founders-section">
      <div class="founders-container">
        <!-- Video Section -->
        <div class="founders-video">
          <div class="video-thumbnail">
            <img src="assets/images/video-thumbnail-1.png" alt="Founders Video Thumbnail" />
            <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" class="play-button">
              <img src="assets/icons/play.svg" alt="Play Video" />
            </a>
          </div>
        </div>
        <!-- Text Section -->
        <div class="founders-content">
          <div class="founders-text">
            <h2 class="founders-heading">From the Founders</h2>
            <a href="#about-us" class="about-us-btn">About Us →</a>
          </div>
            <p class="founders-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod.
            </p>
        </div>
      </div>
    </section>
  `;
}
