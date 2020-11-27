export interface transportData {
  schoolName: string,
  className: string,
  zone: {
    animal: string;
    colour: string;
  };
  transport: string;
  date: string;
  journey: string;
}

export interface buttonValue {
  value: string;
  img?: string;
  colour?: string;
}

export interface school {
  name: string,
  classes: string[],
  zones: {
    animals: {
      value: string,
      img: string,
    }[],
    colours:
    {
      value: string,
      colour: string,
    }[],
  },
  transports: {
    value: string,
    img: string,
  }[],
}

export interface selectedClass {
  schoolName: string,
  className: string,
  zones: {
    animals: {
      value: string,
      img: string,
    }[],
    colours:
    {
      value: string,
      colour: string,
    }[],
  },
  transports: {
    value: string,
    img: string,
  }[],
}

export const transportStorageKey = "transportData";
export const schoolStorageKey = "schoolData";

const toLowerSnakeCase = (string: string) =>
  string.replace(" ", "_").toLowerCase();

export const adaptRecords = (records: Array<transportData>) => {
  console.log("recs", records);
  return records.map(({ journey, date, zone, transport }, index) => ({
    pupil_id: index,
    class_id: 1,
    school_id: 1,
    date,
    journey: journey.toLowerCase(),
    shares: 0,
    method: toLowerSnakeCase(transport),
    zone_animal: toLowerSnakeCase(zone.animal),
    zone_colour: toLowerSnakeCase(zone.colour),
  }));
};
