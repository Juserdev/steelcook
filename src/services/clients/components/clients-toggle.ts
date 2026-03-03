export function client_toggle() {

  const addClientBtn = document.querySelector<HTMLButtonElement>('[data-add_client]')
  const list_container = document.querySelector<HTMLDivElement>('.list-container')
  const form = document.querySelector<HTMLFormElement>('.form-add-clients')

  if (!addClientBtn || !list_container || !form) return

  addClientBtn.addEventListener('click', () => {
    list_container.classList.add('active')
    form.classList.remove('active')
  })

}