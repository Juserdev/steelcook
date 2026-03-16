import { deleteClient } from '@/services/clients/clients-services'

export function handle_client_delete(TOKEN: string, container: HTMLDivElement) {

  const icon_delete = container.querySelectorAll<HTMLImageElement>('.icon-delete')

  icon_delete.forEach(icon => {

    icon.addEventListener('click', async e => {

      const target = e.target as HTMLImageElement
      const content = target.closest('.client-file') as HTMLDivElement

      if (!content) return

      const id = content.dataset.id

      await deleteClient(TOKEN, id!)

      window.location.reload()
    })

  })

}