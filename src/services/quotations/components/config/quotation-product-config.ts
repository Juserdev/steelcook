import type { Form_Field } from "@/types/form.types";

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