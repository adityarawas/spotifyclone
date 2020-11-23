export const initState = {
    user: null,
    playlist: [],
    playing:false,
    item:null,
    // token:"BQBWebkvyIBqk_OOlyu84EApMDkPq7YMLeVjE0wi7F-ukVvFIW…LhTx02gphx1SqeVt6ocJMJSJ7EsL5Hm_Tf0Qpyr348CFqrKX2"
}

const reducer = (state, action) =>{
    console.log(action);
   
    switch(action.type){
        case 'SET_USER':
            return {
                ...state, user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return{
                ...state,
                playlists:action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            console.log(action.discover_weekly)
            return{
                ...state,
                discover_weekly:action.discover_weekly
            }
        default:
            return state;

    }


}

export default reducer