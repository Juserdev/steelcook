
import { profile_title_shetts } from "@/app/builders/profile/profile-title-sheets";
import { profile_titles } from "@/app/builders/profile/profile-titles";
import type { Profile } from "@/app/types/profile/profile.types";


export function profile_list(profile: Profile[], header: HTMLDivElement) {

  const list_container = profile_titles(profile)
  profile_title_shetts(profile, list_container)
  header.appendChild(list_container)

  return list_container
}