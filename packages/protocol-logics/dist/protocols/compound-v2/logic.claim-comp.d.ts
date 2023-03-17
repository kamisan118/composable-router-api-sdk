import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type ClaimCOMPLogicFields = core.ClaimTokenFields;
export declare class ClaimCOMPLogic extends core.Logic implements core.LogicTokenListInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): common.Token[];
    getReward(owner: string): Promise<common.TokenAmount>;
    getLogic(fields: ClaimCOMPLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
