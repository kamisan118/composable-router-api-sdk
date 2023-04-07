import { Declasifying, LogicFormData } from 'src/types';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type WithdrawParams = Declasifying<logics.aavev2.WithdrawLogicParams>;

export type WithdrawFields = Declasifying<logics.aavev2.WithdrawLogicFields>;

export type WithdrawFormData = LogicFormData<WithdrawFields>;

export function newWithdrawFormData(fields: WithdrawFields): WithdrawFormData {
  return { id: uuidv4(), rid: logics.aavev2.WithdrawLogic.rid, fields };
}
