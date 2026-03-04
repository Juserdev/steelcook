export function product_toggle() {

  const addProductBtn = document.querySelector<HTMLButtonElement>('[data-add_product]')
  const list_container = document.querySelector<HTMLDivElement>('.list-container-product')
  const form = document.querySelector<HTMLFormElement>('.form-add-products')

  if (!addProductBtn || !list_container || !form) return

  addProductBtn.addEventListener('click', () => {
    list_container.classList.add('active')
    form.classList.remove('active')
  })

}