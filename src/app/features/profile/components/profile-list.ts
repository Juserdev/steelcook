import { profile_title_shetts } from "@/app/features/profile/components/profile-title-sheets";
import { profile_titles } from "@/app/features/profile/components/profile-titles";
import type { Profile } from "@/app/features/profile/types/profile.types";

export function profile_list(profile: Profile[], header: HTMLDivElement) {

  const list_container = profile_titles(profile)
  profile_title_shetts(profile, list_container)
  header.appendChild(list_container)

  return list_container
}
