import { useState } from "react";
import { StarIcon } from "./styles";

export function StarRating() {
	const [rating, setRating] = useState<number>(0);
	const [hover, setHover] = useState<number>(0);

	function handleChangeRating(value: number) {
		setRating(value);
	}

	return (
		<div>
			{[...Array(5)].map((_, i) => {
				const ratingValue = i + 1,
					isFilled = ratingValue <= (hover || rating);

				return (
					<label key={ratingValue}>
						<input
							type="radio"
							name="rating"
							value={ratingValue}
							onClick={() => handleChangeRating(ratingValue)}
							hidden
						/>
						<StarIcon
							size={14}
							weight={isFilled ? "fill" : "regular"}
							onMouseEnter={() => setHover(ratingValue)}
							onMouseLeave={() => setHover(0)}
						/>
					</label>
				);
			})}
		</div>
	);
}
