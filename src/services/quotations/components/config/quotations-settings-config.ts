import type { Form_Field } from "@/types/form.types";

export const form_quote_settings_aq: Form_Field[] = [
  {
    label: {
      for: "settings_observations",
      content: "Observaciones",
      class: { specific: "faq-qs-label-observations", common: "faq-qs-label" }
    },
    input: {
      type: "text",
      id: "settings_observations",
      name: "settings_observations",
      placeholder: "la empresa se atiene a ...",
      class: { specific: "faq-qs-input-observations", common: "faq-qs-input" }
    }
  }, {
    label: {
      for: "settings_warranty",
      content: "Garantia",
      class: { specific: "faq-qs-label-warranty", common: "faq-qs-label" }
    },
    input: {
      type: "text",
      id: "settings_warranty",
      name: "settings_warranty",
      placeholder: "15 dias por....",
      class: { specific: "faq-qs-input-warranty", common: "faq-qs-input" }
    }
  }, {
    label: {
      for: "settings_delivery_time",
      content: "Tiemo de entrega",
      class: { specific: "faq-qs-label-delivery-time", common: "faq-qs-label" }
    },
    input: {
      type: "text",
      id: "settings_delivery_time",
      name: "settings_delivery_time",
      placeholder: "30 dias habiles...",
      class: { specific: "faq-qs-input-delivery-time", common: "faq-qs-input" }
    }
  }, {
    label: {
      for: "settings_transport",
      content: "Transporte",
      class: { specific: "faq-qs-label-transport", common: "faq-qs-label" }
    },
    input: {
      type: "text",
      id: "settings_transport",
      name: "settings_transport",
      placeholder: "El transporte es a negociar....",
      class: { specific: "faq-qs-input-transport", common: "faq-qs-input" }
    }
  }, {
    label: {
      for: "settings_payment_method",
      content: "Metodo de pago",
      class: { specific: "faq-qs-label-payment-method", common: "faq-qs-label" }
    },
    input: {
      type: "text",
      id: "settings_payment_method",
      name: "settings_payment_method",
      placeholder: "De contado",
      class: { specific: "faq-qs-input-payment-method", common: "faq-qs-input" }
    }
  }
]