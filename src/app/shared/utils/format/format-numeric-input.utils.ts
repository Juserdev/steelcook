export function format_thousands_with_dots(value: string): string {
  const onlyDigits = value.replace(/\D/g, '')
  return onlyDigits.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}