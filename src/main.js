const form = document.querySelector('#lead-form');
const result = document.querySelector('#form-result');
const status = document.querySelector('#form-status');
const preview = document.querySelector('#request-preview');
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-interest]').forEach(link => link.addEventListener('click', () => {
  form.elements.interest.value = link.dataset.interest;
}));
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const contact = form.elements.contact.value.trim();
  if (!name || contact.length < 5) {
    status.textContent = 'Укажите имя и контакт для связи (не менее 5 символов).';
    result.hidden = false;
    (!name ? form.elements.name : form.elements.contact).focus();
    return;
  }
  const text = `Здравствуйте! Хочу обсудить проект с K.V.A Media.\n\nИмя: ${name}\nКонтакт: ${contact}\nИнтересует: ${form.elements.interest.value}\nО проекте: ${form.elements.message.value.trim() || 'Расскажу на консультации'}\n\nЗаявка с сайта K.V.A Media Production`;
  preview.value = text;
  document.querySelector('#email-send').href = `mailto:kvamedia63@gmail.com?subject=${encodeURIComponent('Заявка K.V.A — ' + form.elements.interest.value)}&body=${encodeURIComponent(text)}`;
  status.textContent = 'Заявка готова. Выберите, как отправить её агентству.';
  result.hidden = false;
  status.focus({preventScroll:true});
  result.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'nearest'});
});
document.querySelector('#copy-request').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(preview.value);
    status.textContent = 'Текст скопирован. Откройте сообщество VK и отправьте заявку в сообщениях.';
  } catch {
    preview.focus(); preview.select();
    status.textContent = 'Выделили текст заявки. Скопируйте его и отправьте в сообщениях VK.';
  }
});
