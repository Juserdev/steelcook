import { product_titles_sheets, products_config } from "./products-config"
import type { Products } from "./products.types"

export function content_products(products: Products[]): HTMLDivElement {
  const products_container = document.createElement('div')
  products_container.classList.add(products_config.products_content_class.common_class, products_config.products_content_class.class, 'active')

  const title = document.createElement('h1')
  title.classList.add(products_config.title.class_1, products_config.title.class_2)
  title.textContent = products_config.title.text

  products_container.appendChild(title)

  const product_titles_sheet_container = document.createElement("div")
  product_titles_sheet_container.classList.add("quotations-titles-sheet")

  products_container.appendChild(product_titles_sheet_container)

  product_titles_sheets.forEach(title => {
    const titles = document.createElement("h3")
    titles.classList.add(title.class, title.common_class)
    titles.textContent = title.title

    product_titles_sheet_container.appendChild(titles)

  });

  products.forEach(product => {
    const products_file = document.createElement('div')
    products_file.classList.add(products_config.products_class.file)

    const product_code = document.createElement('span')
    product_code.classList.add(products_config.products_class.code)
    product_code.textContent = product.code

    const product_name = document.createElement('span')
    product_name.classList.add(products_config.products_class.name)
    product_name.textContent = product.name

    const product_description = document.createElement('span')
    product_description.classList.add(products_config.products_class.description)
    product_description.textContent = product.description

    const product_price = document.createElement('span')
    product_price.classList.add(products_config.products_class.price)
    product_price.textContent = product.price.toString()

    products_file.appendChild(product_code)
    products_file.appendChild(product_name)
    products_file.appendChild(product_description)
    products_file.appendChild(product_price)

    products_container.appendChild(products_file)
  })


  return products_container
}