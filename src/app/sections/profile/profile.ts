
import { profile_form } from '@/app/builders/profile/profile-form'
import { extract_profile_form } from '@/app/utils/profile/extract-profile-form'
import { createProfile, deleteProfile, editProfile } from '@/app/services/profile/profile-services'
import '@/app/styles/profile/profile.css'
import type { Profile } from '@/app/types/profile/profile.types'
import { handle_delete_from_list } from '@/app/shared/handlers/handle-delete-from-list'
import { handle_edit_open } from '@/app/shared/handlers/handle-edit-open'
import { handle_submit } from '@/app/shared/handlers/handle-submit'
import { toggle_add_btn_visibility } from '@/app/shared/utils/ui/toggle-add-btn-visibility'
import { profile_header } from '@/app/builders/profile/profile-header'
import { profile_list } from '@/app/builders/profile/profile-list'
import { fill_profile_form } from '@/app/builders/profile/fill-profile-form'



export function content_profile(TOKEN: string, profile: Profile[]): HTMLDivElement {

  const profile_container = profile_header()
  const list = profile_list(profile, profile_container)
  const form = profile_form(profile_container)

  handle_submit(TOKEN, form, extract_profile_form, createProfile, editProfile)
  handle_edit_open(profile, profile_container, form, { item: 'profile-file', list: 'list-container-profile' }, fill_profile_form)
  handle_delete_from_list(TOKEN, list, 'profile', deleteProfile)

  toggle_add_btn_visibility(profile_container, profile, 'add_profile')


  return profile_container
}