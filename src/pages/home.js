import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import axios from 'axios';
import StudentList from '../components/studentList';

const Home = () => {
	const [students,setStudents]=useState(null)
	const [didUpdate,setDidUpdate]=useState(false)
	
	useEffect(()=>{
		axios
		.get("http://localhost:3004/students")
		.then((res)=>{
			setStudents(res.data)
		})
		.catch((err)=>{})
	},[didUpdate])
	if(students===null){
		return null
	}
  return (
	<div>
		<Header whichPage={"homePage"} />
		<StudentList didUpdate={didUpdate} setDidUpdate={setDidUpdate} students={students}/>
	</div>
  )
}

export default Home;