import type { Form_Field } from "@/types/form.types";

export const form_total_aq: Form_Field[] = [
  {
    label: {
      for: "total_code",
      content: "Codigo de cotización",
      class: { specific: "faq-total-label-code", common: "faq-total-label" }
    },
    input: {
      type: "text",
      id: "total_code",
      name: "total_code",
      placeholder: "$000000...",
      class: { specific: "faq-total-input-code", common: "faq-total-input" }
    }
  }, {
    label: {
      for: "total_subtotal",
      content: "Subtotal",
      class: { specific: "faq-total-label-subtotal", common: "faq-total-label" }
    },
    input: {
      type: "text",
      id: "total_subtotal",
      name: "total_subtotal",
      placeholder: "$000000...",
      class: { specific: "faq-total-input-subtotal", common: "faq-total-input" }
    }
  }, {
    label: {
      for: "total_discount",
      content: "Descuento",
      class: { specific: "faq-total-label-discount", common: "faq-total-label" }
    },
    input: {
      type: "text",
      id: "total_discount",
      name: "total_discount",
      placeholder: "$000000...",
      class: { specific: "faq-total-input-discount", common: "faq-total-input" }
    }
  }, {
    label: {
      for: "total_subtotal_2",
      content: "Subtotal 2",
      class: { specific: "faq-total-label-subtotal-2", common: "faq-total-label" }
    },
    input: {
      type: "text",
      id: "total_subtotal_2",
      name: "total_subtotal_2",
      placeholder: "$000000...",
      class: { specific: "faq-total-input-subtotal-2", common: "faq-total-input" }
    }
  }, {
    label: {
      for: "total_tax",
      content: "Impuestos",
      class: { specific: "faq-total-label-tax", common: "faq-total-label" }
    },
    input: {
      type: "text",
      id: "total_tax",
      name: "total_tax",
      placeholder: "19...",
      class: { specific: "faq-total-input-tax", common: "faq-total-input" }
    },
  }, {
    label: {
      for: "total_total",
      content: "Total",
      class: { specific: "faq-total-label-total", common: "faq-total-label" }
    },
    input: {
      type: "text",
      id: "total_total",
      name: "total_total",
      placeholder: "$000000...",
      class: { specific: "faq-total-input-total", common: "faq-total-input" }
    },
  },
]