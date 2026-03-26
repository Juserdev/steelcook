export function home_header(): HTMLDivElement {

  const home = document.createElement('div')
  home.classList.add('section-content', 'home-content')

  const title = document.createElement('h1')
  title.classList.add("title", "home-title")
  title.textContent = 'Inicio'

  home.appendChild(title)

  return home
}