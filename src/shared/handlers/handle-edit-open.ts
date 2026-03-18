export function handle_edit_open<T>(
  option: T[],
  container: HTMLDivElement,
  form: HTMLFormElement,
  selectors: {
    item: string,
    list: string,
  },
  onEdit: (id: string, form: HTMLFormElement, option: T[]) => void
) {

  const icon_edit = container.querySelectorAll<HTMLImageElement>('.icon-edit')

  icon_edit.forEach(edit => {
    edit.addEventListener('click', e => {
      const target = e.target as HTMLImageElement

      const content = target.closest(`.${selectors.item}`) as HTMLDivElement
      const list = container.querySelector<HTMLDivElement>(`.${selectors.list}`)

      const id = content.dataset.id
      form.dataset.id = id

      if (!list || !content || !id) return

      form.classList.remove('active')
      list.classList.add('active')

      onEdit(id, form, option)


    })
  });

}