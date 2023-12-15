import './globals.css'

const textAnimation = () => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
          } else {
              entry.target.classList.remove('animate');
          }
      });
  }, {
      threshold: 0.5 // Adjust the threshold as needed
  });

  const textElement = document.querySelector('.text-3d');
  if (textElement) {
      observer.observe(textElement);
  } else {
      console.error('Element not found');
  }
  return observer; 
};

export default textAnimation;
