import { useState, useEffect, useRef } from "react";
import ReviewService from "../../services/review.service";
import "./ReviewList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";

function ReviewList() {
    const [reviews, setReviews] = useState([]);
    const [editingReview, setEditingReview] = useState(null);
    const [formValues, setFormValues] = useState({ name: '', review: '', score: '' });
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

    const editReview = (review) => {
        setEditingReview(review);
        setFormValues({ name: review.name, review: review.review, score: review.score });
    }

    const updateReview = (e) => {
        e.preventDefault();
        ReviewService.updateReview(editingReview.key, formValues.name, formValues.review, formValues.score).then(() => {
            setEditingReview(null);
            setFormValues({ name: '', review: '', score: '' });
            getAllReviews();
            refForm.current.reset();
        });
    }

    const addReview = (e) => {
        e.preventDefault();
        const { name, review, score } = formValues;
        ReviewService.addReview(name, review, score).then((res) => {
            refForm.current.reset();
            setReviews(oldValues => [...oldValues, { key: res.key, name, review, score }]);
            setFormValues({ name: '', review: '', score: '' });
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
                        <div className="review-item" key={r.key}>
                            <p className="name">{r.name}:</p>
                            <p className="review">"{r.review}"</p>
                            <p className="score">Puntuación:  {r.score}/5</p>                           
                            <FontAwesomeIcon id="remove-button" icon={faTimes} style={{color: "#001E90"}} title="Eliminar" onClick={() => removeReview(r.key)} />
                            <FontAwesomeIcon id="update-button" icon={faPen} style={{color: "#001E90"}} title="Actualizar" onClick={() => editReview(r)} />
                        </div>
                    )}
                </div>
            </div>
            <h1 className="form-title">¿Quieres dejarnos tu opinión?</h1>
            <p>Escríbenos aquí:</p>
            <form className="review-form" ref={refForm} onSubmit={editingReview ? updateReview : addReview}>
                
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formValues.name}
                    onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                    required
                />
                <textarea
                    id="review-content"
                    name="review"
                    placeholder="Reseña"
                    value={formValues.review}
                    onChange={(e) => setFormValues({ ...formValues, review: e.target.value })}
                    required
                />
                <input
                    type="number"
                    name="score"
                    placeholder="Puntuación (1-5)"
                    min="1"
                    max="5"
                    value={formValues.score}
                    onChange={(e) => setFormValues({ ...formValues, score: e.target.value })}
                    required
                />
                <button type="submit">
                    {editingReview ? "Guardar Cambios" : "Agregar Reseña"}
                </button>
                {editingReview && (
                    <button type="button" onClick={() => {
                        setEditingReview(null);
                        setFormValues({ name: '', review: '', score: '' });
                        refForm.current.reset();
                    }}>
                        Cancelar
                    </button>
                )}
            </form>
        </>
    )
}

export default ReviewList;

