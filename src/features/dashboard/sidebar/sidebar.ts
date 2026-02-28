import { buttons } from '@/features/dashboard/sidebar/sidebar.config'

export function sidebar(): HTMLDivElement {
  const left_container = document.createElement("div")
  left_container.classList.add('left-container')

  buttons.forEach(button => {
    const container_btn = document.createElement("div")
    container_btn.classList.add(button.container.container_class, button.container.container_class_key)

    const icon_btn = document.createElement("img")
    icon_btn.classList.add(button.icon.class)
    icon_btn.src = button.icon.svg

    const name_btn = document.createElement("span")
    name_btn.classList.add(button.name_btn.class)
    name_btn.textContent = button.name_btn.name

    container_btn.appendChild(icon_btn)
    container_btn.appendChild(name_btn)
    left_container.appendChild(container_btn)

  })

  return left_container

}