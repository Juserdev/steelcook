export function initDashboardNavigation() {
  const buttons = document.querySelectorAll<HTMLDivElement>('[data-section]')
  const contents = document.querySelectorAll<HTMLDivElement>('.section-content')

  buttons.forEach(button => {

    button.addEventListener('click', () => {

      const target = button.dataset.section
      contents.forEach(content => content.classList.add('active'))
      document.querySelector(`.${target}-content`)?.classList.remove('active')

    })
  })
}

