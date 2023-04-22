import * as api from '@furucombo/composable-router-api';
import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
import { ethers, TypedDataDomain } from 'ethers';
import { TransactionRequest } from 'ethers/src.ts/providers/provider';
import { PermitSingleData } from '@uniswap/permit2-sdk';
import { PermitData } from "@uniswap/permit2-sdk/dist/domain";

//set up wallet
const privateKey = '8f1841d8559ece81894165d0d0e7de45680324c845e1f3e2deb19527c1700f47';
const provider = ethers.getDefaultProvider('https://ethtaipei-node.furucombo.app/node');
const signer = new ethers.Wallet(privateKey, provider);

// Tokens Used:
const ETH = {
  chainId: 1,
  address: '0x0000000000000000000000000000000000000000',
  decimals: 18,
  symbol: 'ETH',
  name: 'Ethereum',
};

const USDC = {
  chainId: 1,
  address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  decimals: 6,
  symbol: 'USDC',
  name: 'USD Coin',
};

const aEthUSDC = {
  chainId: 1,
  address: '0x98C23E9d8f34FEFb1B7BD6a91B7FF122F4e16F5c',
  decimals: 6,
  symbol: 'aEthUSDC',
  name: 'Aave Ethereum USDC',
};

const WBTC = {
  chainId: 1,
  address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  decimals: 8,
  symbol: 'WBTC',
  name: 'Wrapped BTC',
};

const aEthWBTC = {
  chainId: 1,
  address: '0x5Ee5bf7ae06D1Be5997A1A72006FE6C607eC6DE8',
  decimals: 8,
  symbol: 'aEthWBTC',
  name: 'Aave Ethereum WBTC',
};

async function my1() {
  // Description:
  // Suppose a user (0xd771CEd1dE3b0fA879E8f688ECe1Cfb87bf3432e) has 1000 USDC in Ethereum
  // and wants to earn interest by supplying in the WBTC pool on the Aave V3 lending platform.
  // This can be done through the following steps:

  const chainId = common.ChainId.mainnet;
  // Step 1.
  // Use `api.protocols.uniswapv3.getSwapTokenQuotation` to get a quote for
  // exchanging 1000 USDC to WBTC on Uniswap V3.
  const swapQuotation = await api.protocols.uniswapv3.getSwapTokenQuotation(chainId, {
    input: { token: USDC, amount: '1000' },
    tokenOut: WBTC,
  });

  // Step 2.
  // Use `api.protocols.uniswapv3.newSwapTokenLogic` to build the swap Logic data.
  const swapLogic = api.protocols.uniswapv3.newSwapTokenLogic(swapQuotation);

  // Step 3.
  // Use `api.protocols.aavev3.getSupplyQuotation` to get a quote for supplying WBTC, which will essentially
  // provide a 1:1 aEthWBTC.
  const supplyQuotation = await api.protocols.aavev3.getSupplyQuotation(chainId, {
    input: swapQuotation.output,
    tokenOut: aEthWBTC,
  });

  // Step 4.
  // Use `api.protocols.aavev3.newSupplyLogic` to build the supply Logic data.
  const supplyLogic = api.protocols.aavev3.newSupplyLogic(supplyQuotation);

  // Step 5.
  // Next, prepare the Router Data, which will basically include chainId, account, logics, and slippage data.
  // Additionally, slippage is optional and defaults to 1%. If customization is desired, the type should be a number,
  // and the value should be in Basis Points, where 1 Basis Point equals 0.01%.
  const routerData: api.RouterData = {
    chainId,
    account: '0xd771CEd1dE3b0fA879E8f688ECe1Cfb87bf3432e',
    logics: [swapLogic, supplyLogic],
    slippage: 300, // 3%
  };

  // Step 6.
  // Next, use `api.estimateRouterData` to estimate how much funds will be spent (funds) and
  // how many balances will be obtained (balances) from this transaction.
  // It will also identify any approvals that the user needs to execute (approvals) before the transaction
  // and whether there is any permit2 data that the user needs to sign before proceeding (permitData).
  const estimateResult = await api.estimateRouterData(routerData);
  expect(estimateResult).to.include.all.keys('funds', 'balances', 'approvals', 'permitData');
  expect(estimateResult.funds).to.have.lengthOf(1);
  expect(estimateResult.funds.get(USDC).amount).to.be.eq('1000');
  expect(estimateResult.balances).to.have.lengthOf(1);
  expect(estimateResult.balances.get(aEthWBTC).amount).to.be.eq(supplyQuotation.output.amount);
  expect(estimateResult.approvals).to.have.lengthOf(1);

  // Step 7.
  // If there is any permit2 data that needs to be signed, the signed permit data and signature
  // should be added to the original Router Data.
  const permitSig =
    '0xbb8d0cf3e494c2ed4dc1057ee31c90cab5387b8a606019cc32a6d12f714303df183b1b0cd7a1114bd952a4c533ac18606056dda61f922e030967df0836cf76f91c'; // for example
  routerData.permitData = estimateResult.permitData;
  routerData.permitSig = permitSig;

  // Step 8.
  // Next, use `api.buildRouterTransactionRequest` to get the transaction request to be sent,
  // which will essentially include the Router contract address (to), transaction data (data),
  // and ETH to be carried in the transaction (value).
  const transactionRequest = await api.buildRouterTransactionRequest(routerData);
  expect(transactionRequest).to.include.all.keys('to', 'data', 'value');

  // const gg = 'hello world';
  // console.log(gg);
  console.log(transactionRequest);
}

async function test_eth_swap2_usdc() {
  const chainId = common.ChainId.mainnet;

  // Step 1.
  // Use `api.protocols.uniswapv3.getSwapTokenQuotation` to get a quote for
  // exchanging 1000 USDC to WBTC on Uniswap V3.
  const swapQuotation = await api.protocols.uniswapv3.getSwapTokenQuotation(chainId, {
    input: { token: ETH, amount: '1' }, //注意這個數值的單位是human單位!
    tokenOut: USDC,
  });

  // Step 2.
  // Use `api.protocols.uniswapv3.newSwapTokenLogic` to build the swap Logic data.
  const swapLogic = api.protocols.uniswapv3.newSwapTokenLogic(swapQuotation);

  // Step 5.
  // Next, prepare the Router Data, which will basically include chainId, account, logics, and slippage data.
  // Additionally, slippage is optional and defaults to 1%. If customization is desired, the type should be a number,
  // and the value should be in Basis Points, where 1 Basis Point equals 0.01%.
  const routerData: api.RouterData = {
    chainId,
    account: signer.address,
    logics: [swapLogic],
    slippage: 300, // 3%
  };

  // Step 6.
  // Next, use `api.estimateRouterData` to estimate how much funds will be spent (funds) and
  // how many balances will be obtained (balances) from this transaction.
  // It will also identify any approvals that the user needs to execute (approvals) before the transaction
  // and whether there is any permit2 data that the user needs to sign before proceeding (permitData).
  const estimateResult = await api.estimateRouterData(routerData);
  expect(estimateResult).to.include.all.keys('funds', 'balances', 'approvals');
  expect(estimateResult.funds).to.have.lengthOf(1);
  expect(estimateResult.funds.get(ETH).amount).to.be.eq('1');
  expect(estimateResult.balances).to.have.lengthOf(1);
  expect(estimateResult.approvals).to.have.lengthOf(0);

  // // Step 7.
  // // If there is any permit2 data that needs to be signed, the signed permit data and signature
  // // should be added to the original Router Data.
  // const permitSig =
  //   '0xbb8d0cf3e494c2ed4dc1057ee31c90cab5387b8a606019cc32a6d12f714303df183b1b0cd7a1114bd952a4c533ac18606056dda61f922e030967df0836cf76f91c'; // for example
  // routerData.permitData = estimateResult.permitData;
  // routerData.permitSig = permitSig;

  // Step 8.
  // Next, use `api.buildRouterTransactionRequest` to get the transaction request to be sent,
  // which will essentially include the Router contract address (to), transaction data (data),
  // and ETH to be carried in the transaction (value).
  const transactionRequest = await api.buildRouterTransactionRequest(routerData);
  expect(transactionRequest).to.include.all.keys('to', 'data', 'value');

  // const gg = 'hello world';
  // console.log(gg);
  // console.log(transactionRequest);
  console.log(routerData);

  // console.log('sending TX...');
  console.log(`Sending TX with gasLimit ${transactionRequest.gasLimit} and value ${transactionRequest.value}...`);

  // Send a transaction
  await signer.sendTransaction(<TransactionRequest>transactionRequest).then((txObj) => {
    console.log('txHash', txObj.hash);
  });
}

async function test_usdc_swap2_eth() {
  const chainId = common.ChainId.mainnet;

  // Step 1.
  // Use `api.protocols.uniswapv3.getSwapTokenQuotation` to get a quote for
  // exchanging 1000 USDC to WBTC on Uniswap V3.
  const swapQuotation = await api.protocols.uniswapv3.getSwapTokenQuotation(chainId, {
    input: { token: USDC, amount: '100' }, //注意這個數值的單位是human單位!
    tokenOut: ETH,
  });

  // Step 2.
  // Use `api.protocols.uniswapv3.newSwapTokenLogic` to build the swap Logic data.
  const swapLogic = api.protocols.uniswapv3.newSwapTokenLogic(swapQuotation);

  // Step 5.
  // Next, prepare the Router Data, which will basically include chainId, account, logics, and slippage data.
  // Additionally, slippage is optional and defaults to 1%. If customization is desired, the type should be a number,
  // and the value should be in Basis Points, where 1 Basis Point equals 0.01%.
  const routerData: api.RouterData = {
    chainId,
    account: signer.address,
    logics: [swapLogic],
    slippage: 300, // 3%
  };

  // Step 6.
  // Next, use `api.estimateRouterData` to estimate how much funds will be spent (funds) and
  // how many balances will be obtained (balances) from this transaction.
  // It will also identify any approvals that the user needs to execute (approvals) before the transaction
  // and whether there is any permit2 data that the user needs to sign before proceeding (permitData).
  const estimateResult = await api.estimateRouterData(routerData);
  // expect(estimateResult).to.include.all.keys('funds', 'balances', 'approvals', 'permitData');
  // expect(estimateResult.funds).to.have.lengthOf(1);
  // expect(estimateResult.funds.get(USDC).amount).to.be.eq('100');
  // expect(estimateResult.balances).to.have.lengthOf(1);
  // expect(estimateResult.approvals).to.have.lengthOf(1);
  console.log(estimateResult);

  //讀取需要的permit資訊, 自動進行permit
  /* e.g.,
    permitData: {
    domain: {
      name: 'Permit2',
      chainId: 1,
      verifyingContract: '0x000000000022D473030F116dDEE9F6B43aC78BA3'
    },
    types: { PermitSingle: [Array], PermitDetails: [Array] },
    values: {
      details: [Object],
      spender: '0x3b5832c6a0868dDf9A92595DfA1ce7A86E511599',
      sigDeadline: 1682171477
    }
  }
   */
  //estimated needed approval for Permit2 to work correctly. see: https://router-docs.furucombo.app/integrate-js-sdk/estimate-router-data#step-3-approvals-optional
  for (const approval of estimateResult.approvals) {
    const tx = await signer.sendTransaction(<TransactionRequest>approval);
  }

  // // Step 7.
  // // If there is any permit2 data that needs to be signed, the signed permit data and signature
  // // should be added to the original Router Data.
  // const permitSig =
  //   '0xbb8d0cf3e494c2ed4dc1057ee31c90cab5387b8a606019cc32a6d12f714303df183b1b0cd7a1114bd952a4c533ac18606056dda61f922e030967df0836cf76f91c'; // for example
  // routerData.permitData = estimateResult.permitData;
  // routerData.permitSig = permitSig;
  // // If there is any permit2 data that needs to be signed, the signed permit data and signature
  // // should be added to the original Router Data.
  const permitData = estimateResult.permitData as PermitData;
  if (permitData != undefined) {
    //原理: 先設定allowance給 permit2 contract //然後設定給composable router, permit2的30mins使用權限 來代為操作所有操做
    const permitSig = await signer.signTypedData(
      <TypedDataDomain>permitData.domain,
      permitData.types,
      permitData.values
    );
    routerData.permitData = permitData;
    routerData.permitSig = permitSig;
  }

  // Step 8.
  // Next, use `api.buildRouterTransactionRequest` to get the transaction request to be sent,
  // which will essentially include the Router contract address (to), transaction data (data),
  // and ETH to be carried in the transaction (value).
  const transactionRequest = await api.buildRouterTransactionRequest(routerData);
  expect(transactionRequest).to.include.all.keys('to', 'data', 'value');

  // const gg = 'hello world';
  // console.log(gg);
  // console.log(transactionRequest);
  console.log(routerData);

  // console.log('sending TX...');
  console.log(`Sending TX with gasLimit ${transactionRequest.gasLimit} and value ${transactionRequest.value}...`);

  // Send a transaction
  await signer.sendTransaction(<TransactionRequest>transactionRequest).then((txObj) => {
    console.log('txHash', txObj.hash);
  });
}

// test_send_1_ether_using_etherjs
// https://ethtaipei-node.furucombo.app/tx/0x0d57ae092166c6003a5c6ff34e500f214265101abe540cab15eff0093dac00c1
async function test_send_1_ether_using_etherjs() {
  console.log('test_send_1_ether_using_etherjs() running...');

  // Create a transaction object
  const amountInEther = '1';
  const tx = {
    to: '0xA9d9895245e08E3728053c798dDac0A32C3Ab98C',
    // Convert currency unit from ether to wei
    value: ethers.parseEther(amountInEther),
  };
  // Send a transaction
  await signer.sendTransaction(tx).then((txObj) => {
    console.log('txHash', txObj.hash);
  });

  console.log('test_send_1_ether_using_etherjs() ended.');
}

async function test_supply_usdc_to_aave() {
  const chainId = common.ChainId.mainnet;

  const supplyTokenList = await api.protocols.aavev3.getSupplyTokenList(chainId);
  const withdrawTokenList = await api.protocols.aavev3.getWithdrawTokenList(chainId);
  // console.log('supply==============================');
  // console.log(supplyTokenList);
  // console.log('withdraw==============================');
  // console.log(withdrawTokenList);
  // //supply
  const tokenList = await api.protocols.aavev3.getSupplyTokenList(chainId);
  const underlyingToken = tokenList[0][0];
  const aToken = tokenList[0][1];

  const supplyQuotation = await api.protocols.aavev3.getSupplyQuotation(chainId, {
    input: {
      token: USDC,
      amount: '100',
    },
    tokenOut: aEthUSDC,
  });

  const supplyLogic = await api.protocols.aavev3.newSupplyLogic(supplyQuotation);
  // //withdraw
  // const tokenList = await api.protocols.aavev3.getWithdrawTokenList(chainId);
  // const aToken = tokenList[0][0];
  // const underlyingToken = tokenList[0][1];
  //
  // const withdrawQuotation = await api.protocols.aavev3.getWithdrawQuotation(chainId, {
  //   input: {
  //     token: aToken,
  //     amount: '10',
  //   },
  //   tokenOut: underlyingToken,
  // });
  // const withdrawLogic = await api.protocols.aavev3.newWithdrawLogic(withdrawQuotation);

  // Step 5.
  // Next, prepare the Router Data, which will basically include chainId, account, logics, and slippage data.
  // Additionally, slippage is optional and defaults to 1%. If customization is desired, the type should be a number,
  // and the value should be in Basis Points, where 1 Basis Point equals 0.01%.
  const routerData: api.RouterData = {
    chainId,
    account: signer.address,
    logics: [supplyLogic],
    slippage: 300, // 3%
  };

  // Step 6.
  // Next, use `api.estimateRouterData` to estimate how much funds will be spent (funds) and
  // how many balances will be obtained (balances) from this transaction.
  // It will also identify any approvals that the user needs to execute (approvals) before the transaction
  // and whether there is any permit2 data that the user needs to sign before proceeding (permitData).
  const estimateResult = await api.estimateRouterData(routerData);
  //若是對 UniswapV3操作才有permit的需求, 對 Aave 的話只需普通的approval
  console.log(estimateResult);

  // // Step 7.
  //estimated needed approval for Permit2 to work correctly. see: https://router-docs.furucombo.app/integrate-js-sdk/estimate-router-data#step-3-approvals-optional
  for (const approval of estimateResult.approvals) {
    const tx = await signer.sendTransaction(<TransactionRequest>approval);
  }
  // // If there is any permit2 data that needs to be signed, the signed permit data and signature
  // // should be added to the original Router Data.
  const permitData = estimateResult.permitData as PermitData;
  if (permitData != undefined) {
    //原理: 先設定allowance給 permit2 contract //然後設定給composable router, permit2的30mins使用權限 來代為操作所有操做
    const permitSig = await signer.signTypedData(<TypedDataDomain>permitData.domain, permitData.types, permitData.values);
    routerData.permitData = permitData;
    routerData.permitSig = permitSig;
  }

  // Step 8.
  // Next, use `api.buildRouterTransactionRequest` to get the transaction request to be sent,
  // which will essentially include the Router contract address (to), transaction data (data),
  // and ETH to be carried in the transaction (value).
  const transactionRequest = await api.buildRouterTransactionRequest(routerData);
  expect(transactionRequest).to.include.all.keys('to', 'data', 'value');

  // const gg = 'hello world';
  // console.log(gg);
  // console.log(transactionRequest);
  // console.log(routerData);

  // console.log('sending TX...');
  console.log(`Sending TX with gasLimit ${transactionRequest.gasLimit} and value ${transactionRequest.value}...`);

  // Send a transaction
  await signer.sendTransaction(<TransactionRequest>transactionRequest).then((txObj) => {
    console.log('txHash', txObj.hash);
  });
}

async function test_supply_n_withdraw_usdc_at_aave() {
  const chainId = common.ChainId.mainnet;

  const supplyTokenList = await api.protocols.aavev3.getSupplyTokenList(chainId);
  const withdrawTokenList = await api.protocols.aavev3.getWithdrawTokenList(chainId);
  // console.log('supply==============================');
  // console.log(supplyTokenList);
  // console.log('withdraw==============================');
  // console.log(withdrawTokenList);
  // //supply
  const tokenList = await api.protocols.aavev3.getSupplyTokenList(chainId);
  const underlyingToken = tokenList[0][0];
  const aToken = tokenList[0][1];

  const supplyQuotation = await api.protocols.aavev3.getSupplyQuotation(chainId, {
    input: {
      token: USDC,
      amount: '100',
    },
    tokenOut: aEthUSDC,
  });

  const supplyLogic = await api.protocols.aavev3.newSupplyLogic(supplyQuotation);

  //withdraw
  const withdrawQuotation = await api.protocols.aavev3.getWithdrawQuotation(chainId, {
    input: supplyQuotation.output,
    tokenOut: USDC,
  });
  const withdrawLogic = await api.protocols.aavev3.newWithdrawLogic(withdrawQuotation);

  // Step 5.
  // Next, prepare the Router Data, which will basically include chainId, account, logics, and slippage data.
  // Additionally, slippage is optional and defaults to 1%. If customization is desired, the type should be a number,
  // and the value should be in Basis Points, where 1 Basis Point equals 0.01%.
  const routerData: api.RouterData = {
    chainId,
    account: signer.address,
    logics: [supplyLogic, withdrawLogic],
    slippage: 300, // 3%
  };

  // Step 6.
  // Next, use `api.estimateRouterData` to estimate how much funds will be spent (funds) and
  // how many balances will be obtained (balances) from this transaction.
  // It will also identify any approvals that the user needs to execute (approvals) before the transaction
  // and whether there is any permit2 data that the user needs to sign before proceeding (permitData).
  const estimateResult = await api.estimateRouterData(routerData);
  //若是對 UniswapV3操作才有permit的需求, 對 Aave 的話只需普通的approval
  console.log(estimateResult);

  // // Step 7.
  //estimated needed approval for Permit2 to work correctly. see: https://router-docs.furucombo.app/integrate-js-sdk/estimate-router-data#step-3-approvals-optional
  for (const approval of estimateResult.approvals) {
    const tx = await signer.sendTransaction(<TransactionRequest>approval);
  }
  // // If there is any permit2 data that needs to be signed, the signed permit data and signature
  // // should be added to the original Router Data.
  const permitData = estimateResult.permitData as PermitData;
  if (permitData != undefined) {
    //原理: 先設定allowance給 permit2 contract //然後設定給composable router, permit2的30mins使用權限 來代為操作所有操做
    const permitSig = await signer.signTypedData(
      <TypedDataDomain>permitData.domain,
      permitData.types,
      permitData.values
    );
    routerData.permitData = permitData;
    routerData.permitSig = permitSig;
  }

  // Step 8.
  // Next, use `api.buildRouterTransactionRequest` to get the transaction request to be sent,
  // which will essentially include the Router contract address (to), transaction data (data),
  // and ETH to be carried in the transaction (value).
  const transactionRequest = await api.buildRouterTransactionRequest(routerData);
  expect(transactionRequest).to.include.all.keys('to', 'data', 'value');

  // const gg = 'hello world';
  // console.log(gg);
  // console.log(transactionRequest);
  // console.log(routerData);

  // console.log('sending TX...');
  console.log(`Sending TX with gasLimit ${transactionRequest.gasLimit} and value ${transactionRequest.value}...`);

  // Send a transaction
  await signer.sendTransaction(<TransactionRequest>transactionRequest).then((txObj) => {
    console.log('txHash', txObj.hash);
  });
}

// my1();
//test_send_1_ether_using_etherjs();
//test_eth_swap2_usdc();
// test_eth_swap2_usdc();
//test_usdc_swap2_eth();
// test_supply_usdc_to_aave();
test_supply_n_withdraw_usdc_at_aave();
