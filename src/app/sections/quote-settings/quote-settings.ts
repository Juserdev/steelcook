import { fill_quote_settings_form } from '@/app/builders/quote-settings/fill-quote-settings-form'
import { settings_form } from '@/app/builders/quote-settings/quote-settings-form'
import { extract_quote_settings } from '@/app/utils/quote-settings/extract-quote-settings'
import { createQuoteSettings, deleteQuoteSettings, editQuoteSettings } from '@/app/services/quote-settings/quote-settings-services'
import type { Quote_Settings } from '@/app/types/quote-settings/quote-settings.types'
import { handle_delete_from_list } from '@/app/shared/handlers/handle-delete-from-list'
import { handle_edit_open } from '@/app/shared/handlers/handle-edit-open'
import { handle_submit } from '@/app/shared/handlers/handle-submit'
import { toggle_add_btn_visibility } from '@/app/shared/utils/ui/toggle-add-btn-visibility'
import { quote_settings_header } from '@/app/builders/quote-settings/quote-settings-dashboard'
import { quote_settings_list } from '@/app/builders/quote-settings/quote-settings-list'

export function content_quote_settings(TOKEN: string, quote_settings: Quote_Settings[]): HTMLDivElement {

  const qs_header = quote_settings_header()
  const list = quote_settings_list(quote_settings, qs_header)
  const form = settings_form(qs_header)

  handle_submit(TOKEN, form, extract_quote_settings, createQuoteSettings, editQuoteSettings)
  handle_edit_open(quote_settings, qs_header, form, { item: 'qs-file', list: 'list-qs-file' }, fill_quote_settings_form)
  handle_delete_from_list(TOKEN, list, 'qs', deleteQuoteSettings)

  toggle_add_btn_visibility(qs_header, quote_settings, 'add_quote_settings')

  return qs_header

}