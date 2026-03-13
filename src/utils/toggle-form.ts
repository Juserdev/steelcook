export function toggle_form(
  btn_selector: string,
  list_selector: string,
  form_selector: string
) {

  const btn = document.querySelector<HTMLButtonElement>(btn_selector)
  const list = document.querySelector<HTMLDivElement>(list_selector)
  const form = document.querySelector<HTMLFormElement>(form_selector)

  if (!btn || !list || !form) return

  btn.addEventListener('click', () => {
    list.classList.add('active')
    form.classList.remove('active')
  })

}