const addToInventary = item => {
    return {
        type: "ADD_TO_INVENTARY",
        item
      }
};

const deleteItem = item => {
    return {
        type: "DELETE_TO_INVENTARY",
        item
      }
};
export {addToInventary,deleteItem};