import { useState, useEffect, useRef } from "react";
import ReviewService from "../../services/review.service";
import "./ReviewList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";

function ReviewList() {
    const [reviews, setReviews] = useState([]);
    const refForm = useRef();
    const [editingKey, setEditingKey] = useState(null); 
   

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
                            <FontAwesomeIcon id="remove-button" icon={faTimes} style={{color: "#001E90"}} title="Eliminar"  onClick={() => removeReview(r.key)}/>
                            <FontAwesomeIcon id="update-button" icon={faPen} style={{color: "#001E90"}} title="Actualizar"  />

                        </div>
                    )}                    
                </div>
                


            </div>
            <form className="review-form"ref={refForm} onSubmit={addReview}>
                <input type="text" name="name" placeholder="Nombre" required />
                <input id="review-content"  type="text" name="review" placeholder="Reseña" required></input>
                <input type="number" name="score" placeholder="Puntuación (1-5)" min="1" max="5" required />
                <button type="submit">Agregar Reseña</button>
            </form>
          

        </>
    )
}

export default ReviewList;

