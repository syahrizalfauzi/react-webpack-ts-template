import { AnyAction } from 'redux';
import {
    GET_LIST_DEBIT_ACCOUNT,
    POST_INQUERY_DEBIT,
    POST_INQUERY_CREDIT,
    GET_LIMIT_TRANSACTION,
    SAVE_INPUT_TRANSFER_BRI,
    CONFIRM_DATA,
    CLEAR_CONFIRM_DATA,
    GET_LAST_TRANSACTION,
    GET_LIST_TERSIMPAN,
    SET_TRANSFER_FILTER,
    SET_PAYMENT_FILTER,
    GET_LIST_BANK,
    SET_LIST_BANK_RTGS
} from './transaction.types';

type TransactionState = {
    isError: boolean;
    listDebitAccount: any[];
    resInqueryCredit: any;
    resInqueryDebit: any;
    limitTransaction: any;
    inputTransferBRI: any;
    confirmData: {} | string;
    listBank: any[];
    dataTersimpan: any;
    dataLastTransaction: any;
    transferFilter: any;
    paymentFilter: any;
};

const INITIAL_STATE: TransactionState = {
    isError: false,
    listDebitAccount: [],
    resInqueryCredit: {},
    resInqueryDebit: {},
    limitTransaction: null,
    inputTransferBRI: {},
    confirmData: {},
    listBank: [],
    dataTersimpan: null,
    dataLastTransaction: null,
    transferFilter: null,
    paymentFilter: null
};

const reducer = (state = INITIAL_STATE, action: AnyAction): TransactionState => {
    switch (action.type) {
        case GET_LIST_DEBIT_ACCOUNT:
            return {
                ...state,
                listDebitAccount: action.payload
            };
        case POST_INQUERY_DEBIT:
            return {
                ...state,
                resInqueryDebit: action.payload
            };
        case POST_INQUERY_CREDIT:
            return {
                ...state,
                resInqueryCredit: action.payload
            };
        case GET_LIMIT_TRANSACTION:
            return {
                ...state,
                limitTransaction: {
                    ...state.limitTransaction,
                    ...action.payload
                }
            };
        case SAVE_INPUT_TRANSFER_BRI:
            return {
                ...state,
                inputTransferBRI: action.payload
            };
        case CONFIRM_DATA:
            return {
                ...state,
                confirmData: action.payload
            };
        case CLEAR_CONFIRM_DATA:
            return {
                ...state,
                confirmData: {}
            };
        case GET_LAST_TRANSACTION:
            return {
                ...state,
                dataLastTransaction: action.payload
            };
        case GET_LIST_TERSIMPAN:
            return {
                ...state,
                dataTersimpan: action.payload
            };
        case SET_TRANSFER_FILTER:
            return {
                ...state,
                transferFilter: { ...state.transferFilter, ...action.payload }
            };
        case SET_PAYMENT_FILTER:
            return {
                ...state,
                paymentFilter: { ...state.paymentFilter, ...action.payload }
            };
        case GET_LIST_BANK:
            return {
                ...state,
                listBank: action.payload
            };
        case SET_LIST_BANK_RTGS:
            return {
                ...state,
                listBank: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
