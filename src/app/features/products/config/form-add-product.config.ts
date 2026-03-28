import type { Dataset_Numeric, Form_Add } from "@/app/shared/types/form.types";

export const form_add_product: Form_Add = {
  form: {
    method: {
      post: 'POST',
      edit: 'PATCH'
    },
    class: "form-add-products",
    mode: {
      add: 'add',
      edit: 'edit'
    }
  },
  fields: [
    {
      label: {
        for: "code",
        content: "Codigo",
        class: {
          specific: "fap-label-code",
          common: "fap-label"
        }
      },
      input: {
        type: "text",
        id: "code",
        name: "code",
        placeholder: "COD-00..",
        class: {
          specific: "fap-input-code",
          common: "fap-input"
        }
      }
    }, {
      label: {
        for: "name",
        content: "Nombre",
        class: {
          specific: "fap-label-name",
          common: "fap-label"
        }
      },
      input: {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "Estufa industrial...",
        class: {
          specific: "fap-input-name",
          common: "fap-input"
        }
      }
    }, {
      label: {
        for: "description",
        content: "Descripción",
        class: {
          specific: "fap-label-description",
          common: "fap-label"
        }
      },
      input: {
        type: "text",
        id: "description",
        name: "description",
        placeholder: "Fabricada en acero inox...",
        class: {
          specific: "fap-input-description",
          common: "fap-input"
        }
      }
    }, {
      label: {
        for: "price",
        content: "Precio",
        class: {
          specific: "fap-label-price",
          common: "fap-label"
        }
      },
      input: {
        type: "text",
        id: "price",
        name: "price",
        placeholder: "Fabricada en acero inox...",
        class: {
          specific: "fap-input-price",
          common: "fap-input"
        }
      }
    }

  ],
  button: {
    type: 'submit',
    text: "Enviar",
    class: 'btn-form-product'
  }
}


export const products_dataset = {
  data: 'price'
} as const satisfies Dataset_Numeric