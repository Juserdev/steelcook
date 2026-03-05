import type { Form_Field } from "@/types/form.types";

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
    }
  }, {
    label: {
      for: "discount",
      content: "Descuento",
      class: { specific: "faq-total-label-discount", common: "faq-total-label" }
    },
    input: {
      type: "text",
      id: "discount",
      name: "discount",
      placeholder: "$000000...",
      class: { specific: "faq-total-input-discount", common: "faq-total-input" }
    }
  }, {
    label: {
      for: "subtotal_2",
      content: "Subtotal 2",
      class: { specific: "faq-total-label-subtotal-2", common: "faq-total-label" }
    },
    input: {
      type: "text",
      id: "subtotal_2",
      name: "subtotal_2",
      placeholder: "$000000...",
      class: { specific: "faq-total-input-subtotal-2", common: "faq-total-input" }
    }
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