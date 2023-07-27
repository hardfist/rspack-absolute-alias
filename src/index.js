import { result } from "./mock_a";
console.log("result:", result);
import("./render").then((exports) => {
  exports.render();
});
