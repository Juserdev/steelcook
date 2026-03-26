import { quotation_titles_sheets } from "@/app/features/quotations/config/quotations.config"

export function quotation_title(): HTMLDivElement {
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

  return list_container
}