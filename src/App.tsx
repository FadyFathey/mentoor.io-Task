import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./RTK/store";
import MainLayout from "./layouts/MainLayout";

ReactDOM.render(
  <Provider store={store}>
    <MainLayout />
  </Provider>,
  document.getElementById("root")
);


