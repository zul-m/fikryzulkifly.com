export interface simplifiedProject {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  bedroom: number;
  bathroom: number;
  parking: number;
  size: number;
}

export interface simplifiedRental {
  _id: string;
  imageUrl: string;
  installment: number;
  slug: string;
  name: string;
  location: string;
  bedroom: number;
  bathroom: number;
  parking: number;
  size: number;
}

export interface fullProject {
  _id: string;
  images: any;
  price: number;
  installment: number;
  slug: string;
  categoryName: string;
  name: string;
  location: string;
  content: any;
  link: string;
  listing: string;
  bedroom: number;
  bathroom: number;
  parking: number;
  size: number;
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
  bedroom: number;
  bathroom: number;
  parking: number;
  size: number;
  facilities: string;
  propertyType: string;
  dateIn: string;
  deposit: string;
  furnish: string;
}

export interface viewing {
  _id: string;
  name: string;
  image: string;
  file: string;
}
