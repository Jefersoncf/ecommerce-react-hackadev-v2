import {
  ADD_TO_CART,
  CHANGE_ORDER_CART,
  CHANGE_QUANTITY,
  ADD_ADDRESS,
  SET_SHIP_ADDRESS,
  PLACE_ORDER,
  EMPTY_CART,
  REMOVE_ITEM,
  INIT_PRODUCTS,
} from '../actions';

/* const initialStateProducts = {
  products: [
    {
      id: 1,
      name: 'VESTIDO FLORIDO',
      category: 'ROUPAS',
      rating: 3,
      color: 'floral',
      price: 249.0,
      size: 'M',
      percent: 0,
      details: {
        product: '',
        warranty: '',
        merchant: '',
      },
      image: 'product1',
    },
    {
      id: 2,
      name: 'MOCHILA NOTEBOOK',
      category: 'ACESSÓRIOS',
      rating: 5,
      color: 'vermelho',
      size: '',
      price: 518.7,
      percent: 50,
      details: {
        product: '',
        warranty: '',
        merchant: '',
      },
      image: 'product2',
    },
    {
      id: 3,
      name: 'CAMISA PRETA',
      category: 'ROUPAS',
      rating: 4,
      color: 'preta',
      size: 'M',
      price: 220.0,
      percent: 0,
      details: {
        product: '',
        warranty: '',
        merchant: '',
      },
      image: 'product3',
    },
    {
      id: 4,
      name: 'TENIS ESPORTIVO',
      category: 'CALÇADOS',
      rating: 4,
      color: 'preto',
      size: '40',
      price: 199.9,
      percent: 10,
      details: {
        product: '',
        warranty: '',
        merchant: '',
      },
      image: 'product4',
    },
    {
      id: 5,
      name: 'MOLETOM COM CAPUZ',
      category: 'ROUPAS',
      rating: 4,
      color: 'preto',
      size: 'G',
      price: 255.8,
      percent: 0,
      details: {
        product: '',
        warranty: '',
        merchant: '',
      },
      image: 'product5',
    },
    {
      id: 6,
      name: 'VESTIDO MANGAS BUFANTES',
      category: 'ROUPAS',
      rating: 5,
      color: 'rosa',
      price: 520.5,
      size: 'M',
      percent: 0,
      details: {
        product: '',
        warranty: '',
        merchant: '',
      },
      image: 'product6',
    },
    {
      id: 7,
      name: 'TENIS CORRIDA',
      category: 'CALÇADOS',
      rating: 4,
      color: 'preto',
      price: 258.9,
      size: '42',
      percent: 5,
      details: {
        product: '',
        warranty: '',
        merchant: '',
      },
      image: 'product7',
    },
    {
      id: 8,
      name: 'CAMISA SOCIAL',
      category: 'ROUPAS',
      rating: 1,
      color: 'preto',
      price: 599.9,
      size: 'M',
      percent: 0,
      details: {
        product: '',
        warranty: '',
        merchant: '',
      },
      image: 'product8',
    },
    {
      id: 9,
      name: 'CAMISA SPORT FINO',
      category: 'ROUPAS',
      rating: 4,
      color: 'preto',
      price: 599.9,
      size: 'M',
      percent: 0,
      details: {
        product: '',
        warranty: '',
        merchant: '',
      },
      image: 'product9',
    },
  ],
}; */
const initialStateCart = {
  items: [],
};

const initialStateOrder = {
  items: [],
  shipping_change: 50,
  discount_in_percent: 10,
  shipping_address: '',
  total_items: 0,
  total_cost: 0,
};

const initialStateUser = {
  name: 'José da Silva',
  email: 'jose_silva@email.com',
  addresses: [
    {
      full_name: ' José da Silva',
      address: 'Av T63',
      number: 585,
      city: 'Goiânia',
      state: 'GO',
      pin_code: '75254-741',
      phone: '(62) 97990-1117',
    },
  ],
  orders: [],
};

/* const productReducer = (state = initialStateProducts, action) => {
  switch (action.type) {
    case INIT_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
 */
const initState = { products: [] };
export const productReducer =  (state = initState, action) => {
  switch (action.type) {
    case INIT_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

const cartReducer = (state = initialStateCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.items.find((item) => item.id_product === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case CHANGE_QUANTITY:
      const oldItem = state.items.find((item) => item.id === action.payload.id);

      const index = state.items.indexOf(oldItem);
      const newItems = [...state.items];
      newItems[index] = action.payload;
      return { ...state, items: newItems };
    case REMOVE_ITEM:
      const item = action.payload;
      const i = state.items.findIndex((it) => it.id === item.id);
      const itemsArray = [...state.items];
      itemsArray.splice(i, 1);
      return { ...state, items: itemsArray };
    case EMPTY_CART:
      return { ...state, items: [] };
    default:
      return state;
  }
};

const orderReducer = (state = initialStateOrder, action) => {
  switch (action.type) {
    case CHANGE_ORDER_CART:
      const items = action.payload;
      const total_items = items.reduce(
        (total, item) => total + item.quantity * 1,
        0
      );
      const total_cost = items.reduce(
        (total, item) => total + item.product_price * item.quantity,
        0
      );
      return { ...state, items: action.payload, total_items, total_cost };
    case SET_SHIP_ADDRESS:
      return { ...state, shipping_address: action.payload };
    default:
      return state;
  }
};

const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return { ...state, addresses: [...state.addresses, action.payload] };
    case PLACE_ORDER:
      return { ...state, orders: [...state.orders, action.payload] };

    default:
      return state;
  }
};
export { /* productReducer,  */cartReducer, orderReducer, userReducer };
