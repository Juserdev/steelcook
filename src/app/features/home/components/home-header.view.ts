import { home_header_config } from "@/app/features/home/config/home-header.config"

export function home_header(): HTMLDivElement {
  const div_config = home_header_config.div.class
  const title_config = home_header_config.title

  const home = document.createElement('div')
  home.classList.add(div_config.common, div_config.class)

  const title = document.createElement('h1')
  title.classList.add(title_config.class.common, title_config.class.class)
  title.textContent = title_config.text

  home.appendChild(title)

  return home
}