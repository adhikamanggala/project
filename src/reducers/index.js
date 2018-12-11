import { combineReducers } from 'redux'
import AuthReducers from './AuthReducers';



export default combineReducers ({
    pikachu: () => 'Ryan Reynolds',
    auth: AuthReducers,
    
});