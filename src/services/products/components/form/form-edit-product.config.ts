import type { Form_Add } from "@/types/form.types";

export const form_edit_product: Form_Add = {
  form: {
    method: 'PATCH',
    class: "form-edit-products"
  },
  fields: [
    {
      label: {
        for: "code",
        content: "Codigo",
        class: { specific: "fep-label-code", common: "fep-label" }
      },
      input: {
        type: "text",
        id: "code",
        name: "code",
        placeholder: "COD-00..",
        class: { specific: "fep-input-code", common: "fep-input" }
      }
    }, {
      label: {
        for: "name",
        content: "Nombre",
        class: { specific: "fep-label-name", common: "fep-label" }
      },
      input: {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "Estufa industrial...",
        class: { specific: "fep-input-name", common: "fep-input" }
      }
    }, {
      label: {
        for: "description",
        content: "Descripción",
        class: { specific: "fep-label-description", common: "fep-label" }
      },
      input: {
        type: "text",
        id: "description",
        name: "description",
        placeholder: "Fabricada en acero inox...",
        class: { specific: "fep-input-description", common: "fep-input" }
      }
    }, {
      label: {
        for: "price",
        content: "Precio",
        class: { specific: "fep-label-price", common: "fep-label" }
      },
      input: {
        type: "text",
        id: "price",
        name: "price",
        placeholder: "Fabricada en acero inox...",
        class: { specific: "fep-input-price", common: "fep-input" }
      }
    }

  ],
  button: {
    type: 'submit',
    text: "Enviar",
    class: 'btn-form-client'
  }
}