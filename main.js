const { gsap, ScrollTrigger } = window;
gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════
// GOLDEN PARTICLES CANVAS
// ═══════════════════════════════════════
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const count = 60;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 0.5,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: -Math.random() * 1 - 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      hue: Math.random() * 30 + 30, // golden range
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.opacity += (Math.random() - 0.5) * 0.02;
      p.opacity = Math.max(0.05, Math.min(0.6, p.opacity));

      if (p.y < -10) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${p.opacity})`;
      ctx.fill();

      // Glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${p.opacity * 0.15})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ═══════════════════════════════════════
// PRELOADER ANIMATION
// ═══════════════════════════════════════
function initPreloader() {
  const tl = gsap.timeline({
    onComplete: () => {
      initHeroAnimations();
    }
  });

  tl.to('.preloader-brand', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
  })
  .to('.preloader-sub', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power3.out',
  }, '-=0.3')
  .to('.preloader-bar-fill', {
    width: '100%',
    duration: 1.5,
    ease: 'power2.inOut',
  }, '-=0.2')
  .to('#preloader', {
    opacity: 0,
    duration: 0.6,
    ease: 'power2.in',
    onComplete: () => {
      document.getElementById('preloader').style.display = 'none';
    }
  }, '+=0.3');
}

// ═══════════════════════════════════════
// HERO SECTION ANIMATIONS
// ═══════════════════════════════════════
function initHeroAnimations() {
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // 1. Brand reveal
  heroTl.to('#hero-brand', {
    opacity: 1,
    y: 0,
    duration: 0.8,
  })

  // 2. Curtains open (the anamorphic reveal!)
  .to('#curtain-left', {
    scaleX: 0,
    duration: 1.2,
    ease: 'power2.inOut',
  }, '+=0.3')
  .to('#curtain-right', {
    scaleX: 0,
    duration: 1.2,
    ease: 'power2.inOut',
  }, '<')

  // 3. Scene image reveal with subtle zoom
  .to('.product-scene-img', {
    scale: 1,
    duration: 1.5,
    ease: 'power2.out',
  }, '-=0.6')

  // 4. Breakout product pops OUT of the box!
  .to('#breakout-product', {
    scale: 1,
    opacity: 1,
    y: -20,
    duration: 1,
    ease: 'back.out(1.7)',
    onComplete: () => {
      // Start the float animation
      const img = document.querySelector('.breakout-img');
      if (img) img.style.animationPlayState = 'running';
    }
  }, '-=0.5')

  // 5. Floating gulab jamuns pop out
  .to('.jamun', {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    stagger: {
      each: 0.12,
      from: 'random',
    },
    ease: 'back.out(2)',
  }, '-=0.4')

  // 6. Product name text reveal
  .to('.hero-product-name .line-inner', {
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  }, '-=0.3')

  // 7. Tagline
  .to('#hero-tagline', {
    opacity: 1,
    duration: 0.6,
  }, '-=0.2')
  .to('.tagline-line', {
    width: '120px',
    duration: 0.8,
    ease: 'power2.inOut',
  }, '-=0.3')

  // 8. Scroll indicator
  .to('#scroll-indicator', {
    opacity: 1,
    duration: 0.5,
  }, '-=0.2');

  // Continuous floating animation for jamuns
  gsap.to('.jamun-1', {
    y: -20, x: 5, rotation: 10,
    duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5
  });
  gsap.to('.jamun-2', {
    y: -15, x: -8, rotation: -8,
    duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.8
  });
  gsap.to('.jamun-3', {
    y: -25, x: 10, rotation: 12,
    duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.2
  });
  gsap.to('.jamun-4', {
    y: -18, x: -6, rotation: -15,
    duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1
  });
  gsap.to('.jamun-5', {
    y: -22, x: 8, rotation: 6,
    duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.3
  });

  // Subtle mouse parallax on the box
  initBoxParallax();
}

// ═══════════════════════════════════════
// MOUSE PARALLAX ON ANAMORPHIC BOX
// ═══════════════════════════════════════
function initBoxParallax() {
  const box = document.getElementById('anamorphic-box');
  if (!box) return;

  document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (e.clientX - centerX) / centerX;
    const moveY = (e.clientY - centerY) / centerY;

    gsap.to('.anamorphic-box', {
      rotateY: moveX * 5,
      rotateX: -moveY * 3,
      duration: 0.8,
      ease: 'power2.out',
    });

    // Parallax on floating jamuns
    gsap.to('.floating-jamuns', {
      x: moveX * 15,
      y: moveY * 10,
      duration: 1,
      ease: 'power2.out',
    });

    // Parallax on breakout product
    gsap.to('#breakout-product', {
      x: moveX * -10,
      y: moveY * -8,
      duration: 0.8,
      ease: 'power2.out',
    });
  });
}

// ═══════════════════════════════════════
// SHOWCASE SECTION — SCROLL ANIMATIONS
// ═══════════════════════════════════════
function initShowcaseAnimations() {
  // Label
  gsap.to('#showcase-label', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: '#showcase',
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    }
  });

  // Title
  gsap.to('#showcase-title', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '#showcase',
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    }
  });

  // Description
  gsap.to('#showcase-desc', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: '#showcase',
      start: 'top 65%',
      toggleActions: 'play none none reverse',
    }
  });

  // CTA buttons
  gsap.to('#showcase-cta', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: '#showcase',
      start: 'top 60%',
      toggleActions: 'play none none reverse',
    }
  });

  // Product image with 3D tilt
  gsap.to('.showcase-product', {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#showcase',
      start: 'top 65%',
      toggleActions: 'play none none reverse',
    }
  });

  // Product tilt on hover
  initProductTilt();
}

// ═══════════════════════════════════════
// 3D PRODUCT TILT
// ═══════════════════════════════════════
function initProductTilt() {
  const container = document.getElementById('showcase-product-tilt');
  if (!container) return;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to('.showcase-product-img', {
      rotateY: x * 20,
      rotateX: -y * 20,
      scale: 1.05,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 800,
    });
  });

  container.addEventListener('mouseleave', () => {
    gsap.to('.showcase-product-img', {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out',
    });
  });
}

// ═══════════════════════════════════════
// FEATURES SECTION
// ═══════════════════════════════════════
function initFeaturesAnimations() {
  gsap.utils.toArray('.feature-card').forEach((card, i) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: i * 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#features',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      }
    });
  });
}

// ═══════════════════════════════════════
// STORY SECTION — COUNTER ANIMATION
// ═══════════════════════════════════════
function initStoryAnimations() {
  // Labels and text
  gsap.to('#story-label', {
    opacity: 1, y: 0, duration: 0.6,
    scrollTrigger: { trigger: '#story', start: 'top 75%', toggleActions: 'play none none reverse' }
  });

  gsap.to('#story-title', {
    opacity: 1, y: 0, duration: 0.8,
    scrollTrigger: { trigger: '#story', start: 'top 70%', toggleActions: 'play none none reverse' }
  });

  gsap.to('#story-year', {
    opacity: 1, y: 0, duration: 0.8,
    scrollTrigger: { trigger: '#story', start: 'top 65%', toggleActions: 'play none none reverse' }
  });

  gsap.to('#story-desc', {
    opacity: 1, y: 0, duration: 0.7,
    scrollTrigger: { trigger: '#story', start: 'top 60%', toggleActions: 'play none none reverse' }
  });

  gsap.to('#story-stats', {
    opacity: 1, y: 0, duration: 0.7,
    scrollTrigger: { trigger: '#story', start: 'top 55%', toggleActions: 'play none none reverse' }
  });

  // Counter animation for year
  const yearCounter = document.querySelector('.year-counter');
  if (yearCounter) {
    const target = parseInt(yearCounter.dataset.target);
    ScrollTrigger.create({
      trigger: '#story-year',
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.to({ val: 1990 }, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: function () {
            yearCounter.textContent = Math.round(this.targets()[0].val);
          }
        });
      }
    });
  }

  // Stats counters
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.dataset.target);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: function () {
            el.textContent = Math.round(this.targets()[0].val);
          }
        });
      }
    });
  });
}

// ═══════════════════════════════════════
// CTA SECTION
// ═══════════════════════════════════════
function initCTAAnimations() {
  gsap.utils.toArray('.cta-line').forEach((line, i) => {
    gsap.to(line, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.2,
      scrollTrigger: {
        trigger: '#cta',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      }
    });
  });

  gsap.to('#cta-desc', {
    opacity: 1, y: 0, duration: 0.6,
    scrollTrigger: { trigger: '#cta', start: 'top 65%', toggleActions: 'play none none reverse' }
  });

  gsap.to('#cta-buttons', {
    opacity: 1, y: 0, duration: 0.6,
    scrollTrigger: { trigger: '#cta', start: 'top 60%', toggleActions: 'play none none reverse' }
  });
}

// ═══════════════════════════════════════
// SMOOTH SCROLL-LINKED HERO PARALLAX
// ═══════════════════════════════════════
function initHeroScrollEffects() {
  // Fade out hero as user scrolls
  gsap.to('#hero-brand', {
    y: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: '50% top',
      scrub: 1,
    }
  });

  gsap.to('.anamorphic-container', {
    y: -80,
    scale: 0.85,
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    }
  });

  gsap.to('#hero-product-name', {
    y: -40,
    opacity: 0,
    scrollTrigger: {
      trigger: '#hero',
      start: '30% top',
      end: '70% top',
      scrub: 1,
    }
  });

  gsap.to('#hero-tagline', {
    y: -30,
    opacity: 0,
    scrollTrigger: {
      trigger: '#hero',
      start: '40% top',
      end: '70% top',
      scrub: 1,
    }
  });

  gsap.to('#scroll-indicator', {
    opacity: 0,
    scrollTrigger: {
      trigger: '#hero',
      start: '10% top',
      end: '20% top',
      scrub: 1,
    }
  });
}

// ═══════════════════════════════════════
// INIT EVERYTHING
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Start particles immediately
  initParticles();

  // Start preloader sequence
  initPreloader();

  // Scroll-triggered animations
  initShowcaseAnimations();
  initFeaturesAnimations();
  initStoryAnimations();
  initCTAAnimations();
  initHeroScrollEffects();
});
