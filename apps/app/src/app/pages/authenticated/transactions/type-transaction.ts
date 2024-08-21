export type Transaction = {
  create: string;
  received_on: string;
  billing_cycle_date: string;
  order_id: string;
  order_ref: string;
  invoice_number: number;
  quantity: number;
  description: string;
  type:string;
  import: number;
  status: string;
};
