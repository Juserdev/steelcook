export const numeric_fields = [
  'profile_phone',
  'client_phone',
  'product_prices',
  'product_quantites',
  'product_totals',
  'total_subtotal',
  'total_discount',
  'total_net',
  'total_tax_rate',
  'total_tax_amount',
  'total_total'
] as const satisfies string[]

export type Numeric_Fields = (typeof numeric_fields)[number]