export function fill_form_fileds(form: HTMLFormElement, data: Record<string, any>, map: Record<string, string>) {
  if (!data) return

  Object.entries(map).forEach(([inputName, dataKey]) => {
    const input = form.elements.namedItem(inputName) as HTMLInputElement
    if (!input) return

    const value = data[dataKey]
    input.value = value != null ? String(value) : ''

  })
}