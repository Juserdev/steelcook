import type { Ids_Readonly } from "@/services/quotations/quotations.types";

export const ids_readonly = {
  products_id_readonly: ['product_totals'],
  totals_id_readonly: ['total_subtotal', 'total_net', 'total_tax_amount', 'total_total']
} as const satisfies Ids_Readonly