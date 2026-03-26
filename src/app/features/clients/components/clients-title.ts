import { client_title_sheets } from "@/app/features/clients/config/clients.config"


export function clients_title(): HTMLDivElement {
  const list_container = document.createElement('div')
  list_container.classList.add("list-container-client")

  const clients_titles_sheet_container = document.createElement("div")
  clients_titles_sheet_container.classList.add("quotations-titles-sheet")

  list_container.appendChild(clients_titles_sheet_container)

  client_title_sheets.forEach(title => {
    const titles = document.createElement("h3")
    titles.classList.add(title.class, title.common_class)
    titles.textContent = title.title

    clients_titles_sheet_container.appendChild(titles)

  });

  return list_container

}
