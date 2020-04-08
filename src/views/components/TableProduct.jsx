import React from "react";

const TableProduct = () => {
  let arr = [
    { nama: "Seto", pekerjaan: "Developer" },
    { nama: "Anton", pekerjaan: "Designer" },
    { nama: "Fery", pekerjaan: "Analysts" }
  ];

  const renderDataArr = () => {
    return arr.map((value, index) => {
      return (
        <tr>
          <td>{`${index + 1}.`}</td>
          <td>{value.nama}</td>
          <td>{value.pekerjaan}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      {/* <p>Aku Table</p> */}
      <style>
        {`
            table, tr, th, td{
                border: 1px solid black;
                border-collapse: collapse;
                text-align: center;
                padding: 5px
            }`}
      </style>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Pekerjaan</th>
          </tr>
        </thead>
        <tbody>{renderDataArr()}</tbody>
      </table>
    </div>
  );
};

export default TableProduct;
