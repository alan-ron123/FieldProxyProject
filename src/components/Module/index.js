import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/table.css";

export default function ColumnModule() {
  const dispatch = useDispatch();

  const [select, setSelect] = useState(false);
  //name
  const [name, setName] = useState("");
  //date
  const [date, setDate] = useState("");
  //age
  const [age, setAge] = useState("");

  //location
  const [opt, setOpt] = useState([]);

  function onselect() {
    setSelect(true);
  }

  function onAdd(e) {
    e.preventDefault();
    let updatedValue = [...storeData];
    if (!name) {
      alert("enter name");
    } else if (!date) {
      alert("enter date");
    } else if (!age) {
      alert("enter age");
    } else {
      updatedValue.push({
        name: name,
        date: date,
        age: age,
        opt: opt,
      });
      navigate("/table ");
      dispatch({ type: "store", payload: updatedValue });
      setSelect(false);
      console.log(updatedValue, "abc");
    }
  }
  // getting value by useselector
  const storeData = useSelector((store) => store.tableData);
  console.log(storeData, "tabledata");

  let navigate = useNavigate();

  function reDirect1() {
    navigate("/table ");
  }

  return (
    <div>
      <div className="overall">
        <div class="container ">
          <div>
            <div className="container  ">
              <div>
                <div id="card-size" className="m-5">
                  <form className=" border-2 mx-auto ">
                    <label>&nbsp;&nbsp;Name&nbsp;&nbsp;:</label>
                    <input
                      className="rounded border border-success m-2 w-25 "
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div>
                      <div class="dropdown m-2">
                        <label>Details&nbsp;:&nbsp;&nbsp;</label>
                        <button
                          class="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <label>Date&nbsp;:&nbsp;</label>
                            <input
                              type="date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                            />
                          </li>
                          <li>
                            <label> Age&nbsp;:&nbsp;&nbsp;</label>
                            <input
                              type="number"
                              value={age}
                              placeholder="age"
                              onChange={(e) => setAge(e.target.value)}
                            />
                          </li>
                          <li>
                            <label> Place:&nbsp;</label>
                            <select
                              value={opt}
                              onChange={(e) => setOpt(e.target.value)}
                              name="cars"
                              id="cars"
                            >
                              <option>Location</option>
                              <option value="Chennai">Chennai</option>
                              <option value="Mumbai">Mumbai</option>
                              <option value="Delhi">Delhi</option>
                            </select>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={onAdd}
                      className="bg-success border-0 rounded m-2"
                    >
                      submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
