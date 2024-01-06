import changeTotal from "./changeTotal";
import changeSearch from "./changeSearch";
import { combineReducers } from "redux";
import changeCategory from "./changeCategory";
import changeUser from "./changeUser";
import changeFreeCategory from "./changeFreeCategory";
import changeCurrJob from "./changeCurrJob";
import changeCurrResume from "./changeCurrResume";
import changeCurrFreelancer from "./changeCurrFreelancer";

const rootReducer = combineReducers({
    changeTotal , 
    changeSearch,
    changeCategory,
    changeUser,
    changeFreeCategory,
    changeCurrJob,
    changeCurrResume,
    changeCurrFreelancer
})

export default rootReducer;