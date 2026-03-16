import type { Form_Add } from '@/types/form.types';

export const form_edit_client: Form_Add = {
  form: {
    method: 'PUT',
    class: 'form-edit-clients'
  },
  fields: [
    {
      label: {
        for: 'name',
        content: 'Nombre y Apellido',
        class: { specific: 'fec-label-name', common: 'fec-label' }
      },
      input: {
        type: 'text',
        id: 'name',
        name: 'name',
        placeholder: 'Pedro Perez...',
        class: { specific: 'fec-input-name', common: 'fec-input' }
      }
    }, {
      label: {
        for: 'id',
        content: 'ID',
        class: { specific: 'fec-label-id', common: 'fec-label' }
      },
      input: {
        type: 'text',
        id: 'id',
        name: 'id',
        placeholder: '1234567...',
        class: { specific: 'fec-input-id', common: 'fec-input' }
      }
    }, {
      label: {
        for: 'email',
        content: 'Email',
        class: { specific: 'fec-label-email', common: 'fec-label' }
      },
      input: {
        type: 'email',
        id: 'email',
        name: 'email',
        placeholder: 'mail@mail.com',
        class: { specific: 'fec-input-mail', common: 'fec-input' }
      }
    }, {
      label: {
        for: 'phone',
        content: 'Telefono',
        class: { specific: 'fec-label-phone', common: 'fec-label' }
      },
      input: {
        type: 'number',
        id: 'phone',
        name: 'phone',
        placeholder: '3001234567',
        class: { specific: 'fec-input-phone', common: 'fec-input' }
      }
    }, {
      label: {
        for: 'address',
        content: 'address',
        class: { specific: 'fec-label-address', common: 'fec-label' }
      },
      input: {
        type: 'text',
        id: 'address',
        name: 'address',
        placeholder: 'cll 123...',
        class: { specific: 'fec-input-address', common: 'fec-input' }
      }
    }
  ],
  button: {
    type: 'submit',
    text: 'Enviar',
    class: 'btn-form-client'
  }
}

