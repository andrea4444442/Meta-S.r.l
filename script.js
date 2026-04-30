document.addEventListener('DOMContentLoaded', function () {
  // Modal preview
  const modal = document.getElementById('previewModal');
  const modalTitle = modal.querySelector('#modalTitle');
  const modalDescription = modal.querySelector('#modalDescription');
  const previewButtons = document.querySelectorAll('[data-preview]');
  const closeButtons = modal.querySelectorAll('[data-close]');

  previewButtons.forEach(button => {
    button.addEventListener('click', () => {
      const title = button.getAttribute('data-preview');
      modalTitle.textContent = `Anteprima: ${title}`;
      modalDescription.textContent = `Hai selezionato l'anteprima di "${title}". Per accedere alla versione completa, richiedi un'offerta e ti invieremo il documento protetto in formato PDF.`;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', closeModal);
  });

  modal.addEventListener('click', (event) => {
    if (event.target.matches('[data-close]')) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  // Sidebar mobile (aperta dal logo)
  const sidebar = document.getElementById('navSidebar');
  const brand = document.querySelector('.brand');

  function openSidebar() {
    sidebar.classList.add('open');
    sidebar.setAttribute('aria-hidden', 'false');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebar.setAttribute('aria-hidden', 'true');
  }

  brand.addEventListener('click', (e) => {
    if (window.innerWidth <= 700) {
      e.preventDefault();
      openSidebar();
    }
  });

  sidebar.querySelector('.nav-sidebar-backdrop').addEventListener('click', closeSidebar);

  sidebar.querySelectorAll('.nav-sidebar-links a').forEach(link => {
    link.addEventListener('click', closeSidebar);
  });

  // Active nav link on scroll (desktop + sidebar)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"], .nav-sidebar-links a[href^="#"]');

  function updateActiveNav() {
    const scrollY = window.scrollY;
    let current = '';

    sections.forEach(section => {
      if (scrollY >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
});
