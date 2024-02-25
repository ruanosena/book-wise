import { useEffect, useState } from "react";
import { StarIcon } from "./styles";

interface StarRatingProps {
	staticStatus?: boolean;
	stars?: number;
	onChangeStars?: (value: number) => void;
}

export function StarRating({ staticStatus = false, stars, onChangeStars }: StarRatingProps) {
	const [rating, setRating] = useState<number>(0);
	const [hover, setHover] = useState<number>(0);

	function handleChangeRating(value: number) {
		if (!staticStatus) {
			setRating(value);
			onChangeStars && onChangeStars(value);
		}
	}
	useEffect(() => {
		if (typeof stars == "number") {
			setRating(stars);
		}
	}, [stars]);

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
							onMouseEnter={() => !staticStatus && setHover(ratingValue)}
							onMouseLeave={() => !staticStatus && setHover(0)}
						/>
					</label>
				);
			})}
		</div>
	);
}
