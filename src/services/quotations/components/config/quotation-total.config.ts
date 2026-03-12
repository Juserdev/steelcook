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
      for: "total_net",
      content: "Neto",
      class: { specific: "faq-total-label-total_net", common: "faq-total-label" }
    },
    input: {
      type: "text",
      id: "total_net",
      name: "total_net",
      placeholder: "$000000...",
      class: { specific: "faq-total-input-total_net", common: "faq-total-input" }
    }
  }, {
    label: {
      for: "total_tax_rate",
      content: "Impuestos",
      class: { specific: "faq-total-label-tax-rate", common: "faq-total-label" }
    },
    input: {
      type: "text",
      id: "total_tax_rate",
      name: "total_tax_rate",
      placeholder: "19...",
      class: { specific: "faq-total-input-tax-rate", common: "faq-total-input" }
    },
  }, {
    label: {
      for: "total_tax_amount",
      content: "Total Impuestos",
      class: { specific: "faq-total-label-tax-amount", common: "faq-total-label" }
    },
    input: {
      type: "text",
      id: "total_tax_amount",
      name: "total_tax_amount",
      placeholder: "19...",
      class: { specific: "faq-total-input-tax-amount", common: "faq-total-input" }
    }
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