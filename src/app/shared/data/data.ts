import { PriceListMap } from '../../core/interfaces/priceListMap';

export const latestPrices: number[] = [40002, 40003, 51281, 51282, 72400];
export const increments: number[] = [5045, 5046, 6462, 6463, 9165];
export const estimationEurosList: number[] = [4000, 3000, 2000, 1000];
export const estimationPercentList: number[] = [80, 60, 50, 35];

export const priceLists: PriceListMap = {
  1: [
    'Inférieur à 17009€',
    'Entre 17010€ et 21085€',
    'Entre 21806€ et 30549€',
    'Supérieur à 30549€',
  ],
  2: [
    'Inférieur à 24875€',
    'Entre 24876€ et 31889€',
    'Entre 31890€ et 44907€',
    'Supérieur à 44907€',
  ],
  3: [
    'Inférieur à 29917€',
    'Entre 29918€ et38 349€',
    'Entre 38350€ et 54071€',
    'Supérieur à 54071€',
  ],
  4: [
    'Inférieur à 34948€',
    'Entre 34949€ et 44802€',
    'Entre 44803€ et 63235€',
    'Supérieur à 63235€',
  ],
  5: [
    'Inférieur à 40002€',
    'Entre 40003€ et 51281€',
    'Entre 51282€ et 72400€',
    'Supérieur à 72400€',
  ],
};
