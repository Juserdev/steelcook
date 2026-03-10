import type { Btn_Add_Quottion } from "../../config/btn.types"
import { quotation_btn_add_product } from "../../config/quotation-btn-add-product.config"

quotation_btn_add_product

export function create_btns(form: HTMLFormElement, btn: Btn_Add_Quottion) {
  const add_product_btn = document.createElement("button")
  add_product_btn.type = btn.type
  add_product_btn.classList.add(btn.class)
  add_product_btn.textContent = btn.text

  form.appendChild(add_product_btn)

  return add_product_btn
}