
import type { Clients } from '@/app/features/clients/types/clients.types'
import type { Products } from '@/app/features/products/types/products.types'
import type { Profile } from '@/app/features/profile/types/profile.types'
import { create_form } from '@/app/features/quotations/components/create-form'
import { create_btns } from '@/app/features/quotations/components/create-form-btns'
import { create_form_fields } from '@/app/features/quotations/components/create-form-fields'
import { create_form_section } from '@/app/features/quotations/components/create-form-sections'
import { ids_readonly } from '@/app/features/quotations/config/ids-readonly.config'
import { ids_required } from '@/app/features/quotations/config/ids-required.config'
import { quotation_btn_add_product } from '@/app/features/quotations/config/quotation-btn-add-product.config'
import { quotation_btn_submit } from '@/app/features/quotations/config/quotation-btn-submit.confing'
import { form_client_aq } from '@/app/features/quotations/config/quotation-client.config'
import { profile_inputs_map, settings_inputs_map } from '@/app/features/quotations/config/quotation-fill-maps.config'
import { form_product_aq } from '@/app/features/quotations/config/quotation-product.config'
import { form_profile_quotation_aq } from '@/app/features/quotations/config/quotation-profile.config'
import { section_types } from '@/app/features/quotations/config/quotation-section.config'
import { form_total_aq } from '@/app/features/quotations/config/quotation-total.config'
import { form_quote_settings_aq } from '@/app/features/quotations/config/quotations-settings.config'
import { handle_client_autofill } from '@/app/features/quotations/handlers/handle-client-autofill'
import { handle_product_add } from '@/app/features/quotations/handlers/handle-product-add'
import { handle_product_autofill } from '@/app/features/quotations/handlers/handle-product-autofill'
import { handle_product_total } from '@/app/features/quotations/handlers/handle-product-total'
import { handler_total_discount } from '@/app/features/quotations/handlers/handle-total-discount'
import { handle_total_tax_amount } from '@/app/features/quotations/handlers/handle-total-tax-amount'
import { create_datalist } from '@/app/features/quotations/utils/create-datalist'
import { fill_form_fileds } from '@/app/features/quotations/utils/fill_form_fileds'
import type { Quote_Settings } from '@/app/features/quote-settings/types/quote-settings.types'


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

  handle_client_autofill(form, clients)

  // Formulario de productos

  const section_products = create_form_section(section_types.product, form)
  create_form_fields(form_product_aq, section_products, 'product', ids_required.products_id_required, ids_readonly.products_id_readonly)

  // creacion de options en datalist_products

  create_datalist(products, '.product_list', form, product => product.code)

  // creacion de formulario

  handle_product_autofill(section_products, products)

  // Boton para agregar productos 

  const btn_add_product = create_btns(form, quotation_btn_add_product)
  handle_product_add(btn_add_product, section_products)

  // Formulario con detalles finales

  const section_total = create_form_section(section_types.total, form)
  create_form_fields(form_total_aq, section_total, 'total', ids_required.total_id_required, ids_readonly.totals_id_readonly)

  // funcion que crea el total de los productos y el total total
  handle_product_total(section_products, section_total)

  // funcion para ejecucion e formulas en el total
  handler_total_discount(section_total)

  handle_total_tax_amount(section_total)

  // Boton submit

  const btn_submit = create_btns(form, quotation_btn_submit)
  form.appendChild(btn_submit)

  header.appendChild(form)

  return form
}