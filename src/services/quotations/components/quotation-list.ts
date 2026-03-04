import { quotation_titles_sheets, quotations_config } from "../quotations-config";
import type { Quotations } from "../quotations.types";

export function quotation_list(quotations: Quotations[], header: HTMLDivElement) {

  const list_container = document.createElement('div')
  list_container.classList.add("list-container-quotations")

  const quotations_titles_sheet = document.createElement("div")
  quotations_titles_sheet.classList.add("quotations-titles-sheet")

  list_container.appendChild(quotations_titles_sheet)

  quotation_titles_sheets.forEach(title => {
    const titles = document.createElement("h3")
    titles.classList.add(title.class, title.common_class)
    titles.textContent = title.title

    quotations_titles_sheet.appendChild(titles)

  });

  quotations.forEach(quotation => {
    const quotation_file = document.createElement('div')
    quotation_file.classList.add(quotations_config.quotations_class.file)


    const quotation_id = document.createElement('sapn')
    quotation_id.classList.add(quotations_config.quotations_class.id)
    quotation_id.textContent = quotation.quotation_id

    const quotation_client = document.createElement('span')
    quotation_client.classList.add(quotations_config.quotations_class.client)
    quotation_client.textContent = quotation.client_snapshot.name

    const quotation_phone = document.createElement('span')
    quotation_phone.classList.add(quotations_config.quotations_class.phone)
    quotation_phone.textContent = quotation.client_snapshot.phone

    const quotation_total = document.createElement('span')
    quotation_total.classList.add(quotations_config.quotations_class.total)
    quotation_total.textContent = quotation.total.toString()

    const quotation_date = document.createElement('span')
    quotation_date.classList.add(quotations_config.quotations_class.date)

    const date = new Date(quotation.created_at)
    const formatted_date = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    quotation_date.textContent = formatted_date

    const quotation_button = document.createElement('button')
    quotation_button.classList.add(quotations_config.quotations_class.button)
    quotation_button.textContent = quotations_config.title.text_button
    quotation_button.dataset.public_id = quotation.public_id

    quotation_file.appendChild(quotation_id)
    quotation_file.appendChild(quotation_client)
    quotation_file.appendChild(quotation_phone)
    quotation_file.appendChild(quotation_total)
    quotation_file.appendChild(quotation_date)
    quotation_file.appendChild(quotation_button)

    list_container.appendChild(quotation_file)
  });

  header.appendChild(list_container)


}