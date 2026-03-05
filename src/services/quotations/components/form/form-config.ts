import type { Form, Form_Field } from "@/types/form.types"

export const form_aq: Form = {
  method: 'POST',
  class: 'form-add-quotation'
}

export type Form_Btn_type = 'button' | 'submit' | 'reset'

export interface Btn_Add_Product {
  type: Form_Btn_type
  class: string
  text: string
}

export const btn_add_product: Btn_Add_Product = {
  type: 'button',
  class: 'btn-add-product',
  text: "Agregar producto"
}

export const sections = {
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

export const form_profile_quotation_aq: Form_Field[] = [
  {
    label: {
      for: "company",
      content: "Empresa",
      class: { specific: "faq-profile-label-company", common: "faq-profile-label" }
    },
    input: {
      type: "text",
      id: "company",
      name: "company",
      placeholder: "Empresa SAS",
      class: { specific: "faq-profile-input-company", common: "faq-profile-input" }
    },
  }, {
    label: {
      for: "company_id",
      content: "ID",
      class: { specific: "faq-profile-label-company-id", common: "faq-profile-label" }
    },
    input: {
      type: "text",
      id: "company_id",
      name: "company_id",
      placeholder: "Empresa SAS",
      class: { specific: "faq-profile-input-company-id", common: "faq-profile-input" }
    }
  }, {
    label: {
      for: "email",
      content: "email",
      class: { specific: "faq-profile-label-email", common: "faq-profile-label" }
    },
    input: {
      type: "text",
      id: "email",
      name: "email",
      placeholder: "Email",
      class: { specific: "faq-profile-input-email", common: "faq-profile-input" }
    }
  }, {
    label: {
      for: "phone",
      content: "Telefono",
      class: { specific: "faq-profile-label-phone", common: "faq-profile-label" }
    },
    input: {
      type: "text",
      id: "phone",
      name: "phone",
      placeholder: "3001234567",
      class: { specific: "faq-profile-input-phone", common: "faq-profile-input" }
    }
  }, {
    label: {
      for: "adress",
      content: "adress",
      class: { specific: "faq-profile-label-adress", common: "faq-profile-label" }
    },
    input: {
      type: "text",
      id: "adress",
      name: "adress",
      placeholder: "Direccion",
      class: { specific: "faq-profile-input-adress", common: "faq-profile-input" }
    }
  }
]

export const form_quote_setings_aq: Form_Field[] = [
  {
    label: {
      for: "observations",
      content: "Observaciones",
      class: { specific: "faq-qs-label-observations", common: "faq-qs-label" }
    },
    input: {
      type: "text",
      id: "observations",
      name: "observations",
      placeholder: "la empresa se atiene a ...",
      class: { specific: "faq-qs-input-observations", common: "faq-qs-input" }
    }
  }, {
    label: {
      for: "warranty",
      content: "Garantia",
      class: { specific: "faq-qs-label-warranty", common: "faq-qs-label" }
    },
    input: {
      type: "text",
      id: "warranty",
      name: "warranty",
      placeholder: "15 dias por....",
      class: { specific: "faq-qs-input-warranty", common: "faq-qs-input" }
    }
  }, {
    label: {
      for: "delivery_time",
      content: "Tiemo de entrega",
      class: { specific: "faq-qs-label-delivery-time", common: "faq-qs-label" }
    },
    input: {
      type: "text",
      id: "delivery_time",
      name: "delivery_time",
      placeholder: "30 dias habiles...",
      class: { specific: "faq-qs-input-delivery-time", common: "faq-qs-input" }
    }
  }, {
    label: {
      for: "transport",
      content: "Transporte",
      class: { specific: "faq-qs-label-transport", common: "faq-qs-label" }
    },
    input: {
      type: "text",
      id: "transport",
      name: "transport",
      placeholder: "El transporte es a negociar....",
      class: { specific: "faq-qs-input-transport", common: "faq-qs-input" }
    }
  }, {
    label: {
      for: "payment_method",
      content: "Transporte",
      class: { specific: "faq-qs-label-payment-method", common: "faq-qs-label" }
    },
    input: {
      type: "text",
      id: "payment_method",
      name: "payment_method",
      placeholder: "De contado",
      class: { specific: "faq-qs-input-payment-method", common: "faq-qs-input" }
    }
  }
]

export const form_client_aq: Form_Field[] = [
  {
    label: {
      for: "name",
      content: "Nombre",
      class: { specific: "faq-client-label-name", common: "faq-client-label" }
    },
    input: {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "Pedro Perez",
      class: { specific: "faq-client-input-name", common: "faq-client-input" }
    }
  }, {
    label: {
      for: "client_id",
      content: "ID",
      class: { specific: "faq-client-label-client-id", common: "faq-client-label" }
    },
    input: {
      type: "text",
      id: "client_id",
      name: "client_id",
      placeholder: "211244...",
      class: { specific: "faq-client-input-client-id", common: "faq-client-input" }
    }
  }, {
    label: {
      for: "email",
      content: "Email",
      class: { specific: "faq-client-label-email", common: "faq-client-label" }
    },
    input: {
      type: "text",
      id: "email",
      name: "email",
      placeholder: "mail@mail.com...",
      class: { specific: "faq-client-input-email", common: "faq-client-input" }
    }
  }, {
    label: {
      for: "phone",
      content: "Telefono",
      class: { specific: "faq-client-label-phone", common: "faq-client-label" }
    },
    input: {
      type: "text",
      id: "phone",
      name: "phone",
      placeholder: "3001234567...",
      class: { specific: "faq-client-input-phone", common: "faq-client-input" }
    }
  }, {
    label: {
      for: "address",
      content: "Dirección",
      class: { specific: "faq-client-label-address", common: "faq-client-label" }
    },
    input: {
      type: "text",
      id: "address",
      name: "address",
      placeholder: "3001234567...",
      class: { specific: "faq-client-input-address", common: "faq-client-input" }
    }
  },
]

export const form_product_aq: Form_Field[] = [
  {
    label: {
      for: "code",
      content: "Codigo",
      class: { specific: "faq-product-label-code", common: "faq-product-label" }
    },
    input: {
      type: "text",
      id: "code",
      name: "code",
      placeholder: "211244...",
      class: { specific: "faq-product-input-code", common: "faq-product-input" }
    },
  }, {
    label: {
      for: "name",
      content: "Nombre",
      class: { specific: "faq-product-label-name", common: "faq-product-label" }
    },
    input: {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "Producto 1...",
      class: { specific: "faq-product-input-name", common: "faq-product-input" }
    }
  }, {
    label: {
      for: "description",
      content: "Descripcion",
      class: { specific: "faq-product-label-description", common: "faq-product-label" }
    },
    input: {
      type: "text",
      id: "description",
      name: "description",
      placeholder: "este producto es fab...",
      class: { specific: "faq-product-input-description", common: "faq-product-input" }
    }
  }, {
    label: {
      for: "price",
      content: "Precio",
      class: { specific: "faq-product-label-price", common: "faq-product-label" }
    },
    input: {
      type: "text",
      id: "price",
      name: "price",
      placeholder: "$000000...",
      class: { specific: "faq-product-input-price", common: "faq-product-input" }
    }
  }, {
    label: {
      for: "quantity",
      content: "Cantidad",
      class: { specific: "faq-product-label-quantity", common: "faq-product-label" }
    },
    input: {
      type: "text",
      id: "quantity",
      name: "quantity",
      placeholder: "1",
      class: { specific: "faq-product-input-quantity", common: "faq-product-input" }
    }
  }, {
    label: {
      for: "total",
      content: "Total",
      class: { specific: "faq-product-label-total", common: "faq-product-label" }
    },
    input: {
      type: "text",
      id: "total",
      name: "total",
      placeholder: "$1000000...",
      class: { specific: "faq-product-input-total", common: "faq-product-input" }
    }
  },
]

export const form_total_aq: Form_Field[] = [
  {
    label: {
      for: "subtotal",
      content: "Subtotal",
      class: { specific: "faq-total-label-subtotal", common: "faq-total-label" }
    },
    input: {
      type: "text",
      id: "subtotal",
      name: "subtotal",
      placeholder: "$000000...",
      class: { specific: "faq-total-input-subtotal", common: "faq-total-input" }
    },
  }, {
    label: {
      for: "tax",
      content: "Impuestos",
      class: { specific: "faq-total-label-tax", common: "faq-total-label" }
    },
    input: {
      type: "text",
      id: "tax",
      name: "tax",
      placeholder: "19...",
      class: { specific: "faq-total-input-tax", common: "faq-total-input" }
    },
  }, {
    label: {
      for: "total",
      content: "Total",
      class: { specific: "faq-total-label-total", common: "faq-total-label" }
    },
    input: {
      type: "text",
      id: "total",
      name: "total",
      placeholder: "$000000...",
      class: { specific: "faq-total-input-total", common: "faq-total-input" }
    },
  },
]