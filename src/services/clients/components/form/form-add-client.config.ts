import type { Form_Add } from "@/types/form.types";

export const form_add_client: Form_Add = {
  form: {
    method: {
      post: 'POST',
      edit: 'PATCH'
    },
    class: "form-add-clients",
    mode: {
      add: 'add',
      edit: 'edit'
    }
  },
  fields: [
    {
      label: {
        for: "name",
        content: "Nombre y Apellido",
        class: { specific: "fac-label-name", common: "fac-label" }
      },
      input: {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "Pedro Perez...",
        class: { specific: "fac-input-name", common: "fac-input" }
      }
    }, {
      label: {
        for: "id",
        content: "ID",
        class: { specific: "fac-label-id", common: "fac-label" }
      },
      input: {
        type: "text",
        id: "id",
        name: "id",
        placeholder: "1234567...",
        class: { specific: "fac-input-id", common: "fac-input" }
      }
    }, {
      label: {
        for: "email",
        content: "Email",
        class: { specific: "fac-label-email", common: "fac-label" }
      },
      input: {
        type: "email",
        id: "email",
        name: "email",
        placeholder: "mail@mail.com",
        class: { specific: "fac-input-mail", common: "fac-input" }
      }
    }, {
      label: {
        for: "phone",
        content: "Telefono",
        class: { specific: "fac-label-phone", common: "fac-label" }
      },
      input: {
        type: "number",
        id: "phone",
        name: "phone",
        placeholder: "3001234567",
        class: { specific: "fac-input-phone", common: "fac-input" }
      }
    }, {
      label: {
        for: "address",
        content: "address",
        class: { specific: "fac-label-address", common: "fac-label" }
      },
      input: {
        type: "text",
        id: "address",
        name: "address",
        placeholder: "cll 123...",
        class: { specific: "fac-input-address", common: "fac-input" }
      }
    }
  ],
  button: {
    type: "submit",
    text: "Enviar",
    class: "btn-form-client"
  }
}

