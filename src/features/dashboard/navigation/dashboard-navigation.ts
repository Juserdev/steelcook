export function initDashboardNavigation() {
  const buttons = document.querySelectorAll<HTMLDivElement>('[data-section]')
  const contents = document.querySelectorAll<HTMLDivElement>('.section-content')
  const form = document.querySelector<HTMLFormElement>('.form-add-clients')
  const list_container = document.querySelector<HTMLDivElement>('.list-container')

  buttons.forEach(button => {

    button.addEventListener('click', () => {

      const target = button.dataset.section
      contents.forEach(content => content.classList.add('active'))
      document.querySelector(`.${target}-content`)?.classList.remove('active')
      form?.classList.add('active')
      list_container?.classList.remove('active')
    })
  })
}

