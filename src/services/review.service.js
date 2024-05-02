import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/reviews");

const getAllReviews = () => {
    return get(dbRef);
};

export default {
    getAllReviews,
   /* addBike,
    removeBike,*/
};

