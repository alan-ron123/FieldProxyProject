import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import ColumnModule from "../components/Module";
import { TableModule } from "../components/TableModule";
import { TableView } from "../components/ViewModule";
import Header from "../components/Header";

export const Routing = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ColumnModule />} />
        <Route path="table" element={<TableModule />} />
        <Route path="view" element={<TableView />} />
      </Routes>
    </div>
  );
};
