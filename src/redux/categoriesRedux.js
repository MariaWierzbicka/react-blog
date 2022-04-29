
//selectors
export const getAllCategories = (state) => {return state.categories};
export const getPostsByCategory = ({posts}, categoryName) => posts.filter(post => post.category === categoryName);

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default categoriesReducer;