import type { Profile } from "../../profile.types"
import { form_profile_config } from "../config/form-profile-config"
import { handler_create_profile } from "../handlers/handler-create-profle"

export function profile_form(content: HTMLDivElement, TOKEN: string, profile: Profile[]) {

  const form = document.createElement('form')
  form.classList.add(form_profile_config.form.class)
  form.method = form_profile_config.form.method

  form_profile_config.fields.forEach(profile => {
    const { label: labels, input: inputs } = profile

    const container = document.createElement('div')
    container.classList.add('containet-input-label')

    const label = document.createElement('label')
    label.htmlFor = labels.for
    label.classList.add(labels.class.common, labels.class.specific)
    label.textContent = labels.content

    const input = document.createElement('input')
    input.type = inputs.type
    input.id = inputs.id
    input.name = inputs.name
    input.placeholder = inputs.placeholder
    input.classList.add(inputs.class.common, inputs.class.specific)

    container.appendChild(label)
    container.appendChild(input)
    form.appendChild(container)
  })

  const button = document.createElement('button')
  button.type = form_profile_config.button.type
  button.classList.add(form_profile_config.button.class)
  button.textContent = form_profile_config.button.text

  form.appendChild(button)

  content.appendChild(form)

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

  handler_create_profile(form, TOKEN!, profile)



}