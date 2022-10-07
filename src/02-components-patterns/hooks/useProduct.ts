import { onChangeArgs, Product } from './../interfaces/interfaces';
import React, { useEffect, useRef, useState } from 'react'

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void
    value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange)

    const handleIncreaseBy = (value: number) => {
        if (isControlled.current) {
            return onChange!({ count: value, product })
        }
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)
        onChange?.({ product, count: newValue })
    };

    useEffect(() => {
        setCounter(value)
    }, [value])


    return {
        counter,
        handleIncreaseBy
    }
}
