import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [students, setStudents] = useState(null);

  const navigate = useNavigate();

  useEffect(()=>{
    axios
    .get("http://localhost:3004/students")
    .then(res=>{
      setStudents(res.data)
    })
    .catch(err=>{})
  },[])

  const handleAddForm = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      studentNumber === "" ||
      studentClass === "" ||
      schoolName === ""
    ) {
      alert("Alanlar boş bırakılamaz");
      return;
    }

    const newData = {
      id: String(new Date().getTime()),
      firstName: firstName,
      lastName: lastName,
      studentClass: studentClass,
      studentNumber: studentNumber,
      schoolName: schoolName,
    };

    const hasStudent = students.find(
      item => item.studentNumber === studentNumber
    );

    if (hasStudent !== undefined) {
      alert(`${studentNumber} numaralı kayıt zaten var`);
      return;
    }

    axios
      .post("http://localhost:3004/students", newData)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {});
    if (students === null) {
      return null;
    }
  };

  return (
    <div>
      <Header whichPage={"AddStudent"} />
      <div className="container my-5">
        <form onSubmit={handleAddForm}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Adı
            </label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Ör.: Ahmet"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Soyadı
            </label>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Ör.: Yılmaz"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="studentNumber" className="form-label">
              Öğr. Nu.
            </label>
            <input
              onChange={(e) => {
                setStudentNumber(e.target.value);
              }}
              type="number"
              className="form-control"
              id="studentNumber"
              placeholder="Ör.: 3523"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="studentClass" className="form-label">
              Sınıfı
            </label>
            <input
              onChange={(e) => {
                setStudentClass(e.target.value);
              }}
              type="text"
              className="form-control"
              id="studentClass"
              placeholder="Ör.: 5/G"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="schoolName" className="form-label">
              Okulu
            </label>
            <input
              onChange={(e) => {
                setSchoolName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="schoolName"
              placeholder="Ör.: Cumhuriyet İ.Ö.O."
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-50">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
