// Função para mostrar alerta
function mostrarAlerta() {
    alert("Obrigado pelo seu interesse! Em breve entraremos em contato.");
  }
  
  // Função para animações ao scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-up, .zoom-in');
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add('appear');
      }
    });
  }
  
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
  

  // Carrossel de Depoimentos
document.addEventListener('DOMContentLoaded', function () {
  const testimonials = document.querySelectorAll('.testimonials p');
  let index = 0;

  function showNextTestimonial() {
      testimonials[index].style.display = 'none';
      index = (index + 1) % testimonials.length;
      testimonials[index].style.display = 'block';
  }

  // Mostra o próximo depoimento a cada 5 segundos
  setInterval(showNextTestimonial, 5000);
});