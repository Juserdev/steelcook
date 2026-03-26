import { form_add_client } from '@/app/features/clients/config/form-add-client.config'
import { clients_dataset } from '@/app/features/clients/config/form-client-dataset.config'
import type { Form_Mode } from '@/app/features/quotations/types/quotations.types'
import { add_required_inputs } from '@/app/shared/utils/form/add-required-inputs'

export function clients_form(header: HTMLDivElement): HTMLFormElement {

  const form = document.createElement('form')
  form.method = form_add_client.form.method.post
  form.classList.add(form_add_client.form.class, 'active')
  form.dataset.mode = 'add' as Form_Mode

  form_add_client.fields.forEach(files => {
    const { label: labels, input: inputs } = files

    const label = document.createElement('label')
    label.htmlFor = labels.for
    label.classList.add(labels.class.specific, labels.class.common)
    label.textContent = labels.content

    const input = document.createElement('input')
    input.type = inputs.type
    input.id = inputs.id
    input.name = inputs.name
    input.placeholder = inputs.placeholder
    input.classList.add(inputs.class.specific, inputs.class.common)

    if (input.name === 'phone') input.dataset.number = clients_dataset.data

    form.appendChild(label)
    form.appendChild(input)

    const ids = ['name', 'phone']
    add_required_inputs(input, ids)



  })

  const btn = document.createElement('button')
  btn.type = form_add_client.button.type
  btn.textContent = form_add_client.button.text
  btn.classList.add(form_add_client.button.class)

  form.appendChild(btn)

  header.appendChild(form)


  return form

}