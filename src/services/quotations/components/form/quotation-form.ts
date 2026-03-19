
import { quotation_btn_add_product } from '@/services/quotations/components/config/quotation-btn-add-product.config'
import { form_client_aq } from '../config/quotation-client.config'
import { form_product_aq } from '../config/quotation-product.config'
import { section_types } from '../config/quotation-section.config'
import { form_total_aq } from '../config/quotation-total.config'
import { form_quote_settings_aq } from '../config/quotations-settings.config'
import { create_form } from './builders/create-form'

import type { Clients } from '@/services/clients/clients.types'
import type { Products } from '@/services/products/products.types'
import type { Profile } from '@/services/profile/profile.types'
import { ids_required } from '@/services/quotations/components/config/ids-required'
import type { Quote_Settings } from '@/services/quote-settings/quote-settings-types'
import { handler_total_tax_amount } from '../config/handler-total-tax-amount'
import { quotation_btn_submit } from '../config/quotation-btn-submit.confing'
import { profile_inputs_map, settings_inputs_map } from '../config/quotation-fill-maps.config'
import { form_profile_quotation_aq } from '../config/quotation-profile.config'
import { handler_client_autofill } from '../handlers/handler-client-autofill'
import { handler_product_add } from '../handlers/handler-product-add'
import { handler_product_autofill } from '../handlers/handler-product-autofill'
import { handler_product_total } from '../handlers/handler-product-total'
import { handler_total_discount } from '../handlers/handler-total-discount'
import { create_datalist } from '../utils/create-datalist'
import { fill_form_fileds } from '../utils/fill_form_fileds'
import { create_btns } from './builders/create-form-btns'
import { create_form_fields } from './builders/create-form-fields'
import { create_form_section } from './builders/create-form-sections'

export function quotation_form(
  header: HTMLDivElement,
  profile: Profile[],
  quote_settings: Quote_Settings[],
  clients: Clients[],
  products: Products[]
): HTMLFormElement {

  const form = create_form()


  const section_profile = create_form_section(section_types.profile, form)
  create_form_fields(form_profile_quotation_aq, section_profile, 'profile', ids_required.profile_id_required)

  // setData in inputs profile

  fill_form_fileds(form, profile[0], profile_inputs_map)

  // formulario de quote_settings

  const section_qs = create_form_section(section_types.quotation, form)
  create_form_fields(form_quote_settings_aq, section_qs, 'quotation', ids_required.settings_id_required)

  //setData in inputs quote_settings

  fill_form_fileds(form, quote_settings[0], settings_inputs_map)

  // formulario de Clientes

  const section_client = create_form_section(section_types.client, form)
  create_form_fields(form_client_aq, section_client, 'client', ids_required.clients_id_required)

  // creacion de options en datalist_clients

  create_datalist(clients, '.client_list', form, client => client.name)

  // agrego los datoa automatios

  handler_client_autofill(form, clients)

  // Formulario de productos

  const section_products = create_form_section(section_types.product, form)
  create_form_fields(form_product_aq, section_products, 'product', ids_required.products_id_required)

  // creacion de options en datalist_products

  create_datalist(products, '.product_list', form, product => product.code)

  // creacion de formulario

  handler_product_autofill(section_products, products)

  // Boton para agregar productos

  const btn_add_product = create_btns(form, quotation_btn_add_product)
  handler_product_add(btn_add_product, section_products)

  // Formulario con detalles finales


  const section_total = create_form_section(section_types.total, form)
  create_form_fields(form_total_aq, section_total, 'total', ids_required.total_id_required)

  // funcion que crea el total de los productos y el total total
  handler_product_total(section_products, section_total)

  // funcion para ejecucion e formulas en el total
  handler_total_discount(section_total)

  handler_total_tax_amount(section_total)

  // Boton submit

  const btn_submit = create_btns(form, quotation_btn_submit)
  form.appendChild(btn_submit)


  header.appendChild(form)

  return form
}