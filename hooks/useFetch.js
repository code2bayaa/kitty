import { useState, useEffect, useCallback } from "react";
// import axios from "axios";

const useFetch = () => {
  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const url = 'http://192.168.42.73/jobs/php/test.php'

  
  const fetchData = async({ method, query, url }) => {
      // console.log(JSON.parse(query.password))
      console.log(url)
    try {

      // console.log('go ' + go)
      // const  = parameters

      setLoading(true);

      // console.log(url)
      // setData({'hey' : 'you'})

      // const response = await axios.get(url);

      const options = {
        method,
        // url,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Accept: 'application/json',
          responseType: 'json'
        },
        body: query,
      };  
      //query could be stringify or not    

      // console.log(options)
      // console.log(url)
      console.log('response')
      const response = await fetch(url,options);
      console.log('response')
      // console.log('and then..')
      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      const jsonData = await response.json();

      console.log('json')
      console.log(jsonData)
      // console.log(await response.json())
      
      // setData(jsonData)
      setLoading(false);
      return jsonData
      

    } catch (error) {
      setError(error);
      console.log(error)
    }
    // axios.get(url)
    // .then(res => {
    //   console.log('hey')
    //   console.log(res.data)
    // })
    // .catch(error => {
    //   // Handle error
    //   console.error(error);
    // });
  }
  

  // useEffect(() => {
  //   if(go)
  //     fetchData()
  // }, [fetchData,go]);

  // const refetch = () => {
  //   setLoading(true);
  //   fetchData();
  // };

  return { data, loading, error, fetchData };
};

export default useFetch;
