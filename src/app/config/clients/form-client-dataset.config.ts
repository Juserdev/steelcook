import type { Dataset } from "@/app/shared/types/form.types";

export const clients_dataset = {
  data_name: {
    number: 'number'
  },
  data_value: {
    number: "number"
  }

} as const satisfies Dataset