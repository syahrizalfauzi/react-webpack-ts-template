import { combineReducers } from 'redux';
import transactionReducer from './transaction/transaction.reducer';

const rootReducer = combineReducers({
    transaction: transactionReducer
});

export type AppSelector = ReturnType<typeof rootReducer>;

export default rootReducer;
