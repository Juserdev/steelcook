export function quotations_toggle() {

  const addQuotationBtn = document.querySelector<HTMLButtonElement>('[data-add_quotation]')
  const list_container = document.querySelector<HTMLDivElement>('.list-container-quotations')
  const form = document.querySelector<HTMLFormElement>('.form-add-quotation')

  if (!addQuotationBtn || !list_container || !form) return

  addQuotationBtn.addEventListener('click', () => {
    list_container.classList.add('active')
    form.classList.remove('active')
  })

}