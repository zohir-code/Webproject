document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('.display');
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;

      if (button.classList.contains('equal')) {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = 'Error, try again';
        }
      } else if (button.classList.contains('clear')) {
        display.value = '';
      } else if (value === '←') {
        display.value = display.value.slice(0, -1);
      } else {
        display.value += value;
      }
    });
  });
});
