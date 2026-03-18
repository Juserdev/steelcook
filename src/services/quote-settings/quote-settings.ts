import { fill_quote_settings_form } from '@/services/quote-settings/components/builders/fill-quote-settings-form'
import { settings_form } from '@/services/quote-settings/components/builders/quote-settings-form'
import { quote_settings_list } from '@/services/quote-settings/components/quote-lsettings-list'
import { quote_settings_header } from '@/services/quote-settings/components/quote-settings-dashboard'
import { extract_quote_settings } from '@/services/quote-settings/components/utils/extract-quote-settings'
import { createQuoteSettings, deleteQuoteSettings, editQuoteSettings } from '@/services/quote-settings/quote-settings-service'
import type { Quote_Settings } from '@/services/quote-settings/quote-settings-types'
import { handle_delete_from_list } from '@/shared/handlers/handle-delete-from-list'
import { handle_edit_open } from '@/shared/handlers/handle-edit-open'
import { handle_submit } from '@/shared/handlers/handle-submit'

export function content_quote_settings(TOKEN: string, quote_settings: Quote_Settings[]): HTMLDivElement {

  const qs_header = quote_settings_header()
  const list = quote_settings_list(quote_settings, qs_header)
  const form = settings_form(qs_header)
  console.log(list)

  handle_submit(TOKEN, form, extract_quote_settings, createQuoteSettings, editQuoteSettings)
  handle_edit_open(quote_settings, qs_header, form, { item: 'qs-file', list: 'list-qs-file' }, fill_quote_settings_form)
  handle_delete_from_list(TOKEN, list, 'qs', deleteQuoteSettings)

  return qs_header
}