import type { Titles_Sheets } from "@/app/shared/types/ui.types";

export const home_title_sheets = [
  {
    title: "CLIENTES",
    class: "home-sheet-clients",
    common_class: "home-sheet",
  }, {
    title: "PRODUCTOS",
    class: "home-sheet-products",
    common_class: "home-sheet",
  }, {
    title: "COTIZACIONES",
    class: "home-sheet-quotations",
    common_class: "home-sheet",
  },

] as const satisfies Titles_Sheets[]