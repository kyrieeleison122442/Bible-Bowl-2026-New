import { TabernacleTally } from '../types';

export const TABERNACLE_DATA: TabernacleTally[] = [
  {
    metal: 'gold',
    talents: 29,
    shekels: 720,
    description: "Used for the Ark, Mercy Seat, Cherubim, Table of Offering, and Lampstand."
  },
  {
    metal: 'silver',
    talents: 100,
    shekels: 1775,
    manCount: 603550,
    description: "Used for the capitals of the tabernacle and the veil."
  },
  {
    metal: 'bronze',
    talents: 70,
    shekels: 1500,
    description: "Used for the Altar of Burnt Offering, Altar utensils, and the Laver."
  }
];

export const PLAGUES = [
  "Water to Blood",
  "Frogs",
  "Lice",
  "Dog-flies",
  "Pestilence (Diseased Cattle)",
  "Boils",
  "Hail",
  "Locusts",
  "Darkness",
  "Death of Firstborn"
];

export const TRAP_NUMBERS = [
  {
    value: 75,
    label: "Jacob's Seed",
    description: "Total persons who came into Egypt.",
    reference: "Exodus 1:5"
  },
  {
    value: 137,
    label: "Levi / Amram's Age",
    description: "Age at death.",
    reference: "Exodus 6:16, 6:20"
  },
  {
    value: 133,
    label: "Kohath's Age",
    description: "Age at death.",
    reference: "Exodus 6:18"
  }
];
