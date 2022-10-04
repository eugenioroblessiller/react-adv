import { onChangeArgs, Product } from './../interfaces/interfaces';
import React, { useState } from 'react'

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void
}

export const useProduct = ({ onChange, product }: useProductArgs) => {

    const [counter, setCounter] = useState(0);

    const handleIncreaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)
        onChange?.({ product, count: newValue })
    };


    return {
        counter,
        handleIncreaseBy
    }
}
