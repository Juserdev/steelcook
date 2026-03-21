import { form_profile_config } from "@/services/profile/components/config/form-profile-config"
import type { Form_Mode } from "@/services/quotations/quotations.types"
import { add_required_inputs } from "@/utils/add-required-inputs"


export function profile_form(content: HTMLDivElement): HTMLFormElement {

  const form = document.createElement('form')
  form.classList.add(form_profile_config.form.class)
  form.method = form_profile_config.form.method.post
  form.dataset.mode = form_profile_config.form.mode.add as Form_Mode

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

    const ids = ['profile_company']
    add_required_inputs(input, ids)

    if (input.name === 'profile_phone') input.dataset.number = 'number'

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


  return form

}