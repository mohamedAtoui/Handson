/** Wholesalers distributing HandSon products across Algeria, grouped by wilaya. */
export const DISTRIBUTOR_WILAYAS = [
  {
    wilaya: "Sétif",
    distributors: [
      "Pharmainvest",
      "UPROmedic",
      "Somepharm",
      "Setif Medic 2",
      "Setifismed",
      "Timelouka",
      "Setif Medic",
      "Attia Pharm",
      "Youghorta",
    ],
  },
  {
    wilaya: "Alger",
    distributors: ["GH MED", "Hydrapharm"],
  },
] as const;

/** Ordered list used by the announcement marquee. */
export const DISTRIBUTORS = DISTRIBUTOR_WILAYAS.flatMap(
  ({ distributors }) => distributors,
);

/** Verified assets from official company websites; absent logos use text. */
export const DISTRIBUTOR_LOGOS: Partial<Record<(typeof DISTRIBUTORS)[number], string>> = {
  Pharmainvest: "/distributors/pharmainvest.png",
  UPROmedic: "/distributors/upromedic.png",
  Somepharm: "/distributors/somepharm.png",
  Hydrapharm: "/distributors/hydrapharm.png",
};
