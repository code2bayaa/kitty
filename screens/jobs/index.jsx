import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, ToastAndroid, TouchableWithoutFeedback, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles, { COLORS } from '../../styles';
import useFetch from '../../hooks/useFetch';
import { URL } from '@env';

// interface Job {
//   id: number;
//   job_title: string;
//   job_description: string;
//   job_qualifications: string[];
//   job_employer: string;
//   job_field: string;
//   job_professions: string;
//   job_experience: string;
//   applied: string;
//   approved: boolean;
// }

export default function Jobs() {
  // const [job, setJob] = useState(false);
  // const [ idNo, setIdNo ] = useState(false)

  const navigation = useNavigation();

  const { loading, data, error, fetchData } = useFetch()
  // const { success } = data;

  const applyJob = ({ id }) => {

    // setIdNo(id)
    // setJob(true)
    // useEffect(() => {    
      fetchData(
        {
          // go : job,
          url: `${ URL }/jobs/php/index.php`,
          method: 'POST',
          query: JSON.stringify({ 'apply_jobs' : true, id }),
        }      
      )
    // },[fetchData]
    // )
    if (apply.data.success) {
      ToastAndroid.show('Successfully applied', 2000);
    }
  };

  // const fetchJobs = () => {

    // const { loading, data, error } = useFetch({
    //   go : true,
    //   url: `${URL}/jobs/php/index.php`,
    //   method: 'POST',
    //   query: JSON.stringify({ 'jobs_all': true }),
    // });
    useEffect(() => {
        fetchData(
          {
            // go : job,
            url: `${ URL }/jobs/php/index.php`,
            method: 'POST',
            query: JSON.stringify({ 'jobs_all' : true }),
          }      
        )
      },[fetchData]
    )


    if (error) {
      console.log('error' + error);
    }

    // if(data.hasOwnProperty('jobs'))
    //   setJobsData(data.jobs)
    console.log(data)
    // return data;
  // }
  // const data = fetchJobs()


  // console.log(data)
  // jobs.map( a => console.log(a.job_description))
  
  // setJobsData(jobs);
  
 
  
  //   const fetchData = async () => {

  //   };
  // useEffect(() => {
  //   fetchJobs();
  // }, []);

  return (
    <ScrollView style={{ ...styles.body, ...styles.wall }}>
      {
        (data.hasOwnProperty('jobs'))
        ?
          data.jobs.map(a => (
            <View style={{ ...styles.mediumWall, flex : 1, ...styles.shadow, ...styles.left, marginBottom : '5%' }} key = {a.jobId}>
              <Text style={styles.h1}>{a.job_title}</Text>
              <Text style={styles.h2}>{a.job_employer}</Text>
              {a.job_qualifications.length > 0 ? (
                <Text style={{...styles.h2, margin : 0}}> {a.job_qualifications.join(' || ')} </Text>
              ) : (
                <Text style={styles.h2}>No qualifications needed</Text>
              )}
              
              <Text style={styles.h2}>
                {a.job_field} || {a.job_professions}
              </Text>
              <Text style={styles.p}>experience: {a.job_experience}</Text>
              <Text style={styles.p}>{a.job_description}</Text>
              <View style={styles.center}>
                {a.applied === 'LOGGED_OF' ? (
                  <TouchableWithoutFeedback onPress={() => navigation.navigate('signIn')}>
                    <Text style={styles.a}>Sign In</Text>
                  </TouchableWithoutFeedback>
                ) : a.applied ? (
                  a.approved ? (
                    <Text style={styles.h2}>APPROVED</Text>
                  ) : (
                    <Text style={styles.h2}>NOT YET APPROVED</Text>
                  )
                ) : (
                  <LinearGradient colors={['#FF4B2B', '#FF4B2B', '#FF416C']} style={{ ...styles.loginMain }}>
                    <TouchableOpacity onPress={() => applyJob({ id: a.jobId })}>
                      <Text style={{...styles.h2, padding : 0, color : COLORS.white, ...styles.center, ...styles.loginMain }}>Apply</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                )}
              </View>
            </View>
          ))
        :
          <Text>NO JOBS</Text>
    }
    </ScrollView>
  );
}