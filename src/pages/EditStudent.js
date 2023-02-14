import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditStudent = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [willEditStudent, setWillEditStudent] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [schoolName, setSchoolName] = useState("");
  

  useEffect(() => {
    axios
      .get(`http://localhost:3004/students/${params.studentId}`)
      .then((res) => {
        setWillEditStudent(res.data);
        setFirstName(res.data.firstName);
        setLastname(res.data.lastName);
        setStudentNumber(res.data.studentNumber)
        setStudentClass(res.data.studentClass);
        setSchoolName(res.data.schoolName)
      })
      .catch((err) => {});
  }, []);

  const handleEditForm = (e) => {
    e.preventDefault();
    // validation
    if (
      firstName === "" ||
      lastName === "" ||
      studentNumber === "" ||
      studentClass === "" ||
      schoolName === ""
    ) {
      alert("Boş alan bırakılamaz");
    }

    const editedStudents = {
      id: params.studentId,
      firstName: firstName,
      lastName: lastName,
      studentNumber: studentNumber,
      studentClass: studentClass,
      schoolName: schoolName,
    };

    axios
      .put(`http://localhost:3004/students/${params.studentId}`, editedStudents)
      .then((res) => {
        navigate("/")
      })
      .catch((err) => {
        alert("Güncelleme esanasında bir hata oluştu");
      });
  };

  if (willEditStudent === null) {
    return null;
  }

  return (
    <div>
      <Header whichPage={"EditStudent"} />
      <div className="container my-5">
        <form onSubmit={handleEditForm}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Öğrenci Adı
            </label>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Mahmut"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Öğrenci Soyadı
            </label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Yılmaz"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="studentNumber" className="form-label">
              Öğrenci Numarası
            </label>
            <input
              value={studentNumber}
              onChange={(e) => {
                setStudentNumber(e.target.value);
              }}
              type="number"
              className="form-control"
              id="studentNumber"
              placeholder="3523"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="studentClass" className="form-label">
              Sınıfı
            </label>
            <input
              value={studentClass}
              onChange={(e) => {
                setStudentClass(e.target.value);
              }}
              type="text"
              className="form-control"
              id="studentClass"
              placeholder="5/G"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="schoolName" className="form-label">
              Okulu
            </label>
            <input
              value={schoolName}
              onChange={(e) => {
                setSchoolName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="schoolName"
              placeholder="Cumhuriyet İ.Ö.O."
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary w-50" type="submit">
              Güncelle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
