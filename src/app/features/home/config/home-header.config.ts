import type { Home_Header } from "@/app/features/home/types/home_header.types";

export const home_header_config = {
  div: {
    class: {
      common: 'section-content',
      class: 'home-content'
    }
  },
  title: {
    class: {
      common: 'title',
      class: 'home-title'
    },
    text: 'Inicio'
  }
} as const satisfies Home_Header