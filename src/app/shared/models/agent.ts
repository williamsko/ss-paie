export interface Agent {
  address: string;
  code: string;
  id?: number;
  phoneNumber: number;
  firstName: string;
  lastName: string;
  entreprise: Entreprise;
}

export interface Entreprise {
  address: string;
  brandName: string;
  code?: string;
  email: string;
  id?: number;
  phoneNumber: string;
  status?: boolean;
}
