export interface Sections_Content {
  class_section: string
  title_content: string
  class_title: string
}

export interface Sections {
  profile: Sections_Content
  quote_settings: Sections_Content
  client: Sections_Content
  products: Sections_Content
  total: Sections_Content
}

export const sections: Sections = {
  profile: {
    class_section: 'section-faq-profile',
    title_content: 'Datos de la empresa',
    class_title: 'section-faq-profile-title'
  },
  quote_settings: {
    class_section: 'section-faq-qs',
    title_content: 'Detalles de cotizacion',
    class_title: 'section-faq-qs-title'
  },
  client: {
    class_section: 'section-faq-client',
    title_content: 'Cliente',
    class_title: 'section-faq-client-title'
  },
  products: {
    class_section: 'section-faq-product',
    title_content: 'Productos',
    class_title: 'section-faq-product-title'
  },
  total: {
    class_section: 'section-faq-total',
    title_content: 'Total',
    class_title: 'section-faq-total-title'
  }
}