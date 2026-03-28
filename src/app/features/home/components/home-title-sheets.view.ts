import type { HomeContent } from "@/app/features/home/types/home.types"

export function home_title_sheets(home_content: HomeContent[], container: HTMLDivElement) {
  const clients_file = document.createElement('div')
  clients_file.classList.add('home-file')

  home_content.forEach(content => {

    const count = document.createElement('span')
    count.classList.add(content.class_container)
    count.textContent = String(content.counter)
    count.dataset.item = `${content.title}:`

    clients_file.appendChild(count)

    container.appendChild(clients_file)
  })
}