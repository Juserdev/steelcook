import { profile_config, profile_titles_sheets } from "./profile-config"
import type { Profile } from "./profile.types"

export function content_profile(company_profile: Profile[]): HTMLDivElement {
  const profile_container = document.createElement('div')
  profile_container.classList.add(profile_config.profile_content_class.common_class, profile_config.profile_content_class.class, 'active')

  const title = document.createElement('h1')
  title.classList.add(profile_config.title.class_1, profile_config.title.class_2)
  title.textContent = profile_config.title.text

  const profile_logo = document.createElement('img')
  profile_logo.classList.add(profile_config.logo)
  profile_logo.src = company_profile[0].logo!

  profile_container.appendChild(title)
  profile_container.appendChild(profile_logo)

  const profile_titles_sheet_container = document.createElement("div")
  profile_titles_sheet_container.classList.add("quotations-titles-sheet")

  profile_container.appendChild(profile_titles_sheet_container)

  profile_titles_sheets.forEach(title => {
    const titles = document.createElement("h3")
    titles.classList.add(title.class, title.common_class)
    titles.textContent = title.title

    profile_titles_sheet_container.appendChild(titles)

  });


  company_profile.forEach(profile => {
    const profile_file = document.createElement('div')
    profile_file.classList.add(profile_config.profile_class.file)

    const profile_company = document.createElement('span')
    profile_company.classList.add(profile_config.profile_class.company)
    profile_company.textContent = profile.company

    const profile_id = document.createElement('span')
    profile_id.classList.add(profile_config.profile_class.company_id)
    profile_id.textContent = profile.company_id

    const profile_email = document.createElement('span')
    profile_email.classList.add(profile_config.profile_class.email)
    profile_email.textContent = profile.email

    const profile_phone = document.createElement('span')
    profile_phone.classList.add(profile_config.profile_class.phone)
    profile_phone.textContent = profile.phone

    const profile_address = document.createElement('span')
    profile_address.classList.add(profile_config.profile_class.address)
    profile_address.textContent = profile.address

    profile_file.appendChild(profile_company)
    profile_file.appendChild(profile_id)
    profile_file.appendChild(profile_email)
    profile_file.appendChild(profile_phone)
    profile_file.appendChild(profile_address)

    profile_container.appendChild(profile_file)
  });

  return profile_container
}