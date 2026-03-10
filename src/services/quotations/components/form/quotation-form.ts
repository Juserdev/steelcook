
import { quotation_btn_add_product } from '@/services/quotations/components/config/quotation-btn-add-product.config'
import { section_types } from '../config/quotation-section.config'
import { form_quote_settings_aq } from '../config/quotations-settings.config'
import { form_client_aq } from '../config/quotation-client.config'
import { form_product_aq } from '../config/quotation-product.config'
import { form_total_aq } from '../config/quotation-total.config'
import { create_form } from './builders/create-form'

import { create_form_section } from './builders/create-form-sections'
import { form_profile_quotation_aq } from '../config/quotation-profile.config'
import { create_form_fields } from './builders/create-form-fields'
import { quotation_btn_submit } from '../config/quotation-btn-submit.confing'
import { create_btns } from './builders/create-form-btns'
import { handler_add_product } from '../handlers/handler-add-product'
import { handler_submit } from '../handlers/handler-submit'
import type { Profile } from '@/services/profile/profile.types'
import type { Quote_Settings } from '@/services/quote-settings/quote-settings-types'
import { fill_form_fileds } from '../utils/fill_form_fileds'
import { profile_inputs_map, settings_inputs_map } from '../config/quotation-fill-maps.config'
import type { Clients } from '@/services/clients/clients.types'
import type { Products } from '@/services/products/products.types'

export function quotation_form(
  TOKEN: string,
  header: HTMLDivElement,
  profile: Profile[],
  quote_settings: Quote_Settings[],
  clients: Clients[],
  products: Products[]
) {

  const form = create_form()

  const section_profile = create_form_section(section_types.profile, form)
  create_form_fields(form_profile_quotation_aq, section_profile, 'profile')

  //* setData in inputs profile

  fill_form_fileds(form, profile[0], profile_inputs_map)

  // formulario de quote_settings

  const section_qs = create_form_section(section_types.quotation, form)
  create_form_fields(form_quote_settings_aq, section_qs, 'quotation')

  //* serData in inputs quote_settings

  fill_form_fileds(form, quote_settings[0], settings_inputs_map)

  // formulario de Clientes

  const section_client = create_form_section(section_types.client, form)
  create_form_fields(form_client_aq, section_client, 'client')

  //* creacion de options en datalist_clients

  const datalist_clients = form.querySelector('.client_list')

  clients.forEach(client => {
    const option = document.createElement('option')
    option.value = client.name

    datalist_clients?.appendChild(option)
  })

  //* agrego los datoa automatios

  const c_input_name = form.elements.namedItem('client_name') as HTMLInputElement
  const c_input_id = form.elements.namedItem('client_id') as HTMLInputElement
  const c_input_email = form.elements.namedItem('client_email') as HTMLInputElement
  const c_input_phone = form.elements.namedItem('client_phone') as HTMLInputElement
  const c_input_address = form.elements.namedItem('client_address') as HTMLInputElement

  c_input_name.addEventListener('input', () => {
    const client_selected = clients.find(client => client.name === c_input_name.value)

    if (!client_selected) return

    if (c_input_id) c_input_id.value = String(client_selected.client_id)
    if (c_input_email) c_input_email.value = client_selected.email
    if (c_input_phone) c_input_phone.value = String(client_selected.phone)
    if (c_input_address) c_input_address.value = client_selected.address

  })


  // Formulario de productos

  const section_products = create_form_section(section_types.product, form)
  create_form_fields(form_product_aq, section_products, 'product')

  //* creacion de options en datalist_products

  const datalist_products = form.querySelector('.product_list')

  products.forEach(product => {
    const option = document.createElement('option')
    option.value = product.code

    datalist_products?.appendChild(option)
  })

  const p_input_code = form.querySelectorAll('[name="product_code"]') as NodeListOf<HTMLInputElement>
  const p_input_name = form.querySelectorAll('[name="product_names"]') as NodeListOf<HTMLInputElement>
  const p_input_description = form.querySelectorAll('[name="product_descriptions"]') as NodeListOf<HTMLInputElement>
  const p_input_price = form.querySelectorAll('[name="product_prices"]') as NodeListOf<HTMLInputElement>
  const p_input_quantites = form.querySelectorAll('[name="product_quantites"]') as NodeListOf<HTMLInputElement>
  const p_input_totals = form.querySelectorAll('[name="product_totals"]') as NodeListOf<HTMLInputElement>

  console.log(p_input_code, p_input_name, p_input_description, p_input_price, p_input_quantites, p_input_totals)

  p_input_code.forEach((product_code, i) => {
    product_code.addEventListener('input', () => {
      const product_selected = products.find(product => product.code === product_code.value)

      if (!product_selected) return

      if (p_input_name[i]) p_input_name[i].value = product_selected.name
      if (p_input_description[i]) p_input_description[i].value = product_selected.description
      if (p_input_price[i]) p_input_price[i].value = String(product_selected.price)

    })
  })


  // Boton para agregar productos

  const btn_add_product = create_btns(form, quotation_btn_add_product)

  handler_add_product(btn_add_product, section_products)

  // btn_add_product.addEventListener('click', () => create_form_fields(form_product_aq, section_products, 'product'))

  // Formulario con detalles finales

  const section_total = create_form_section(section_types.total, form)
  create_form_fields(form_total_aq, section_total, 'total')

  // Boton submit

  const btn_submit = create_btns(form, quotation_btn_submit)

  form.appendChild(btn_submit)

  // handler submit

  handler_submit(form, TOKEN)


  header.appendChild(form)
}