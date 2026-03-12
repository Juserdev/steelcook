import { profile_title } from "./components/builders/profile-title"
import { profile_title_sheet } from "./components/builders/profile-title-sheet"
import { profile_form } from "./components/form/profile-form"
import { profile_view } from "./components/profile-view"
import type { Profile } from "./profile.types"
import '@/services/profile/profile.css'


export function content_profile(TOKEN: string, company_profile: Profile[]): HTMLDivElement {

  const profile_container = profile_title()
  const list_container = profile_title_sheet(company_profile)
  profile_view(company_profile, list_container)
  profile_container.appendChild(list_container)
  profile_form(profile_container, TOKEN!)



  return profile_container
}