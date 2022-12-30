import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA-YdaEaDqLaCzO6lSXUrKUi1aYXtldaYc",
    authDomain: "tiendacamilomm.firebaseapp.com",
    projectId: "tiendacamilomm",
    storageBucket: "tiendacamilomm.appspot.com",
    messagingSenderId: "467159791257",
    appId: "1:467159791257:web:65c4aac88b45141f5c6a08"
};

const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}