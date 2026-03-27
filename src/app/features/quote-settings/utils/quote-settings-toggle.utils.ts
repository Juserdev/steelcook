import { toggle_form } from "@/app/shared/utils/form/toggle-form.utils";

export function quote_settings_toggle() {
  toggle_form(
    '[data-add_quote_settings]',
    '.list-qs-file',
    '.form-add-quote-settings'
  )
}