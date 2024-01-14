/*
 *
 * Example (Litecoin Cash)
 *
 */

// Litecoin Cash Configuration File
// https://blinkhash.com/docs/foundation/configurations
// Consult the above link if you have any questions

// Main Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
const config = {};
config.enabled = true;
config.name = 'Pool-Nervos-Network';
config.coins = ['Nervos Network'];

// Banning Configuration
config.banning = {};
config.banning.time = 600;
config.banning.invalidPercent = 50;
config.banning.checkThreshold = 500;
config.banning.purgeInterval = 300;

// Port Configuration
config.ports = [];

const ports1 = {};
ports1.port = [port];
ports1.enabled = true;
ports1.type = [type];
ports1.tls = false;
ports1.difficulty = {};
ports1.difficulty.initial = [initial];
ports1.difficulty.minimum = [minimum];
ports1.difficulty.maximum = [maximum];
ports1.difficulty.targetTime = 15;
ports1.difficulty.retargetTime = 90;
ports1.difficulty.variance = 0.3;
config.ports.push(ports1);

// P2P Configuration
config.p2p = {};
config.p2p.enabled = false;
config.p2p.host = '[host]';
config.p2p.port = 62458;

// Statistics Configuration
config.statistics = {};
config.statistics.blocksInterval = 20; // s;
config.statistics.hashrateInterval = 20; // s;
config.statistics.historicalInterval = 1800; // s;
config.statistics.refreshInterval = 20; // s;
config.statistics.paymentsInterval = 20; // s;
config.statistics.hashrateWindow = 300; // s;
config.statistics.historicalWindow = 86400; // s;

// Settings Configuration
config.settings = {};
config.settings.blockRefreshInterval = 1000; // ms;
config.settings.connectionTimeout = 600; // s;
config.settings.jobRebroadcastTimeout = 60; // s;
config.settings.tcpProxyProtocol = false;

// Primary Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
config.primary = {};
config.primary.address = '[address]';

// Coin Configuration
config.primary.coin = {};
config.primary.coin.name = 'Nervos Network';
config.primary.coin.symbol = 'CKB';
config.primary.coin.asicBoost = false;
config.primary.coin.getinfo = false;
config.primary.coin.hybrid = false;
config.primary.coin.parameters = {};
config.primary.coin.segwit = true;
config.primary.coin.version = 1;

// Algorithm Configuration
config.primary.coin.algorithms = {};
config.primary.coin.algorithms.mining = 'eaglesong';
config.primary.coin.algorithms.block = 'sha256d';
config.primary.coin.algorithms.coinbase = 'sha256d';

// Rewards Configuration
config.primary.coin.rewards = {};
config.primary.coin.rewards.type = '';
config.primary.coin.rewards.addresses = [];

// Mainnet Configuration
config.primary.coin.mainnet = {};
config.primary.coin.mainnet.bech32 = 'lcc';
config.primary.coin.mainnet.bip32 = {};
config.primary.coin.mainnet.bip32.public = Buffer.from('0488B21E', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.bip32.private = Buffer.from('0488ADE4', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.peerMagic = 'c7e4baf8';
config.primary.coin.mainnet.pubKeyHash = Buffer.from('1C', 'hex').readUInt8(0);
config.primary.coin.mainnet.scriptHash = Buffer.from('32', 'hex').readUInt8(0);
config.primary.coin.mainnet.wif = Buffer.from('B0', 'hex').readUInt8(0);
config.primary.coin.mainnet.coin = 'lcc';

// Testnet Configuration
config.primary.coin.testnet = {};
config.primary.coin.testnet.bech32 = 'tlcc';
config.primary.coin.testnet.bip32 = {};
config.primary.coin.testnet.bip32.public = Buffer.from('043587CF', 'hex').readUInt32LE(0);
config.primary.coin.testnet.bip32.private = Buffer.from('04358394', 'hex').readUInt32LE(0);
config.primary.coin.testnet.peerMagic = 'b6f5d3cf';
config.primary.coin.testnet.pubKeyHash = Buffer.from('7F', 'hex').readUInt8(0);
config.primary.coin.testnet.scriptHash = Buffer.from('3A', 'hex').readUInt8(0);
config.primary.coin.testnet.wif = Buffer.from('EF', 'hex').readUInt8(0);
config.primary.coin.testnet.coin = 'lcc';

// Daemon Configuration
config.primary.daemons = [];

const daemons1 = {};
daemons1.host = '[host]';
daemons1.port = 62457;
daemons1.username = '[username]';
daemons1.password = '[password]';
config.primary.daemons.push(daemons1);

// Payment Configuration
config.primary.payments = {};
config.primary.payments.enabled = true;
config.primary.payments.checkInterval = 20; // s;
config.primary.payments.paymentInterval = 7200; // s;
config.primary.payments.minConfirmations = 10;
config.primary.payments.minPayment = 0.005;
config.primary.payments.transactionFee = 0.04;
config.primary.payments.daemon = {};
config.primary.payments.daemon.host = '[host]';
config.primary.payments.daemon.port = 62457;
config.primary.payments.daemon.username = '[username]';
config.primary.payments.daemon.password = '[password]';

// Recipients Configuration
config.primary.recipients = [];

const recipient1 = {};
recipient1.address = '[address]';
recipient1.percentage = [percentage] // 0 to 1;
config.primary.recipients.push(recipient1);

// Export Configuration
module.exports = config;
