import { useState, useEffect, useRef } from "react";
import ReviewService from "../../services/review.service";
import "./ReviewList.css";

function ReviewList() {
    const [reviews, setReviews] = useState([]);
    const refForm = useRef();

    const getAllReviews = () => {
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

    const removeReview = (key) => {
        ReviewService.removeReview(key).then((res) => {
            getAllReviews();
        });
    }

    const addReview = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const review = e.target.review.value;
        const score = e.target.score.value;
        ReviewService.addReview(name, review, score).then((res) => {
            refForm.current.reset();
            setReviews(oldValues => [...oldValues, { key: res.key, name, review, score }])
        })
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
                            <button id="remove-button" onClick={() => removeReview(r.key)}>Eliminar</button>

                        </div>
                    )}
                </div>
                <form ref={refForm} onSubmit={addReview}>
                    <input type="text" name="name" placeholder="Nombre" required />
                    <textarea name="review" placeholder="Reseña" required></textarea>
                    <input type="number" name="score" placeholder="Puntuación (1-5)" min="1" max="5" required />
                    <button type="submit">Agregar Reseña</button>
                </form>

            </div>

        </>
    )
}

export default ReviewList;

