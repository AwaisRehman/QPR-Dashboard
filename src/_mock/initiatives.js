import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const INITIATIVE_NAME = [
  'Nike Air  NDESTRUKT',
  'Nike Space Hippie',
  'Nike Air Zoom Pegasus',
  'Nike Blazer Low Vintage',
  'Nike ZoomX SuperRep Surge',
  'Zoom Freak ',
  'Nike Air Max Zephyr',
  'Jordan Delta',
  'Air Jordan XXXV PF',
  'Nike Waffle Racer Crater',
  'Kyrie EP Sisterhood',
  'Nike Air Zoom BB NXT',
  'Nike Air Force LX',
  'Nike Air Force Shadow SE',
  'Nike Air Zoom Tempo NEXT%',
  'Nike DBreak-Type',
  'Nike Air Max Up',
  'Nike Air Max React ENG',
  'NikeCourt Royale',
  'Nike Air Zoom Pegasus Premium',
  'Nike Air Zoom SuperRep',
  'NikeCourt Royale',
  'Nike React Artmis',
  'Nike React Infinity Run Flyknit A.I.R. Chaz Bear',
];
const INITIATIVE_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const initiatives = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: INITIATIVE_NAME[index],
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && INITIATIVE_COLOR.slice(0, 2)) ||
      (setIndex === 2 && INITIATIVE_COLOR.slice(1, 3)) ||
      (setIndex === 3 && INITIATIVE_COLOR.slice(2, 4)) ||
      (setIndex === 4 && INITIATIVE_COLOR.slice(3, 6)) ||
      (setIndex === 23 && INITIATIVE_COLOR.slice(4, 6)) ||
      (setIndex === 24 && INITIATIVE_COLOR.slice(5, 6)) ||
      INITIATIVE_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});

export default initiatives;
