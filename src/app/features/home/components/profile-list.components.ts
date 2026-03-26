import type { HomeContent } from "@/app/features/home/types/home.types";

export function home_list(home_content: HomeContent[], header: HTMLDivElement): HTMLDivElement {
  const list_container = document.createElement("div")
  list_container.classList.add('list-container-home')

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
    list_container.appendChild(container)

  });

  header.appendChild(list_container)

  return list_container
}