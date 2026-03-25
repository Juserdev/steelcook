import type { Btn_Add_Quottion } from "@/app/types/quotations/btn.types"

export function create_btns(form: HTMLFormElement, btn: Btn_Add_Quottion) {
  const add_product_btn = document.createElement("button")
  add_product_btn.type = btn.type
  add_product_btn.classList.add(btn.class)
  add_product_btn.textContent = btn.text

  form.appendChild(add_product_btn)

  return add_product_btn
}