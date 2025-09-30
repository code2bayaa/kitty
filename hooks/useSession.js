// import { View, Text } from 'react-native'
import React, { useState, useCallback, useEffect, useMemo } from 'react'
import useFetch from './useFetch'
import { URL } from '@env'

const useSession = () => {

    const [logIn, setLogin] = useState({})

    // if(check){
    const { loading, data, error, fetchData } = useFetch()

    // console.log(logIn)

    // Use useEffect to avoid too many re-renders
    // useEffect(async() => {
    //     // if(check)
    //     //     setLogin(data)
    //     await fetchData(
    //         {
    //             url : `${ URL }/jobs/php/index.php`,
    //             // go : true,
    //             method : 'POST',
    //             query : JSON.stringify({ 'user' : true })
    //         }            
    //     )
    //     console.log('fetch')
    //     console.log(data)

        
    // }, [fetchData, URL, data])
    // }
    // console.log('data')
    // console.log(data)
    // const updateSession = useCallback(
    //     async() => {
    //         await setLogin(data)
    //     },[]
        
    // )

    //Add the async to show DATA
    const updateSession = useCallback(
        async() => {
            setLogin(await fetchData(
                {
                    url : `${ URL }/jobs/php/index.php`,
                    // go : true,
                    method : 'POST',
                    query : JSON.stringify({ 'user' : true })
                }            
            ))

        },[]
    )
    
    const testSession = (obj) => {
        setLogin((currObj) => obj)
    }

    // useEffect(() =>  setLogin(data),[data])

    console.log('session')
    console.log(logIn)
    return { logIn, updateSession, testSession}
}

export default useSession