import React, { useState } from "react";
import Control from "./student/Control";
import ListStudent from "./student/ListStudent";
import Form from "./student/Form";
import { listStudent } from "../assets/students";

const initState =
  JSON.parse(localStorage.getItem("list-student")) || listStudent;

export default function StudentManagement() {
  const [list, setList] = useState(initState);
  const [show, setShow] = useState(false);
  const [action, setAction] = useState("");
  const [studentInfo, setStudentInfo] = useState();

  const handleAdd = (studentNew) => {
    let newList = [...list, studentNew];
    localStorage.setItem("list-student", JSON.stringify(newList));
    setList(newList);
    setShow(false);
  };
  const handleDelete = (idDel) => {
    let afterDelList = list.filter((stu) => stu.id !== idDel);
    localStorage.setItem("list-student", JSON.stringify(afterDelList));
    setList(afterDelList);
  };
  const handleEdit = (stuEdit) => {
    setShow(true);
    setStudentInfo({ ...stuEdit });
    setAction("UPDATE");
  };
  const handleDetail = (stuDetail) => {
    setShow(true);
    setStudentInfo({ ...stuDetail });
    setAction("CANCEL");
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleUpdate = (stuUp) => {
    // Xử lí update
    let updateList = list.map((stu) => (stu.id === stuUp.id ? stuUp : stu));
    setList(updateList);
    localStorage.setItem("list-student", JSON.stringify(updateList));
    setShow(false);
  };
  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          {/* START CONTROL */}
          <Control
            setStudentInfo={setStudentInfo}
            setShow={setShow}
            setAction={setAction}
          />
          {/* END CONTROL */}
          {/* START LIST STUDENT */}
          <ListStudent
            handleDetail={handleDetail}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            list={list}
          />
          {/* END LIST STUDENT */}
        </div>
      </div>
      {/* START FORM SINH VIEN */}
      {show ? (
        <Form
          handleClose={handleClose}
          handleUpdate={handleUpdate}
          studentInfo={studentInfo}
          handleAdd={handleAdd}
          action={action}
        />
      ) : (
        ""
      )}

      {/* END FORM SINH VIÊN */}
    </div>
  );
}
