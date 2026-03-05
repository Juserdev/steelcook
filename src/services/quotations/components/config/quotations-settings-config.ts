import type { Form_Field } from "@/types/form.types";

export const form_quote_settings_aq: Form_Field[] = [
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