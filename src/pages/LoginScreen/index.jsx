import React from 'react';
import './styles.css';

export default function Login() {
  return (
    <div className="container">
      <div className="box">

        <div className="left-panel" />


        <div className="right-panel">
          <div className="top-image" />
          <h2>Faça seu login</h2>

          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button>Criar</button>

          <p className="login-text">
            Já tem uma conta? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
