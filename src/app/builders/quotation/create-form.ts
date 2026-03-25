import { form_aq } from "@/app/config/quotations/quotation-form-aq.config"


export function create_form(): HTMLFormElement {

  const form = document.createElement('form')
  form.method = form_aq.method.post
  form.classList.add(form_aq.class)
  form.dataset.mode = form_aq.mode.add

  return form
}