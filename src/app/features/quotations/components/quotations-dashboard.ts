import { quotations_config } from "../config/quotations.config"

export function quotation_headers(): HTMLDivElement {
  const quotations_container = document.createElement('div')
  quotations_container.classList.add(quotations_config.quotations_container_class.common_class, quotations_config.quotations_container_class.class, 'active')

  const title = document.createElement('h1')
  title.classList.add(quotations_config.title.class_1, quotations_config.title.class_2)
  title.textContent = quotations_config.title.text

  quotations_container.appendChild(title)

  const add_quotation_btn = document.createElement("button")
  add_quotation_btn.classList.add(quotations_config.add_quotation_btn.class)
  add_quotation_btn.textContent = quotations_config.add_quotation_btn.text
  add_quotation_btn.dataset.add_quotation = "add_quotation"

  quotations_container.appendChild(title)
  quotations_container.appendChild(add_quotation_btn)

  return quotations_container
}