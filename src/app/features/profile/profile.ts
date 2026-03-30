import { fill_profile_form } from '@/app/features/profile/components/fill-profile-form.view'
import { profile_form } from '@/app/features/profile/components/profile-form.view'
import { profile_header } from '@/app/features/profile/components/profile-header.view'
import { profile_list } from '@/app/features/profile/components/profile-list.view'
import { createProfile, deleteProfile, editProfile } from '@/app/features/profile/services/profile.services'
import '@/app/features/profile/styles/profile.css'
import type { Profile } from '@/app/features/profile/types/profile.types'
import { extract_profile_form } from '@/app/features/profile/utils/extract-profile-form'
import { handle_delete_from_list } from '@/app/shared/handlers/handle-delete-from-list.handle'
import { handle_edit_open } from '@/app/shared/handlers/handle-edit-open.handle'
import { handle_submit } from '@/app/shared/handlers/handle-submit.handle'
import { toggle_add_btn_visibility } from '@/app/shared/utils/ui/toggle-add-btn-visibility.utils'


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