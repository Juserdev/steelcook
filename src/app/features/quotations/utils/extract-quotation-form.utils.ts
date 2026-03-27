import type { Send_Quote_Product } from "@/app/features/products/types/products.types"
import type { Send_Quote_Profile } from "@/app/features/profile/types/profile.types"

import type { Send_Quote_Client } from "@/app/features/clients/types/clients.types"
import type { Send_Create_Quotation } from "@/app/features/quotations/types/quotations.types"
import type { Send_Quote_Settings } from "@/app/features/quote-settings/types/quote-settings.types"
import { parce_formatted_number } from "@/app/shared/utils/format/parce-formatted-number.utils"


export function extract_quotation_form(form: HTMLFormElement): Send_Create_Quotation {
  const formData = new FormData(form)

  const dq_profile_company = String(formData.get('profile_name'))
  const dq_profile_id = Number(formData.get('profile_id'))
  const dq_profile_email = String(formData.get('profile_email'))
  const dq_profile_phone = formData.get('profile_phone') === null || formData.get('profile_phone') === "" ? null : Number(formData.get('profile_phone'))
  const dq_profile_address = String(formData.get('profile_address'))

  const dq_profile: Send_Quote_Profile = {
    company: dq_profile_company,
    company_id: dq_profile_id,
    email: dq_profile_email,
    phone: dq_profile_phone,
    address: dq_profile_address
  }

  const dq_settings_obsevations = String(formData.get('settings_observations'))
  const dq_settings_warranty = String(formData.get('settings_warranty'))
  const dq_settings_delivery_time = String(formData.get('settings_delivery_time'))
  const dq_settings_transport = String(formData.get('settings_transport'))
  const dq_settings_payment_method = String(formData.get('settings_payment_method'))

  const dq_settings: Send_Quote_Settings = {
    observations: dq_settings_obsevations,
    warranty: dq_settings_warranty,
    delivery_time: dq_settings_delivery_time,
    transport: dq_settings_transport,
    payment_method: dq_settings_payment_method
  }

  const dq_client_name = String(formData.get('client_name'))
  const dq_client_id = formData.get('client_id') === null || formData.get('client_id') === "" ? null : Number(formData.get('client_id'))
  const dq_client_email = String(formData.get('client_email'))
  const dq_client_phone = formData.get('client_phone') === null || formData.get('client_phone') === "" ? null : Number(formData.get('client_phone'))
  const dq_client_address = String(formData.get('client_address'))

  const dq_clients: Send_Quote_Client = {
    name: dq_client_name,
    client_id: dq_client_id,
    email: dq_client_email,
    phone: dq_client_phone,
    address: dq_client_address
  }

  const dq_product_codes = formData.getAll('product_code')
  const dq_product_names = formData.getAll('product_names')
  const dq_product_descriptions = formData.getAll('product_descriptions')
  const dq_product_prices = formData.getAll('product_prices')
  const dq_product_quantites = formData.getAll('product_quantites')
  const dq_product_totals = formData.getAll('product_totals')

  const dq_items: Send_Quote_Product[] = dq_product_names.map((_, i) => ({
    code: String(dq_product_codes[i]),
    name: String(dq_product_names[i]),
    description: String(dq_product_descriptions[i]),
    price: parce_formatted_number(String(dq_product_prices[i])),
    quantity: parce_formatted_number(String(dq_product_quantites[i])),
    total: parce_formatted_number(String(dq_product_totals[i]))
  }))

  const dq_quote_code = String(formData.get('total_code'))

  const dq_total_subtotal = String(formData.get('total_subtotal'))
  const dq_total_discount = Number(formData.get('total_discount'))
  const dq_total_net = String(formData.get('total_net'))
  const dq_total_tax_rate = Number(formData.get('total_tax_rate'))
  const dq_total_tax_amount = Number(formData.get('total_tax_amount'))
  const dq_total_total = String(formData.get('total_total'))

  const new_quote: Send_Create_Quotation = {
    quotation_id: dq_quote_code,
    profile_snapshot: dq_profile,
    quote_settings: dq_settings,
    client_snapshot: dq_clients,
    items: dq_items,
    subtotal: parce_formatted_number(dq_total_subtotal),
    discount: dq_total_discount,
    net: parce_formatted_number(dq_total_net),
    tax_rate: dq_total_tax_rate,
    tax_amount: dq_total_tax_amount,
    total: parce_formatted_number(dq_total_total)
  }

  return new_quote
}