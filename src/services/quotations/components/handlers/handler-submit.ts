import { createQuotation } from "../../quotations-service"
import { extract_quotation_form } from "../utils/extract-quotation-form"

export function handler_submit(form: HTMLFormElement, TOKEN: string) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const quote = extract_quotation_form(form)

    await createQuotation(TOKEN, quote)

    window.location.reload()
  })

}