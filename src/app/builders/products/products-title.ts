import { product_titles_sheets } from "@/app/config/products/products.config"


export function products_title(): HTMLDivElement {
  const list_container = document.createElement('div')
  list_container.classList.add("list-container-product")

  const product_titles_sheet_container = document.createElement("div")
  product_titles_sheet_container.classList.add("products-titles-sheet")

  list_container.appendChild(product_titles_sheet_container)

  product_titles_sheets.forEach(title => {
    const titles = document.createElement("h3")
    titles.classList.add(title.class, title.common_class)
    titles.textContent = title.title

    product_titles_sheet_container.appendChild(titles)

  });

  return list_container
}