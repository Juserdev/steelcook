export function handle_quotation_edit_open(
  container: HTMLDivElement,
  form: HTMLFormElement,
  onEdit: (id: string, form: HTMLFormElement) => void
) {

  const icon_edit = container.querySelectorAll<HTMLImageElement>('.icon-edit')

  icon_edit.forEach(edit => {
    edit.addEventListener('click', e => {
      const target = e.target as HTMLImageElement

      const content = target.closest('.quotation-file') as HTMLDivElement
      const list = container.querySelector<HTMLDivElement>('.list-container-quotations')

      const id = content.dataset.id

      if (!list || !content || !id) return

      form.classList.remove('active')
      list.classList.add('active')

      onEdit(id, form)


    })
  });

}