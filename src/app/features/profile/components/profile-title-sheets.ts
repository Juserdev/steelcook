import { profile_config } from "@/app/features/profile/config/profile.config";
import type { Profile } from "@/app/features/profile/types/profile.types";

export function profile_title_shetts(company_profile: Profile[], container: HTMLDivElement) {

  company_profile.forEach(profile => {

    const icon_edit = profile_config.icons.edit
    const icon_remove = profile_config.icons.remove

    const profile_file = document.createElement('div')
    profile_file.classList.add(profile_config.profile_class.file)
    profile_file.dataset.id = profile.id

    const profile_company = document.createElement('span')
    profile_company.classList.add(profile_config.profile_class.company)
    profile_company.textContent = profile.company

    const profile_id = document.createElement('span')
    profile_id.classList.add(profile_config.profile_class.company_id)
    profile_id.textContent = profile.company_id.toString()

    const profile_email = document.createElement('span')
    profile_email.classList.add(profile_config.profile_class.email)
    profile_email.textContent = profile.email

    const profile_phone = document.createElement('span')
    profile_phone.classList.add(profile_config.profile_class.phone)
    profile_phone.textContent = String(profile.phone ?? '')

    const profile_address = document.createElement('span')
    profile_address.classList.add(profile_config.profile_class.address)
    profile_address.textContent = profile.address

    const icons_container = document.createElement('div')
    icons_container.classList.add(profile_config.icons.container_class)

    const edit = document.createElement('img')
    edit.src = icon_edit.src
    edit.alt = icon_edit.alt
    edit.classList.add(icon_edit.class)

    const remove = document.createElement('img')
    remove.src = icon_remove.src
    remove.alt = icon_remove.alt
    remove.classList.add(icon_remove.class)

    icons_container.appendChild(edit)
    icons_container.appendChild(remove)

    profile_file.appendChild(profile_company)
    profile_file.appendChild(profile_id)
    profile_file.appendChild(profile_email)
    profile_file.appendChild(profile_phone)
    profile_file.appendChild(profile_address)
    profile_file.appendChild(icons_container)

    container.appendChild(profile_file)
  });
}