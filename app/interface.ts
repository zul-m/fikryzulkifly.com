export interface simplifiedProject {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

export interface simplifiedRental {
  _id: string;
  imageUrl: string;
  installment: number;
  slug: string;
  name: string;
  location: string;
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

export interface fullRental {
  _id: string;
  images: any;
  installment: number;
  slug: string;
  name: string;
  location: string;
  content: any;
  link: string;
  listing: string;
}
