document.addEventListener("DOMContentLoaded", (event) => {
   gsap.registerPlugin(ScrollTrigger)
   gsap.set('.portfolio__works-item-1', {
      x: '-150%'
   });
   gsap.to('.portfolio__works-item-1', {
      x: '0%',
      scrollTrigger: {
         trigger: '.parallax-container',
         start: 'top 100%',
         end: 'top 10%',
         scrub: true
      }
   });

   gsap.set('.portfolio__works-item-2', {
      x: '150%'
   });
   gsap.to('.portfolio__works-item-2', {
      x: '0%',
      scrollTrigger: {
         trigger: '.parallax-container',
         start: 'top 100%',
         end: 'top 10%',
         scrub: true
      }
   });
});