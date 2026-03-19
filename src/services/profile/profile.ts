import { fill_profile_form } from '@/services/profile/components/builders/fill-profile-form'
import { profile_header } from '@/services/profile/components/builders/profile-header'
import { profile_list } from '@/services/profile/components/builders/profile-list'
import { profile_form } from '@/services/profile/components/form/profile-form'
import { extract_profile_form } from '@/services/profile/components/form/utils/extract-profile-form'
import { createProfile, deleteProfile, editProfile } from '@/services/profile/profile-services'
import '@/services/profile/profile.css'
import type { Profile } from '@/services/profile/profile.types'
import { handle_delete_from_list } from '@/shared/handlers/handle-delete-from-list'
import { handle_edit_open } from '@/shared/handlers/handle-edit-open'
import { handle_submit } from '@/shared/handlers/handle-submit'
import { toggle_add_btn_visibility } from '@/utils/toggle-add-btn-visibility'



export function content_profile(TOKEN: string, profile: Profile[]): HTMLDivElement {

  const profile_container = profile_header()
  const list = profile_list(profile, profile_container)
  const form = profile_form(profile_container)

  console.log(list)

  handle_submit(TOKEN, form, extract_profile_form, createProfile, editProfile)
  handle_edit_open(profile, profile_container, form, { item: 'profile-file', list: 'list-container-profile' }, fill_profile_form)
  handle_delete_from_list(TOKEN, list, 'profile', deleteProfile)

  toggle_add_btn_visibility(profile_container, profile, 'add_profile')


  return profile_container
}