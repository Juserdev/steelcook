export interface LabelConfig {
  id: string
  text_content: string
  class_label: string
}

export interface InputConfig {
  id: string
  name: string
  type: string
  placeholder: string
  class_input: string
  required: boolean
}

export interface LoginField {
  label: LabelConfig
  input: InputConfig
}