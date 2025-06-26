// === NAVBAR TOGGLE ===
window.addEventListener('DOMContentLoaded', () => {
  fetch('navbar.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;

      const toggle = document.querySelector('.nav-toggle');
      const menu = document.querySelector('.nav-menu');

      if (toggle && menu) {
        toggle.addEventListener('click', () => {
          menu.classList.toggle('open');
        });
      }
    });

// === GALLERY LIGHTBOX ===
/*const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const closeBtn = document.getElementById('close-btn');
const zoomLens = document.getElementById('zoom-lens');

let currentIndex = 0;

if (galleryItems.length) {
  const images = Array.from(galleryItems).map(img => img.src);

  function showImage(index) {
    lightboxImg.src = images[index];
  }

  galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      showImage(currentIndex);
      lightbox.classList.remove('hidden');
      document.body.classList.add('no-scroll');
    });
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  closeBtn?.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') {
      lightbox.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
  });

  // === ZOOM EFFECT ===
  lightboxImg?.addEventListener('mousemove', (e) => {
    const rect = lightboxImg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const lensSize = zoomLens.offsetWidth / 2;
    let lensX = x - lensSize;
    let lensY = y - lensSize;

    lensX = Math.max(0, Math.min(lensX, rect.width - lensSize * 2));
    lensY = Math.max(0, Math.min(lensY, rect.height - lensSize * 2));

    zoomLens.style.left = lensX + 'px';
    zoomLens.style.top = lensY + 'px';
    zoomLens.style.display = 'block';
    zoomLens.style.backgroundImage = `url('${lightboxImg.src}')`;
    zoomLens.style.backgroundSize = lightboxImg.width * 2 + 'px ' + lightboxImg.height * 2 + 'px';
    zoomLens.style.backgroundPosition = `-${x * 2 - lensSize}px -${y * 2 - lensSize}px`;
  });

  lightboxImg?.addEventListener('mouseleave', () => {
    zoomLens.style.display = 'none';
  });
}
*/
/*
const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  const closeBtn = document.getElementById('close-btn');

  let currentIndex = 0;
  const images = Array.from(galleryItems).map(img => img.src);

  function showImage(index) {
    lightboxImg.src = images[index];
  }
  const zoomLens = document.getElementById('zoom-lens');
const zoomContainer = document.querySelector('.zoom-container');

lightboxImg.addEventListener('mousemove', (e) => {
  const rect = lightboxImg.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const lensSize = zoomLens.offsetWidth / 2;

  let lensX = x - lensSize;
  let lensY = y - lensSize;

  // Keep lens inside bounds
  lensX = Math.max(0, Math.min(lensX, rect.width - lensSize * 2));
  lensY = Math.max(0, Math.min(lensY, rect.height - lensSize * 2));

  zoomLens.style.left = lensX + 'px';
  zoomLens.style.top = lensY + 'px';
  zoomLens.style.display = 'block';
  zoomLens.style.backgroundImage = `url('${lightboxImg.src}')`;
  zoomLens.style.backgroundSize = lightboxImg.width * 2 + 'px ' + lightboxImg.height * 2 + 'px';
  zoomLens.style.backgroundPosition = `-${x * 2 - lensSize}px -${y * 2 - lensSize}px`;
});

lightboxImg.addEventListener('mouseleave', () => {
  zoomLens.style.display = 'none';
});


  galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      showImage(currentIndex);
      lightbox.classList.remove('hidden');
      document.body.classList.add('no-scroll');
    });
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  });

  // Close on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
  });
*/

// === LIGHTBOX: Only if gallery is present ===
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  const closeBtn = document.getElementById('close-btn');
  const zoomLens = document.getElementById('zoom-lens');

  if (galleryItems.length && lightbox && lightboxImg && zoomLens) {
    let currentIndex = 0;
    const images = Array.from(galleryItems).map(img => img.src);

    function showImage(index) {
      lightboxImg.src = images[index];
    }

    galleryItems.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
        lightbox.classList.remove('hidden');
        document.body.classList.add('no-scroll');
      });
    });

    nextBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    prevBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    closeBtn?.addEventListener('click', () => {
      lightbox.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    });

    document.addEventListener('keydown', (e) => {
      if (lightbox.classList.contains('hidden')) return;
      if (e.key === 'Escape') {
        lightbox.classList.add('hidden');
        document.body.classList.remove('no-scroll');
      } else if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
      }
    });

    lightboxImg.addEventListener('mousemove', (e) => {
      const rect = lightboxImg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const lensSize = zoomLens.offsetWidth / 2;
      let lensX = x - lensSize;
      let lensY = y - lensSize;

      lensX = Math.max(0, Math.min(lensX, rect.width - lensSize * 2));
      lensY = Math.max(0, Math.min(lensY, rect.height - lensSize * 2));

      zoomLens.style.left = lensX + 'px';
      zoomLens.style.top = lensY + 'px';
      zoomLens.style.display = 'block';
      zoomLens.style.backgroundImage = `url('${lightboxImg.src}')`;
      zoomLens.style.backgroundSize = lightboxImg.width * 2 + 'px ' + lightboxImg.height * 2 + 'px';
      zoomLens.style.backgroundPosition = `-${x * 2 - lensSize}px -${y * 2 - lensSize}px`;
    });

    lightboxImg.addEventListener('mouseleave', () => {
      zoomLens.style.display = 'none';
    });
  }
});
fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
  });