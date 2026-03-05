import type { Form_Field } from "@/types/form.types";

export const form_profile_quotation_aq: Form_Field[] = [
  {
    label: {
      for: "company",
      content: "Empresa",
      class: { specific: "faq-profile-label-company", common: "faq-profile-label" }
    },
    input: {
      type: "text",
      id: "company",
      name: "company",
      placeholder: "Empresa SAS",
      class: { specific: "faq-profile-input-company", common: "faq-profile-input" }
    },
  }, {
    label: {
      for: "company_id",
      content: "ID",
      class: { specific: "faq-profile-label-company-id", common: "faq-profile-label" }
    },
    input: {
      type: "text",
      id: "company_id",
      name: "company_id",
      placeholder: "Empresa SAS",
      class: { specific: "faq-profile-input-company-id", common: "faq-profile-input" }
    }
  }, {
    label: {
      for: "email",
      content: "email",
      class: { specific: "faq-profile-label-email", common: "faq-profile-label" }
    },
    input: {
      type: "text",
      id: "email",
      name: "email",
      placeholder: "Email",
      class: { specific: "faq-profile-input-email", common: "faq-profile-input" }
    }
  }, {
    label: {
      for: "phone",
      content: "Telefono",
      class: { specific: "faq-profile-label-phone", common: "faq-profile-label" }
    },
    input: {
      type: "text",
      id: "phone",
      name: "phone",
      placeholder: "3001234567",
      class: { specific: "faq-profile-input-phone", common: "faq-profile-input" }
    }
  }, {
    label: {
      for: "adress",
      content: "adress",
      class: { specific: "faq-profile-label-adress", common: "faq-profile-label" }
    },
    input: {
      type: "text",
      id: "adress",
      name: "adress",
      placeholder: "Direccion",
      class: { specific: "faq-profile-input-adress", common: "faq-profile-input" }
    }
  }
]