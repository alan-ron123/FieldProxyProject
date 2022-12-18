import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

export const TableView = () => {
  // getting by useselector
  const storeData = useSelector((store) => store.tableData);

  return (
    <div>
      <div className="container p-5">
        <h1 className="text-center">Table</h1>

        <table className="table table-border  text-center    w-100">
          <Table striped bordered hover className="my-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Age</th>
                <th>Place</th>
              </tr>
            </thead>
            {console.log(storeData, "table")}

            {storeData.map((dat, index) => {
              return (
                <tbody>
                  <tr>
                    <td key={index} index={index}>
                      {dat.name}
                    </td>

                    <td>{dat.date}</td>
                    <td>{dat.age}</td>
                    <td>{dat.opt}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </table>
      </div>
    </div>
  );
};
