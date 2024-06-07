import { Provider } from "react-redux";
import store from "./RTK/store";
import MainLayout from "./layouts/MainLayout";

const App = () => (
  <Provider store={store}>
    <MainLayout />
  </Provider>
);

export default App;
