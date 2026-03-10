import type { Form_Field } from '@/types/form.types';

export const form_product_aq: Form_Field[] = [
  {
    label: {
      for: 'product_codes',
      content: 'Codigo',
      class: { specific: 'faq-product-label-code', common: 'faq-product-label' }
    },
    input: {
      type: 'text',
      id: 'product_codes',
      name: 'product_codes',
      placeholder: '211244...',
      class: { specific: 'faq-product-input-code', common: 'faq-product-input' }
    },
  }, {
    label: {
      for: 'product_names',
      content: 'Nombre',
      class: { specific: 'faq-product-label-name', common: 'faq-product-label' }
    },
    input: {
      type: 'text',
      id: 'product_names',
      name: 'product_names',
      placeholder: 'Producto 1...',
      class: { specific: 'faq-product-input-name', common: 'faq-product-input' }
    }
  }, {
    label: {
      for: 'product_descriptions',
      content: 'Descripcion',
      class: { specific: 'faq-product-label-description', common: 'faq-product-label' }
    },
    input: {
      type: 'text',
      id: 'product_descriptions',
      name: 'product_descriptions',
      placeholder: 'este producto es fab...',
      class: { specific: 'faq-product-input-description', common: 'faq-product-input' }
    }
  }, {
    label: {
      for: 'product_prices',
      content: 'Precio',
      class: { specific: 'faq-product-label-price', common: 'faq-product-label' }
    },
    input: {
      type: 'text',
      id: 'product_prices',
      name: 'product_prices',
      placeholder: '$000000...',
      class: { specific: 'faq-product-input-price', common: 'faq-product-input' }
    }
  }, {
    label: {
      for: 'product_quantites',
      content: 'Cantidad',
      class: { specific: 'faq-product-label-quantity', common: 'faq-product-label' }
    },
    input: {
      type: 'text',
      id: 'product_quantites',
      name: 'product_quantites',
      placeholder: '1',
      class: { specific: 'faq-product-input-quantity', common: 'faq-product-input' }
    }
  }, {
    label: {
      for: 'product_totals',
      content: 'Total',
      class: { specific: 'faq-product-label-total', common: 'faq-product-label' }
    },
    input: {
      type: 'text',
      id: 'product_totals',
      name: 'product_totals',
      placeholder: '$1000000...',
      class: { specific: 'faq-product-input-total', common: 'faq-product-input' }
    }
  },
]