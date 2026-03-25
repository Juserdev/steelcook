import type { Form_Field } from "@/types/form.types";

export const form_client_aq: Form_Field[] = [
  {
    label: {
      for: "client_name",
      content: "Nombre",
      class: { specific: "faq-client-label-name", common: "faq-client-label" }
    },
    input: {
      type: "text",
      id: "client_name",
      name: "client_name",
      placeholder: "Pedro Perez",
      list: 'client_list',
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
      for: "client_email",
      content: "Email",
      class: { specific: "faq-client-label-email", common: "faq-client-label" }
    },
    input: {
      type: "text",
      id: "client_email",
      name: "client_email",
      placeholder: "mail@mail.com...",
      class: { specific: "faq-client-input-email", common: "faq-client-input" }
    }
  }, {
    label: {
      for: "client_phone",
      content: "Telefono",
      class: { specific: "faq-client-label-phone", common: "faq-client-label" }
    },
    input: {
      type: "text",
      id: "client_phone",
      name: "client_phone",
      placeholder: "3001234567...",
      class: { specific: "faq-client-input-phone", common: "faq-client-input" }
    }
  }, {
    label: {
      for: "client_address",
      content: "Dirección",
      class: { specific: "faq-client-label-address", common: "faq-client-label" }
    },
    input: {
      type: "text",
      id: "client_address",
      name: "client_address",
      placeholder: "3001234567...",
      class: { specific: "faq-client-input-address", common: "faq-client-input" }
    }
  },
]