import home_icon from '@/assets/icons/icon-home.svg'
import profile_icon from '@/assets/icons/icon-profile.svg'
import clients_icon from '@/assets/icons/icon-clients.svg'
import products_icon from '@/assets/icons/icon-products.svg'
import quotations_icon from '@/assets/icons/icon-quotations.svg'
import quote_settings_icon from '@/assets/icons/icon_quote_settings.svg'

import type { Buttons } from './sidebar.types'

export const buttons: Buttons = [
  {
    key: "home",
    container: { container_class: "btn-container", container_class_key: "btn-container-home" },
    icon: { svg: home_icon, class: "home-icon" },
    name_btn: { name: "Inicio", class: "home-text-btn" }
  }, {
    key: "profile",
    container: { container_class: "btn-container", container_class_key: "btn-container-prifle" },
    icon: { svg: profile_icon, class: "profile-icon" },
    name_btn: { name: "Perfil", class: "profile-text-btn" }
  }, {
    key: "clients",
    container: { container_class: "btn-container", container_class_key: "btn-container-clients" },
    icon: { svg: clients_icon, class: "clients-icon" },
    name_btn: { name: "Clientes", class: "clients-text-btn" }
  }, {
    key: "products",
    container: { container_class: "btn-container", container_class_key: "btn-container-products" },
    icon: { svg: products_icon, class: "products-icon" },
    name_btn: { name: "Productos", class: "products-text-btn" }
  }, {
    key: "quotations",
    container: { container_class: "btn-container", container_class_key: "btn-container-quotations" },
    icon: { svg: quotations_icon, class: "quotations-icon" },
    name_btn: { name: "Cotizaciones", class: "quotations-text-btn" }
  }, {
    key: "quote-settings",
    container: { container_class: "btn-container", container_class_key: "btn-container-quote-settings" },
    icon: { svg: quote_settings_icon, class: "quote-settings-icon" },
    name_btn: { name: "Config. cotizaciones", class: "quote-settings-text-btn" }
  }

]