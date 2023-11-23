export interface simplifiedProject {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

export interface fullProject {
  _id: string;
  images: any;
  price: number;
  installment: number;
  slug: string;
  categoryName: string;
  name: string;
  content: any;
  link: string;
  listing: string;
}
