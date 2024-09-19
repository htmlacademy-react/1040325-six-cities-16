export type StarsValue = '0' | '1' | '2' | '3' | '4' | '5';

type StarsProps = {
  value: StarsValue;
  onChange: (value: StarsValue) => void;
}

export default function Stars({value, onChange}: StarsProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {Array.from({ length: 5 }, (_, idx) => {
        const key = String(5 - idx) as StarsValue;

        return (
          <>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={key}
              id={`${key}-stars`}
              type="radio"
              key={key}
              checked={value === key}
              onChange={() => onChange(key)}
            />
            <label
              htmlFor={`${key}-stars`}
              className="reviews__rating-label form__rating-label"
              title="perfect"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        );
      })}
    </div>
  );
}
