import { homeContentConfig } from "@/app/features/home/config/home.config"
import type { Clients } from "@/app/features/clients/types/clients.types"
import type { Products } from "@/app/features/products/types/products.types"
import type { Quotations } from "@/app/features/quotations/types/quotations.types"

export function content_home(clients: Clients[], products: Products[], quotations: Quotations[]): HTMLDivElement {
  const home = document.createElement('div')
  home.classList.add('section-content', 'home-content')

  const title = document.createElement('h1')
  title.classList.add("title", "home-title")
  title.textContent = 'Home'

  home.appendChild(title)

  const home_content = homeContentConfig(clients, products, quotations)

  home_content.forEach(content => {
    const container = document.createElement("div")
    container.classList.add(content.class_container)

    const title = document.createElement('h2')
    title.classList.add(content.class_title)
    title.textContent = content.title

    const text_content = document.createElement("span")
    text_content.classList.add(content.class_text)
    text_content.textContent = `${content.counter} ${content.text}`

    container.appendChild(title)
    container.appendChild(text_content)
    home.appendChild(container)

  });

  return home
}