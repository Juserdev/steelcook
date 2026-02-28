import { login } from '@/services/auth-service.ts'
import { inputs } from '@/features/login/login.config'

const app = document.querySelector<HTMLDivElement>("#app")!

const loginContainer = document.createElement("div")
loginContainer.classList.add("login-container")

const loginForm = document.createElement("form")
loginForm.classList.add("login-form")

inputs.forEach(input => {
  const labelForm = document.createElement("label")
  labelForm.htmlFor = input.label.id
  labelForm.textContent = input.label.text_content
  labelForm.classList.add(input.label.class_label)

  const inputForm = document.createElement("input")
  inputForm.id = input.input.id
  inputForm.name = input.input.name
  inputForm.type = input.input.type
  inputForm.placeholder = input.input.placeholder
  inputForm.classList.add(input.input.class_input)
  inputForm.required = input.input.required


  loginForm.appendChild(labelForm)
  loginForm.appendChild(inputForm)
})

const continueBtn = document.createElement("button")
continueBtn.classList.add("login-btn")
continueBtn.type = "submit"
continueBtn.textContent = "Continua"
loginForm.appendChild(continueBtn)


app.appendChild(loginContainer)
loginContainer.appendChild(loginForm)



loginForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  const formData = new FormData(loginForm)
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const ACCESS_TOKEN = await login(email, password)

  if (ACCESS_TOKEN) {
    localStorage.setItem('access_token', ACCESS_TOKEN)
    window.location.href = './dashboard.html'
  } else {
    alert('Login fallido, revisa tus credenciales')
  }
})

