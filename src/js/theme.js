const changerTheme = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('Theme') === Theme.DARK) {
  bodyRef.classList.remove(Theme.LIGHT);
  bodyRef.classList.add(Theme.DARK);

  changerTheme.checked = true;
}

changerTheme.addEventListener('click', onChangeTheme);

function onChangeTheme() {
  if (!localStorage.getItem('Theme')) {
    localStorage.setItem('Theme', Theme.DARK);
    bodyRef.classList.add(Theme.DARK);

    return;
  }

  if (localStorage.getItem('Theme') === Theme.DARK) {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  } else {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  }
}
