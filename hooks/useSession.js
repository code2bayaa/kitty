// import { View, Text } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import useFetch from './useFetch'
import { URL } from '@env'

const useSession = () => {

    const [logIn, setLogin] = useState({})

    // if(check){
    const { loading, data, error, fetchData } = useFetch()

    // console.log(logIn)

    //Use useEffect to avoid too many re-renders
    // useEffect(() => {
    //     // if(check)
    //     //     setLogin(data)
    //     fetchData(
    //         {
    //             url : `${ URL }/jobs/php/index.php`,
    //             // go : true,
    //             method : 'POST',
    //             query : JSON.stringify({ 'user' : true })
    //         }            
    //     )

        
    // }, [fetchData])
    // }
    // console.log('data')
    // console.log(data)
    // const updateSession = useCallback(
    //     async() => {
    //         await setLogin(data)
    //     },[]
        
    // )

    const updateSession = () => {
        fetchData(
            {
                url : `${ URL }/jobs/php/index.php`,
                // go : true,
                method : 'POST',
                query : JSON.stringify({ 'user' : true })
            }            
        )
        console.log('data fetched')
        console.log(data)
        setLogin(data)
    }

    return { logIn, updateSession}
}

export default useSession