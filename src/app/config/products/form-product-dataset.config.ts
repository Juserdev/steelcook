import type { Dataset } from "@/app/shared/types/form.types";

export const products_dataset = {
  data_name: {
    number: 'number',
    input_price: 'input_price'
  },
  data_value: {
    number: 'number',
    input_price: 'input_price'
  }
} as const satisfies Dataset