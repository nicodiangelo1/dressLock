import { createStore } from "vuex";
import auth from "./modules/auth";

export default createStore({
  modules: {
    auth,  // Aquí se incluyen los módulos
  },
});