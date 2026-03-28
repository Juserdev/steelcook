import type { Titles_Sheets } from "@/app/shared/types/ui.types";

export const quote_settings_titles_sheets = [
  {
    title: "OBSERVACIONES",
    class: "quote-settings-sheet-observation",
    common_class: "quote-settings-sheet",
  }, {
    title: "WARANTY",
    class: "quote-settings-sheet-warranty",
    common_class: "quote-settings-sheet",
  }, {
    title: "DELIVERY TIME",
    class: "quote-settings-sheet-delivery-time",
    common_class: "quote-settings-sheet",
  }, {
    title: "TRANSPORTE",
    class: "quote-settings-sheet-transport",
    common_class: "quote-settings-sheet",
  }

] as const satisfies Titles_Sheets[]