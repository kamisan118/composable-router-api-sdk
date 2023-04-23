# Furucombo DeFi Guardian
## Project Description

DeFi users should prioritize the potential risk of losing their capital over the promise of profit when participating in DeFi platforms. There is always a potential risk of losing funds due to security breaches or hacks on DeFi platforms.

So to enhance fund safety, we have developed a guardian bot that can automatically exit liquidity using Furucombo's `composable-router-api-sdk` whenever anomalies are detected on DeFi platforms by the Forta Security Bots Network. By implementing this bot, users can significantly improve the security of their funds.

## Project Details

1. Upon started, the gardian program will listen to port `8545` and wait for the Forta Security Network to send the security alerts in JSON to the program.
2. When the program receives the security alerts, it will check the alert type and the alert data, then exit the liquidity from DeFi protocols whenever predetermined condition happens.
3. The program exits the liquidity from DeFi protocols by calling the `composable-router-api-sdk` of Furucombo.


## Project Limitations

The sample code is intended to demonstrate the feasibility of listening to alerts from the Forta Security Bots Network and exit liquidity from DeFi protocols using Furucombo's `composable-router-api-sdk`.

Specifically, this code currently listen to [Forta Curated DeFi Attack Detection Bot](https://docs.forta.network/en/latest/attack-detector-bot/#alerts) (i.e., [attack-detector-feed | Forta Explorer](https://explorer.forta.network/bot/0x80ed808b586aeebe9cdd4088ea4dea0a8e322909c0e4493c993e060e89c09ed1?_gl=1*e4fx2p*_ga*MjAwMTAzODYzNS4xNjgyMTQ5ODMw*_ga_3ERDDVRGQQ*MTY4MjIwNzA0MS41LjEuMTY4MjIxMDc3Mi4wLjAuMA)
) security alert from Forta Network, in order to exit liquidity from Aave protocol whenever it's required (currently set to exit liquidity from USDC pool whenever an alert is received.


## HowTo Use

### Subscribe Webhook Alert from Forta Network
1. Go to [Aave protocol website](https://docs.aave.com/developers/v/2.0/deployed-contracts/deployed-contracts) to get all the contract deployed addresses.
2. Go to [Forta Network Subscription Page](https://app.forta.network/notifications?scopeId=agent|0x28dbedae50c1372a5ed058ea0ec9766c5144c926ce6e92e0b200806bd1f42741&_gl=1*e3cwbv*_ga*MjAwMTAzODYzNS4xNjgyMTQ5ODMw*_ga_3ERDDVRGQQ*MTY4MjIwNzA0MS41LjEuMTY4MjIwOTc4NC4wLjAuMA..) to subscribe the "Forta Curated DeFi Security Bots" webhook alert from Forta Network.

Alert sample:
```
{
	"Alert": "Attack detector identified an EOA with behavior consistent with an attack",
	"Alert id": "0xf94998ed49ff3be25036a9aed011574090e9303102590ffb9caf09105ced84f3",
	"Bot ID": "0x80ed808b586aeebe9cdd4088ea4dea0a8e322909c0e4493c993e060e89c09ed1",
	"Timestamp": "Sat, 22 Apr 2023 15:39:51 GMT",
	"Description": "0x5fd7d0d6b91cc4787bcb86ca47e0bd4ea0346d34 likely involved in an attack (0x725e3f129cbfad7bf54ab5211695025e675ce3bd9202c370c4bc6cddfb1dafc7). Anomaly score: {'anomaly_score': 0.007674418604651163}",
	"Metadata": {"anomaly_score":"0.007674418604651163","anomaly_score_stage_Exploitation":"0.35","anomaly_score_stage_Preparation":"0.023255813953488372","attacker_address":"0x5fd7d0d6b91cc4787bcb86ca47e0bd4ea0346d34","involved_addresses_1":"0xe4cb6f1f4c439ea668707e51e6bb6f88b91df6e0","involved_addresses_10":"0xd8e11d5e119b1b5dcfe3cb7957a783b66d50d67c","involved_addresses_11":"0x6f6cf280b87518a7bdb32b38d2fabed0886c97de","involved_addresses_12":"0xbc6044f4a1688d8b8596a9f7d4659e09985eebe6","involved_addresses_13":"0x5fd7d0d6b91cc4787bcb86ca47e0bd4ea0346d34","involved_addresses_14":"0xf5541ea3ee034d8f7c397bf77556f07e7562df9a","involved_addresses_15":"0x58f616504705b9236001e3565eda3c527fed507b","involved_addresses_16":"0x09385a960a2e0b6b4516d341534da92cb2a50085","involved_addresses_17":"0x0000000000000000000000000000000000001010","involved_addresses_18":"0x9d245fdef1164a4d4014c2570fd88855ea9545d0","involved_addresses_19":"0xf5b588306867992201fc78de045bce01be6ea2fd","involved_addresses_2":"0x8fac8547cdd4c068a2fafc527d55446d6d949b6a","involved_addresses_20":"0x4f8ecb190b9ef36113127d97c7f9300875b6563f","involved_addresses_21":"0x9ead03f7136fc6b4bdb0780b00a1c14ae5a8b6d0","involved_addresses_22":"0x5e01934cb828cb72a9098c894f10c2ca26184b0f","involved_addresses_23":"0x5df06caa38ed2c60a49174176fc745c532426fb4","involved_addresses_3":"0x8a5b09b97b08f67b7d8b9adab071a6cb237bbf5a","involved_addresses_4":"0xec5b7075f581d46983ebe2be6bab0f58bf1e8c4b","involved_addresses_5":"0xeedba2484aaf940f37cd3cd21a5d7c4a7dafbfc0","involved_addresses_6":"0xa858f95c50240a6a28e5cd323869ce77ee7677bd","involved_addresses_7":"0x1d254aef685e9d6457947ceb972659ef0c0243a3","involved_addresses_8":"0x1bb775ef0ae0f5f7f85b78f2c12082e40a885d2f","involved_addresses_9":"0x794e44d1334a56fea7f4df12633b88820d0c5888","involved_alerts_0":"0x3858be37e155f84e8e0d6212db1b47d4e83b1d41e8a2bebecb902651ed1125d6,NETHFORTA-1,0xc461afb2acdfdf103449b6267c7f6ec0d3dac9cbf6c6fbb19d4bcabb899c2173","involved_alerts_1":"0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99,SUSPICIOUS-CONTRACT-CREATION,0x9dec6440c29b5d270d1398c4bbcec44c79150de9a5c34012ae047c6a0c4a3426","involved_alerts_10":"0x9aaa5cd64000e8ba4fa2718a467b90055b70815d60351914cc1cbe89fe1c404c,SUSPICIOUS-CONTRACT-CREATION,0xaac4fa0cfb1e0a4ea40e76ee49fa1b72f271ff02543129189ea1d23eddd4a3b9","involved_alerts_11":"0x3858be37e155f84e8e0d6212db1b47d4e83b1d41e8a2bebecb902651ed1125d6,NETHFORTA-1,0x5e4e6066df5c04265e9c05e76d4041f0430878d408a8372fa27df16f4c243a26","involved_alerts_12":"0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99,SUSPICIOUS-CONTRACT-CREATION,0xfd5d1170faee199c7a706e20c3bac238c8dd5ed50f560965919e4dededbe9a7b","involved_alerts_13":"0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99,SUSPICIOUS-CONTRACT-CREATION,0x9d6bdee2b0ae8d9b694335563d270db15df59805003932b8d8e9f8e73e21d027","involved_alerts_14":"0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99,SUSPICIOUS-CONTRACT-CREATION,0xf5c3ce805a0d839279267aaa817881e859e88832ee78f8ddfabc00ecc65e41ea","involved_alerts_15":"0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99,SUSPICIOUS-CONTRACT-CREATION,0xa455b4a923db75f450a7632f4cbb5614d3a2e9199dbb89ff9dc8a26090b8fee2","involved_alerts_16":"0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99,SUSPICIOUS-CONTRACT-CREATION,0x725e3f129cbfad7bf54ab5211695025e675ce3bd9202c370c4bc6cddfb1dafc7","involved_alerts_2":"0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99,SUSPICIOUS-CONTRACT-CREATION,0xffd08cfed09147a0841f27c19a6a6ea5f8602e0aaaf0da4a35ec990194bf696a","involved_alerts_3":"0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99,SUSPICIOUS-CONTRACT-CREATION,0x8877e249e1a4129fc2a5e8ce9487c601d50c493eed3ba82e455c7413e46271c7","involved_alerts_4":"0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99,SUSPICIOUS-CONTRACT-CREATION,0x848bf829ef2063cad3dc4dead441d1cfb006113b1e7fb38b7cdb46817090b7a4","involved_alerts_5":"0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99,SUSPICIOUS-CONTRACT-CREATION,0x4b59b41a7c9ce48f9dc75d2b34896ccbb0473bc2f7281f54e918ab3fef8d995b","involved_alerts_6":"0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99,SUSPICIOUS-CONTRACT-CREATION,0xf7ad99302d2d9c094efd5b5e2b135cb8bacd3543cc07e82d31dd19660f755ccc","involved_alerts_7":"0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99,SUSPICIOUS-CONTRACT-CREATION,0x4040c04dde9665be8f14ca131c553ef6db7c1ead49c56f20c0990ec53c77abb2","involved_alerts_8":"0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99,SUSPICIOUS-CONTRACT-CREATION,0x45caf7db450e4221ce26c94b0d26a8723ec467aabf2c8ff1f497c3a16b4d960a","involved_alerts_9":"0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99,SUSPICIOUS-CONTRACT-CREATION,0xaea3912763b53740b3df42f8537ed7a992124bf4b2f3c1a0438732609c15380d"}
}
```

3. During the Forta Alert Subscription mentioned above, you will have to add the Aave protocol contract addresses to the "Addresses to watch" field, and the url to the http url that want this program to listen to. Please be aware that the url should be publicly accessible, and the port should be `8545` (e.g., http://mydomain:8545/webhook).

### Running The Prorgram

```bash
yarn install
yarn add ethers
yarn add express @types/express

install ts-node:
npm install -g ts-node

run code:
ts-node pmli/main.ts
```

## Final Remarks
This prototype is intended for everyone.

Currently, this project is a prototype, and it is not intended for production use.

You are welcome to adjust the logic of the sample code to accommodate alerts triggered by Forta Security Bots Network, and manage the exit liquidity from DeFi protocols through any exit paths that can be constructed using Furucombo's `composable-router-api-sdk`.  