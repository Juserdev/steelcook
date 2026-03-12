export interface Quote_Settings {
  id: string
  observations: string
  warranty: string
  delivery_time: string
  transport: string
  payment_method: string
  created_at: string
}

export interface Send_Quote_Settings extends Omit<Quote_Settings, 'id' | 'created_at'> { }
