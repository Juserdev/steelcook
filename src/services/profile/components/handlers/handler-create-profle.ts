import { editProfile } from "../../profile-services"
import type { Profile, Send_Profile } from "../../profile.types"

export function handler_create_profile(form: HTMLFormElement, TOKEN: string, profile: Profile[]) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()

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

    const id = profile[0]?.id

    if (!id) return

    await editProfile(TOKEN!, id, new_profile)

    window.location.reload()
  })

}