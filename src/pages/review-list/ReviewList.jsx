import { useState, useEffect, useRef } from "react";
import ReviewService from "../../services/review.service";
import "./ReviewList.css";

function ReviewList(){
    const [reviews, setReviews] = useState([]);
    const refForm = useRef();

    const getAllReviews= () => {
        ReviewService.getAllReviews()
        .then((items) => {
            let allReviews = [];
            items.forEach(item => {
                const key = item.key;
                const data = item.val();
                allReviews.push({
                    key: key,
                    name: data.name,
                    review: data.review,
                    score: data.score
                });
            });
            setReviews([...allReviews]);
        })
        .catch((err) => {
            console.error(err);
        });

    }

    useEffect(() => {
        getAllReviews();
    }, []);

    return (
        <>
        <div className="review-container">
            <div className="review-container-list">
                {reviews.map(r =>
                    <div className="review-item">
                        <p className="name">{r.name}:</p>
                        <p className="review">"{r.review}"</p>
                        <p className="score">Puntuación:  {r.score}/5</p>
                    </div>
                )}
            </div>

        </div>       
        
        </>
    )
}

export default ReviewList;

