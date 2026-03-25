import { create_form_fields } from '@/app/builders/quotation/create-form-fields';
import { ids_readonly } from '@/app/config/quotations/ids-readonly.config';
import { ids_required } from '@/app/config/quotations/ids-required.config';
import { form_product_aq } from '@/app/config/quotations/quotation-product.config';

export function handler_product_add(btn: HTMLButtonElement, section: HTMLElement) {
  btn.addEventListener('click', () => create_form_fields(form_product_aq, section, 'product', ids_required.products_id_required, ids_readonly.products_id_readonly))
}