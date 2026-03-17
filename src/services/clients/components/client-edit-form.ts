import { form_edit_client } from "./form/form-edit-client.config"

export function client_form_edit(header: HTMLDivElement): HTMLFormElement {
  const form = document.createElement('form')
  form.method = form_edit_client.form.method.edit
  form.classList.add(form_edit_client.form.class, 'active')

  form_edit_client.fields.forEach(files => {
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

    form.appendChild(label)
    form.appendChild(input)

  })

  const btn = document.createElement('button')
  btn.type = form_edit_client.button.type
  btn.textContent = form_edit_client.button.text
  btn.classList.add(form_edit_client.button.class)

  form.appendChild(btn)
  header.appendChild(form)

  return form

}