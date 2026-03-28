import { fill_quote_settings_form } from '@/app/features/quote-settings/components/fill-quote-settings-form.view'
import { quote_settings_header } from '@/app/features/quote-settings/components/quote-settings-dashboard.view'
import { settings_form } from '@/app/features/quote-settings/components/quote-settings-form.view'
import { quote_settings_list } from '@/app/features/quote-settings/components/quote-settings-list.view'
import { createQuoteSettings, deleteQuoteSettings, editQuoteSettings } from '@/app/features/quote-settings/services/quote-settings.services'
import type { Quote_Settings } from '@/app/features/quote-settings/types/quote-settings.types'
import { extract_quote_settings } from '@/app/features/quote-settings/utils/extract-quote-settings.utils'
import { handle_delete_from_list } from '@/app/shared/handlers/handle-delete-from-list.handle'
import { handle_edit_open } from '@/app/shared/handlers/handle-edit-open.handle'
import { handle_submit } from '@/app/shared/handlers/handle-submit.handle'
import { toggle_add_btn_visibility } from '@/app/shared/utils/ui/toggle-add-btn-visibility.utils'

export function content_quote_settings(TOKEN: string, quote_settings: Quote_Settings[]): HTMLDivElement {

  const qs_header = quote_settings_header()
  const list = quote_settings_list(quote_settings, qs_header)
  const form = settings_form(qs_header)

  handle_submit(TOKEN, form, extract_quote_settings, createQuoteSettings, editQuoteSettings)
  handle_edit_open(quote_settings, qs_header, form, { item: 'qs-file', list: 'list-qs' }, fill_quote_settings_form)
  handle_delete_from_list(TOKEN, list, 'qs', deleteQuoteSettings)

  toggle_add_btn_visibility(qs_header, quote_settings, 'add_quote_settings')

  return qs_header

}