import type { Buttons } from '@/app/features/sidebar/types/sidebar.types'
import { icons } from '@/app/shared/config/icons.config'

export const buttons: Buttons = [
  {
    key: "home",
    container: {
      container_class: "btn-container",
      container_class_key: "btn-container-home"
    },
    icon: {
      svg: icons.home,
      class: "home-icon"
    },
    name_btn: {
      name: "Inicio",
      class: "home-text-btn"
    }
  }, {
    key: "profile",
    container: {
      container_class: "btn-container",
      container_class_key: "btn-container-prifle"
    },
    icon: {
      svg: icons.profile,
      class: "profile-icon"
    },
    name_btn: {
      name: "Perfil",
      class: "profile-text-btn"
    }
  }, {
    key: "clients",
    container: {
      container_class: "btn-container",
      container_class_key: "btn-container-clients"
    },
    icon: {
      svg: icons.clients,
      class: "clients-icon"
    },
    name_btn: {
      name: "Clientes",
      class: "clients-text-btn"
    }
  }, {
    key: "products",
    container: {
      container_class: "btn-container",
      container_class_key: "btn-container-products"
    },
    icon: {
      svg: icons.products,
      class: "products-icon"
    },
    name_btn: {
      name: "Productos",
      class: "products-text-btn"
    }
  }, {
    key: "quotations",
    container: {
      container_class: "btn-container",
      container_class_key: "btn-container-quotations"
    },
    icon: {
      svg: icons.quotation,
      class: "quotations-icon"
    },
    name_btn: {
      name: "Cotizaciones",
      class: "quotations-text-btn"
    }
  }, {
    key: "quote-settings",
    container: {
      container_class: "btn-container",
      container_class_key: "btn-container-quote-settings"
    },
    icon: {
      svg: icons.quote_settings,
      class: "quote-settings-icon"
    },
    name_btn: {
      name: "Config. cotizaciones",
      class: "quote-settings-text-btn"
    }
  }

]