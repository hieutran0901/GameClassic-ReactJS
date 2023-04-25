import Routes from './routes/Routers';
import ProductsContextProvider from './contexts/productsContext';

function App() {
  return (
    <ProductsContextProvider>
      <Routes />
    </ProductsContextProvider>
  );
}

export default App;
