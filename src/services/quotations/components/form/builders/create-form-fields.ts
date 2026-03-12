import type { Form_Field } from "@/types/form.types"

export function create_form_fields(form: Form_Field[], section: HTMLElement, class_id: string) {
  const container = document.createElement("div")
  container.classList.add(`container-${class_id}-aq`)

  form.forEach(file => {
    const { label: labels, input: inputs } = file

    const label = document.createElement('label')
    label.htmlFor = labels.for
    label.classList.add(labels.class.specific, labels.class.common)
    label.textContent = labels.content

    const input = document.createElement('input')
    input.type = inputs.type
    input.id = inputs.id
    input.name = inputs.name
    input.placeholder = inputs.placeholder

    if (inputs.list) {
      input.setAttribute('list', inputs.list)

      const datalist = document.createElement('datalist')
      datalist.id = inputs.list
      datalist.classList.add(inputs.list)

      container.appendChild(label)
      container.appendChild(input)
      container.appendChild(datalist)
      return
    }


    input.classList.add(inputs.class.specific, inputs.class.common)

    container.appendChild(label)
    container.appendChild(input)

  })

  section.appendChild(container)

}