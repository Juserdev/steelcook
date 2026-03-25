import { profile_config } from "@/app/config/profile/profile.config"

export function profile_header(): HTMLDivElement {
  const container = document.createElement('div')
  container.classList.add(profile_config.profile_content_class.common_class, profile_config.profile_content_class.class, 'active')

  const title = document.createElement('h1')
  title.classList.add(profile_config.title.class_1, profile_config.title.class_2)
  title.textContent = profile_config.title.text

  const button = document.createElement("button")
  button.type = profile_config.button.type
  button.classList.add(profile_config.button.class)
  button.textContent = profile_config.button.text
  button.dataset.add_profile = profile_config.button.dataset


  container.appendChild(title)
  container.appendChild(button)


  return container
}

