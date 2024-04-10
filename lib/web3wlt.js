


const Wallet = require('ethereumjs-wallet');
let arr= {}
for(i=1;i<100*1;i++)
{

// 生成一个随机的私钥

 const privateKey = Wallet['default'].generate().getPrivateKey();

// 根据私钥生成钱包  0xa926da933f325dd59c49af0bbf69ff8e7ed40b9784d19f940bf1d356f2d6ab44
//
 const wallet = Wallet['default'].fromPrivateKey(privateKey);

// 打印钱包地址和私钥
 let addressString = wallet.getAddressString();
 //console.log('Address:', addressString);
 let privateKeyString = wallet.getPrivateKeyString();
 //console.log('Private Key:', privateKeyString);

 let obj={};
 obj["add"]=addressString
     obj['key']=privateKeyString
 arr[addressString]= obj;

}

// console.log(arr)

console.log(JSON.stringify(arr))

const fs = require('fs')
// fs.writeFileSync('gd.txt', JSON.stringify(req.query) ,'utf8')
fs.writeFileSync('add'+Date.now()+'.json', JSON.stringify(arr,null,3)+"\r\n" )


