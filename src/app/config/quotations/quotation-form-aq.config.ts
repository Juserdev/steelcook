import type { Form } from "@/app/shared/types/form.types";

export const form_aq: Form = {
  method: {
    post: 'POST',
    edit: 'PATCH'
  },
  class: 'form-add-quotation',
  mode: {
    add: 'add',
    edit: 'edit'
  }
}