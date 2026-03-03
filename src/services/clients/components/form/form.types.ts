export type Method = 'POST' | 'GET' | 'DELETE' | 'PUT'
export type Button_Type = "submit" | "reset" | "button"

export interface Form {
  method: Method
  class: string

}

export interface Class_Name {
  specific: string
  common: string
}

export interface Label {
  for: string
  content: string
  class: Class_Name
}

export interface Input {
  type: string
  id: string
  name: string
  placeholder: string
  class: Class_Name
}

export interface Form_Field {
  label: Label
  input: Input
}

export interface Button_Form {
  type: Button_Type
  text: string
  class: string
}

export interface Form_Add_Client {
  form: Form
  fields: Form_Field[]
  button: Button_Form
}