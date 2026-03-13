import type { Profile } from "../../profile.types"
import { form_profile_config } from "../config/form-profile-config"
import { handler_create_profile } from "../handlers/handler-create-profle"
import { fill_profile_form_fileds } from "./utils/fill-profile-form-fields"

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

  fill_profile_form_fileds(form, profile)

  handler_create_profile(form, TOKEN!, profile)

}