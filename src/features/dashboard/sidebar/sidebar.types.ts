export type ButtonKey = 'home' | 'profile' | 'clients' | 'products' | 'quotations'

export interface ButtonContainer {
  container_class: string
  container_class_key: string
}

export interface ButtonIcon {
  svg: string
  class: string
}

export interface ButtonName {
  name: string
  class: string
}

export interface ButtonConfig {
  key: ButtonKey
  container: ButtonContainer
  icon: ButtonIcon
  name_btn: ButtonName
}

export type Buttons = ButtonConfig[]