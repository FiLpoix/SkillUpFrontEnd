import React from "react";
import "./App.css";

const App = () => {
  const Card = () => <div className="card" />;

  return (
    <div className="container">
      <header className="header">
        <div className="logo" />
        <input className="search-bar" type="text" placeholder="Pesquisar" />

        <button className="login-btn">Entrar</button>
        <button className="register-btn">Registrar</button>
      </header>

      <section className="banner">
        <div className="banner-box" />
      </section>

      <section className="section">
        <h2 className="section-title">Gratuitos:</h2>
        <div className="filters">
          <div className='filter-input'></div>
          <div className='filter-input'></div>
          <div className="filter-input"></div>
        </div>
        <div className="card-list">
          {[...Array(4)].map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Pagos:</h2>
        <div className="filters">
          <div className='filter-input'></div>
          <div className='filter-input'></div>
          <div className="filter-input"></div>
        </div>
        <div className="card-list">
          {[...Array(5)].map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo" />
        <div className="footer-column">
          <h4>Redes Sociais</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>X</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Sobre nós</h4>
          <ul>
            <li>Quem somos</li>
            <li>Missão</li>
            <li>Visão</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contatos</h4>
          <ul>
            <li>Email</li>
            <li>Telefone</li>
            <li>Endereço</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
