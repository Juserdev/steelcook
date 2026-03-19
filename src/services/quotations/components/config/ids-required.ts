import type { Ids_Required } from "@/services/quotations/quotations.types";

export const ids_required = {
  profile_id_required: ['profile_name', 'profile_phone'],
  settings_id_required: ['settings_observations', 'settings_warranty', 'settings_delivery_time', 'settings_transport', 'settings_payment_method'],
  clients_id_required: ['client_name', 'client_phone'],
  products_id_required: ['product_code', 'product_names', 'product_descriptions', 'product_prices', 'product_quantites', 'product_totals'],
  total_id_required: ['total_code', 'total_subtotal', 'total_discount', 'total_net', 'total_tax_rate', 'total_tax_amount', 'total_total']
} as const satisfies Ids_Required