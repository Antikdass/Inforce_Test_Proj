export interface IProducts {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  year: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  comments: IComments[];
}

export interface IComments {
  id: number;
  productId: number;
  description: string;
  date: string;
}
