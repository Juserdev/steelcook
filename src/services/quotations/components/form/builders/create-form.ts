import { form_aq } from "../../config/quotation-form-aq.config"

export function create_form(): HTMLFormElement {

  const form = document.createElement('form')
  form.method = form_aq.method
  form.classList.add(form_aq.class)

  return form
}