import { icons } from "@/types/icons.config";

export const quote_settings_config = {
  qs_container_class: {
    common_class: 'section-content',
    class: 'quote-settings-content'
  },
  title: {
    class_1: 'title',
    class_2: 'quote-settings-title',
    text: 'Configuracion de cotizaciones',
    text_button: "Editar configuraciones"
  },
  qs: {
    file: 'list-qs-file',
    content: "qs-file",
    observations: {
      title: 'Observaciones',
      class: 'qs-observation-title',
      class_content: "qs-observation-text"
    },
    warranty: {
      title: 'Garantia',
      class: 'qs-warranty-title',
      class_content: "qs-warranty-text"
    },
    delivery_time: {
      title: 'Tiempo de entrega',
      class: 'qs-delivery-time-title',
      class_content: "qs-delivery-time-text"
    },
    transport: {
      title: 'Transporte',
      class: 'qs-transport-title',
      class_content: "qs-transport-text"
    }
  },
  add_qs_btn: {
    type: 'button',
    class: 'btn-edit-quote-settings',
    text: 'Editar configuraciones',
    dataset: 'add_quote_settings'
  },
  icons: {
    container_class: 'conatiner-qs-icons',
    edit: {
      src: icons.edit,
      alt: 'icon edit',
      class: 'icon-edit'
    },
    remove: {
      src: icons.remove,
      alt: 'icon delete',
      class: 'icon-delete'
    }
  }
}