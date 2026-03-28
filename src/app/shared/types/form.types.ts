export type Method = 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH'
export type Button_Type = "submit" | "reset" | "button"
export type Data = 'number' | 'price'

export interface Form {
  method: {
    post: Method
    edit: Method
  }
  class: string
  mode: {
    add: string
    edit: string
  }
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

export interface Dataset_Numeric {
  data: Data
}

export interface Input {
  type: string
  id: string
  name: string
  placeholder: string
  class: Class_Name
  list?: string
  dataset?: Dataset_Numeric
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

export interface Form_Add {
  form: Form
  fields: Form_Field[]
  button: Button_Form
}

