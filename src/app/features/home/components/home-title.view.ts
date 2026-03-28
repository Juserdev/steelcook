import { home_title_sheets } from "@/app/features/home/config/home-title-sheets.config"

export function home_title() {
  const list_container = document.createElement('div')
  list_container.classList.add("list-container-home")

  const home_titles_sheet_container = document.createElement("div")
  home_titles_sheet_container.classList.add("home-titles-sheet")

  list_container.appendChild(home_titles_sheet_container)

  home_title_sheets.forEach(title => {
    const titles = document.createElement("h3")
    titles.classList.add(title.class, title.common_class)
    titles.textContent = title.title

    home_titles_sheet_container.appendChild(titles)
  })

  return list_container
}