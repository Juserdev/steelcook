import type { Send_Quote_Settings } from "@/app/types/quote-settings/quote-settings.types"

export function extract_quote_settings(form: HTMLFormElement): Send_Quote_Settings {
  const formData = new FormData(form)

  const observations = formData.get('observations') as string
  const waranty = formData.get('waranty') as string
  const delivery_time = formData.get('delivery_time') as string
  const transport = formData.get('transport') as string
  const payment_method = formData.get('payment_method') as string

  const new_qs: Send_Quote_Settings = {
    observations: observations,
    warranty: waranty,
    delivery_time: delivery_time,
    transport: transport,
    payment_method: payment_method
  }

  return new_qs
}