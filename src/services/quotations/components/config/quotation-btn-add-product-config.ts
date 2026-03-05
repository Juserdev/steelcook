import type { Button_Type } from "@/types/form.types"

export interface Btn_Add_Product {
  type: Button_Type
  class: string
  text: string
}

export const btn_add_product: Btn_Add_Product = {
  type: 'button',
  class: 'btn-add-product',
  text: "Agregar producto"
}

