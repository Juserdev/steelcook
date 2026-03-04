export function initDashboardNavigation() {
  const buttons = document.querySelectorAll<HTMLDivElement>('[data-section]')
  const contents = document.querySelectorAll<HTMLDivElement>('.section-content')
  const form_client = document.querySelector<HTMLFormElement>('.form-add-clients')
  const form_products = document.querySelector<HTMLFormElement>('.form-add-products')
  const list_container_client = document.querySelector<HTMLDivElement>('.list-container-client')
  const list_container_product = document.querySelector<HTMLDivElement>('.list-container-product')

  buttons.forEach(button => {

    button.addEventListener('click', () => {

      const target = button.dataset.section
      contents.forEach(content => content.classList.add('active'))
      document.querySelector(`.${target}-content`)?.classList.remove('active')
      form_client?.classList.add('active')
      form_products?.classList.add('active')
      list_container_client?.classList.remove('active')
      list_container_product?.classList.remove('active')
    })
  })
}

