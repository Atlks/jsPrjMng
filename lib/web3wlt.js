


const Wallet = require('ethereumjs-wallet');


// 生成一个随机的私钥

const privateKey = Wallet['default'].generate().getPrivateKey();

// 根据私钥生成钱包  0xa926da933f325dd59c49af0bbf69ff8e7ed40b9784d19f940bf1d356f2d6ab44
//
 const wallet = Wallet['default'].fromPrivateKey(privateKey);

// 打印钱包地址和私钥
console.log('Address:', wallet.getAddressString()); console.log('Private Key:', wallet.getPrivateKeyString());