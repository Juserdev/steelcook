import { profile_config } from "../profile-config";
import type { Profile } from "../profile.types";

export function profile_view(company_profile: Profile[], container: HTMLDivElement) {

  company_profile.forEach(profile => {
    const profile_file = document.createElement('div')
    profile_file.classList.add(profile_config.profile_class.file)

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

    profile_file.appendChild(profile_company)
    profile_file.appendChild(profile_id)
    profile_file.appendChild(profile_email)
    profile_file.appendChild(profile_phone)
    profile_file.appendChild(profile_address)

    container.appendChild(profile_file)
  });
}