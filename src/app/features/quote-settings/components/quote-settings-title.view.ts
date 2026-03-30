import { quote_settings_titles_sheets } from "@/app/features/quote-settings/config/quote-settings-title-sheets.config"
import { quote_settings_config } from "@/app/features/quote-settings/config/quote-settings.config"

export function quote_setting_title() {

  const list_container = document.createElement("div")
  list_container.classList.add(quote_settings_config.qs.file)

  const quote_settings_titles_sheet_container = document.createElement("div")
  quote_settings_titles_sheet_container.classList.add("quote-settings-titles-sheet")

  list_container.appendChild(quote_settings_titles_sheet_container)

  quote_settings_titles_sheets.forEach(quote => {
    const titles = document.createElement("h3")
    titles.classList.add(quote.class, quote.common_class)
    titles.textContent = quote.title

    quote_settings_titles_sheet_container.appendChild(titles)
  })

  return list_container
}