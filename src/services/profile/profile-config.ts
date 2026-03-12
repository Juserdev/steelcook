import type { Titles_Sheets } from "@/types/ui.types";
import type { Profile_config } from "./profile.types";

export const profile_config: Profile_config = {
  profile_content_class: { common_class: 'section-content', class: 'profile-content' },
  title: { class_1: 'title', class_2: 'profile-title', text: 'Perfil' },
  logo: 'profile-logo',
  profile_class: {
    file: 'profile-logo',
    company: 'profile-company',
    company_id: 'profile-id',
    email: 'profile-email',
    phone: 'profile-phone',
    address: 'profile-address'
  },
  button: {
    type: 'button',
    class: 'btn-edit-profile',
    text: 'Agregar o editar perfil',
    dataset: 'add_profile'
  }
}

export const profile_titles_sheets: Titles_Sheets[] = [
  {
    title: "EMPRESA",
    class: "profile-sheet-cmpany",
    common_class: "profile-sheet"
  }, {
    title: "ID",
    class: "profile-sheet-id",
    common_class: "profile-sheet"
  }, {
    title: "EMAIL",
    class: "profile-sheet-email",
    common_class: "profile-sheet"
  }, {
    title: "TELEFONO",
    class: "profile-sheet-phone",
    common_class: "profile-sheet"
  }, {
    title: "DIRECCIÓN",
    class: "profile-sheet-address",
    common_class: "profile-sheet"
  },
]