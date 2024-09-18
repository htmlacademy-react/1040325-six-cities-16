import { useState } from 'react';
import Stars from './stars';
import { StarsValue } from './stars';

type CustomFormState = {
  rating: StarsValue;
  comment: string;
}

export default function CommentForm() {
  const [formState, setFormState] = useState<CustomFormState>({rating: '0', comment: ''});

  return (
    <form className="reviews__form form" action="#" method="post">
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
      Your review
      </label>
      <Stars value={formState.rating} onChange={(rating) => setFormState({...formState, rating})}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formState.comment}
        onChange={(evt) => {
          setFormState({...formState, comment: evt.target.value});
        }}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
        your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
        Submit
        </button>
      </div>
    </form>
  );
}
