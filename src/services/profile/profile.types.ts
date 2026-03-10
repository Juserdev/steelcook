export interface Profile {
  address: string
  company: string
  company_id: number
  created_at: string
  email: string
  id: string
  logo: string | null
  phone: number | null
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

export interface Send_Quote_Profile extends Omit<Profile, 'created_at' | 'id' | 'logo'> { }