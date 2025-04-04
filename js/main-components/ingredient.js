// Ingredients Section Logic

document.addEventListener("DOMContentLoaded", () => {
  const ingredientsSection = createIngredients();
  const mainContainer = document.querySelector(".main-container");
  if (mainContainer) {
    mainContainer.insertAdjacentHTML('beforeend', ingredientsSection);
  }
});

export function createIngredients() {
  return `
    <!-- Title section -->
    <div class="ingredients-title-container">
      <span class="ingredients-main-title">
        Incredible Taste and Effects You Can Feel
      </span>
    </div>

    <section class="ingredients-section">
      <div class="ingredients-container">
        <!-- Left Image -->
        <div class="ingredients-image">
          <img src="assets/images/ingredients-image.png" alt="Ingredients Collage" />
        </div>

        <!-- Right Content -->
        <div class="ingredients-content">
          <h2 class="ingredients-title">All of the Best Ingredients, None of the Compromise</h2>
          <p class="ingredients-subtitle">
            <span class="highlight">Alcami uses</span> 
            <span class="highlight-strong">x10 potency</span> 
            in every serving, formulated for maximum absorption to ensure your body gets the most out of every scoop.
          </p>
          
          <div class="ingredients-cta">
            <a href="#ingredients" class="view-ingredients-btn">
              View full ingredients <img src="assets/icons/arrow-right.svg" alt="Arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}