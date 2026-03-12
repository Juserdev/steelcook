import type { Quote_Settings } from '@/services/quote-settings/quote-settings-types'
import { quote_settings_header } from './components/quote-settings-dashboard'
import { quote_settings_list } from './components/quote-lsettings-list'

export function content_quote_settings(quote_settings: Quote_Settings[]): HTMLDivElement {

  const qs_header = quote_settings_header()
  quote_settings_list(quote_settings, qs_header)

  return qs_header
}