import { buttons } from '@/features/dashboard/sidebar/sidebar.config'
import '@/features/dashboard/sidebar/sidebar.css'
import type { Profile } from '@/services/profile/profile.types'

export function sidebar(profile: Profile[]): HTMLDivElement {
  const sidebar = document.createElement("div")
  sidebar.classList.add('sidebar')

  const logo = document.createElement("img")
  logo.classList.add("logo")
  logo.src = profile[0]?.logo ?? ''

  sidebar.appendChild(logo)

  const interface_container = document.createElement('div')
  interface_container.classList.add('interface-container')

  sidebar.appendChild(interface_container)

  buttons.forEach(button => {
    const container_btn = document.createElement("div")
    container_btn.classList.add(button.container.container_class, button.container.container_class_key)
    container_btn.dataset.section = button.key

    const icon_btn = document.createElement("img")
    icon_btn.classList.add(button.icon.class)
    icon_btn.src = button.icon.svg

    const name_btn = document.createElement("span")
    name_btn.classList.add(button.name_btn.class)
    name_btn.textContent = button.name_btn.name

    container_btn.appendChild(icon_btn)
    container_btn.appendChild(name_btn)
    interface_container.appendChild(container_btn)

  })

  return sidebar

}