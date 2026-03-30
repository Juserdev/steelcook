import { home_title_sheets } from "@/app/features/home/components/home-title-sheets.view";
import { home_title } from "@/app/features/home/components/home-title.view";
import type { HomeContent } from "@/app/features/home/types/home.types";

export function home_list(home_content: HomeContent[], header: HTMLDivElement): HTMLDivElement {

  const home_container = home_title()
  home_title_sheets(home_content, home_container)
  header.appendChild(home_container)


  return home_container
}