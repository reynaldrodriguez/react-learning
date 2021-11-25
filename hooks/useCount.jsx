import React, { useState, useEffect } from 'react'

export const useCount = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            setCount(count < 20 ? count + 1 : null)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [count])

    return [count]

}
