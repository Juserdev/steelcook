import { toggle_form } from "@/app/shared/utils/form/toggle-form"

export function quotations_toggle() { toggle_form('[data-add_quotation]', '.list-container-quotations', '.form-add-quotation') }