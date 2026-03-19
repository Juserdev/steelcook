export function add_required_inputs(input: HTMLInputElement, ...ids: string[]) {
  const mandatory_inputs = ids
  if (mandatory_inputs.includes(input.id)) input.required = true
}