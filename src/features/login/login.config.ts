import type { LoginField } from '@/features/login/login.types'

export const inputs: LoginField[] = [
  {
    label: {
      id: "email",
      text_content: "Usuario",
      class_label: "label",
    },
    input: {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "example@mail.com",
      class_input: "input",
      required: true

    }
  },
  {
    label: {
      id: "password",
      text_content: "password",
      class_label: "label",
    },
    input: {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "example@mail.com",
      class_input: "input",
      required: true
    }
  }
]