import { products_config } from "@/app/config/products/products.config"


export function products_header(): HTMLDivElement {
  const products_container = document.createElement('div')
  products_container.classList.add(products_config.products_content_class.common_class, products_config.products_content_class.class, 'active')

  const title = document.createElement('h1')
  title.classList.add(products_config.title.class_1, products_config.title.class_2)
  title.textContent = products_config.title.text

  const add_product_btn = document.createElement("button")
  add_product_btn.classList.add(products_config.add_product_btn.class)
  add_product_btn.textContent = products_config.add_product_btn.text
  add_product_btn.dataset.add_product = "add_product"

  products_container.appendChild(title)
  products_container.appendChild(add_product_btn)

  return products_container
}