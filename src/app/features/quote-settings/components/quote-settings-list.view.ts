import { quote_setting_title } from "@/app/features/quote-settings/components/quote-settings-title.view";
import { quote_settings_titles_sheets } from "@/app/features/quote-settings/config/quote-settings-title-sheets.config";
import { quote_settings_config } from "@/app/features/quote-settings/config/quote-settings.config";
import type { Quote_Settings } from "@/app/features/quote-settings/types/quote-settings.types";


export function quote_settings_list(quote_settings: Quote_Settings[], header: HTMLDivElement) {


  const home_container = quote_setting_title()

  function quote_settings_title_sheets(quote_settings: Quote_Settings[], container: HTMLDivElement) {
    const qsc = quote_settings_config
    const icon_edit = quote_settings_config.icons.edit
    const icon_remove = quote_settings_config.icons.remove

    const quote_settings_file = document.createElement('div')
    quote_settings_file.classList.add(qsc.qs.file)


    quote_settings.forEach(content => {
      const qs_file = document.createElement('div')
      qs_file.classList.add(qsc.qs.content)
      qs_file.dataset.id = content.id

      const observations = document.createElement('span')
      observations.classList.add(qsc.qs.observations.class_content, qsc.qs.observations.class)
      observations.textContent = content.observations
      observations.dataset.item = `${quote_settings_titles_sheets[0].title}:`

      const warranty = document.createElement('span')
      warranty.classList.add(qsc.qs.warranty.class_content, qsc.qs.warranty.class)
      warranty.textContent = content.warranty
      warranty.dataset.item = `${quote_settings_titles_sheets[1].title}:`

      const delivery_time = document.createElement('span')
      delivery_time.classList.add(qsc.qs.delivery_time.class_content, qsc.qs.delivery_time.class)
      delivery_time.textContent = content.delivery_time
      delivery_time.dataset.item = `${quote_settings_titles_sheets[2].title}:`

      const transport = document.createElement('span')
      transport.classList.add(qsc.qs.transport.class_content, qsc.qs.transport.class)
      transport.textContent = content.transport
      transport.dataset.item = `${quote_settings_titles_sheets[3].title}:`

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

      qs_file.appendChild(observations)
      qs_file.appendChild(warranty)
      qs_file.appendChild(delivery_time)
      qs_file.appendChild(transport)
      qs_file.appendChild(icons_container)

      container.appendChild(qs_file)
    })
  }

  quote_settings_title_sheets(quote_settings, home_container)

  header.appendChild(home_container)

  return home_container
}