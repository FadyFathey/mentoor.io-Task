import MainLayout from "./layouts/MainLayout";
import { Provider } from "react-redux";
import store from "./RTK/store";
const App = () => (
  <Provider store={store}>
    <MainLayout />
  </Provider>
);
export default App;
