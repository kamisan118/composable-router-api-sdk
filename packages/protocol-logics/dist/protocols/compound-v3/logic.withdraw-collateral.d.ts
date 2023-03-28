import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type WithdrawCollateralLogicFields = core.TokenOutFields<{
    marketId: string;
}>;
export type WithdrawCollateralLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class WithdrawCollateralLogic extends core.Logic implements core.LogicTokenListInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<Record<string, common.Token[]>>;
    getLogic(fields: WithdrawCollateralLogicFields, options: WithdrawCollateralLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}