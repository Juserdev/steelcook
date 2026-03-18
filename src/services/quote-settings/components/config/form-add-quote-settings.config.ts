import type { Form_Add } from "@/types/form.types";

export const form_add_quote_settings: Form_Add = {
  form: {
    method: {
      post: 'POST',
      edit: 'PATCH'
    },
    class: "form-add-quote-settings",
    mode: {
      add: 'add',
      edit: 'edit'
    }
  },
  fields: [
    {
      label: {
        for: "observations",
        content: "Observaciones",
        class: { specific: "fqs-label-observations", common: "fqs-label" }
      },
      input: {
        type: "text",
        id: "observations",
        name: "observations",
        placeholder: "aqui van las obsevaciones...",
        class: { specific: "fqs-input-observations", common: "fqs-input" }
      }
    }, {
      label: {
        for: "waranty",
        content: "Garantia",
        class: { specific: "fqs-label-waranty", common: "fqs-label" }
      },
      input: {
        type: "text",
        id: "waranty",
        name: "waranty",
        placeholder: "X mesess...",
        class: { specific: "fqs-input-waranty", common: "fqs-input" }
      }
    }, {
      label: {
        for: "delivery_time",
        content: "Tiempo de entrega",
        class: { specific: "fqs-label-delivery-time", common: "fqs-label" }
      },
      input: {
        type: "text",
        id: "delivery_time",
        name: "delivery_time",
        placeholder: "10 dias habiles",
        class: { specific: "fqs-input-delivery-time", common: "fqs-input" }
      }
    }, {
      label: {
        for: "transport",
        content: "Transporte",
        class: { specific: "fqs-label-transport", common: "fqs-label" }
      },
      input: {
        type: "text",
        id: "transport",
        name: "transport",
        placeholder: "a cargo del comprador",
        class: { specific: "fqs-input-transport", common: "fqs-input" }
      }
    }, {
      label: {
        for: "payment_method",
        content: "Meotodo de pago",
        class: { specific: "fqs-label-payment-method", common: "fqs-label" }
      },
      input: {
        type: "text",
        id: "payment_method",
        name: "payment_method",
        placeholder: "efectivo",
        class: { specific: "fqs-input-payment-method", common: "fqs-input" }
      }
    }
  ],
  button: {
    type: "submit",
    text: "Enviar",
    class: "btn-form-quote-settings"
  }
}

