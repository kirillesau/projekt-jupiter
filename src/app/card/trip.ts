export interface Trip {
  id: number;
  halberPreis: boolean;
  art: string;
  link: string;
  tripName: string;
  description: string;
  performance?: string;
  additionalInfo?: string;
  validDate?: string;
  price?: string;
  genommen?: boolean;
}
