import { profile_titles } from "@/services/profile/components/builders/profile-titles";
import { profile_title_shetts } from "@/services/profile/components/profile-title-sheets";
import type { Profile } from "../../profile.types";

export function profile_list(profile: Profile[], header: HTMLDivElement) {

  const list_container = profile_titles(profile)
  profile_title_shetts(profile, list_container)
  header.appendChild(list_container)

  return list_container
}