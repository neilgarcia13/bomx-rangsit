export const motorcycleMakes = ["Honda", "Yamaha"] as const;

export type MotorcycleMake = (typeof motorcycleMakes)[number];

export type Motorcycle = {
  id: string;
  make: MotorcycleMake;
  name: string;
  slug: string;
};

export const motorcycles = [
  {
    id: "honda-click-125i-150i",
    make: "Honda",
    name: "Click 125i / 150i",
    slug: "honda-click-125i-150i",
  },
  {
    id: "honda-click-160",
    make: "Honda",
    name: "Click 160",
    slug: "honda-click-160",
  },
  {
    id: "honda-pcx-160",
    make: "Honda",
    name: "PCX 160",
    slug: "honda-pcx-160",
  },
  {
    id: "honda-adv-160",
    make: "Honda",
    name: "ADV 160",
    slug: "honda-adv-160",
  },
  {
    id: "yamaha-aerox-155-v1",
    make: "Yamaha",
    name: "Aerox 155 V1",
    slug: "yamaha-aerox-155-v1",
  },
  {
    id: "yamaha-aerox-155-v2-v3",
    make: "Yamaha",
    name: "Aerox 155 V2 / V3",
    slug: "yamaha-aerox-155-v2-v3",
  },
  {
    id: "yamaha-nmax-155-v1",
    make: "Yamaha",
    name: "NMAX 155 V1",
    slug: "yamaha-nmax-155-v1",
  },
  {
    id: "yamaha-nmax-155-v2",
    make: "Yamaha",
    name: "NMAX 155 V2",
    slug: "yamaha-nmax-155-v2",
  },
] as const satisfies readonly Motorcycle[];
