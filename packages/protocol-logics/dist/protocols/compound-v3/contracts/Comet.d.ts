import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';
export declare namespace CometCore {
    type AssetInfoStruct = {
        offset: PromiseOrValue<BigNumberish>;
        asset: PromiseOrValue<string>;
        priceFeed: PromiseOrValue<string>;
        scale: PromiseOrValue<BigNumberish>;
        borrowCollateralFactor: PromiseOrValue<BigNumberish>;
        liquidateCollateralFactor: PromiseOrValue<BigNumberish>;
        liquidationFactor: PromiseOrValue<BigNumberish>;
        supplyCap: PromiseOrValue<BigNumberish>;
    };
    type AssetInfoStructOutput = [
        number,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        offset: number;
        asset: string;
        priceFeed: string;
        scale: BigNumber;
        borrowCollateralFactor: BigNumber;
        liquidateCollateralFactor: BigNumber;
        liquidationFactor: BigNumber;
        supplyCap: BigNumber;
    };
}
export declare namespace CometStorage {
    type TotalsBasicStruct = {
        baseSupplyIndex: PromiseOrValue<BigNumberish>;
        baseBorrowIndex: PromiseOrValue<BigNumberish>;
        trackingSupplyIndex: PromiseOrValue<BigNumberish>;
        trackingBorrowIndex: PromiseOrValue<BigNumberish>;
        totalSupplyBase: PromiseOrValue<BigNumberish>;
        totalBorrowBase: PromiseOrValue<BigNumberish>;
        lastAccrualTime: PromiseOrValue<BigNumberish>;
        pauseFlags: PromiseOrValue<BigNumberish>;
    };
    type TotalsBasicStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        baseSupplyIndex: BigNumber;
        baseBorrowIndex: BigNumber;
        trackingSupplyIndex: BigNumber;
        trackingBorrowIndex: BigNumber;
        totalSupplyBase: BigNumber;
        totalBorrowBase: BigNumber;
        lastAccrualTime: number;
        pauseFlags: number;
    };
}
export interface CometInterface extends utils.Interface {
    functions: {
        'absorb(address,address[])': FunctionFragment;
        'accrueAccount(address)': FunctionFragment;
        'allow(address,bool)': FunctionFragment;
        'allowBySig(address,address,bool,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
        'allowance(address,address)': FunctionFragment;
        'approve(address,uint256)': FunctionFragment;
        'approveThis(address,address,uint256)': FunctionFragment;
        'balanceOf(address)': FunctionFragment;
        'baseAccrualScale()': FunctionFragment;
        'baseBorrowMin()': FunctionFragment;
        'baseIndexScale()': FunctionFragment;
        'baseMinForRewards()': FunctionFragment;
        'baseScale()': FunctionFragment;
        'baseToken()': FunctionFragment;
        'baseTokenPriceFeed()': FunctionFragment;
        'baseTrackingAccrued(address)': FunctionFragment;
        'baseTrackingBorrowSpeed()': FunctionFragment;
        'baseTrackingSupplySpeed()': FunctionFragment;
        'borrowBalanceOf(address)': FunctionFragment;
        'borrowKink()': FunctionFragment;
        'borrowPerSecondInterestRateBase()': FunctionFragment;
        'borrowPerSecondInterestRateSlopeHigh()': FunctionFragment;
        'borrowPerSecondInterestRateSlopeLow()': FunctionFragment;
        'buyCollateral(address,uint256,uint256,address)': FunctionFragment;
        'collateralBalanceOf(address,address)': FunctionFragment;
        'decimals()': FunctionFragment;
        'extensionDelegate()': FunctionFragment;
        'factorScale()': FunctionFragment;
        'getAssetInfo(uint8)': FunctionFragment;
        'getAssetInfoByAddress(address)': FunctionFragment;
        'getBorrowRate(uint256)': FunctionFragment;
        'getPrice(address)': FunctionFragment;
        'getReserves()': FunctionFragment;
        'getSupplyRate(uint256)': FunctionFragment;
        'getUtilization()': FunctionFragment;
        'governor()': FunctionFragment;
        'hasPermission(address,address)': FunctionFragment;
        'initializeStorage()': FunctionFragment;
        'isAbsorbPaused()': FunctionFragment;
        'isAllowed(address,address)': FunctionFragment;
        'isBorrowCollateralized(address)': FunctionFragment;
        'isBuyPaused()': FunctionFragment;
        'isLiquidatable(address)': FunctionFragment;
        'isSupplyPaused()': FunctionFragment;
        'isTransferPaused()': FunctionFragment;
        'isWithdrawPaused()': FunctionFragment;
        'liquidatorPoints(address)': FunctionFragment;
        'maxAssets()': FunctionFragment;
        'name()': FunctionFragment;
        'numAssets()': FunctionFragment;
        'pause(bool,bool,bool,bool,bool)': FunctionFragment;
        'pauseGuardian()': FunctionFragment;
        'priceScale()': FunctionFragment;
        'quoteCollateral(address,uint256)': FunctionFragment;
        'storeFrontPriceFactor()': FunctionFragment;
        'supply(address,uint256)': FunctionFragment;
        'supplyFrom(address,address,address,uint256)': FunctionFragment;
        'supplyKink()': FunctionFragment;
        'supplyPerSecondInterestRateBase()': FunctionFragment;
        'supplyPerSecondInterestRateSlopeHigh()': FunctionFragment;
        'supplyPerSecondInterestRateSlopeLow()': FunctionFragment;
        'supplyTo(address,address,uint256)': FunctionFragment;
        'symbol()': FunctionFragment;
        'targetReserves()': FunctionFragment;
        'totalBorrow()': FunctionFragment;
        'totalSupply()': FunctionFragment;
        'totalsBasic()': FunctionFragment;
        'totalsCollateral(address)': FunctionFragment;
        'trackingIndexScale()': FunctionFragment;
        'transfer(address,uint256)': FunctionFragment;
        'transferAsset(address,address,uint256)': FunctionFragment;
        'transferAssetFrom(address,address,address,uint256)': FunctionFragment;
        'transferFrom(address,address,uint256)': FunctionFragment;
        'userBasic(address)': FunctionFragment;
        'userCollateral(address,address)': FunctionFragment;
        'userNonce(address)': FunctionFragment;
        'version()': FunctionFragment;
        'withdraw(address,uint256)': FunctionFragment;
        'withdrawFrom(address,address,address,uint256)': FunctionFragment;
        'withdrawReserves(address,uint256)': FunctionFragment;
        'withdrawTo(address,address,uint256)': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'absorb' | 'accrueAccount' | 'allow' | 'allowBySig' | 'allowance' | 'approve' | 'approveThis' | 'balanceOf' | 'baseAccrualScale' | 'baseBorrowMin' | 'baseIndexScale' | 'baseMinForRewards' | 'baseScale' | 'baseToken' | 'baseTokenPriceFeed' | 'baseTrackingAccrued' | 'baseTrackingBorrowSpeed' | 'baseTrackingSupplySpeed' | 'borrowBalanceOf' | 'borrowKink' | 'borrowPerSecondInterestRateBase' | 'borrowPerSecondInterestRateSlopeHigh' | 'borrowPerSecondInterestRateSlopeLow' | 'buyCollateral' | 'collateralBalanceOf' | 'decimals' | 'extensionDelegate' | 'factorScale' | 'getAssetInfo' | 'getAssetInfoByAddress' | 'getBorrowRate' | 'getPrice' | 'getReserves' | 'getSupplyRate' | 'getUtilization' | 'governor' | 'hasPermission' | 'initializeStorage' | 'isAbsorbPaused' | 'isAllowed' | 'isBorrowCollateralized' | 'isBuyPaused' | 'isLiquidatable' | 'isSupplyPaused' | 'isTransferPaused' | 'isWithdrawPaused' | 'liquidatorPoints' | 'maxAssets' | 'name' | 'numAssets' | 'pause' | 'pauseGuardian' | 'priceScale' | 'quoteCollateral' | 'storeFrontPriceFactor' | 'supply' | 'supplyFrom' | 'supplyKink' | 'supplyPerSecondInterestRateBase' | 'supplyPerSecondInterestRateSlopeHigh' | 'supplyPerSecondInterestRateSlopeLow' | 'supplyTo' | 'symbol' | 'targetReserves' | 'totalBorrow' | 'totalSupply' | 'totalsBasic' | 'totalsCollateral' | 'trackingIndexScale' | 'transfer' | 'transferAsset' | 'transferAssetFrom' | 'transferFrom' | 'userBasic' | 'userCollateral' | 'userNonce' | 'version' | 'withdraw' | 'withdrawFrom' | 'withdrawReserves' | 'withdrawTo'): FunctionFragment;
    encodeFunctionData(functionFragment: 'absorb', values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: 'accrueAccount', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'allow', values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: 'allowBySig', values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: 'allowance', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'approve', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'approveThis', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'baseAccrualScale', values?: undefined): string;
    encodeFunctionData(functionFragment: 'baseBorrowMin', values?: undefined): string;
    encodeFunctionData(functionFragment: 'baseIndexScale', values?: undefined): string;
    encodeFunctionData(functionFragment: 'baseMinForRewards', values?: undefined): string;
    encodeFunctionData(functionFragment: 'baseScale', values?: undefined): string;
    encodeFunctionData(functionFragment: 'baseToken', values?: undefined): string;
    encodeFunctionData(functionFragment: 'baseTokenPriceFeed', values?: undefined): string;
    encodeFunctionData(functionFragment: 'baseTrackingAccrued', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'baseTrackingBorrowSpeed', values?: undefined): string;
    encodeFunctionData(functionFragment: 'baseTrackingSupplySpeed', values?: undefined): string;
    encodeFunctionData(functionFragment: 'borrowBalanceOf', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'borrowKink', values?: undefined): string;
    encodeFunctionData(functionFragment: 'borrowPerSecondInterestRateBase', values?: undefined): string;
    encodeFunctionData(functionFragment: 'borrowPerSecondInterestRateSlopeHigh', values?: undefined): string;
    encodeFunctionData(functionFragment: 'borrowPerSecondInterestRateSlopeLow', values?: undefined): string;
    encodeFunctionData(functionFragment: 'buyCollateral', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'collateralBalanceOf', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
    encodeFunctionData(functionFragment: 'extensionDelegate', values?: undefined): string;
    encodeFunctionData(functionFragment: 'factorScale', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getAssetInfo', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'getAssetInfoByAddress', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'getBorrowRate', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'getPrice', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'getReserves', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getSupplyRate', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'getUtilization', values?: undefined): string;
    encodeFunctionData(functionFragment: 'governor', values?: undefined): string;
    encodeFunctionData(functionFragment: 'hasPermission', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'initializeStorage', values?: undefined): string;
    encodeFunctionData(functionFragment: 'isAbsorbPaused', values?: undefined): string;
    encodeFunctionData(functionFragment: 'isAllowed', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'isBorrowCollateralized', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'isBuyPaused', values?: undefined): string;
    encodeFunctionData(functionFragment: 'isLiquidatable', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'isSupplyPaused', values?: undefined): string;
    encodeFunctionData(functionFragment: 'isTransferPaused', values?: undefined): string;
    encodeFunctionData(functionFragment: 'isWithdrawPaused', values?: undefined): string;
    encodeFunctionData(functionFragment: 'liquidatorPoints', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'maxAssets', values?: undefined): string;
    encodeFunctionData(functionFragment: 'name', values?: undefined): string;
    encodeFunctionData(functionFragment: 'numAssets', values?: undefined): string;
    encodeFunctionData(functionFragment: 'pause', values: [
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: 'pauseGuardian', values?: undefined): string;
    encodeFunctionData(functionFragment: 'priceScale', values?: undefined): string;
    encodeFunctionData(functionFragment: 'quoteCollateral', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'storeFrontPriceFactor', values?: undefined): string;
    encodeFunctionData(functionFragment: 'supply', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'supplyFrom', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'supplyKink', values?: undefined): string;
    encodeFunctionData(functionFragment: 'supplyPerSecondInterestRateBase', values?: undefined): string;
    encodeFunctionData(functionFragment: 'supplyPerSecondInterestRateSlopeHigh', values?: undefined): string;
    encodeFunctionData(functionFragment: 'supplyPerSecondInterestRateSlopeLow', values?: undefined): string;
    encodeFunctionData(functionFragment: 'supplyTo', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
    encodeFunctionData(functionFragment: 'targetReserves', values?: undefined): string;
    encodeFunctionData(functionFragment: 'totalBorrow', values?: undefined): string;
    encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
    encodeFunctionData(functionFragment: 'totalsBasic', values?: undefined): string;
    encodeFunctionData(functionFragment: 'totalsCollateral', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'trackingIndexScale', values?: undefined): string;
    encodeFunctionData(functionFragment: 'transfer', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'transferAsset', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'transferAssetFrom', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'transferFrom', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'userBasic', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'userCollateral', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'userNonce', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'version', values?: undefined): string;
    encodeFunctionData(functionFragment: 'withdraw', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'withdrawFrom', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'withdrawReserves', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'withdrawTo', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: 'absorb', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'accrueAccount', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'allow', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'allowBySig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'approveThis', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'baseAccrualScale', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'baseBorrowMin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'baseIndexScale', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'baseMinForRewards', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'baseScale', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'baseToken', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'baseTokenPriceFeed', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'baseTrackingAccrued', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'baseTrackingBorrowSpeed', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'baseTrackingSupplySpeed', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'borrowBalanceOf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'borrowKink', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'borrowPerSecondInterestRateBase', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'borrowPerSecondInterestRateSlopeHigh', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'borrowPerSecondInterestRateSlopeLow', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'buyCollateral', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'collateralBalanceOf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'extensionDelegate', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'factorScale', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getAssetInfo', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getAssetInfoByAddress', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getBorrowRate', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getPrice', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getReserves', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getSupplyRate', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getUtilization', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'governor', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'hasPermission', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'initializeStorage', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isAbsorbPaused', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isAllowed', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isBorrowCollateralized', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isBuyPaused', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isLiquidatable', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isSupplyPaused', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isTransferPaused', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isWithdrawPaused', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'liquidatorPoints', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'maxAssets', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'numAssets', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'pauseGuardian', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'priceScale', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'quoteCollateral', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'storeFrontPriceFactor', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supply', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supplyFrom', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supplyKink', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supplyPerSecondInterestRateBase', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supplyPerSecondInterestRateSlopeHigh', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supplyPerSecondInterestRateSlopeLow', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supplyTo', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'targetReserves', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalBorrow', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalsBasic', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalsCollateral', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'trackingIndexScale', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferAsset', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferAssetFrom', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'userBasic', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'userCollateral', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'userNonce', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'version', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'withdrawFrom', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'withdrawReserves', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'withdrawTo', data: BytesLike): Result;
    events: {
        'AbsorbCollateral(address,address,address,uint256,uint256)': EventFragment;
        'AbsorbDebt(address,address,uint256,uint256)': EventFragment;
        'Approval(address,address,uint256)': EventFragment;
        'BuyCollateral(address,address,uint256,uint256)': EventFragment;
        'PauseAction(bool,bool,bool,bool,bool)': EventFragment;
        'Supply(address,address,uint256)': EventFragment;
        'SupplyCollateral(address,address,address,uint256)': EventFragment;
        'Transfer(address,address,uint256)': EventFragment;
        'TransferCollateral(address,address,address,uint256)': EventFragment;
        'Withdraw(address,address,uint256)': EventFragment;
        'WithdrawCollateral(address,address,address,uint256)': EventFragment;
        'WithdrawReserves(address,uint256)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'AbsorbCollateral'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'AbsorbDebt'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'BuyCollateral'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'PauseAction'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Supply'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'SupplyCollateral'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'TransferCollateral'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'WithdrawCollateral'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'WithdrawReserves'): EventFragment;
}
export interface AbsorbCollateralEventObject {
    absorber: string;
    borrower: string;
    asset: string;
    collateralAbsorbed: BigNumber;
    usdValue: BigNumber;
}
export type AbsorbCollateralEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], AbsorbCollateralEventObject>;
export type AbsorbCollateralEventFilter = TypedEventFilter<AbsorbCollateralEvent>;
export interface AbsorbDebtEventObject {
    absorber: string;
    borrower: string;
    basePaidOut: BigNumber;
    usdValue: BigNumber;
}
export type AbsorbDebtEvent = TypedEvent<[string, string, BigNumber, BigNumber], AbsorbDebtEventObject>;
export type AbsorbDebtEventFilter = TypedEventFilter<AbsorbDebtEvent>;
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    amount: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface BuyCollateralEventObject {
    buyer: string;
    asset: string;
    baseAmount: BigNumber;
    collateralAmount: BigNumber;
}
export type BuyCollateralEvent = TypedEvent<[string, string, BigNumber, BigNumber], BuyCollateralEventObject>;
export type BuyCollateralEventFilter = TypedEventFilter<BuyCollateralEvent>;
export interface PauseActionEventObject {
    supplyPaused: boolean;
    transferPaused: boolean;
    withdrawPaused: boolean;
    absorbPaused: boolean;
    buyPaused: boolean;
}
export type PauseActionEvent = TypedEvent<[boolean, boolean, boolean, boolean, boolean], PauseActionEventObject>;
export type PauseActionEventFilter = TypedEventFilter<PauseActionEvent>;
export interface SupplyEventObject {
    from: string;
    dst: string;
    amount: BigNumber;
}
export type SupplyEvent = TypedEvent<[string, string, BigNumber], SupplyEventObject>;
export type SupplyEventFilter = TypedEventFilter<SupplyEvent>;
export interface SupplyCollateralEventObject {
    from: string;
    dst: string;
    asset: string;
    amount: BigNumber;
}
export type SupplyCollateralEvent = TypedEvent<[string, string, string, BigNumber], SupplyCollateralEventObject>;
export type SupplyCollateralEventFilter = TypedEventFilter<SupplyCollateralEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    amount: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface TransferCollateralEventObject {
    from: string;
    to: string;
    asset: string;
    amount: BigNumber;
}
export type TransferCollateralEvent = TypedEvent<[string, string, string, BigNumber], TransferCollateralEventObject>;
export type TransferCollateralEventFilter = TypedEventFilter<TransferCollateralEvent>;
export interface WithdrawEventObject {
    src: string;
    to: string;
    amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[string, string, BigNumber], WithdrawEventObject>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface WithdrawCollateralEventObject {
    src: string;
    to: string;
    asset: string;
    amount: BigNumber;
}
export type WithdrawCollateralEvent = TypedEvent<[string, string, string, BigNumber], WithdrawCollateralEventObject>;
export type WithdrawCollateralEventFilter = TypedEventFilter<WithdrawCollateralEvent>;
export interface WithdrawReservesEventObject {
    to: string;
    amount: BigNumber;
}
export type WithdrawReservesEvent = TypedEvent<[string, BigNumber], WithdrawReservesEventObject>;
export type WithdrawReservesEventFilter = TypedEventFilter<WithdrawReservesEvent>;
export interface Comet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CometInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        absorb(absorber: PromiseOrValue<string>, accounts: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        accrueAccount(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allow(manager: PromiseOrValue<string>, isAllowed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allowBySig(owner: PromiseOrValue<string>, manager: PromiseOrValue<string>, isAllowed: PromiseOrValue<boolean>, nonce: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approveThis(manager: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        baseAccrualScale(overrides?: CallOverrides): Promise<[BigNumber]>;
        baseBorrowMin(overrides?: CallOverrides): Promise<[BigNumber]>;
        baseIndexScale(overrides?: CallOverrides): Promise<[BigNumber]>;
        baseMinForRewards(overrides?: CallOverrides): Promise<[BigNumber]>;
        baseScale(overrides?: CallOverrides): Promise<[BigNumber]>;
        baseToken(overrides?: CallOverrides): Promise<[string]>;
        baseTokenPriceFeed(overrides?: CallOverrides): Promise<[string]>;
        baseTrackingAccrued(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        baseTrackingBorrowSpeed(overrides?: CallOverrides): Promise<[BigNumber]>;
        baseTrackingSupplySpeed(overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowKink(overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowPerSecondInterestRateBase(overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowPerSecondInterestRateSlopeHigh(overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowPerSecondInterestRateSlopeLow(overrides?: CallOverrides): Promise<[BigNumber]>;
        buyCollateral(asset: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, baseAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collateralBalanceOf(account: PromiseOrValue<string>, asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        extensionDelegate(overrides?: CallOverrides): Promise<[string]>;
        factorScale(overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetInfo(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[CometCore.AssetInfoStructOutput]>;
        getAssetInfoByAddress(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[CometCore.AssetInfoStructOutput]>;
        getBorrowRate(utilization: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPrice(priceFeed: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReserves(overrides?: CallOverrides): Promise<[BigNumber]>;
        getSupplyRate(utilization: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUtilization(overrides?: CallOverrides): Promise<[BigNumber]>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        hasPermission(owner: PromiseOrValue<string>, manager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        initializeStorage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isAbsorbPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isAllowed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isBorrowCollateralized(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isBuyPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isLiquidatable(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isSupplyPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isTransferPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isWithdrawPaused(overrides?: CallOverrides): Promise<[boolean]>;
        liquidatorPoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            number
        ] & {
            numAbsorbs: number;
            numAbsorbed: BigNumber;
            approxSpend: BigNumber;
            _reserved: number;
        }>;
        maxAssets(overrides?: CallOverrides): Promise<[number]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        numAssets(overrides?: CallOverrides): Promise<[number]>;
        pause(supplyPaused: PromiseOrValue<boolean>, transferPaused: PromiseOrValue<boolean>, withdrawPaused: PromiseOrValue<boolean>, absorbPaused: PromiseOrValue<boolean>, buyPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pauseGuardian(overrides?: CallOverrides): Promise<[string]>;
        priceScale(overrides?: CallOverrides): Promise<[BigNumber]>;
        quoteCollateral(asset: PromiseOrValue<string>, baseAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        storeFrontPriceFactor(overrides?: CallOverrides): Promise<[BigNumber]>;
        supply(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supplyFrom(from: PromiseOrValue<string>, dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supplyKink(overrides?: CallOverrides): Promise<[BigNumber]>;
        supplyPerSecondInterestRateBase(overrides?: CallOverrides): Promise<[BigNumber]>;
        supplyPerSecondInterestRateSlopeHigh(overrides?: CallOverrides): Promise<[BigNumber]>;
        supplyPerSecondInterestRateSlopeLow(overrides?: CallOverrides): Promise<[BigNumber]>;
        supplyTo(dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        targetReserves(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalBorrow(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalsBasic(overrides?: CallOverrides): Promise<[CometStorage.TotalsBasicStructOutput]>;
        totalsCollateral(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            totalSupplyAsset: BigNumber;
            _reserved: BigNumber;
        }>;
        trackingIndexScale(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferAsset(dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferAssetFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        userBasic(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            number
        ] & {
            principal: BigNumber;
            baseTrackingIndex: BigNumber;
            baseTrackingAccrued: BigNumber;
            assetsIn: number;
            _reserved: number;
        }>;
        userCollateral(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            balance: BigNumber;
            _reserved: BigNumber;
        }>;
        userNonce(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        version(overrides?: CallOverrides): Promise<[string]>;
        withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawFrom(src: PromiseOrValue<string>, to: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawReserves(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawTo(to: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    absorb(absorber: PromiseOrValue<string>, accounts: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    accrueAccount(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allow(manager: PromiseOrValue<string>, isAllowed: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allowBySig(owner: PromiseOrValue<string>, manager: PromiseOrValue<string>, isAllowed: PromiseOrValue<boolean>, nonce: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approveThis(manager: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    baseAccrualScale(overrides?: CallOverrides): Promise<BigNumber>;
    baseBorrowMin(overrides?: CallOverrides): Promise<BigNumber>;
    baseIndexScale(overrides?: CallOverrides): Promise<BigNumber>;
    baseMinForRewards(overrides?: CallOverrides): Promise<BigNumber>;
    baseScale(overrides?: CallOverrides): Promise<BigNumber>;
    baseToken(overrides?: CallOverrides): Promise<string>;
    baseTokenPriceFeed(overrides?: CallOverrides): Promise<string>;
    baseTrackingAccrued(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    baseTrackingBorrowSpeed(overrides?: CallOverrides): Promise<BigNumber>;
    baseTrackingSupplySpeed(overrides?: CallOverrides): Promise<BigNumber>;
    borrowBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    borrowKink(overrides?: CallOverrides): Promise<BigNumber>;
    borrowPerSecondInterestRateBase(overrides?: CallOverrides): Promise<BigNumber>;
    borrowPerSecondInterestRateSlopeHigh(overrides?: CallOverrides): Promise<BigNumber>;
    borrowPerSecondInterestRateSlopeLow(overrides?: CallOverrides): Promise<BigNumber>;
    buyCollateral(asset: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, baseAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collateralBalanceOf(account: PromiseOrValue<string>, asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    extensionDelegate(overrides?: CallOverrides): Promise<string>;
    factorScale(overrides?: CallOverrides): Promise<BigNumber>;
    getAssetInfo(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<CometCore.AssetInfoStructOutput>;
    getAssetInfoByAddress(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<CometCore.AssetInfoStructOutput>;
    getBorrowRate(utilization: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getPrice(priceFeed: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getReserves(overrides?: CallOverrides): Promise<BigNumber>;
    getSupplyRate(utilization: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getUtilization(overrides?: CallOverrides): Promise<BigNumber>;
    governor(overrides?: CallOverrides): Promise<string>;
    hasPermission(owner: PromiseOrValue<string>, manager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    initializeStorage(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isAbsorbPaused(overrides?: CallOverrides): Promise<boolean>;
    isAllowed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isBorrowCollateralized(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isBuyPaused(overrides?: CallOverrides): Promise<boolean>;
    isLiquidatable(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isSupplyPaused(overrides?: CallOverrides): Promise<boolean>;
    isTransferPaused(overrides?: CallOverrides): Promise<boolean>;
    isWithdrawPaused(overrides?: CallOverrides): Promise<boolean>;
    liquidatorPoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        number,
        BigNumber,
        BigNumber,
        number
    ] & {
        numAbsorbs: number;
        numAbsorbed: BigNumber;
        approxSpend: BigNumber;
        _reserved: number;
    }>;
    maxAssets(overrides?: CallOverrides): Promise<number>;
    name(overrides?: CallOverrides): Promise<string>;
    numAssets(overrides?: CallOverrides): Promise<number>;
    pause(supplyPaused: PromiseOrValue<boolean>, transferPaused: PromiseOrValue<boolean>, withdrawPaused: PromiseOrValue<boolean>, absorbPaused: PromiseOrValue<boolean>, buyPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pauseGuardian(overrides?: CallOverrides): Promise<string>;
    priceScale(overrides?: CallOverrides): Promise<BigNumber>;
    quoteCollateral(asset: PromiseOrValue<string>, baseAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    storeFrontPriceFactor(overrides?: CallOverrides): Promise<BigNumber>;
    supply(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supplyFrom(from: PromiseOrValue<string>, dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supplyKink(overrides?: CallOverrides): Promise<BigNumber>;
    supplyPerSecondInterestRateBase(overrides?: CallOverrides): Promise<BigNumber>;
    supplyPerSecondInterestRateSlopeHigh(overrides?: CallOverrides): Promise<BigNumber>;
    supplyPerSecondInterestRateSlopeLow(overrides?: CallOverrides): Promise<BigNumber>;
    supplyTo(dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    targetReserves(overrides?: CallOverrides): Promise<BigNumber>;
    totalBorrow(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    totalsBasic(overrides?: CallOverrides): Promise<CometStorage.TotalsBasicStructOutput>;
    totalsCollateral(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        totalSupplyAsset: BigNumber;
        _reserved: BigNumber;
    }>;
    trackingIndexScale(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferAsset(dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferAssetFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    userBasic(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        principal: BigNumber;
        baseTrackingIndex: BigNumber;
        baseTrackingAccrued: BigNumber;
        assetsIn: number;
        _reserved: number;
    }>;
    userCollateral(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        balance: BigNumber;
        _reserved: BigNumber;
    }>;
    userNonce(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    version(overrides?: CallOverrides): Promise<string>;
    withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawFrom(src: PromiseOrValue<string>, to: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawReserves(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawTo(to: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        absorb(absorber: PromiseOrValue<string>, accounts: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        accrueAccount(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        allow(manager: PromiseOrValue<string>, isAllowed: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        allowBySig(owner: PromiseOrValue<string>, manager: PromiseOrValue<string>, isAllowed: PromiseOrValue<boolean>, nonce: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        approveThis(manager: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        baseAccrualScale(overrides?: CallOverrides): Promise<BigNumber>;
        baseBorrowMin(overrides?: CallOverrides): Promise<BigNumber>;
        baseIndexScale(overrides?: CallOverrides): Promise<BigNumber>;
        baseMinForRewards(overrides?: CallOverrides): Promise<BigNumber>;
        baseScale(overrides?: CallOverrides): Promise<BigNumber>;
        baseToken(overrides?: CallOverrides): Promise<string>;
        baseTokenPriceFeed(overrides?: CallOverrides): Promise<string>;
        baseTrackingAccrued(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        baseTrackingBorrowSpeed(overrides?: CallOverrides): Promise<BigNumber>;
        baseTrackingSupplySpeed(overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        borrowKink(overrides?: CallOverrides): Promise<BigNumber>;
        borrowPerSecondInterestRateBase(overrides?: CallOverrides): Promise<BigNumber>;
        borrowPerSecondInterestRateSlopeHigh(overrides?: CallOverrides): Promise<BigNumber>;
        borrowPerSecondInterestRateSlopeLow(overrides?: CallOverrides): Promise<BigNumber>;
        buyCollateral(asset: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, baseAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        collateralBalanceOf(account: PromiseOrValue<string>, asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        extensionDelegate(overrides?: CallOverrides): Promise<string>;
        factorScale(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetInfo(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<CometCore.AssetInfoStructOutput>;
        getAssetInfoByAddress(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<CometCore.AssetInfoStructOutput>;
        getBorrowRate(utilization: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPrice(priceFeed: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyRate(utilization: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUtilization(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<string>;
        hasPermission(owner: PromiseOrValue<string>, manager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        initializeStorage(overrides?: CallOverrides): Promise<void>;
        isAbsorbPaused(overrides?: CallOverrides): Promise<boolean>;
        isAllowed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isBorrowCollateralized(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isBuyPaused(overrides?: CallOverrides): Promise<boolean>;
        isLiquidatable(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isSupplyPaused(overrides?: CallOverrides): Promise<boolean>;
        isTransferPaused(overrides?: CallOverrides): Promise<boolean>;
        isWithdrawPaused(overrides?: CallOverrides): Promise<boolean>;
        liquidatorPoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            number
        ] & {
            numAbsorbs: number;
            numAbsorbed: BigNumber;
            approxSpend: BigNumber;
            _reserved: number;
        }>;
        maxAssets(overrides?: CallOverrides): Promise<number>;
        name(overrides?: CallOverrides): Promise<string>;
        numAssets(overrides?: CallOverrides): Promise<number>;
        pause(supplyPaused: PromiseOrValue<boolean>, transferPaused: PromiseOrValue<boolean>, withdrawPaused: PromiseOrValue<boolean>, absorbPaused: PromiseOrValue<boolean>, buyPaused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        pauseGuardian(overrides?: CallOverrides): Promise<string>;
        priceScale(overrides?: CallOverrides): Promise<BigNumber>;
        quoteCollateral(asset: PromiseOrValue<string>, baseAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        storeFrontPriceFactor(overrides?: CallOverrides): Promise<BigNumber>;
        supply(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        supplyFrom(from: PromiseOrValue<string>, dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        supplyKink(overrides?: CallOverrides): Promise<BigNumber>;
        supplyPerSecondInterestRateBase(overrides?: CallOverrides): Promise<BigNumber>;
        supplyPerSecondInterestRateSlopeHigh(overrides?: CallOverrides): Promise<BigNumber>;
        supplyPerSecondInterestRateSlopeLow(overrides?: CallOverrides): Promise<BigNumber>;
        supplyTo(dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        targetReserves(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrow(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalsBasic(overrides?: CallOverrides): Promise<CometStorage.TotalsBasicStructOutput>;
        totalsCollateral(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            totalSupplyAsset: BigNumber;
            _reserved: BigNumber;
        }>;
        trackingIndexScale(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferAsset(dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        transferAssetFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        userBasic(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            number
        ] & {
            principal: BigNumber;
            baseTrackingIndex: BigNumber;
            baseTrackingAccrued: BigNumber;
            assetsIn: number;
            _reserved: number;
        }>;
        userCollateral(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            balance: BigNumber;
            _reserved: BigNumber;
        }>;
        userNonce(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<string>;
        withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawFrom(src: PromiseOrValue<string>, to: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawReserves(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawTo(to: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        'AbsorbCollateral(address,address,address,uint256,uint256)'(absorber?: PromiseOrValue<string> | null, borrower?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, collateralAbsorbed?: null, usdValue?: null): AbsorbCollateralEventFilter;
        AbsorbCollateral(absorber?: PromiseOrValue<string> | null, borrower?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, collateralAbsorbed?: null, usdValue?: null): AbsorbCollateralEventFilter;
        'AbsorbDebt(address,address,uint256,uint256)'(absorber?: PromiseOrValue<string> | null, borrower?: PromiseOrValue<string> | null, basePaidOut?: null, usdValue?: null): AbsorbDebtEventFilter;
        AbsorbDebt(absorber?: PromiseOrValue<string> | null, borrower?: PromiseOrValue<string> | null, basePaidOut?: null, usdValue?: null): AbsorbDebtEventFilter;
        'Approval(address,address,uint256)'(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, amount?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, amount?: null): ApprovalEventFilter;
        'BuyCollateral(address,address,uint256,uint256)'(buyer?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, baseAmount?: null, collateralAmount?: null): BuyCollateralEventFilter;
        BuyCollateral(buyer?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, baseAmount?: null, collateralAmount?: null): BuyCollateralEventFilter;
        'PauseAction(bool,bool,bool,bool,bool)'(supplyPaused?: null, transferPaused?: null, withdrawPaused?: null, absorbPaused?: null, buyPaused?: null): PauseActionEventFilter;
        PauseAction(supplyPaused?: null, transferPaused?: null, withdrawPaused?: null, absorbPaused?: null, buyPaused?: null): PauseActionEventFilter;
        'Supply(address,address,uint256)'(from?: PromiseOrValue<string> | null, dst?: PromiseOrValue<string> | null, amount?: null): SupplyEventFilter;
        Supply(from?: PromiseOrValue<string> | null, dst?: PromiseOrValue<string> | null, amount?: null): SupplyEventFilter;
        'SupplyCollateral(address,address,address,uint256)'(from?: PromiseOrValue<string> | null, dst?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, amount?: null): SupplyCollateralEventFilter;
        SupplyCollateral(from?: PromiseOrValue<string> | null, dst?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, amount?: null): SupplyCollateralEventFilter;
        'Transfer(address,address,uint256)'(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): TransferEventFilter;
        'TransferCollateral(address,address,address,uint256)'(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, amount?: null): TransferCollateralEventFilter;
        TransferCollateral(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, amount?: null): TransferCollateralEventFilter;
        'Withdraw(address,address,uint256)'(src?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): WithdrawEventFilter;
        Withdraw(src?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): WithdrawEventFilter;
        'WithdrawCollateral(address,address,address,uint256)'(src?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, amount?: null): WithdrawCollateralEventFilter;
        WithdrawCollateral(src?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, amount?: null): WithdrawCollateralEventFilter;
        'WithdrawReserves(address,uint256)'(to?: PromiseOrValue<string> | null, amount?: null): WithdrawReservesEventFilter;
        WithdrawReserves(to?: PromiseOrValue<string> | null, amount?: null): WithdrawReservesEventFilter;
    };
    estimateGas: {
        absorb(absorber: PromiseOrValue<string>, accounts: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        accrueAccount(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allow(manager: PromiseOrValue<string>, isAllowed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allowBySig(owner: PromiseOrValue<string>, manager: PromiseOrValue<string>, isAllowed: PromiseOrValue<boolean>, nonce: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approveThis(manager: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        baseAccrualScale(overrides?: CallOverrides): Promise<BigNumber>;
        baseBorrowMin(overrides?: CallOverrides): Promise<BigNumber>;
        baseIndexScale(overrides?: CallOverrides): Promise<BigNumber>;
        baseMinForRewards(overrides?: CallOverrides): Promise<BigNumber>;
        baseScale(overrides?: CallOverrides): Promise<BigNumber>;
        baseToken(overrides?: CallOverrides): Promise<BigNumber>;
        baseTokenPriceFeed(overrides?: CallOverrides): Promise<BigNumber>;
        baseTrackingAccrued(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        baseTrackingBorrowSpeed(overrides?: CallOverrides): Promise<BigNumber>;
        baseTrackingSupplySpeed(overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        borrowKink(overrides?: CallOverrides): Promise<BigNumber>;
        borrowPerSecondInterestRateBase(overrides?: CallOverrides): Promise<BigNumber>;
        borrowPerSecondInterestRateSlopeHigh(overrides?: CallOverrides): Promise<BigNumber>;
        borrowPerSecondInterestRateSlopeLow(overrides?: CallOverrides): Promise<BigNumber>;
        buyCollateral(asset: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, baseAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collateralBalanceOf(account: PromiseOrValue<string>, asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        extensionDelegate(overrides?: CallOverrides): Promise<BigNumber>;
        factorScale(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetInfo(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetInfoByAddress(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowRate(utilization: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPrice(priceFeed: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyRate(utilization: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUtilization(overrides?: CallOverrides): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        hasPermission(owner: PromiseOrValue<string>, manager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initializeStorage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isAbsorbPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isAllowed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isBorrowCollateralized(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isBuyPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isLiquidatable(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isSupplyPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isTransferPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isWithdrawPaused(overrides?: CallOverrides): Promise<BigNumber>;
        liquidatorPoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxAssets(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        numAssets(overrides?: CallOverrides): Promise<BigNumber>;
        pause(supplyPaused: PromiseOrValue<boolean>, transferPaused: PromiseOrValue<boolean>, withdrawPaused: PromiseOrValue<boolean>, absorbPaused: PromiseOrValue<boolean>, buyPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pauseGuardian(overrides?: CallOverrides): Promise<BigNumber>;
        priceScale(overrides?: CallOverrides): Promise<BigNumber>;
        quoteCollateral(asset: PromiseOrValue<string>, baseAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        storeFrontPriceFactor(overrides?: CallOverrides): Promise<BigNumber>;
        supply(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supplyFrom(from: PromiseOrValue<string>, dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supplyKink(overrides?: CallOverrides): Promise<BigNumber>;
        supplyPerSecondInterestRateBase(overrides?: CallOverrides): Promise<BigNumber>;
        supplyPerSecondInterestRateSlopeHigh(overrides?: CallOverrides): Promise<BigNumber>;
        supplyPerSecondInterestRateSlopeLow(overrides?: CallOverrides): Promise<BigNumber>;
        supplyTo(dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        targetReserves(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrow(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalsBasic(overrides?: CallOverrides): Promise<BigNumber>;
        totalsCollateral(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        trackingIndexScale(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferAsset(dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferAssetFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        userBasic(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        userCollateral(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        userNonce(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawFrom(src: PromiseOrValue<string>, to: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawReserves(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawTo(to: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        absorb(absorber: PromiseOrValue<string>, accounts: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        accrueAccount(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allow(manager: PromiseOrValue<string>, isAllowed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allowBySig(owner: PromiseOrValue<string>, manager: PromiseOrValue<string>, isAllowed: PromiseOrValue<boolean>, nonce: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approveThis(manager: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseAccrualScale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseBorrowMin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseIndexScale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseMinForRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseScale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseTokenPriceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseTrackingAccrued(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseTrackingBorrowSpeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseTrackingSupplySpeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowKink(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowPerSecondInterestRateBase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowPerSecondInterestRateSlopeHigh(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowPerSecondInterestRateSlopeLow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyCollateral(asset: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, baseAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collateralBalanceOf(account: PromiseOrValue<string>, asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extensionDelegate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factorScale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetInfo(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetInfoByAddress(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBorrowRate(utilization: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrice(priceFeed: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyRate(utilization: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUtilization(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasPermission(owner: PromiseOrValue<string>, manager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializeStorage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isAbsorbPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAllowed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBorrowCollateralized(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBuyPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isLiquidatable(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSupplyPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTransferPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isWithdrawPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidatorPoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(supplyPaused: PromiseOrValue<boolean>, transferPaused: PromiseOrValue<boolean>, withdrawPaused: PromiseOrValue<boolean>, absorbPaused: PromiseOrValue<boolean>, buyPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pauseGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceScale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteCollateral(asset: PromiseOrValue<string>, baseAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        storeFrontPriceFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supply(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supplyFrom(from: PromiseOrValue<string>, dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supplyKink(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyPerSecondInterestRateBase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyPerSecondInterestRateSlopeHigh(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyPerSecondInterestRateSlopeLow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyTo(dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBorrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalsBasic(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalsCollateral(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        trackingIndexScale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferAsset(dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferAssetFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        userBasic(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userCollateral(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userNonce(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawFrom(src: PromiseOrValue<string>, to: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawReserves(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTo(to: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
