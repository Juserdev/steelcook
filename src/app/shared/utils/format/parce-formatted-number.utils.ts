export function parce_formatted_number(text: string) {
  const clean_number = Number(text.replaceAll('.', ''))
  return clean_number

}