import type { Send_Profile } from "@/app/types/profile/profile.types"

export function extract_profile_form(form: HTMLFormElement) {
  const formData = new FormData(form)

  const company = formData.get('profile_company') as string
  const company_id = Number(formData.get('profile_id') as string)
  const email = formData.get('profile_email') as string
  const phone = Number(formData.get('profile_phone') as string)
  const address = formData.get('profile_address') as string
  const logo = formData.get('profile_logo') as string


  const new_profile: Send_Profile = {
    company,
    company_id,
    email,
    phone,
    address,
    logo
  }

  return new_profile


}