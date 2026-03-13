import { sections } from "@/services/quotations/components/config/quotation-section.config"

type SectionName = keyof typeof sections

export function create_form_section(section: SectionName, form: HTMLFormElement): HTMLElement {
  const config = sections[section]

  const title_quote_settings = document.createElement('h2')
  title_quote_settings.classList.add(config.class_title)
  title_quote_settings.textContent = config.title_content

  form.appendChild(title_quote_settings)

  const section_quote_settings = document.createElement("section")
  section_quote_settings.classList.add(config.class_section)

  form.appendChild(section_quote_settings)

  return section_quote_settings
}