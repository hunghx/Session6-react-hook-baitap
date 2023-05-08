import React, { useEffect, useState } from "react";
const initForm = {
  id: "",
  name: "",
  age: 0,
  sex: "Nam",
  birthday: "",
  place: "",
  address: "",
};

export default function Form(props) {
  const [formInfo, setFormInput] = useState(initForm);
  const handleChangeInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setFormInput({ ...formInfo, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    switch (props.action) {
      case "ADD":
        // thêm mới
        props.handleAdd({
          ...formInfo,
          sex: formInfo.sex === "Nam" ? true : false,
        });
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (props.studentInfo) {
      setFormInput({
        ...props.studentInfo,
        sex: props.studentInfo.sex ? "Nam" : "Nu",
      });
    }
  }, [props.studentInfo]);
  return (
    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample" onSubmit={(e) => handleSubmitForm(e)}>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="id"
                  className="form-control"
                  value={formInfo.id}
                  onChange={(e) => handleChangeInput(e)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="name"
                  value={formInfo.name}
                  className="form-control"
                  onChange={(e) => handleChangeInput(e)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="age"
                  value={formInfo.age}
                  className="form-control"
                  onChange={(e) => handleChangeInput(e)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="sex"
                  value={formInfo.sex}
                  onChange={(e) => handleChangeInput(e)}
                >
                  <option value={"Nam"}>Nam</option>
                  <option value={"Nu"}>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  name="birthday"
                  value={formInfo.birthday}
                  placeholder="dd/mm/yyyy"
                  onChange={(e) => handleChangeInput(e)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="place"
                  value={formInfo.place}
                  onChange={(e) => handleChangeInput(e)}
                >
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"HCM"}>TP. Hồ Chí Minh</option>
                  <option value={"DN"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  name="address"
                  value={formInfo.address}
                  onChange={(e) => handleChangeInput(e)}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">
              {props.action}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
