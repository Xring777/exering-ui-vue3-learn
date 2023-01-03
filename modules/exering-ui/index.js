import Transfer from "./Transfer/Transfer";
import Comment from './Comment/Comment'
import Magnifier from './Magnifier/Magnifier'
const components = {
  Transfer,
  Comment,
  Magnifier,
};
export {
  Transfer,
  Comment,
  Magnifier,
}
export default {
  install(app) {
    for (let component in components) {
      app.component(component, components[component]);
    }
  },
};
