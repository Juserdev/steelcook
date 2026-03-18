import type { Form_Mode } from '@/services/quotations/quotations.types'

export function handle_submit<T>(
  TOKEN: string,
  form: HTMLFormElement,
  extract: (form: HTMLFormElement) => T,
  add: (TOKEN: string, new_object: T) => Promise<any>,
  edit: (TOKEN: string, id: string, new_object: T) => Promise<any>,
) {
  form.addEventListener('submit', async e => {
    e.preventDefault()

    const object = extract(form)
    const mode = form.dataset.mode as Form_Mode
    const id = form.dataset.id

    if (mode === 'add') {

      await add(TOKEN, object)

    } else if (mode === 'edit' && id) {

      await edit(TOKEN, id, object)

    }

    window.location.reload()
  })
}