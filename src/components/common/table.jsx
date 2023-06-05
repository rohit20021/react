import React, { Component } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = (props) => {
  const { columns, sortColumn, onSort, onDelete, data } = props;
  return (
    <table className="table ">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody onDelete={onDelete} data={data} columns={columns} />
    </table>
  );
};

export default Table;
