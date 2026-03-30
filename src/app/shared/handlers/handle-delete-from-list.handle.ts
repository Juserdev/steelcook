export function handle_delete_from_list(
  TOKEN: string,
  list: HTMLDivElement,
  item_class: string,
  removeItem: (TOKEN: string, id: string) => Promise<any>
) {
  const icon_delete = list.querySelectorAll<HTMLImageElement>('.icon-delete')

  icon_delete.forEach(icon => {

    icon.addEventListener('click', async e => {

      const target = e.target as HTMLImageElement
      const content = target.closest(`.${item_class}-file`) as HTMLDivElement

      if (!content) return

      const id = content.dataset.id

      await removeItem(TOKEN, id!)

      window.location.reload()
    })

  })
}