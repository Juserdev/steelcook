import { getClients } from "@/services/clients/clients-services"
import { getProducts } from "@/services/products/products-services"
import { getProfile } from "@/services/profile/profile-services"
import { getqQuotations } from "@/services/quotations/quotations-service"

const TOKEN = localStorage.getItem('access_token')

interface Clients {
  address: string
  created_at: string
  email: string
  id: string
  name: string
  phone: string
}

interface Products {
  created_at: string
  description: string
  id: string
  name: string
  price: number
}

interface Profile {
  address: string
  company: string
  created_at: string
  email: string
  id: string
  logo: string | null
  phone: string
}

interface Quotations {
  client_snapshot: unknown
  created_at: string
  id: string
  items: unknown
  profile_snapshot: unknown
  public_id: string
  quotation_id: string
  subtotal: number
  tax: number
  total: number
  user_id: string
}


const clients: Clients[] = await getClients(TOKEN!)
const products: Products[] = await getProducts(TOKEN!)
const profile: Profile[] = await getProfile(TOKEN!)
const quotations: Quotations[] = await getqQuotations(TOKEN!)

export function home(): HTMLDivElement {
  const home = document.createElement('div')

  const p = document.createElement("p")
  p.textContent = "esta es el contenido de la derecha"
  home.appendChild(p)
  console.log(clients)
  console.log(products)
  console.log(profile)
  console.log(quotations)



  return home
}