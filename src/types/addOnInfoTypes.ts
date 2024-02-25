export interface addOnInfoType {
  multiplayer: AddOnType;
  extraStorage: AddOnType;
  customProfile: AddOnType;
}

interface AddOnType {
  title: string;
  description: string;
  price: {
    yearly: number,
    monthly: number
}
}
