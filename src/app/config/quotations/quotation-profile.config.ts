import type { Form_Field } from '@/app/shared/types/form.types';

export const form_profile_quotation_aq: Form_Field[] = [
  {
    label: {
      for: 'profile_name',
      content: 'Empresa',
      class: { specific: 'faq-profile-label-company', common: 'faq-profile-label' }
    },
    input: {
      type: 'text',
      id: 'profile_name',
      name: 'profile_name',
      placeholder: 'Empresa SAS',
      class: { specific: 'faq-profile-input-company', common: 'faq-profile-input' }
    },
  }, {
    label: {
      for: 'prifile_id',
      content: 'ID',
      class: { specific: 'faq-profile-label-company-id', common: 'faq-profile-label' }
    },
    input: {
      type: 'text',
      id: 'profile_id',
      name: 'profile_id',
      placeholder: 'Empresa SAS',
      class: { specific: 'faq-profile-input-company-id', common: 'faq-profile-input' }
    }
  }, {
    label: {
      for: 'profile_email',
      content: 'email',
      class: { specific: 'faq-profile-label-email', common: 'faq-profile-label' }
    },
    input: {
      type: 'text',
      id: 'profile_email',
      name: 'profile_email',
      placeholder: 'Email',
      class: { specific: 'faq-profile-input-email', common: 'faq-profile-input' }
    }
  }, {
    label: {
      for: 'profile_phone',
      content: 'Telefono',
      class: { specific: 'faq-profile-label-phone', common: 'faq-profile-label' }
    },
    input: {
      type: 'text',
      id: 'profile_phone',
      name: 'profile_phone',
      placeholder: '3001234567',
      class: { specific: 'faq-profile-input-phone', common: 'faq-profile-input' }
    }
  }, {
    label: {
      for: 'profile_address',
      content: 'Dirección',
      class: { specific: 'faq-profile-label-address', common: 'faq-profile-label' }
    },
    input: {
      type: 'text',
      id: 'profile_address',
      name: 'profile_address',
      placeholder: 'Direccion',
      class: { specific: 'faq-profile-input-address', common: 'faq-profile-input' }
    }
  }
]