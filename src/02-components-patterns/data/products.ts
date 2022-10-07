import { Product } from './../interfaces/interfaces';

const product1 = {
    id: "1",
    title: "Coffe One",
    img: "./coffee-mug.png",
};

const product2 = {
    id: "2",
    title: "Coffe Two",
    img: "./coffee-mug2.png",
};

export const products: Product[] = [product1, product2];