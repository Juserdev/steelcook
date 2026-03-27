import type { Form_Mode } from "@/app/features/quotations/types/quotations.types"
import { form_add_quote_settings } from "@/app/features/quote-settings/config/form-add-quote-settings.config"

export function settings_form(header: HTMLDivElement): HTMLFormElement {
  const form_mm = form_add_quote_settings.form
  const qs_fields = form_add_quote_settings.fields

  const form = document.createElement('form')
  form.method = form_mm.method.edit
  form.classList.add(form_add_quote_settings.form.class, 'active')
  form.dataset.mode = 'add' as Form_Mode

  qs_fields.forEach(files => {
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
  btn.type = form_add_quote_settings.button.type
  btn.textContent = form_add_quote_settings.button.text
  btn.classList.add(form_add_quote_settings.button.class)

  form.appendChild(btn)

  header.appendChild(form)


  return form
}