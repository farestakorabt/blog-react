const INITIAL_STATE = {
  articles: [],
};

function articleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDARTICLE":
      const newArr = [...state.articles];
      newArr.unshift(action.payload);
      return {
        // ...state,  => use in case we have another property in => const INITIAL_STATE = { articles: [] };
        articles: newArr,
      };

    case "LOADARTICLES":
      return {
        // ...state,
        articles: action.payload,
      };

    default:
      break;
  }
  return state;
}

export default articleReducer;

export const getArticles = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "LOADARTICLES",
        payload: data,
      });
    });
};
