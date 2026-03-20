import { ids_readonly } from '@/services/quotations/components/config/ids-readonly.config';
import { ids_required } from '@/services/quotations/components/config/ids-required.config';
import { form_product_aq } from '@/services/quotations/components/config/quotation-product.config';
import { create_form_fields } from '@/services/quotations/components/form/builders/create-form-fields';


export function handler_product_add(btn: HTMLButtonElement, section: HTMLElement) {
  btn.addEventListener('click', () => create_form_fields(form_product_aq, section, 'product', ids_required.products_id_required, ids_readonly.products_id_readonly))
}