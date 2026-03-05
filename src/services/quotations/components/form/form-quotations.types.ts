import type { Button_Form, Form, Input, Label } from "@/types/form.types";

export interface Sections {
  class: string
}
export interface Fieldset {
  class: string
}

export interface Form_Titles {
  title: string
  classes: { class: string, common: string }
}

interface Form_Field_AD {
  label: Label
  input: Input
  sections: Sections
}

export interface Form_Add_Quotation {
  form: Form
  files: Form_Field_AD[]
  button: Button_Form
}