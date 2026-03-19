import { profile_config, profile_titles_sheets } from "../../profile-config";
import type { Profile } from "../../profile.types";

export function profile_title_sheet(company_profile: Profile[]) {
  const list_container_profile = document.createElement('div')
  list_container_profile.classList.add('list-container-profile')

  const profile_logo = document.createElement('img')
  profile_logo.classList.add(profile_config.logo)
  profile_logo.src = company_profile[0]?.logo ?? ''

  list_container_profile.appendChild(profile_logo)

  const profile_titles_sheet_container = document.createElement("div")
  profile_titles_sheet_container.classList.add("profile-titles-sheet")

  list_container_profile.appendChild(profile_titles_sheet_container)

  profile_titles_sheets.forEach(title => {
    const titles = document.createElement("h3")
    titles.classList.add(title.class, title.common_class)
    titles.textContent = title.title

    profile_titles_sheet_container.appendChild(titles)

  });

  return list_container_profile
}