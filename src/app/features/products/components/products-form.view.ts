import { form_add_product, products_dataset } from "@/app/features/products/config/form-add-product.config"



export function product_form(header: HTMLDivElement) {
  const form = document.createElement('form')
  form.method = form_add_product.form.method.post
  form.classList.add(form_add_product.form.class, 'active')

  form_add_product.fields.forEach(files => {
    const { label: labels, input: inputs } = files

    const label = document.createElement('label')
    label.htmlFor = labels.for
    label.classList.add(labels.class.specific, labels.class.common)
    label.textContent = labels.content

    const input = document.createElement('input')
    input.type = inputs.type
    input.id = inputs.id
    input.name = inputs.name
    input.placeholder = inputs.placeholder
    input.classList.add(inputs.class.specific, inputs.class.common)
    input.required = true

    form.appendChild(label)
    form.appendChild(input)

    if (input.name === 'price') input.dataset.price = products_dataset.data

  })

  const btn = document.createElement('button')
  btn.type = form_add_product.button.type
  btn.textContent = form_add_product.button.text
  btn.classList.add(form_add_product.button.class)

  form.appendChild(btn)

  header.appendChild(form)

  return form
}