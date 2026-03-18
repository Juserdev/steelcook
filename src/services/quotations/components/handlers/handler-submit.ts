import { createQuotation, editQuotation } from "../../quotations-service"
import type { Form_Mode } from "../../quotations.types"
import { extract_quotation_form } from "../utils/extract-quotation-form"

export function handler_submit(form: HTMLFormElement, TOKEN: string) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const quote = extract_quotation_form(form)
    const mode = form.dataset.mode as Form_Mode
    const id = form.dataset.id

    if (mode === 'add') {

      await createQuotation(TOKEN, quote)

    } else if (mode === 'edit' && id) {

      await editQuotation(TOKEN, id, quote)

    }


    window.location.reload()
  })

}