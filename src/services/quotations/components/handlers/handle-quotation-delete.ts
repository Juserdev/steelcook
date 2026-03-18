import { deleteQuotation } from "../../quotations-service"

export function handle_quotation_delete(TOKEN: string, container: HTMLDivElement) {
  const icon_delete = container.querySelectorAll<HTMLImageElement>('.icon-delete')

  icon_delete.forEach(icon => {
    icon.addEventListener('click', async e => {

      const target = e.target as HTMLImageElement
      const content = target.closest('.quotation-file') as HTMLDivElement

      if (!content) return

      const id = content.dataset.id

      await deleteQuotation(TOKEN, id!)

      window.location.reload()
    })

  })
}