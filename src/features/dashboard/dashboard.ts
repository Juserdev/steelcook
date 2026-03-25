import { sidebar } from "@/features/dashboard/sidebar/sidebar"
import { content_clients } from "@/app/sections/clients/clients"
import { content_products } from "@/app/sections/products/products"
import { content_profile } from "@/app/sections/profile/profile"
import { content_quotations } from "@/services/quotations/quotations"
import { client_toggle } from "@/app/utils/clients/clients-toggle"
import { product_toggle } from "@/app/utils/products/products-toggle"
import { loadDashboardData } from "@/features/dashboard/dashboard-data"
import { content_home } from "@/features/dashboard/main-content/home/home"
import { initDashboardNavigation } from "@/features/dashboard/navigation/dashboard-navigation"
import { showQuotationPublic } from "@/features/dashboard/navigation/dashboard-public-links"
import { profile_toggle } from "@/app/utils/profile/profile-toggle"
import { quotations_toggle } from "@/services/quotations/components/quotations-toggle"
import { quote_settings_toggle } from "@/services/quote-settings/components/quote-settings-toggle"
import { content_quote_settings } from "@/services/quote-settings/quote-settings"
import { init_input_behaviors } from "@/utils/format-input-prices"
import '@/styles/dashboard.css'

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




