import { quote_settings_config } from "@/app/features/quote-settings/config/quote-settings.config";
import type { Quote_Settings } from "../../../app/types/quote-settings/quote-settings.types";


export function quote_settings_list(quote_settings: Quote_Settings[], header: HTMLDivElement) {
  const list_contaier = document.createElement("div")
  list_contaier.classList.add(quote_settings_config.qs.file)


  quote_settings.forEach(qs => {
    const qs_config = quote_settings_config.qs

    const content = document.createElement("div")
    content.classList.add(quote_settings_config.qs.content)
    content.dataset.id = qs.id

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

    const icon_edit = quote_settings_config.icons.edit
    const icon_remove = quote_settings_config.icons.remove

    const icons_container = document.createElement('div')
    icons_container.classList.add(quote_settings_config.icons.container_class)

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

    content.appendChild(icons_container)
  })


  header.appendChild(list_contaier)

  return list_contaier
}