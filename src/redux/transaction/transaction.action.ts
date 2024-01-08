import type { AnyAction } from 'redux';
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
    GET_DETAIL_TRANSACTION,
    GET_DETAIL_RECUR_TRANSACTION,
    SET_TRANSFER_FILTER,
    SET_PAYMENT_FILTER,
    GET_LIST_BANK,
    SET_LIST_BANK_RTGS
} from './transaction.types';

export const doGetListDebitAccount = (payload: any): AnyAction => ({
    type: GET_LIST_DEBIT_ACCOUNT,
    payload
});

export const doGetDataInqueryDebit = (payload: any): AnyAction => ({
    type: POST_INQUERY_DEBIT,
    payload
});

export const doDetDataInqueryCredit = (payload: any): AnyAction => ({
    type: POST_INQUERY_CREDIT,
    payload
});

export const doGetLimitTransaction = (payload: { [x: number]: any }): AnyAction => ({
    type: GET_LIMIT_TRANSACTION,
    payload
});

export const doSaveInputTransferBRI = (payload: any): AnyAction => ({
    type: SAVE_INPUT_TRANSFER_BRI,
    payload
});

export const doConfirmData = (payload: any): AnyAction => ({
    type: CONFIRM_DATA,
    payload
});

export const doClearConfirmData = (): AnyAction => ({
    type: CLEAR_CONFIRM_DATA
});

export const doGetLastTransaction = (payload: { fid: number; data: any }): AnyAction => ({
    type: GET_LAST_TRANSACTION,
    payload
});

export const doGetListTersimpan = (payload: { type: any; data: any }): AnyAction => ({
    type: GET_LIST_TERSIMPAN,
    payload
});

export const doGetDetailTransaction = (payload: any): AnyAction => ({
    type: GET_DETAIL_TRANSACTION,
    payload
});

export const doGetDetailRecurTransfer = (payload: any): AnyAction => ({
    type: GET_DETAIL_RECUR_TRANSACTION,
    payload
});

export const doSetTransferFilter = (payload: any): AnyAction => ({
    type: SET_TRANSFER_FILTER,
    payload
});

export const doSetPaymentFilter = (payload: any): AnyAction => ({
    type: SET_PAYMENT_FILTER,
    payload
});

export const doGetListBank = (payload: any): AnyAction => ({
    type: GET_LIST_BANK,
    payload
});

export const doSetListBankRTGS = (payload: string): AnyAction => ({
    type: SET_LIST_BANK_RTGS,
    payload
});
