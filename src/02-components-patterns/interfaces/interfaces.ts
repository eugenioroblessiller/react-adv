import { ReactElement } from 'react';

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}
export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    handleIncreaseBy: (value: number) => void;
    product: Product;
}

export interface PrductTileProps {
    title?: string;
    className?: string
}

export interface ProductImageProps {
    img?: string;
    className?: string;
}

export interface ProductButtonProps {
    className?: string
}

export interface onChangeArgs {
    product: Product,
    count: number
}

export interface ProductInCart extends Product {
    count: number;
}

export interface InitialValues {
    count?: number
    maxCount?: number
}