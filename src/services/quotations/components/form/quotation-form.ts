
import { quotation_btn_add_product } from '@/services/quotations/components/config/quotation-btn-add-product-config'
import { section_types } from '../config/quotation-section-config'
import { form_quote_settings_aq } from '../config/quotations-settings-config'
import { form_client_aq } from '../config/quotation-client-config'
import { form_product_aq } from '../config/quotation-product-config'
import { form_total_aq } from '../config/quotation-total-config'
import { create_form } from './builders/create-form'

import { create_form_section } from './builders/create-form-sections'
import { form_profile_quotation_aq } from '../config/quotation-profile-config'
import { create_form_fields } from './builders/create-form-fields'
import { quotation_btn_submit } from '../config/quotation-btn-submit-confing'
import { create_btns } from './builders/create-form-btns'
import { handler_add_product } from '../handlers/handler-add-product'
import { handler_submit } from '../handlers/handler-submit'

export function quotation_form(TOKEN: string, header: HTMLDivElement) {

  const form = create_form()

  const section_profile = create_form_section(section_types.profile, form)
  create_form_fields(form_profile_quotation_aq, section_profile, 'profile')

  // formulario de quote_settings

  const section_qs = create_form_section(section_types.quotation, form)
  create_form_fields(form_quote_settings_aq, section_qs, 'quotation')

  // formulario de Clientes

  const section_client = create_form_section(section_types.client, form)
  create_form_fields(form_client_aq, section_client, 'client')

  // Formulario de productos

  const section_products = create_form_section(section_types.product, form)
  create_form_fields(form_product_aq, section_products, 'product')

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