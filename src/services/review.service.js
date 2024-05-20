import db from "../firebase";
import { ref, get, remove, push, update } from "firebase/database";

const dbRef = ref(db, "/reviews");

const getAllReviews = () => {
    return get(dbRef);
};

const addReview = (name, review, score) => {
    return push(dbRef, {
        name: name,
        review: review,
        score: score
    });
};

const updateReview = (key, name, review, score) => {
    const dbRefReview = ref(db, `/reviews/${key}`);
    return update(dbRefReview, {
        name: name,
        review: review,
        score: score
    });
};

const removeReview = (key) => {
    const dbRefReview = ref(db, `/reviews/${key}`);
    return remove(dbRefReview);
};

export default {
    getAllReviews,
    addReview,
    updateReview,
    removeReview,
};
