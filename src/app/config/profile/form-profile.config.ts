import type { Form_Add } from "@/app/shared/types/form.types";

export const form_profile_config: Form_Add = {
  form: {
    method: {
      post: "POST",
      edit: 'PATCH'
    },
    class: 'form-add-profile',
    mode: {
      add: 'add',
      edit: 'edit',
    }
  },
  fields: [
    {
      label: {
        for: "profile_company",
        content: "Empresa",
        class: { specific: "profile-label-code", common: "profile-label" }
      },
      input: {
        type: "text",
        id: "profile_company",
        name: "profile_company",
        placeholder: "Empresa",
        class: { specific: "profile-input-profile-company", common: "profile-input" }
      }
    }, {
      label: {
        for: "profile_id",
        content: "ID",
        class: { specific: "profile-label-profile-id", common: "profile-label" }
      },
      input: {
        type: "text",
        id: "profile_id",
        name: "profile_id",
        placeholder: "123...",
        class: { specific: "profile-input-profile-id", common: "profile-input" }
      }
    }, {
      label: {
        for: "profile_email",
        content: "Email",
        class: { specific: "profile-label-profile-email", common: "profile-label" }
      },
      input: {
        type: "text",
        id: "profile_email",
        name: "profile_email",
        placeholder: "mail@mail...",
        class: { specific: "profile-input-profile-email", common: "profile-input" }
      }
    }, {
      label: {
        for: "profile_phone",
        content: "Telefono",
        class: { specific: "profile-label-profile-phone", common: "profile-label" }
      },
      input: {
        type: "text",
        id: "profile_phone",
        name: "profile_phone",
        placeholder: "300123...",
        class: { specific: "profile-input-profile-phone", common: "profile-input" }
      }
    }, {
      label: {
        for: "profile_address",
        content: "Dirección",
        class: { specific: "profile-label-profile-address", common: "profile-label" }
      },
      input: {
        type: "text",
        id: "profile_address",
        name: "profile_address",
        placeholder: "street 92...",
        class: { specific: "profile-input-profile-address", common: "profile-input" }
      }
    }, {
      label: {
        for: "profile_logo",
        content: "Logo",
        class: { specific: "profile-label-profile-logo", common: "profile-label" }
      },
      input: {
        type: "text",
        id: "profile_logo",
        name: "profile_logo",
        placeholder: "https://logo.com/logo...",
        class: { specific: "profile-input-profile-logo", common: "profile-input" }
      }
    }
  ],
  button: {
    type: 'submit',
    text: 'Enviar',
    class: 'btn-form-profile'

  }
}