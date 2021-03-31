interface IProducts {
  name: string;
  available: boolean;
  collection: string;
  image: string;
  price: number;
  key: number;
}

const Products: IProducts[] = [
  {
    name: 'Adidas ZX4000',
    available: true,
    collection: 'Jzen Keo',
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/b85fa92d74154c599f26aac000fe25ff_9366/ZX_4000_4D_Schuh_Schwarz_EF9625_01_standard.jpg',
    price: 300,
    key: 1,
  },
  {
    name: 'Keoro Fire',
    available: false,
    collection: 'Originals',
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/17fc867b5e4a4a489535ac6300bad9bb_9366/Fluidflow_2.0_Laufschuh_Weiss_FY5961_01_standard.jpg',
    price: 140,
    key: 2,
  },
  {
    name: 'ULTRABOOST UH',
    available: true,
    collection: 'Running',
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/896b01d1ca8b499fb587ac2200fbf1d6_9366/Ultraboost_Uncaged_DNA_5.0_Laufschuh_Beige_G55370_01_standard.jpg',
    price: 180,
    key: 3,
  },
  {
    name: 'FLUIDFLOW 2.0',
    available: true,
    collection: 'Running',
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4e020b3837ef471894a0ac1d01082149_9366/Fluidflow_2.0_Laufschuh_Weiss_FY5959_01_standard.jpg',
    price: 80,
    key: 4,
  },
  {
    name: 'Terrex Speed',
    available: true,
    collection: 'Running',
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/43b2ca8331b54d9687e9ac850116cfdf_9366/TERREX_Speed_Ultra_Trailrunning-Schuh_Weiss_FW2804_01_standard.jpg',
    price: 180,
    key: 5,
  },
  {
    name: 'Adipower 2',
    available: true,
    collection: 'Powerlifting',
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4e5d4c3e509a4c45aac1ac0200dbe3a4_9366/Adipower_2_Gewichtheberschuh_Blau_FX0572_01_standard.jpg',
    price: 170,
    key: 6,
  },
  {
    name: 'Predator Freak 3',
    available: true,
    collection: 'Football',
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/469f5ad644fb4d38bf47ac8400ebe092_9366/Predator_Freak.3_IN_Fussballschuh_Schwarz_FY0748_01_standard.jpg',
    price: 90,
    key: 7,
  },
  {
    name: 'Nemeziz 19.3',
    available: true,
    collection: 'Football',
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/bf7dff3fd0b045d4bbbbabab011e8a31_9366/Nemeziz_19.3_Laceless_TF_Fussballschuh_Orange_EH0277_01_standard.jpg',
    price: 90,
    key: 8,
  },
  {
    name: 'Terrex AX3',
    available: true,
    collection: 'Hiking',
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/5b33e6f99ddd4120b7e4ac3e00cb8b1e_9366/TERREX_AX3_Wanderschuh_Gelb_FX4574_01_standard.jpg',
    price: 100,
    key: 9,
  },
  {
    name: 'Terrex Hiker',
    available: true,
    collection: 'Hiking',
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/cb81a563fc3445599fd2ab800104676c_9366/TERREX_Free_Hiker_Wanderschuh_Grau_EF0368_01_standard.jpg',
    price: 200,
    key: 10,
  },
];

export default Products;
