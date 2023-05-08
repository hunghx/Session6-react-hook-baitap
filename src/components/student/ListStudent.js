import React from "react";

export default function ListStudent(props) {
  const handleEdit = (stuEdit) => {
    props.handleEdit(stuEdit);
  };
  return (
    <div className="card-body">
      <h3 className="card-title">Danh sách sinh viên</h3>
      <div className="table-responsive pt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {props.list.map((stu, index) => (
              <tr key={stu.id}>
                <td>{index + 1}</td>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.age}</td>
                <td>{stu.sex ? "Nam" : "Nữ"}</td>
                <td>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-danger btn-icon-text"
                    >
                      Xem
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-icon-text"
                      onClick={() => handleEdit(stu)}
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-icon-text"
                      onClick={() => props.handleDelete(stu.id)}
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
