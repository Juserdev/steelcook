import { sidebar } from "@/features/dashboard/sidebar/sidebar"
import { content_home } from "./main-content/home/home"
import { initDashboardNavigation } from "./navigation/dashboard-navigation"
import { content_clients } from "@/services/clients/clients"
import { loadDashboardData } from "./dashboard-data"
import { content_products } from "@/services/products/products"
import { content_profile } from "@/services/profile/profile"
import { content_quotations } from "@/services/quotations/quotations"
import { showQuotationPublic } from "./navigation/dashboard-public-links"

import { client_toggle } from "@/services/clients/components/clients-toggle"
import { product_toggle } from "@/services/products/components/products-toggle"

import '@/styles/dashboard.css'
import { content_quote_settings } from "@/services/quote-settings/quote-settings"
import { quotations_toggle } from "@/services/quotations/components/quotations-toggle"

const TOKEN = localStorage.getItem('access_token')

if (!TOKEN) window.location.href = './login.html'

const { clients, products, quotations, profile, quote_settings } = await loadDashboardData(TOKEN!)
const app = document.querySelector<HTMLDivElement>("#app")!

const sidebar_container = sidebar(profile)
const home_content = content_home(clients, products, quotations)
const profile_content = content_profile(profile)
const clients_content = content_clients(TOKEN!, clients)
const products_content = content_products(TOKEN!, products)
const quotation_content = content_quotations(TOKEN!, quotations)
const quote_settings_content = content_quote_settings(quote_settings)

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
