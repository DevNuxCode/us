export const themes = [
  { name: 'Red', value: 'red' },
  { name: 'Blue', value: 'blue' },
  { name: 'Gold', value: 'gold' },
  { name: 'Yellow', value: 'yellow' },
  { name: 'Purple', value: 'purple' },
  { name: 'Green', value: 'green' },
] as const;

export type ThemeColor = typeof themes[number]['value'];

export function setTheme(value: ThemeColor) {
  document.documentElement.style.setProperty('--theme-color', `var(--theme-${value})`);
  localStorage.setItem('theme-color', value);
}

export function getStoredTheme(): ThemeColor {
  return (localStorage.getItem('theme-color') as ThemeColor) || 'blue';
}