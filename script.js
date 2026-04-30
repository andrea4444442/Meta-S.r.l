document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('previewModal');
  const modalTitle = modal.querySelector('#modalTitle');
  const modalDescription = modal.querySelector('#modalDescription');
  const previewButtons = document.querySelectorAll('[data-preview]');
  const closeButtons = modal.querySelectorAll('[data-close]');

  previewButtons.forEach(button => {
    button.addEventListener('click', () => {
      const title = button.getAttribute('data-preview');
      modalTitle.textContent = `Anteprima: ${title}`;
      modalDescription.textContent = `Hai selezionato l’anteprima di “${title}”. Per accedere alla versione completa, richiedi un’offerta e ti invieremo il documento protetto in formato PDF.`;
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
});
