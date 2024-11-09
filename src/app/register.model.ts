export interface Register {
    id?: number; // id est optionnel car il sera généré par le backend
    username: string;
    password: string;
    email: string;
    dateOfBirth: string; // Vous pouvez aussi le changer en Date si nécessaire
    gender: string;
    country: string;
    region: string;
    education: string;
    phoneNumber: string;
  }
  