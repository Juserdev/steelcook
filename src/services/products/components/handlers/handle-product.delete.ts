import { deleteProducts } from '@/services/products/products-services'


export function handle_product_delete(TOKEN: string, container: HTMLDivElement) {
  const icon_delete = container.querySelectorAll<HTMLDivElement>('.icon-delete')

  icon_delete.forEach(icon => {
    icon.addEventListener('click', async e => {

      const target = e.target as HTMLImageElement
      const content = target.closest('.product-file') as HTMLDivElement

      if (!content) return

      const id = content.dataset.id

      await deleteProducts(TOKEN, id!)

      window.location.reload()
    })
  })
}