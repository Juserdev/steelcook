export function add_readonly_inputs(input: HTMLInputElement, ids: string[]) {
  if (ids.includes(input.id)) input.readOnly = true
}


