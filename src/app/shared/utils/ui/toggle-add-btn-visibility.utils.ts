export function toggle_add_btn_visibility<T>(header: HTMLDivElement, content: T[], data: string) {
  const btn = header.querySelector<HTMLButtonElement>(`[data-${data}]`)
  if (!btn) return
  btn.classList.toggle('active', content.length > 0)
}