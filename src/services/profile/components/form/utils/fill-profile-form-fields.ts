import type { Profile } from "@/services/profile/profile.types"

export function fill_profile_form_fileds(form: HTMLFormElement, profile: Profile[]) {

  const company = form.elements.namedItem('profile_company') as HTMLInputElement
  const id = form.elements.namedItem('profile_id') as HTMLInputElement
  const email = form.elements.namedItem('profile_email') as HTMLInputElement
  const phone = form.elements.namedItem('profile_phone') as HTMLInputElement
  const address = form.elements.namedItem('profile_address') as HTMLInputElement
  const logo = form.elements.namedItem('profile_logo') as HTMLInputElement

  company.value = profile[0].company
  id.value = String(profile[0].company_id)
  email.value = profile[0].email
  phone.value = String(profile[0].phone)
  address.value = profile[0].address
  logo.value = profile[0].logo ?? ''
}