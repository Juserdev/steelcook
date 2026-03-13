import type { Products } from "../products.types";
import { products_title } from "./builders/products-title";
import { products_title_sheets } from "./builders/products-title-sheets";

export function products_list(products: Products[], header: HTMLDivElement) {

  const list_container = products_title()
  products_title_sheets(products, list_container)
  header.appendChild(list_container)



  return list_container

}