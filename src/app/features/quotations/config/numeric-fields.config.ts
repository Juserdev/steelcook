export const numeric_fields = [
  'profile_phone',
  'client_phone',
  'product_quantites',
  'product_totals',
  'total_subtotal',
  'total_tax_rate'
] as const satisfies string[]

export type Numeric_Fields = (typeof numeric_fields)[number]