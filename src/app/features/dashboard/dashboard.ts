import { sidebar } from "@/app/features/sidebar/sidebar"

import { content_products } from "@/app/features/products/products"
import { content_profile } from "@/app/features/profile/profile"
import { content_quotations } from "@/app/features/quotations/quotations"
import { client_toggle } from "@/app/features/clients/utils/clients-toggle"
import { product_toggle } from "@/app/features/products/utils/products-toggle"
import { loadDashboardData } from "@/app/features/dashboard/services/dashboard.services"
import { initDashboardNavigation } from "@/app/shared/navigation/dashboard-navigation"
import { showQuotationPublic } from "@/app/shared/navigation/dashboard-public-links"
import { profile_toggle } from "@/app/features/profile/utils/profile-toggle"
import { quotations_toggle } from "@/app/features/quotations/utils/quotations-toggle"
import { quote_settings_toggle } from "@/app/features/quote-settings/utils/quote-settings-toggle"
import { content_quote_settings } from "@/app/features/quote-settings/quote-settings"
import { init_input_behaviors } from "@/app/shared/utils/format/format-input-prices"
import { content_home } from "@/app/features/home/home"
import '@/app/features/dashboard/styles/dashboard.css'
import { content_clients } from "@/app/features/clients/clients"

const TOKEN = localStorage.getItem('access_token')

if (!TOKEN) window.location.href = './login.html'

const { clients, products, quotations, profile, quote_settings } = await loadDashboardData(TOKEN!)
const app = document.querySelector<HTMLDivElement>("#app")!

const sidebar_container = sidebar(profile)
const home_content = content_home(clients, products, quotations)
const profile_content = content_profile(TOKEN!, profile)
const clients_content = content_clients(TOKEN!, clients)
const products_content = content_products(TOKEN!, products)
const quote_settings_content = content_quote_settings(TOKEN!, quote_settings)
const quotation_content = content_quotations(TOKEN!, quotations, profile, quote_settings, clients, products)

const right_container = document.createElement("div")
right_container.classList.add("right-container")

const left_container = document.createElement("div")
left_container.classList.add("left-container")


left_container.appendChild(sidebar_container)
right_container.appendChild(home_content)
right_container.appendChild(profile_content)
right_container.appendChild(clients_content)
right_container.appendChild(products_content)
right_container.appendChild(quotation_content)
right_container.appendChild(quote_settings_content)

app.appendChild(left_container)
app.appendChild(right_container)

initDashboardNavigation()
showQuotationPublic()

client_toggle()
product_toggle()
quotations_toggle()
profile_toggle()
quote_settings_toggle()
init_input_behaviors(right_container)




