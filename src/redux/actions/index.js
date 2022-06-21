export const searchRedditReduce = (state) => ({
    type: 'SEARCH_REDDIT',
    payload: state,
});

export const searchReddit = (data) => async (dispatch) => {
    const url = `https://www.reddit.com/r/${data}.json`;
    const response = await fetch(url);
    const result = await response.json();
    dispatch(searchRedditReduce(result));
}