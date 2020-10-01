export interface transportData {
  zone: {
    animal: string;
    colour: string;
  };
  transport: string;
  date: Date;
  am_pm: string;
}

export interface buttonValue {
  value: string;
  img?: string;
}

export const localStorageKey = 'transportData';
