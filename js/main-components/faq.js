export function createFAQSection() {
  return `
    <section class="faq-section">
      <div class="faq-container">
        <div class="faq-left">
          <h2 class="faq-heading">F.A.Qs</h2>
          <p class="faq-description">
            If you have any question that isn’t answered in our FAQs, we’d love to hear from you!
          </p>
          <a href="#contact" class="faq-contact-btn">Get in touch →</a>
        </div>
        <div class="faq-right">
          <div class="faq-item">
            <button class="faq-question">If I subscribe can I cancel anytime? <span class="faq-toggle">+</span></button>
            <div class="faq-answer">
              <p>Yes, you can cancel your subscription anytime after the minimum commitment period.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">Can I take this at night? <span class="faq-toggle">+</span></button>
            <div class="faq-answer">
              <p>Absolutely! Alcami is caffeine-free and can be taken at any time of the day.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">Where are your ingredients sourced from? <span class="faq-toggle">+</span></button>
            <div class="faq-answer">
              <p>Our ingredients are sourced from trusted suppliers worldwide, ensuring the highest quality.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">Will this get me high? <span class="faq-toggle">+</span></button>
            <div class="faq-answer">
              <p>No, Alcami contains no psychoactive substances and is completely safe.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">Are you using fruiting bodies for your mushrooms? <span class="faq-toggle">+</span></button>
            <div class="faq-answer">
              <p>Yes, we use 100% fruiting bodies to ensure maximum potency and benefits.</p>
            </div>
          </div>
          <a href="#all-faqs" class="see-all-faqs">See All FAQ’s →</a>
        </div>
      </div>
    </section>
  `;
}

export function initFAQSection() {
  // Remove the DOMContentLoaded listener since this function is already called inside one
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    // Set initial state - all closed
    answer.style.maxHeight = "0";
    
    question.addEventListener('click', () => {
      // Check if this item is already open
      const isOpen = item.classList.contains('open');
      
      // Close all items first
      faqItems.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').style.maxHeight = "0";
      });
      
      // If the clicked item wasn't open, open it
      if (!isOpen) {
        item.classList.add('open');
        
        // Set max-height for smooth transition
        const answerHeight = answer.scrollHeight;
        answer.style.maxHeight = answerHeight + "px";
      }
    });
  });
}
