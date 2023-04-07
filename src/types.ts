import { PermitBatchData, PermitSingleData } from '@uniswap/permit2-sdk';
import { TokensOutFields } from '@furucombo/composable-router-core';
import * as common from '@furucombo/composable-router-common';

export type Classifying<T> = T extends Array<infer U>
  ? U extends undefined
    ? any[]
    : Classifying<U>[]
  : T extends object
  ? {
      [K in keyof T]: T[K] extends common.TokenObject
        ? common.Token
        : T[K] extends common.TokenAmountObject
        ? common.TokenAmount
        : T[K] extends common.TokenAmountObject[]
        ? common.TokenAmounts
        : T[K];
    }
  : T;

export type Declasifying<T> = T extends Array<infer U>
  ? U extends undefined
    ? any[]
    : Declasifying<U>[]
  : T extends object
  ? {
      [K in keyof T]: T[K] extends common.Token
        ? common.TokenObject
        : T[K] extends common.TokenAmount
        ? common.TokenAmountObject
        : T[K] extends common.TokenAmounts
        ? common.TokenAmountObject[]
        : T[K];
    }
  : T;

export interface LogicFormData<TFields = any> {
  id: string;
  rid: string;
  fields: TFields;
}

export interface RouterFormData {
  chainId: number;
  account: string;
  slippage?: number;
  logics: LogicFormData[];
  permitData?: PermitSingleData | PermitBatchData;
  permitSig?: string;
  referralCode?: number;
}

export interface RouterFormDataEstimateResult {
  funds: common.TokenAmounts;
  balances: common.TokenAmounts;
  approvals: common.TransactionRequest[];
  permitData?: PermitSingleData | PermitBatchData;
}

export type FlashLoanLogicFields = TokensOutFields<{ id: string; isLoan: boolean }>;

export type FlashLoanFields = Declasifying<FlashLoanLogicFields>;

export type FlashLoanFormData = LogicFormData<FlashLoanFields>;
