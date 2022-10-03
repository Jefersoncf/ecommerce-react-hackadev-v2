import { useState } from 'react';
import '../styles/checkout.css';

const Checkout = ({ user, addAddress, setShipAddress, placeOrder }) => {
  const blanck_address = {
    full_name: '',
    address: '',
    number: '',
    pin_code: '',
    city: '',
    state: '',
    phone: '',
  };
  const [address, setAddress] = useState({ blanck_address });

  const validateAddress = (address) => {
    if (
      !address.full_name ||
      !address.address ||
      !address.phone ||
      !address.state ||
      !address.number ||
      !address.pin_code ||
      !address.city
    ) {
      alert('Todos so campos são obrigatórios');
    } else {
      addAddress(address);
      setAddress(blanck_address);
    }
  };
  return (
    <section className="container-checkout">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          validateAddress(address);
        }}
      >
        <div className="row-checkout">
          <div className="col-checkout">
            <h3 className="title">Endereço cadastrado</h3>

            {user.addresses.map((address) => (
              <div className="sec-adress">
                <div className="address">
                  <p>{address.full_name}</p>
                  <p>
                    {address.address}, {address.number}, {address.pin_code},{' '}
                    {address.city}, {address.state}
                  </p>
                  <p>{address.phone}</p>
                  <div className="check-end">
                    <input
                      name="address"
                      id="address"
                      type="radio"
                      onClick={(e) => setShipAddress(address)}
                    />
                    Usar este endereço
                  </div>
                </div>
              </div>
            ))}
            <hr />
            <div className="container-new-address">
              <h3 className="title">Adicionar novo Endereço</h3>

              <div className="inputBox">
                <p>Nome Completo</p>
                <input
                  type="text"
                  placeholder="Ex: José da Silva"
                  value={address.full_name}
                  onChange={(e) =>
                    setAddress({ ...address, full_name: e.target.value })
                  }
                />
              </div>

              <div className="inputBox tel">
                <p>Telefone</p>
                <input
                  type="text"
                  placeholder="Ex: (62) 98765-4326"
                  value={address.phone}
                  onChange={(e) =>
                    setAddress({ ...address, phone: e.target.value })
                  }
                />
              </div>

              <div className="inputBox">
                <p>Endereço</p>
                <input
                  type="text"
                  placeholder="Ex: Av: Goiás"
                  value={address.address}
                  onChange={(e) =>
                    setAddress({ ...address, address: e.target.value })
                  }
                />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <p>Numero</p>
                  <input
                    type="number"
                    placeholder="Ex: 456"
                    value={address.number}
                    onChange={(e) =>
                      setAddress({ ...address, number: e.target.value })
                    }
                  />
                </div>
                <div className="inputBox">
                  <p>Cidade</p>
                  <input
                    type="text"
                    placeholder="Ex: Goiânia"
                    value={address.city}
                    onChange={(e) =>
                      setAddress({ ...address, city: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex">
                <div className="inputBox">
                  <p>UF</p>
                  <input
                    type="text"
                    placeholder="Ex: GO"
                    value={address.state}
                    onChange={(e) =>
                      setAddress({ ...address, state: e.target.value })
                    }
                  />
                </div>
                <div className="inputBox">
                  <p>CEP</p>
                  <input
                    type="text"
                    placeholder="Ex: 12345-678"
                    value={address.pin_code}
                    onChange={(e) =>
                      setAddress({ ...address, pin_code: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex">
                <div className="inputBox">
                  <button className="submit-btn btn" type="submit">
                    Cadastrar Endereço
                  </button>
                </div>
              </div>
            </div>
            <hr />

            <div className="inputBox">
              <button
                formaction="/"
                className="btn-address btn"
                type="submit"
                onClick={(e) => placeOrder()}
              >
                Pagamento
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
