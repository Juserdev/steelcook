export interface Profile {
  address: string
  company: string
  company_id: string
  created_at: string
  email: string
  id: string
  logo: string | null
  phone: string
}

export interface Profile_config {
  profile_content_class: { common_class: string, class: string }
  title: { class_1: string, class_2: string, text: string }
  logo: string,
  profile_class: {
    file: string,
    company: string
    company_id: string
    email: string
    phone: string
    address: string
  }
}