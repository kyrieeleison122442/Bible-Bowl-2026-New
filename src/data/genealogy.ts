import { GenealogyNode } from '../types';

export const EXODUS_GENEALOGY: GenealogyNode[] = [
  {
    name: "Reuben",
    children: [
      { name: "Hanoch" },
      { name: "Pallu", children: [{ name: "Hezron" }, { name: "Carmi" }] }
    ]
  },
  {
    name: "Simeon",
    children: [
      { name: "Jemuel" },
      { name: "Jamin" },
      { name: "Ohad" },
      { name: "Jachin" },
      { name: "Zohar" },
      { name: "Shaul", notes: "Shaul's mother was from Canaan" }
    ]
  },
  {
    name: "Levi",
    age: 137,
    children: [
      {
        name: "Gershon",
        children: [
          { name: "Libni" },
          { name: "Shimi" }
        ]
      },
      {
        name: "Kohath",
        age: 133,
        children: [
          {
            name: "Amram",
            age: 137,
            spouse: "Jochebed",
            children: [
              { name: "Miriam" },
              {
                name: "Aaron",
                spouse: "Elisheba",
                notes: "Elisheba: Daughter of Amminadab, Sister of Nahshon (Judah tribe)",
                children: [
                  { name: "Nadab" },
                  { name: "Abihu" },
                  {
                    name: "Eleazar",
                    spouse: "Putiel's Daughter",
                    children: [{ name: "Phinehas" }]
                  },
                  { name: "Ithamar" }
                ]
              },
              {
                name: "Moses",
                spouse: "Zipporah",
                children: [
                  { name: "Gershom" },
                  { name: "Eleazar" }
                ]
              }
            ]
          },
          {
            name: "Izhar",
            children: [
              {
                name: "Korah",
                children: [
                  { name: "Assir" },
                  { name: "Elkanah" },
                  { name: "Abisaph" }
                ]
              },
              { name: "Nepheg" },
              { name: "Zichri" }
            ]
          },
          { name: "Hebron" },
          {
            name: "Uziel",
            children: [
              { name: "Mishael" },
              { name: "Elzaphan" },
              { name: "Zithri" }
            ]
          }
        ]
      },
      {
        name: "Merari",
        children: [
          { name: "Mahli" },
          { name: "Mushi" }
        ]
      }
    ]
  }
];
