import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentList = ({ students, didUpdate, setDidUpdate }) => {
const [searchText,setSearchText]=useState("")
const [filteredStudents,setFilteredStudents]=useState(students)

console.log(searchText);
  const deleteStudent = (id) => {
    if (window.confirm("Silmek istediğinize emin misiniz?") === true)
      axios
        .delete(`http://localhost:3004/students/${id}`)
        .then((res) => {
          setDidUpdate(!didUpdate);
        })
        .catch((err) => {});
  };

 useEffect(()=>{
  console.log("searchText değişti");
  const tempArray = students.filter(item=>item.firstName.toLowerCase().includes(searchText.toLowerCase())===true ||
                                          item.lastName.toLowerCase().includes(searchText.toLowerCase())===true)
  setFilteredStudents(tempArray)
 },[searchText])

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between gap-1">
        <input value={searchText} onChange={(event)=>{setSearchText(event.target.value)}} className="form-control" type="text" placeholder="Arama yap.." />
        <Link to={"/add-student"} className="btn btn-primary w-50">
          Yeni Kayıt
        </Link>
      </div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Sıra Nu.</th>
            <th scope="col">Adı</th>
            <th scope="col">Soyadı</th>
            <th scope="col">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td className="text-center" colSpan={6}>
                Kayıtlı öğrenci bulunmamaktadır
              </td>
            </tr>
          ) : (
            <>
              {filteredStudents.map((student, index) => (
                <tr key={student.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        onClick={() => {
                          deleteStudent(student.id);
                        }}
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                        Sil
                      </button>
                      <Link
                        to={`/edit-student/${student.id}`}
                        className="btn btn-sm btn-outline-primary"
                      >
                        Güncelle
                      </Link>
                      <Link to={`/student-details/${student.id}`} className="btn btn-sm btn-outline-secondary"> Detay</Link>
                    </div>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
