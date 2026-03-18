import { form_add_quote_settings } from "@/services/quote-settings/components/config/form-add-quote-settings.config";
import type { Quote_Settings } from "@/services/quote-settings/quote-settings-types";

export function fill_quote_settings_form(
  id: string,
  form: HTMLFormElement,
  quotes: Quote_Settings[]
) {
  const form_mm = form_add_quote_settings.form

  form.dataset.mode = form_mm.mode.edit
  form.method = form_mm.method.edit

  const setting = quotes.find(element => element.id === id)

  const fields = {
    observations: form.querySelector<HTMLInputElement>('[name="observations"]'),
    waranty: form.querySelector<HTMLInputElement>('[name="waranty"]'),
    delivery_time: form.querySelector<HTMLInputElement>('[name="delivery_time"]'),
    transport: form.querySelector<HTMLInputElement>('[name="transport"]'),
    payment_method: form.querySelector<HTMLInputElement>('[name="payment_method"]'),
  }

  if (!setting || !fields) return

  fields.observations!.value = setting.observations
  fields.waranty!.value = setting.warranty
  fields.delivery_time!.value = setting.delivery_time
  fields.transport!.value = setting.transport
  fields.payment_method!.value = setting.payment_method

  console.log(setting)
}