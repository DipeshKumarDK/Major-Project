var retrievedObject = localStorage.getItem('freeCategory');

const initialState = JSON.parse(retrievedObject);

const changeFreeCategory = (state = initialState , action) => {
    switch(action.type){
        case "FREECATEGORY": return action.category;
        default: return state;
    }
}

export default changeFreeCategory; 