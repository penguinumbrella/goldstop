import './reviewBubble.css';
import fullStar from '../../../../assets/reviews/starbasic.svg'; // Full star image
import emptyStar from '../../../../assets/reviews/empty-star.png'; // Empty star image
import quote from "../../../../assets/reviews/GoQuote.png"
import quotebottom from "../../../../assets/reviews/GoQuotebottom.png"


const ReviewBubble = ({ profilePicture, customerName, rating, reviewText }) => {
  // Ensure rating is a valid number between 0 and 5
  const safeRating = Math.max(0, Math.min(rating, 5));
  const fullStars = Math.floor(safeRating);
  const partialStar = safeRating % 1;
  const totalStars = 5;

  return (
    <div className='reviewBubble'>
      <img src={quote} alt='Quote Top' className='quote-top' />
      <img src={quotebottom} alt='Quote Bottom' className='quote-bottom' />
      <img src={profilePicture} alt='Profile' className='profilePicture' />
      <div className='customerName'>{customerName}</div>
      <div className='rating'>
        <div className='stars'>
          {Array.from({ length: fullStars }).map((_, index) => (
            <img key={`full-${index}`} src={fullStar} alt='Full Star' className='star' />
          ))}
          {partialStar > 0 && (
            <div className='star-container'>
              <img 
                src={fullStar} 
                alt='Partial Star' 
                className='star' 
                style={{ clipPath: `inset(0 ${100 - partialStar * 100}% 0 0)` }} 
              />
            </div>
          )}
          {Array.from({ length: totalStars - fullStars - (partialStar > 0 ? 1 : 0) }).map((_, index) => (
            <img key={`empty-${index}`} src={emptyStar} alt='Empty Star' className='star' />
          ))}
        </div>
      </div>
      <div className='review-text'>
        {reviewText}
      </div>
    </div>
  );
};

export default ReviewBubble;
