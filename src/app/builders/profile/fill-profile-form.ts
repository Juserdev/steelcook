import { form_profile_config } from "@/app/config/profile/form-profile.config";
import type { Profile } from "@/app/types/profile/profile.types";

export function fill_profile_form(
  id: string,
  form: HTMLFormElement,
  profile: Profile[]
) {
  const form_mm = form_profile_config.form

  form.dataset.mode = form_mm.mode.edit
  form.method = form_mm.method.edit

  const user = profile.find(element => element.id === id)

  const fields = {
    company: form.querySelector<HTMLInputElement>('[name="profile_company"]'),
    company_id: form.querySelector<HTMLInputElement>('[name="profile_id"]'),
    email: form.querySelector<HTMLInputElement>('[name="profile_email"]'),
    phone: form.querySelector<HTMLInputElement>('[name="profile_phone"]'),
    address: form.querySelector<HTMLInputElement>('[name="profile_address"]'),
    logo: form.querySelector<HTMLInputElement>('[name="profile_logo"]')
  }

  if (!user || !fields) return


  fields.company!.value = user.company ?? ''
  fields.company_id!.value = String(user.company_id) ?? ''
  fields.email!.value = user.email ?? ''
  fields.phone!.value = String(user.phone) ?? ''
  fields.address!.value = user.address ?? ''
  fields.logo!.value = user.logo ?? ''
}