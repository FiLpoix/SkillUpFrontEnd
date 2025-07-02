import React from "react";
import "./styles.css";

const Adm = () => {
  const users = [
    { name: "Jorge", email: "jorge@jorge.com", role: "aluno" },
    { name: "Jorge", email: "jorgel@jorge.com", role: "instrutor" },
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo" />
        <button className="menu-button">Cursos</button>
        <button className="menu-button">Usuários</button>
      </aside>

      <main className="main">
        <div className="cards">
          <Card title="Cursos" count="1000000" />
          <Card title="Usuários" count="1000000" />
          <Card title="Instrutores" count="1000000" />
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

const Card = ({ title, count }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{count}</p>
  </div>
);

export default Adm;
