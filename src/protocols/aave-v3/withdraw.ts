import { Declasifying, Logic } from 'src/types';
import { getProtocolTokenList, quote } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type WithdrawParams = Declasifying<logics.aavev3.WithdrawLogicParams>;

export type WithdrawFields = Declasifying<logics.aavev3.WithdrawLogicFields>;

export type WithdrawLogic = Logic<WithdrawFields>;

export function newWithdrawLogic(fields: WithdrawFields): WithdrawLogic {
  return { id: uuidv4(), rid: logics.aavev3.WithdrawLogic.rid, fields };
}

export async function getWithdrawTokenList(chainId: number): Promise<logics.aavev3.WithdrawLogicTokenList> {
  return getProtocolTokenList(chainId, logics.aavev3.WithdrawLogic.rid);
}

export async function getWithdrawQuotation(
  chainId: number,
  params: WithdrawParams
): Promise<logics.aavev3.WithdrawLogicFields> {
  return quote(chainId, logics.aavev3.WithdrawLogic.rid, params);
}
