export const input_name_prices = [

  'product_prices',
  'product_totals',
  'total_subtotal',
  'total_discount',
  'total_net',
  'total_tax_amount',
  'total_total'

] as const satisfies string[]

export type Input_Name_Price = (typeof input_name_prices)[number]