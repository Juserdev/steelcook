import '@/app/features/profile/styles/profile.css'
import type { Profile } from '@/app/features/profile/types/profile.types'
import { extract_profile_form } from '@/app/features/profile/utils/extract-profile-form'
import { handle_delete_from_list } from '@/app/shared/handlers/handle-delete-from-list'
import { handle_edit_open } from '@/app/shared/handlers/handle-edit-open'
import { handle_submit } from '@/app/shared/handlers/handle-submit'
import { toggle_add_btn_visibility } from '@/app/shared/utils/ui/toggle-add-btn-visibility'
import { fill_profile_form } from './components/fill-profile-form'
import { profile_form } from './components/profile-form'
import { profile_header } from './components/profile-header'
import { profile_list } from './components/profile-list'
import { createProfile, deleteProfile, editProfile } from './services/profile-services'

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