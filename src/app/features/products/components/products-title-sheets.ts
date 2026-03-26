import { products_config } from "@/app/features/products/config/products.config";
import type { Products } from "@/app/features/products/types/products.types";
import { format_thousands_with_dots } from "@/app/shared/utils/format/format-numeric-input";


export function products_title_sheets(products: Products[], container: HTMLDivElement) {

  products.forEach(product => {

    const icon_edit = products_config.icons.edit
    const icon_remove = products_config.icons.remove

    const products_file = document.createElement('div')
    products_file.classList.add(products_config.products_class.file)
    products_file.dataset.id = product.id
    products_file.dataset.code = product.code
    products_file.dataset.name = product.name
    products_file.dataset.description = product.description
    products_file.dataset.price = format_thousands_with_dots(String(product.price))

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
    const format_price = format_thousands_with_dots(String(product.price))
    product_price.textContent = `$${format_price}`

    const icons_container = document.createElement('div')
    icons_container.classList.add(products_config.icons.container_class)

    const edit = document.createElement('img')
    edit.src = icon_edit.src
    edit.alt = icon_edit.alt
    edit.classList.add(icon_edit.class)

    const remove = document.createElement('img')
    remove.src = icon_remove.src
    remove.alt = icon_remove.alt
    remove.classList.add(icon_remove.class)

    icons_container.appendChild(edit)
    icons_container.appendChild(remove)

    products_file.appendChild(product_code)
    products_file.appendChild(product_name)
    products_file.appendChild(product_description)
    products_file.appendChild(product_price)
    products_file.appendChild(icons_container)

    container.appendChild(products_file)
  })

}