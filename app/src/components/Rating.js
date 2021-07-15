import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Rating(props) {
    const {rating, numReviews} = props;
    return (
        <div className="productRating">
            <span>
                <i className="ratingStars">{ rating >=1 ? <StarIcon/> : rating >=0.5 ? <StarHalfIcon/> : <StarBorderIcon/>}</i>
            </span>
            <span>
                <i className="ratingStars">{ rating >=2 ? <StarIcon/> : rating >=1.5 ? <StarHalfIcon/> : <StarBorderIcon/>}</i>
            </span>
            <span>
                <i className="ratingStars">{ rating >=3 ? <StarIcon/> : rating >=2.5 ? <StarHalfIcon/> : <StarBorderIcon/>}</i>
            </span>
            <span>
                <i className="ratingStars">{ rating >=4 ? <StarIcon/> : rating >=3.5 ? <StarHalfIcon/> : <StarBorderIcon/>}</i>
            </span>
            <span>
                <i className="ratingStars">{ rating >=5 ? <StarIcon/> : rating >=4.5 ? <StarHalfIcon/> : <StarBorderIcon/>}</i>
            </span>

            <span>
                {' ' + numReviews + ' Avis'}
            </span>
        </div>
    );
}

export default Rating;