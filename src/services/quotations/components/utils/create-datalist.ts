export function create_datalist<T>(data: T[], selector: string, form: HTMLFormElement, getValue: (item: T) => string) {
  const datalist = form.querySelector<HTMLDataListElement>(selector)
  if (!datalist) return

  data.forEach(item => {
    const option = document.createElement('option')
    option.value = getValue(item)

    datalist.appendChild(option)
  })
}