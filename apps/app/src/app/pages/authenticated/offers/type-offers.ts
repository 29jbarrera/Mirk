export type Offers = {
  product: Product[];
  suk: string;
  condition: string;
  price: number;
  quantity: number;
};

export type Product = {
  img?: string;
  title: string;
  description: string;
};
