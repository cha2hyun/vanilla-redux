import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const clear = document.getElementById("clear");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
    if (action.type === "ADD") {
        return count + 1;
    } else if (action.tpye === "MINUS") {
        return count - 1;
    } else {
        return count;
    }
};
const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });
console.log(countStore.getState());
