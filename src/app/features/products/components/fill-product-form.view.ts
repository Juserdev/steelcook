import { form_add_product } from "@/app/features/products/config/form-add-product.config";
import type { Products } from "@/app/features/products/types/products.types";
import { format_thousands_with_dots } from "@/app/shared/utils/format/format-numeric-input.utils";

export function fill_product_form(
  id: string,
  form: HTMLFormElement,
  products: Products[]
) {
  const form_mm = form_add_product.form

  form.dataset.mode = form_mm.mode.edit
  form.method = form_mm.method.edit

  const product = products.find(element => element.id === id)

  const fields = {
    code: form.querySelector<HTMLInputElement>('[name="code"]'),
    name: form.querySelector<HTMLInputElement>('[name="name"]'),
    description: form.querySelector<HTMLInputElement>('[name="description"]'),
    price: form.querySelector<HTMLInputElement>('[name="price"]'),
  }

  if (!product || !fields) return

  fields.code!.value = product.code ?? ''
  fields.name!.value = product.name ?? ''
  fields.description!.value = product.description ?? ''
  fields.price!.value = format_thousands_with_dots(String(product.price)) ?? ''

}