import { quotations_config } from "@/app/features/quotations/config/quotations.config";
import type { Quotations } from "@/app/features/quotations/types/quotations.types";

export function quotation_title_sheets(quotations: Quotations[], container: HTMLDivElement) {

  quotations.forEach(quotation => {

    const icon_edit = quotations_config.icons.edit
    const icon_remove = quotations_config.icons.remove

    const quotation_file = document.createElement('div')
    quotation_file.classList.add(quotations_config.quotations_class.file)
    quotation_file.dataset.id = quotation.id

    const quotation_id = document.createElement('sapn')
    quotation_id.classList.add(quotations_config.quotations_class.id)
    quotation_id.textContent = quotation.quotation_id

    const quotation_client = document.createElement('span')
    quotation_client.classList.add(quotations_config.quotations_class.client)
    quotation_client.textContent = quotation.client_snapshot.name

    const quotation_phone = document.createElement('span')
    quotation_phone.classList.add(quotations_config.quotations_class.phone)
    quotation_phone.textContent = String(quotation.client_snapshot.phone ?? '')

    const quotation_total = document.createElement('span')
    quotation_total.classList.add(quotations_config.quotations_class.total)
    quotation_total.textContent = String(quotation.total) ?? ''

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

    const icons_container = document.createElement('div')
    icons_container.classList.add(quotations_config.icons.container_class)

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

    quotation_file.appendChild(icons_container)

    container.appendChild(quotation_file)
  });
}