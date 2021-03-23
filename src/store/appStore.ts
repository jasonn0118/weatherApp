import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { IWeatherState, weatherReducer } from '../redux/reducers/weatherReducer';

const rootReducer = combineReducers({
    weather: weatherReducer
})

export type AppStore = {
    weather: IWeatherState
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;