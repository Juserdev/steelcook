import { toggle_form } from "@/app/shared/utils/form/toggle-form.utils"

export function client_toggle() { toggle_form('[data-add_client]', '.list-container-client', '.form-add-clients') }