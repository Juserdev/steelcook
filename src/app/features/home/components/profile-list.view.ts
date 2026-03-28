import { home_title } from "@/app/features/home/components/home-title.view";
import type { HomeContent } from "@/app/features/home/types/home.types";

export function home_title_sheets(home_content: HomeContent[], container: HTMLDivElement) {
  const clients_file = document.createElement('div')
  clients_file.classList.add('home-title')

  home_content.forEach(content => {

    const count = document.createElement('span')
    count.classList.add(content.class_container)
    count.textContent = String(content.counter)

    clients_file.appendChild(count)

    container.appendChild(clients_file)
  })
}

export function home_list(home_content: HomeContent[], header: HTMLDivElement): HTMLDivElement {

  const home_container = home_title()
  home_title_sheets(home_content, home_container)
  header.appendChild(home_container)


  return home_container
}