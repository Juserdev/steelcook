import type { ICON_ASSETS } from "@/app/shared/types/icons.types";
import quote_settings from '@/assets/icons/icon_quote_settings.svg'
import client from '@/assets/icons/icon-clients.svg'
import edit from '@/assets/icons/icon-edit.svg'
import home from '@/assets/icons/icon-home.svg'
import products from '@/assets/icons/icon-products.svg'
import profile from '@/assets/icons/icon-profile.svg'
import quotation from '@/assets/icons/icon-quotations.svg'
import remove from '@/assets/icons/icon-delete.svg'


export const icons: ICON_ASSETS = {
  quote_settings: quote_settings,
  clients: client,
  edit: edit,
  home: home,
  products: products,
  profile: profile,
  quotation: quotation,
  remove: remove
} as const