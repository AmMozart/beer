interface BoilVolume {
  unit: string;
  value: number;
}

interface BeerData {
  abv: number;
  attenuation_level: number;
  boil_volume: BoilVolume;
  description: string;
  first_brewed: string;
  id: number;
  image_url: string;
  name: string;
}

export type { BeerData };
