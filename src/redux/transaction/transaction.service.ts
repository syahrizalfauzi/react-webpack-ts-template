/* eslint-disable no-unused-vars */
import STATUS_RESPONSE from 'status-response.json';
import type { Dispatch } from 'redux';
import {
    doDetDataInqueryCredit,
    doGetListDebitAccount,
    doGetDataInqueryDebit,
    doGetLimitTransaction,
    doConfirmData,
    doClearConfirmData,
    doGetLastTransaction,
    doGetListTersimpan,
    doGetListBank,
    doSetListBankRTGS
} from './transaction.action';

// eslint-disable-next-line no-unused-vars
const FetchTransaction: { [key: string]: (...arg0: any[]) => Promise<any> } = {};

type DispatchFunction = (dispatch: Dispatch) => Promise<any>;

type TransactionServiceType = {
    [key: string]: (...args: any[]) => DispatchFunction;
};

const TransactionService = {
    listDebitTransfer: () => async (dispatch: Dispatch) => {
        const res = await FetchTransaction.getListDebitAccount();

        if (res.rc === STATUS_RESPONSE.SUCCESS) {
            dispatch(doGetListDebitAccount(res.data));
        }

        return res;
    },
    confirmTransfer: (payload: any) => async (dispatch: Dispatch) => {
        const res = await FetchTransaction.confirmTransferService(payload);

        if (res.rc === STATUS_RESPONSE.SUCCESS) {
            dispatch(doConfirmData(res.data));
        }

        return res;
    },
    inquiryDebit: (number: string) => async (dispatch: Dispatch) => {
        const res = await FetchTransaction.postInqueryDebit(number);

        if (res.rc === STATUS_RESPONSE.SUCCESS) {
            dispatch(doGetDataInqueryDebit(res.data));
        }

        return res;
    },
    inquiryCredit: (number: string) => async (dispatch: Dispatch) => {
        const res = await FetchTransaction.postInqueryCredit(number);

        if (res.rc === STATUS_RESPONSE.SUCCESS) {
            dispatch(doDetDataInqueryCredit(res.data));
        }

        return res;
    },
    limitTransaction: (fid: any) => async (dispatch: Dispatch) => {
        let result;
        const fetch = async (retries = 5) => {
            if (retries <= 0) {
                return;
            }
            const res = await FetchTransaction.getLimitTransaction(fid);
            if (res.rc === STATUS_RESPONSE.SUCCESS) {
                dispatch(
                    doGetLimitTransaction({
                        [fid]: res.data
                    })
                );
                result = res;
                return;
            }

            await fetch(retries - 1);
        };
        await fetch();

        return result;
    },
    clearConfirmData: () => async (dispatch: Dispatch) => {
        dispatch(doClearConfirmData());
    },
    lastTransaction: (payload: any, type: any) => async (dispatch: Dispatch) => {
        const res = await FetchTransaction.listTransactionHistory(payload, type);

        if (res.rc === STATUS_RESPONSE.SUCCESS) {
            dispatch(doGetLastTransaction({ fid: 100, data: res.data }));
        }

        return res;
    },
    listTersimpan: (payload: { type: any }, storedType: any) => async (dispatch: Dispatch) => {
        const res = await FetchTransaction.listTersimpan(payload, storedType);

        if (res.rc === STATUS_RESPONSE.SUCCESS) {
            dispatch(doGetListTersimpan({ type: payload.type, data: res.data }));
        }

        return res;
    },
    confirmTransaction: (payload: any) => async (dispatch: Dispatch) => {
        const res = await FetchTransaction.confirmTransaction(payload);

        if (res.rc === STATUS_RESPONSE.SUCCESS) {
            dispatch(doConfirmData(res.data));
        }

        return res;
    },
    listBank: () => async (dispatch: Dispatch) => {
        const res = await FetchTransaction.listBank();

        if (res.rc === STATUS_RESPONSE.SUCCESS) {
            dispatch(doGetListBank(res.data));
        }

        return res;
    },
    listBankRTGS: () => async (dispatch: Dispatch) => {
        const res = await FetchTransaction.listBankRTGS();

        if (res.rc === STATUS_RESPONSE.SUCCESS) {
            dispatch(doSetListBankRTGS(res.data));
        }

        return res;
    }
} satisfies TransactionServiceType;

export default TransactionService;
