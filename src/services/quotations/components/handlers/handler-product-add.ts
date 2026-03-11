import { form_product_aq } from '../config/quotation-product.config';
import { create_form_fields } from '../form/builders/create-form-fields';

export function handler_product_add(btn: HTMLButtonElement, section: HTMLElement) {
  btn.addEventListener('click', () => create_form_fields(form_product_aq, section, 'product'))
}