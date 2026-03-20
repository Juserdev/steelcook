import { ids_readonly } from "@/services/quotations/components/config/ids-readonly.config"
import { ids_required } from "@/services/quotations/components/config/ids-required.config"
import { form_aq } from "@/services/quotations/components/config/quotation-form-aq.config"
import { form_product_aq } from "@/services/quotations/components/config/quotation-product.config"
import { create_form_fields } from "@/services/quotations/components/form/builders/create-form-fields"
import type { Quotations } from "@/services/quotations/quotations.types"
import { format_thousands_with_dots } from "@/utils/format-numeric-input"


export function fill_quotation_form(id: string, form: HTMLFormElement, quotations: Quotations[]) {
  form.dataset.mode = form_aq.mode.edit
  form.method = form_aq.method.edit

  const quotation = quotations.find(element => element.id === id)
  const section = form.querySelector<HTMLElement>('.section-faq-product')

  if (!quotation || !section) return

  const items = quotation.items

  for (let i = 1; i < items.length; i++) { create_form_fields(form_product_aq, section, 'product', ids_required.products_id_required, ids_readonly.products_id_readonly) }


  const fields = {
    company: {
      company: form.querySelector<HTMLInputElement>('[name="profile_name"]'),
      company_id: form.querySelector<HTMLInputElement>('[name="profile_id"]'),
      email: form.querySelector<HTMLInputElement>('[name="profile_email"]'),
      phone: form.querySelector<HTMLInputElement>('[name="profile_phone"]'),
      address: form.querySelector<HTMLInputElement>('[name="profile_address"]')
    },
    info_quotation: {
      observations: form.querySelector<HTMLInputElement>('[name="settings_observations"]'),
      warranty: form.querySelector<HTMLInputElement>('[name="settings_warranty"]'),
      delivery_time: form.querySelector<HTMLInputElement>('[name="settings_delivery_time"]'),
      transport: form.querySelector<HTMLInputElement>('[name="settings_transport"]'),
      payment_method: form.querySelector<HTMLInputElement>('[name="settings_payment_method"]')
    },
    client: {
      name: form.querySelector<HTMLInputElement>('[name="client_name"]'),
      client_id: form.querySelector<HTMLInputElement>('[name="client_id"]'),
      email: form.querySelector<HTMLInputElement>('[name="client_email"]'),
      phone: form.querySelector<HTMLInputElement>('[name="client_phone"]'),
      address: form.querySelector<HTMLInputElement>('[name="client_address"]')
    },
    items: {
      code: form.querySelectorAll<HTMLInputElement>('[name="product_code"]'),
      name: form.querySelectorAll<HTMLInputElement>('[name="product_names"]'),
      description: form.querySelectorAll<HTMLInputElement>('[name="product_descriptions"]'),
      price: form.querySelectorAll<HTMLInputElement>('[name="product_prices"]'),
      quantity: form.querySelectorAll<HTMLInputElement>('[name="product_quantites"]'),
      total: form.querySelectorAll<HTMLInputElement>('[name="product_totals"]')
    },
    total: {
      total_code: form.querySelector<HTMLInputElement>('[name="total_code"]'),
      subtotal: form.querySelector<HTMLInputElement>('[name="total_subtotal"]'),
      discount: form.querySelector<HTMLInputElement>('[name="total_discount"]'),
      net: form.querySelector<HTMLInputElement>('[name="total_net"]'),
      tax_rate: form.querySelector<HTMLInputElement>('[name="total_tax_rate"]'),
      tax_amount: form.querySelector<HTMLInputElement>('[name="total_tax_amount"]'),
      total: form.querySelector<HTMLInputElement>('[name="total_total"]')
    }
  }

  // detalles de la cotizacion

  const profile_data = quotation.profile_snapshot
  const profile_fields = fields.company

  const quote_data = quotation.quote_settings
  const quote_fields = fields.info_quotation

  const client_info = quotation.client_snapshot
  const client = fields.client

  const items_data = quotation.items
  const items_fields = fields.items

  const total_fields = fields.total

  if (!fields) return

  profile_fields.company!.value = profile_data.company ?? ''
  profile_fields.company_id!.value = String(profile_data.company_id ?? '')
  profile_fields.email!.value = profile_data.email ?? ''
  profile_fields.phone!.value = String(profile_data.phone ?? '')
  profile_fields.address!.value = profile_data.address ?? ''

  quote_fields.observations!.value = quote_data.observations ?? ''
  quote_fields.warranty!.value = quote_data.warranty ?? ''
  quote_fields.delivery_time!.value = quote_data.delivery_time ?? ''
  quote_fields.transport!.value = quote_data.transport ?? ''
  quote_fields.payment_method!.value = quote_data.payment_method ?? ''

  client.name!.value = client_info.name ?? ''
  client.client_id!.value = String(client_info.client_id) ?? ''
  client.email!.value = client_info.email ?? ''
  client.phone!.value = String(client_info.phone) ?? ''
  client.address!.value = String(client_info.address) ?? ''

  items_data.forEach((item, i) => {
    items_fields.code[i].value = item.code ?? ''
    items_fields.name[i].value = item.name ?? ''
    items_fields.description[i].value = item.description ?? ''
    items_fields.price[i].value = format_thousands_with_dots(String(item.price)) ?? ''
    items_fields.quantity[i].value = String(item.quantity) ?? ''
    items_fields.total[i].value = format_thousands_with_dots(String(item.total)) ?? ''
  })

  total_fields.total_code!.value = quotation.quotation_id ?? ''
  total_fields.subtotal!.value = format_thousands_with_dots(String(quotation.subtotal)) ?? ''
  total_fields.discount!.value = format_thousands_with_dots(String(quotation.discount)) ?? ''
  total_fields.net!.value = String(quotation.net) ?? ''
  total_fields.tax_rate!.value = String(quotation.tax_rate) ?? ''
  total_fields.tax_amount!.value = format_thousands_with_dots(String(quotation.tax_amount)) ?? ''
  total_fields.total!.value = format_thousands_with_dots(String(quotation.total)) ?? ''

}