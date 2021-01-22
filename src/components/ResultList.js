import React from "react";

function ResultList(props) {
  return (
    <table className="table">
      {props.results.map((result) => (
        <table style="width:100%">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Betty</td>
            <td>White</td>
            <td>99</td>
          </tr>
        </table>
      ))}
    </table>
  );
}

export default ResultList;
