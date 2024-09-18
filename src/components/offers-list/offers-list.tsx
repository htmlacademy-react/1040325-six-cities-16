import { MouseEventHandler, useState } from 'react';
import { Offer } from '../../mocks/offers';
import Card from '../card/card';

type OffersListProps = {
  className: string;
  offers: Offer[];
  offerClassName: string;
}

export default function OffersList({ className, offers, offerClassName }: OffersListProps): JSX.Element {
  const setActiveCard = useState('')[1];
  const onMouseMoveHandler: MouseEventHandler<HTMLElement> = (evt) => {
    let id = '';
    if(evt.target instanceof HTMLElement) {
      const element = evt.target.closest('[data-id]');

      if(element instanceof HTMLElement) {
        id = element.dataset.id || '';
      }
    }

    setActiveCard(id);
  };

  return (
    <div className={`${className} places__list`} onMouseMove={onMouseMoveHandler}>
      {offers.map((offer) => <Card offerClassName={offerClassName} offer={offer} key={offer.id}/>)}
    </div>);
}
