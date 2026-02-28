import { sidebar } from "@/features/dashboard/sidebar/sidebar"
import { home } from "./main-content/home/home"


const TOKEN = localStorage.getItem('access_token')

if (!TOKEN) {
  console.log("No hay token, redifiendo al login")
  window.location.href = './login.html'
}

// CONFIRMACION DE ACCERO CON TOKEN

// CREACION DE TIPOS

const app = document.querySelector<HTMLDivElement>("#app")!

const left_container = sidebar()
const right_container = document.createElement("div")

const home_content = home()

right_container.appendChild(home_content)

app.appendChild(left_container)
app.appendChild(right_container)