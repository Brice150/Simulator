import { ListMap } from '../../core/interfaces/listMap';

export const latestPrices: number[] = [40002, 40003, 51281, 51282, 72400];
export const increments: number[] = [5045, 5046, 6462, 6463, 9165];
export const estimationPercentList: number[] = [80, 60, 50, 35];
export const workTypes: string[] = [
  "Isolation par l'extérieur",
  "Isolation par l'intérieur",
  'Isolation des rampants ou du plancher des combes',
  'Remplacement de menuiseries simple vitrage',
  "Installation d'une ventilation double flux",
  "Installation d'un chauffe eau thermodynamique",
  "Installation d'une PAC air/eau",
  "Installation d'une PAC géothermie",
  "Installation d'un poêle à bois",
  "Installation d'un poêle à granulés",
];

export const priceLists: ListMap = {
  1: [
    'Inférieur à 17 009 €',
    'Entre 17 010 € et 21 085€',
    'Entre 21 806 € et 30 549 €',
    'Supérieur à 30 549 €',
  ],
  2: [
    'Inférieur à 24 875 €',
    'Entre 24 876 € et 31 889 €',
    'Entre 31 890 € et 44 907 €',
    'Supérieur à 44 907 €',
  ],
  3: [
    'Inférieur à 29 917 €',
    'Entre 29 918€ et 38 349 €',
    'Entre 38 350 € et 54 071 €',
    'Supérieur à 54 071 €',
  ],
  4: [
    'Inférieur à 34 948 €',
    'Entre 34 949 € et 44 802 €',
    'Entre 44 803 € et 63 235 €',
    'Supérieur à 63 235 €',
  ],
  5: [
    'Inférieur à 40 002 €',
    'Entre 40 003 € et 51 281 €',
    'Entre 51 282 € et 72 400 €',
    'Supérieur à 72 400 €',
  ],
};

export const estimationEurosLists: ListMap = {
  0: ['75 € / m2', '60 € / m2', '40 € / m2', 'Non éligible'],
  1: ['25 € / m2', '20 € / m2', '15 € / m2', 'Non éligible'],
  2: ['25 € / m2', '20 € / m2', '15 € / m2', 'Non éligible'],
  3: [
    '100 € / équipement',
    '80 € / équipement',
    '40 € / équipement',
    'Non éligible',
  ],
  4: ['2 500 €', '2 000 €', '1 500 €', 'Non éligible'],
  5: ['1 200 €', '800 €', '400 €', 'Non éligible'],
  6: ['5 000 €', '4 000 €', '3 000 €', 'Non éligible'],
  7: ['11 000 €', '9 000 €', '6 000 €', 'Non éligible'],
  8: ['2 500 €', '2 000 €', '1 000 €', 'Non éligible'],
  9: ['2 500 €', '2 000 €', '1 500 €', 'Non éligible'],
};
