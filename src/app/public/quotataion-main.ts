import { get_public_quotation } from "@/app/features/quotations/services/quotation-public-services";


const urlParams = new URLSearchParams(window.location.search)
const public_id = urlParams.get("public_id")

if (public_id) {
  const quotation = await get_public_quotation(public_id)
  console.log(quotation)
}