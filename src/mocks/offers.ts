export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
  name: string;
  location: {
  latitude: number;
  longitude: number;
  zoom: number;
  };};
  location: {
  latitude: number;
  longitude: number;
  zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  };
  images: string[];
  maxAdults: number;
  }

export const offers: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 125,
    city: {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }},
    location: {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 80,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 3,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
    ],
    host: {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    images: [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    maxAdults: 4,
  },
  {
    id: '6af6f711-c28d-4121-e0b462a27f00',
    title: 'Wood and stone place',
    type: 'Apartment',
    price: 80,
    city: {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }},
    location: {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 70,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 2,
    goods: [
      'Wi-Fi',
      'Heating',
      'Coffee machine',
      'Baby seat',
    ],
    host: {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    maxAdults: 3,
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b4600',
    title: 'Canal View Prinsengracht',
    type: 'Room',
    price: 132,
    city: {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }},
    location: {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 90,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 4,
    goods: [
      'Wi-Fi',
      'Fridge',
      'Cabel TV'
    ],
    host: {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    images: [
      'img/apartment-02.jpg',
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    maxAdults: 5,
  },
  {
    id: '6af6f711-121-82cd-e0b462a27f00',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Room',
    price: 180,
    city: {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }},
    location: {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 60,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 1,
    goods: [
      'Wi-Fi',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
    ],
    host: {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    images: [
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    maxAdults: 2,
  },
];

