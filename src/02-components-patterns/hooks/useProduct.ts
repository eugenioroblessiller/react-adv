import { InitialValues, onChangeArgs, Product } from './../interfaces/interfaces';
import React, { useEffect, useRef, useState } from 'react'

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false)

    const handleIncreaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0)
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }
        setCounter(newValue)
        onChange?.({ product, count: newValue })
    };

    useEffect(() => {
        if (!isMounted.current) return
        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true
    }, [])

    return {
        counter,
        handleIncreaseBy
    }
}
