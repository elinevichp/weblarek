import './scss/styles.scss';
import { Buyer } from './components/Models/Buyer';
import { Cart } from './components/Models/Cart';
import { Products } from './components/Models/Products';
import { apiProducts } from './utils/data';
import { API_URL } from './utils/constants';
import { IApi } from './types/index';
import { Api } from './components/base/Api';
import { Communication } from './components/Models/Communication';


const productsModel = new Products();
console.log('Проверка методов класса Products');

productsModel.setItems(apiProducts.items);
console.log('Массив товаров из каталога: ', productsModel.getItems())
console.log('Получение одного товара по его id', productsModel.getProductById('c101ab44-ed99-4a54-990d-47aa2bb4e7d9'));
productsModel.rememberProduct(apiProducts.items[0]);
console.log('Подробное отображение запомненного товара', productsModel.getRememberedProduct());

const buyerModel = new Buyer();
console.log('Проверка методов класса Buyer');

buyerModel.saveData({
  payment: "cash",
  address: "test",
  email: "test@test.com",
  phone: "+77777777",
});
console.log('Данные покупателя:', buyerModel.getData());
buyerModel.clear();
console.log('Данные покупателя после очистки', buyerModel.getData());
console.log('Валидация: ', buyerModel.validate());

const cartModel = new Cart();
console.log('Проверка методов класса Cart');

cartModel.addProduct(apiProducts.items[0]);
cartModel.addProduct(apiProducts.items[1]);
cartModel.addProduct(apiProducts.items[2]);
console.log('Список товаров в корзине: ', cartModel.getProducts());
console.log('Получение стоимости всех товаров в корзине', cartModel.getTotalPrice());
console.log('Получение количества товаров в корзине', cartModel.getCount());
console.log('Проверка наличия товара в корзине по его id', cartModel.hasProductById('854cef69-976d-4c2a-a18c-2aa45046c390'));
cartModel.removeProduct(apiProducts.items[0]);
console.log('Список товаров в корзине после удаления первого товара: ', cartModel.getProducts());
cartModel.clear();
console.log('Список товаров после очистки: ', cartModel.getProducts());

const apiClient: IApi = new Api(API_URL);
const orderService = new Communication(apiClient);


orderService
  .getProducts()
  .then((data) => {
    console.log('Список товаров с сервера:', data);
    productsModel.setItems(data.items);
    console.log('Все товары в модели:', productsModel.getItems());
  })
  .catch((err) => console.error(err));