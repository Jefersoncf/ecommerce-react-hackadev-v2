import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Register = () => {
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  // função para atualizar status do nome no form
  const handleChange = (e) => {
    setName(e.target.value);
  };
  // atualizar cpf no form
  const handleCPFChange = (e) => {
    setCPF(e.target.value);
  };
  // atualizar email com valor digitado
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // atualizar senha com valor digitado no form
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // confirmar a senha
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };
  // quando clicar submit
  const handleSubmit = (e) => {
    if (password !== confPassword) {
      // se a senha não forem iguais
      alert('As senhas digitadas não são iguais');
    } else {
      // mostrar alerta com os dados cadastrados
      alert(
        'Cadastro realizado ! Nome :"' +
          name +
          '" ,CPF :"' +
          CPF +
          '" e Email :"' +
          email +
          '"'
      );
    }
    e.preventDefault();
  };
  return (
    <div className="container-login">
      <div className="wrap-login">
        <div className="login-form">
          <form
            className="login-form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <span className="login-form-title">Bem Vindo(a)!</span>
            <span className="login-form-title">
              <Link to="/">
                <img src="../images/logo.jpeg" alt="icone" />
              </Link>
            </span>

            {/*quando o formulário for enviado*/}
            {/* Cadastro */}

            <div className="wrap-input">
              <input
                className={name !== '' ? 'has-val input' : 'input'}
                type="text"
                value={name}
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input">
              <input
                className={CPF !== '' ? 'has-val input' : 'input'}
                type="text"
                value={CPF}
                required
                onChange={(e) => {
                  handleCPFChange(e);
                }}
              />
              <span className="focus-input" data-placeholder="CPF"></span>
            </div>

            <div className="wrap-input">
              <input
                className={email !== '' ? 'has-val input' : 'input'}
                type="email"
                value={email}
                required
                onChange={(e) => {
                  handleEmailChange(e);
                }}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== '' ? 'has-val input' : 'input'}
                type="password"
                value={password}
                required
                onChange={(e) => {
                  handlePasswordChange(e);
                }}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="wrap-input">
              <input
                className={confPassword !== '' ? 'has-val input' : 'input'}
                type="password"
                value={confPassword}
                required
                onChange={(e) => {
                  handleConfPasswordChange(e);
                }}
              />
              <span
                className="focus-input"
                data-placeholder="Confirme Password"
              ></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Cadastrar</button>
            </div>
            <div className="text-center">
              <span className="txt1">Já possui conta?</span>
              <Link className="txt2" to="/login">
                Login.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
