import React, { lazy, useState } from 'react'

export default function useLazy() {

    const [data, setData] = useState(null)

    const load = async({ wait, component }) => {
        let promise = await lazy().import(component)
        if(wait)
            await promise.wait(wait)

            console.log('promise')
            console.log(promise)
        // promise.then( () => {

        // })
        setData(promise)
    }
    return { data, load }
}