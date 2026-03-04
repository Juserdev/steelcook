export interface Products {
  created_at: string
  description: string
  id: string
  name: string
  price: number
  code: string
}

export interface Products_Config {
  products_content_class: { common_class: string, class: string }
  title: { class_1: string, class_2: string, text: string }
  products_class: {
    file: string
    code: string
    name: string
    description: string
    price: string
  }
  add_product_btn: { class: string, text: string }

}

export interface Create_Product extends Omit<Products, 'created_at' | 'id'> { }