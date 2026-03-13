import { quote_settings_config } from "../quote-settings-config";
import type { Quote_Settings } from "../quote-settings-types";

export function quote_settings_list(quote_settings: Quote_Settings[], header: HTMLDivElement) {
  const list_contaier = document.createElement("div")
  list_contaier.classList.add(quote_settings_config.qs.file)


  quote_settings.forEach(qs => {
    const qs_config = quote_settings_config.qs

    const content = document.createElement("div")
    content.classList.add(quote_settings_config.qs.content)

    const observations_title = document.createElement('h2')
    observations_title.classList.add(qs_config.observations.class)
    observations_title.textContent = qs_config.observations.title

    const observations_text = document.createElement('p')
    observations_text.classList.add(qs_config.observations.class_content)
    observations_text.textContent = qs.observations

    const warranty_title = document.createElement('h2')
    warranty_title.classList.add(qs_config.warranty.class)
    warranty_title.textContent = qs_config.warranty.title

    const warranty_text = document.createElement('p')
    warranty_text.classList.add(qs_config.warranty.class_content)
    warranty_text.textContent = qs.warranty

    const delivery_time_title = document.createElement('h2')
    delivery_time_title.classList.add(qs_config.delivery_time.class)
    delivery_time_title.textContent = qs_config.delivery_time.title

    const delivery_time_text = document.createElement('p')
    delivery_time_text.classList.add(qs_config.delivery_time.class_content)
    delivery_time_text.textContent = qs.delivery_time

    const transport_title = document.createElement('h2')
    transport_title.classList.add(qs_config.transport.class)
    transport_title.textContent = qs_config.transport.title

    const transport_text = document.createElement('p')
    transport_text.classList.add(qs_config.transport.class_content)
    transport_text.textContent = qs.transport

    content.appendChild(observations_title)
    content.appendChild(observations_text)

    content.appendChild(warranty_title)
    content.appendChild(warranty_text)

    content.appendChild(delivery_time_title)
    content.appendChild(delivery_time_text)

    content.appendChild(transport_title)
    content.appendChild(transport_text)

    list_contaier.appendChild(content)
  })


  header.appendChild(list_contaier)
}