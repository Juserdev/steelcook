export const input_name_prices = [

  'product_prices',
  'total_discount',

] as const satisfies string[]

export type Input_Name_Price = (typeof input_name_prices)[number]