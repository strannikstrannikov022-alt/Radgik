const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

const leadForms = document.querySelectorAll('.lead-form');

for (const leadForm of leadForms) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(leadForm);
    const context = leadForm.dataset.formContext || 'Сайт';
    const name = (formData.get('name') || '').toString().trim();
    const phone = (formData.get('phone') || '').toString().trim();
    const project = (formData.get('project') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    const text = [
      'Здравствуйте. Оставляю заявку с сайта.',
      `Источник: ${context}`,
      name ? `Имя: ${name}` : '',
      phone ? `Телефон: ${phone}` : '',
      project ? `Объект: ${project}` : '',
      message ? `Задача: ${message}` : ''
    ].filter(Boolean).join('\n');

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }

    window.location.href = 'https://t.me/+79324207085';
  });
}
