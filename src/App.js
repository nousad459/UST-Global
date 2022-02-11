import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);
  let header = { method: 'GET' };
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', header)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div>
      <h1>Coding exercise</h1>
      <table>
        <tr>
          <td>UserId</td>
          <td>Name</td>
          <td>UserName</td>
          <td>Email</td>
        </tr>

        {data
          ? data.map((dd) => {
              return (
                <tr>
                  <td>{dd.id}</td>
                  <td>{dd.name}</td>
                  <td>{dd.username}</td>
                  <td>{dd.email}</td>
                </tr>
              );
            })
          : ''}
        {/* </tr> */}
      </table>
    </div>
  );
}
