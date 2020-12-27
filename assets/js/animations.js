import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function pinnedLandingTimeline() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.header__feature-text',
      start: 'top 25%',
      end: '+=80%',
      scrub: true,
      pin: true,
      pinSpacing: true,
      // markers: true,
    },
  })
  tl.set('.gsap-logo', {
    transformOrigin: '0% 50%',
  })
  tl.from('.gsap-logo', {
    y: '80vh',
    scale: 2.8,
    duration: 3,
  })
  tl.from(
    '.gsap-fade',
    {
      autoAlpha: 0,
      duration: 3,
    },
    '<'
  )
  tl.from(
    '.header__feature-text',
    {
      opacity: 0,
      y: '37vh',
      duration: 2,
    },
    '<1'
  )

  return tl
}

// LEGACY ANIMATIONS - BREAKS ON WINDOW RESIZE
// gsap.from('.gsap-logo', {
//   scrollTrigger: {
//     markers: true,
//     trigger: '.nav',
//     scrub: true,
//     pin: '.gsap-container',
//     pinSpacing: true,
//     start: 'top top',
//     end: '+=1000',
//   },
//   onStart: this.onResize(),
//   x: () => (this.windowSize >= 1024 ? '9vw' : '23vw'),
//   y: () => (this.windowSize >= 1024 ? '76vh' : '83vh'),
//   scale: 3,
// })
// gsap.from('.gsap-fade', {
//   scrollTrigger: {
//     trigger: '.nav',
//     scrub: true,
//     start: 'top top',
//     end: '+=1000',
//   },
//   autoAlpha: 0,
// })
// gsap.from('.gsap-feature-text', {
//   scrollTrigger: {
//     trigger: '.header',
//     // markers: true,
//     scrub: true,
//     start: 'top 22%',
//     end: '+=350',
//   },
//   opacity: 0.1,
//   y: '37vh',
// })
