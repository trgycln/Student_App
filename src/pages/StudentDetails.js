import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { useParams, Link } from "react-router-dom";

const StudentDetails = () => {
  const params = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/students/${params.studentId}`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {});
  }, []);

  if (student === null) return null;
  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <span>Öğrenci Bilgileri</span>{" "}
            <Link to={"/"} className="btn btn-primary">
              Geri
            </Link>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Adı :</b> {student.firstName}{" "}
            </li>
            <li className="list-group-item">
              <b>Soyadı :</b>
              {student.lastName}
            </li>
            <li className="list-group-item">
              <b>Öğr.No :</b>
              {student.studentNumber}
            </li>
            <li className="list-group-item">
              <b>Sınıfı :</b>
              {student.studentClass}
            </li>
            <li className="list-group-item">
              <b>Okulu :</b>
              {student.schoolName}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
