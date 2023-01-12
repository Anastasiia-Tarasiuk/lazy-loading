const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
};

// lazy-loading
const lazyLoadingCallback = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      lazyImageObserver.unobserve(lazyImage);
    }
  });
};

const lazyImageObserver = new IntersectionObserver(
  lazyLoadingCallback,
  options
);

let lazyImages = [...document.querySelectorAll('.lazy-loaded-image')];

lazyImages.forEach(lazyImage => {
  lazyImageObserver.observe(lazyImage);
});

