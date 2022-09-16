import { ADD_TO_CART, CHANGE_ORDER_CART, CHANGE_QUANTITY } from '../actions';

const initialStateProducts = {
  products: [
    {
      id: 1,
      name: 'VESTIDO COM MANGAS BUFANTES',
      category: 'ROUPAS',
      rating: 4,
      colors: 'floral/preto',
      price: 249.0,
      size: 'M',
      percent: 0,
      image: 'product1',
    },
    {
      id: 2,
      name: 'MOLETOM FORRADO',
      category: 'ROUPAS',
      rating: 4,
      colors: 'branco/azul marinho',
      size: 'G',
      price: 518.7,
      percent: 50,
      image: 'product2',
    },
    {
      id: 3,
      name: 'BOLSA COM ZIPPER',
      category: 'ACESSÓRIOS',
      rating: 4,
      colors: 'vermelha/preta',
      size: '',
      price: 220.0,
      percent: 0,
      image: 'product3',
    },
    {
      id: 4,
      name: 'CAMISA ARAMIS',
      category: 'ROUPAS',
      rating: 4,
      colors: 'branca/vermelha/preta',
      size: 'M',
      price: 199.9,
      percent: 50,
      image: 'product4',
    },
    {
      id: 5,
      name: 'MOLETOM COM CAPUZ',
      category: 'ROUPAS',
      rating: 4,
      colors: 'preto',
      size: 'G',
      price: 255.8,
      percent: 0,
      image: 'product5',
    },
    {
      id: 6,
      name: 'TÊNIS FEMININO HRX',
      category: 'CALÇADOS',
      rating: 4,
      colors: 'cinza grafite/azul marinho',
      price: 520.5,
      size: '',
      percent: 0,
      image: 'product6',
    },
    {
      id: 7,
      name: 'VESTIDO TRANSPASSE',
      category: 'ROUPAS',
      rating: 4,
      colors: 'rosa chiclete',
      price: 258.9,
      size: 'S',
      percent: 50,
      image: 'product7',
    },
    {
      id: 8,
      name: 'TÊNIS MASCULINO SPORT',
      category: 'CALÇADOS',
      rating: 4,
      colors: 'preto/cinza',
      price: 599.9,
      size: '',
      percent: 0,
      image: 'product8',
    },
    {
      id: 9,
      name: 'TÊNIS MASCULINO SPORT',
      category: 'CALÇADOS',
      rating: 4,
      colors: 'preto/cinza',
      price: 599.9,
      size: '',
      percent: 0,
      image: 'product9',
    },
  ],
};
const initialStateCart = {
  items: [],
};

const initialStateOrder = {
  items: [],
  shipping_change: 50,
  discount_in_percent: 10,
  shipping_address: '',
  total_items: 0,
  total_cost: 0
}

const productReducer = (state = initialStateProducts, action) => {
  return state;
};

const cartReducer = (state = initialStateCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.items.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, {...action.payload, quantity: 1 }],
      };

    case CHANGE_QUANTITY: 
      const oldItem = state.items.find((item) => item.id === action.payload.id);

      const index = state.items.indexOf(oldItem);
      const newItems = [...state.items];
      newItems[index] = action.payload
      return {...state, items: newItems}

    default:
      return state;
  }
};

const orderReducer = (state = initialStateOrder, action) => {
  switch (action.type) {
    case CHANGE_ORDER_CART: 
    const items = action.payload;
    const total_items = items.reduce((total, item) => total + item.quantity * 1, 0);
  
  const total_cost = items.reduce((total, item) => total + item.price * item.quantity, 0)
  
  return {...state, items: action.payload, total_items, total_cost}
  default: 
    return state;
}
}
export { productReducer, cartReducer, orderReducer };