import { ids_readonly } from '@/app/features/quotations/config/ids-readonly.config';
import { ids_required } from '@/app/features/quotations/config/ids-required.config';
import { form_product_aq } from '@/app/features/quotations/config/quotation-product.config';
import { create_form_fields } from '../components/create-form-fields';

export function handler_product_add(btn: HTMLButtonElement, section: HTMLElement) {
  btn.addEventListener('click', () => create_form_fields(form_product_aq, section, 'product', ids_required.products_id_required, ids_readonly.products_id_readonly))
}