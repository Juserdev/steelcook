export function add_required_inputs(
  input: HTMLInputElement,
  ids: string[]
) {
  if (ids.includes(input.id)) input.required = true
}