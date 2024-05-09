import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

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


const removeReview = (key) => {
    const dbRefReview = ref(db, `/reviews/${key}`);
    return remove(dbRefReview);
};


export default {
    getAllReviews,
    addReview,
    removeReview,
};

