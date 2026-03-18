import { toggle_form } from "@/utils/toggle-form";

export function quote_settings_toggle() {
  toggle_form(
    '[data-add_quote_settings]',
    '.qs-file',
    '.form-add-quote-settings'
  )
}