export interface transportData {
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

export const localStorageKey = "transportData";

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
