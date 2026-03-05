
import { btn_add_product, form_aq, form_client_aq, form_product_aq, form_profile_quotation_aq, form_quote_setings_aq, form_total_aq, sections } from "./form/form-config"

export function quotation_form(header: HTMLDivElement) {

  const form = document.createElement('form')
  form.method = form_aq.method
  form.classList.add(form_aq.class)

  const title_profile = document.createElement('h2')
  title_profile.classList.add(sections.profile.class_title)
  title_profile.textContent = sections.profile.title_content

  form.appendChild(title_profile)

  const section_profile = document.createElement("section")
  section_profile.classList.add(sections.profile.class_section)

  form.appendChild(section_profile)

  form_profile_quotation_aq.forEach(file => {
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
    input.classList.add(inputs.class.specific, inputs.class.common)

    section_profile.appendChild(label)
    section_profile.appendChild(input)

  })

  // formulario de quote_settings


  const title_quote_settings = document.createElement('h2')
  title_quote_settings.classList.add(sections.quote_settings.class_title)
  title_quote_settings.textContent = sections.quote_settings.title_content

  form.appendChild(title_quote_settings)

  const section_quote_settings = document.createElement("section")
  section_quote_settings.classList.add(sections.quote_settings.class_section)

  form.appendChild(section_quote_settings)

  form_quote_setings_aq.forEach(file => {
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
    input.classList.add(inputs.class.specific, inputs.class.common)

    section_quote_settings.appendChild(label)
    section_quote_settings.appendChild(input)

  })

  // formulario de Clientes

  const title_client = document.createElement('h2')
  title_client.classList.add(sections.client.class_title)
  title_client.textContent = sections.client.title_content

  form.appendChild(title_client)

  const section_client = document.createElement("section")
  section_client.classList.add(sections.client.class_section)

  form.appendChild(section_client)

  form_client_aq.forEach(file => {
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
    input.classList.add(inputs.class.specific, inputs.class.common)

    section_client.appendChild(label)
    section_client.appendChild(input)

  })

  // Formulario de productos

  const title_products = document.createElement('h2')
  title_products.classList.add(sections.products.class_title)
  title_products.textContent = sections.products.title_content

  form.appendChild(title_products)

  const section_products = document.createElement("section")
  section_products.classList.add(sections.products.class_section)

  form.appendChild(section_products)

  form_product_aq.forEach(file => {
    const { label: labels, input: inputs } = file

    const container = document.createElement("div")
    container.classList.add("container-products-aq")

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

    container.appendChild(label)
    container.appendChild(input)
    section_products.appendChild(container)

  })

  // Boton para agregar productos

  const add_product_btn = document.createElement("button")
  add_product_btn.type = btn_add_product.type
  add_product_btn.classList.add(btn_add_product.class)
  add_product_btn.textContent = btn_add_product.text

  form.appendChild(add_product_btn)

  // Formulario con detalles finales

  const title_total = document.createElement('h2')
  title_total.classList.add(sections.total.class_title)
  title_total.textContent = sections.total.title_content

  form.appendChild(title_total)

  const section_total = document.createElement("section")
  section_total.classList.add(sections.total.class_section)

  form.appendChild(section_total)

  form_total_aq.forEach(file => {
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
    input.classList.add(inputs.class.specific, inputs.class.common)

    section_total.appendChild(label)
    section_total.appendChild(input)

  })

  header.appendChild(form)
}