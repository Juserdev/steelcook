import { form_aq } from "../config/quotation-form-aq.config"

export function fill_quotation_form(id: string, form: HTMLFormElement) {
  form.dataset.mode = form_aq.mode.edit
  form.method = form_aq.method.edit
  console.log(id)
}