import { quote_settings_config } from "./config/quote-settings.config"


export function quote_settings_header(): HTMLDivElement {
  const quote_Settings_container = document.createElement('div')
  quote_Settings_container.classList.add(quote_settings_config.qs_container_class.common_class, quote_settings_config.qs_container_class.class, 'active')

  const title = document.createElement('h1')
  title.classList.add(quote_settings_config.title.class_1, quote_settings_config.title.class_2)
  title.textContent = quote_settings_config.title.text

  quote_Settings_container.appendChild(title)

  const add_quotation_btn = document.createElement("button")
  add_quotation_btn.classList.add(quote_settings_config.add_qs_btn.class)
  add_quotation_btn.textContent = quote_settings_config.add_qs_btn.text
  add_quotation_btn.dataset.add_quote_settings = quote_settings_config.add_qs_btn.dataset

  quote_Settings_container.appendChild(title)
  quote_Settings_container.appendChild(add_quotation_btn)

  return quote_Settings_container
}