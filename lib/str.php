<?php

function str_parseToFunExprs(mixed $funx): array {
  $arr = explode(".", $funx);
  $classname = $arr[0];
  $meth = $arr[1];

  $fun123 = array(new $classname(), $meth);
  return $fun123;
}


function cvt155($r): bool|string {
  return iconv("ucs-2be", 'utf-8', pack('h4', $r[1]));
}


//var_dump(decodeUnicode("\u7ffb\u65f6\u5927\u9c7c"));
function decodeUnicode($str_unicode) {
  $GLOBALS['k3kUnicode'] = "\u5218\u6c64\u5341\u5f0f\u5927\u4e25\u8f9b\u58f0\u82a6\u8a00\u6b65\u5fd8\u77ff\u5175\u8db3\u70b9\u5353\u7262\u575b\u541d\u8d70\u5fd7\u8fd0\u5151\u82af\u5352\u5e78\u8bc4\u6caa\u7aff\u4f59\u7f55\u6ce8\u8fd9\u7a7a\u5f03\u8c46\u5ff5\u82b9\u6760\u5f80\u6cde\u80af\u6cdb\u54c1\u8096\u7597\u5448\u5b9d\u5b9a\u820d\u7075\u6ce3\u4f4d\u5458\u65a7\u707e\u6c7d\u514b\u65f7\u6765\u5e94\u8865\u9488\u6001\u5434\u8fd1\u675c\u541f\u4f4f\u5435\u5e90\u542b\u8bc8\u4eab\u5b97\u8299\u8be6\u91c7\u9489\u4ead\u600e\u544a\u82f9\u97f3\u5b8c\u4e32\u8eab\u6c99\u65f1\u708e\u8c37\u7a84\u59a5\u5948\u674f\u6c42\u7cfb\u5b8b\u51b7\u8d21\u8d64\u4eac\u5420\u6c70\u574f\u6c6a\u6761\u5cb8\u5fe0\u5b98\u9996\u5366\u826f\u7078\u5ca9\u9091\u5947\u5bb0\u603b\u542f\u674e\u8fdd\u675f\u7f94\u6770\u6cbe\u82db\u5501\u541e\u5475\u53c2\u975e\u5356\u8bc1\u5bab\u77e5\u82b3\u9001\u5fcc\u82a5\u542c\u4ea9\u574e\u8349\u51b6\u4eb2\u8d2a\u576a\u91d1\u7682\u62e6\u8338\u8fdf\u5b9e\u5cb3\u542d\u6c5e\u5473\u5495\u575f\u6b7c\u5b66\u9006\u8868\u7eb1\u73a9\u5750\u5bbe\u6b6a\u5426\u6000\u5ce6\u5ba4\u5355\u832b\u6c83\u5446\u82bd\u6020\u82ad\u5e97\u6cb3\u8d74\u6614\u4e9b\u8f69\u5fcd\u5176\u653b\u67f1\u8d23\u5431\u6749\u5f04\u4e3e\u9002\u82eb\u7a76\u5351\u8bc6\u82e5\u4f30\u5777\u9f7f\u5783\u5b8f\u5e8f\u7ae0\u830e\u82e6\u7396\u8fde\u76f2\u6ca6\u4e27\u97ed\u5b63\u7f57\u6cbd\u793e\u6b66\u8fd8\u82ac\u9017\u67a3\u5766\u517b\u5bff\u9ea6\u79c6\u8bd7\u53d8\u6d4e\u5992\u8fdc\u54ac\u53c1\u6cd5\u75c7\u6d0b\u5740\u8200\u70f9\u7089\u54c8\u7261\u51c9\u5f84\u98df\u517d\u541b\u6cab\u54c0\u886b\u8bca\u53d7\u82d4\u835a\u8bd1\u5b9c\u5949\u7a77\u5f55\u9c7c\u6025\u4e56\u7f38\u7687\u4f36\u73b2\u7f8e\u5751\u5e93\u7b0b\u8feb\u80b2\u7076\u54fc\u7a8d\u6cbb\u8309\u70c2\u835e\u51bb\u867e\u54e5\u6746\u8305\u680f\u59dc\u7ad9\u5fff\u5177\u5b5d\u7ade\u5747\u5364\u7830\u66f4\u6cc9\u759f\u8a89\u5c94\u574a\u7387\u5561\u8038\u542e\u6d01\u6c90\u8881\u5deb\u5374\u76f4\u79c1\u73b7\u5429\u707c\u5439\u604b\u5492\u5c1d\u80cc\u94f2\u754c\u62a4\u6284\u548c\u8fb0\u79c3\u58f3\u5f2f\u623f\u5c42\u73cd\u73ab\u4f51\u5e8a\u8d77\u70ad\u606f\u547d\u62dc\u547c\u54b3\u6750\u67d0\u575a\u8018\u4f34\u7a81\u80a9\u4fa3\u4f5c\u8005\u661f\u5ba2\u7d20\u6c89\u5e18\u5ba3\u6d89\u53bf\u8ffd\u4f9d\u94c3\u6789\u7eca\u829c\u73af\u6cca\u72c2\u8302\u62ff\u7b11\u83f2\u4f46\u95f0\u4f2f\u4f73\u7238\u5dee\u8bc9\u867d\u4eae\u576f\u9769\u5907\u5323\u96c0\u627f\u8f9c\u7275\u51ed\u5782\u8301\u7701\u759a\u54c4\u7092\u67e0\u514d\u5956\u62e7\u8367\u7802\u81ed\u8bdd\u8378\u65fa\u82d7\u9879\u6d3b\u559c\u8bcd\u996e\u5951\u79c0\u82b1\u4fe1\u770b\u8327\u86aa\u6296\u884d\u9a82\u79d2\u8fdb\u82cf\u8360\u8d2e\u5f1f\u51b5\u6298\u8bd5\u6cfd\u8ff9\u662f\u5e0c\u5ba1\u5224\u739b\u5c1a\u6c9b\u8db4\u7965\u594f\u82c7\u8c05\u6d6e\u7816\u5c9b\u82cd\u4e8b\u96b6\u51c0\u5509\u53d4\u7728\u60b2\u8bef\u6cae\u5490\u8c08\u7adf\u7ec8\u5428\u79d1\u9020\u950c\u5c45\u4f55\u6602\u5f92\u76ef\u62c4\u6dc0\u65f6\u5b5f\u5ba6\u7b28\u590d\u5bb6\u54a8\u6302\u6de1\u83e9\u79e6\u59d4\u7d0a\u601d\u9975\u6d45\u5230\u5238\u6807\u840d\u8352\u6d3c\u6276\u9009\u4fed\u6b67\u679c\u4f84\u6280\u8d2b\u9999\u67d4\u53d6\u5c3f\u7ed3\u771f\u7b14\u545b\u901e\u6292\u62f3\u9053\u54c6\u7b49\u809b\u9752\u9014\u57f9\u6240\u708a\u7c7b\u54ce\u5440\u5757\u5450\u7b06\u75d2\u80b4\u832c\u5377\u5feb\u6539\u8884\u8877\u95fa\u7a92\u8650\u868c\u72de\u83dc\u5bb9\u886c\u6d3d\u6bcf\u57c3\u6628\u8671\u9e23\u788e\u7eb9\u6297\u8a8a\u8fd4\u8d35\u5e1d\u75be\u6be1\u52aa\u500d\u5c06\u5792\u660c\u949e\u5e1a\u88c5\u684c\u5bc4\u7f62\u5f62\u7b26\u9493\u4f38\u5192\u8d28\u7b19\u6d25\u6ca1\u795f\u594b\u660f\u8336\u5bb3\u5944\u5955\u8ff0\u7537\u5ffd\u780d\u70b8\u74ee\u6c9f\u663c\u75b9\u8c06\u72b6\u7b24\u601c\u5565\u5f81\u75a4\u8d76\u7ad6\u6cf5\u90bb\u8428\u545c\u96ea\u9a74\u4e71\u6837\u7d22\u83ab\u62c9\u5b99\u65c1\u523d\u9a7b\u6012\u547b\u7ec5\u4e73\u6d69\u8bfb\u679a\u8870\u6cfb\u8ff7\u7948\u9a7e\u5c3e\u9010\u94a6\u80c3\u7ecf\u591c\u5baa\u83b1\u8d2f\u6cf0\u8377\u9aa8\u8d24\u79c9\u57a6\u5c40\u7ebf\u809d\u522e\u6014\u7686\u8d75\u82f1\u6d1b\u5ba0\u8f9e\u73ed\u707f\u51c6\u5784\u515c\u8d8b\u8651\u8fb1\u95f4\u7737\u7231\u7f5a\u6d17\u67e5\u6619\u7c7d\u5584\u575e\u94bb\u7599\u7434\u751a\u6868\u5e87\u7a91\u5c01\u67dc\u9f9f\u515a\u76d6\u8d37\u7538\u79cb\u8bed\u7ef0\u76d0\u62b9\u552e\u841d\u8679\u4fd8\u5c4f\u5954\u6cf3\u6b23\u79cd\u8f6f\u9e21\u7c92\u754f\u6076\u4e58\u6797\u7845\u6d4a\u5427\u5c41\u676f\u997a\u60bc\u6027\u6790\u6d74\u7814\u626d\u89c8\u5f97\u6756\u949f\u5fe7\u67af\u94c1\u5f79\u5462\u5486\u659c\u523b\u5bb4\u68a6\u54aa\u5df7\u8f88\u83b9\u5802\u963f\u6cbf\u90d1\u62fe\u7b54\u9b3c\u6ccc\u89c5\u7ba1\u67d2\u8a93\u4fd7\u8350\u7968\u8be5\u6301\u8892\u9ecd\u7a7f\u5468\u8364\u6c88\u7ec7\u677e\u6050\u5a04\u62c6\u5957\u5ea6\u9ec4\u602f\u8be2\u76fe\u8363\u7f6a\u9042\u6625\u54ed\u723d\u82df\u7ede\u8d44\u7b7e\u5d07\u7eba\u679d\u8d3a\u91cc\u5256\u95f7\u7fe0\u54d7\u6d82\u7ed9\u8083\u68c0\u62c5\u949d\u5499\u810a\u62bc\u7f9e\u6cc4\u9000\u83bd\u5996\u55a7\u52b3\u5760\u70ac\u6216\u6df3\u6545\u864e\u57ae\u5357\u8d38\u7fa1\u51a0\u73bb\u51cc\u8d27\u6751\u9003\u6613\u6591\u89c9\u52ab\u6deb\u5e99\u76d2\u5e9c\u6c27\u7fc1\u602a\u75d8\u5d2d\u711a\u548f\u8d4f\u4f3a\u7ebd\u8334\u6c79\u7095\u7ae5\u864f\u52b2\u7a96\u82de\u666e\u5154\u57e0\u6307\u70c8\u578b\u60b4\u90ce\u653e\u5bb5\u7ed8\u7ece\u96f6\u5f6d\u54b1\u503c\u6052\u6d2a\u7ca4\u77fe\u803f\u89d2\u6848\u767b\u8d41\u86a4\u7684\u60ac\u7740\u6ca7\u610f\u6069\u62d2\u5ff1\u664b\u836f\u4f8d\u8bc5\u6ce2\u5999\u666f\u6d51\u60a8\u5a03\u5c97\u8f9f\u6606\u67cf\u5566\u5e95\u8869\u96c6\u5543\u90ca\u6070\u5e9f\u653f\u8857\u663e\u533b\u852b\u6d53\u90e8\u6ed3\u800d\u8d30\u5e9e\u80be\u5f64\u6cbc\u7b5d\u7960\u6da3\u59d1\u5bc6\u8303\u6089\u552f\u783e\u7a9c\u8fce\u7edf\u4fb5\u6821\u66fc\u803b\u626f\u4f60\u8981\u809a\u6655\u52c7\u62e9\u7980\u6cb9\u5c4e\u889c\u4e34\u9499\u59ff\u6d6a\u634d\u67b6\u6108\u6211\u526a\u903c\u60e9\u83b2\u710a\u59a8\u5ead\u75bc\u796d\u7c9f\u5564\u75ab\u74f7\u88c6\u58f6\u75ca\u8042\u8457\u4fc3\u7caa\u4e24\u5965\u4faf\u79e4\u629a\u94a7\u6748\u7efd\u8bfd\u4fa5\u5378\u8d3e\u575d\u609f\u80a4\u7f69\u76ca\u9022\u83b7\u900a\u7281\u4fa8\u7554\u70ab\u8bec\u8425\u5bbf\u8f70\u88d5\u54b8\u66fe\u9877\u590f\u6ee8\u5f85\u7566\u8f6c\u505c\u4f88\u65a9\u676d\u83ba\u8304\u606c\u5eb6\u5375\u5cad\u8475\u5506\u8695\u6e17\u52a9\u4f9b\u628a\u90ae\u8270\u7eaf\u6643\u76c5\u5c0a\u83f1\u77ed\u7239\u7ec3\u84bf\u5f20\u79f8\u5bc2\u8bf2\u6321\u9ad8\u60a3\u59cb\u79f0\u5d16\u53d9\u67f4\u638c\u9065\u6bb5\u7d2f\u865a\u5c4b\u997c\u6324\u658b\u5764\u753b\u5bd2\u753b\u67ec\u5e38\u5524\u57fa\u8f7b\u4f43\u5c49\u95f2\u62a0\u7280\u6389\u8c01\u76d1\u6d46\u62d3\u5178\u76d4\u840e\u62cd\u57a2\u8482\u7edc\u60eb\u6df1\u7a83\u6d59\u86d9\u608d\u6073\u8dc3\u557c\u86ee\u94ae\u51ff\u86cb\u9876\u8c7a\u7d6e\u743c\u86af\u63a0\u7ecd\u6e14\u543b\u4fa0\u5570\u72e1\u6d9b\u579b\u6309\u869c\u6101\u7eac\u9756\u5510\u88ad\u8bf4\u9063\u96e8\u660e\u7ba9\u5761\u7b3c\u626e\u716e\u5f25\u849c\u8098\u6212\u7b4f\u901f\u67aa\u7f24\u5f69\u6028\u8854\u6d47\u903b\u58f9\u4f53\u7b1b\u606d\u9f3b\u5993\u7b51\u62ac\u5455\u67d3\u8bf5\u902e\u5bc7\u9760\u996d\u54f2\u6b8a\u7efc\u6361\u94a9\u5f90\u80e1\u62a1\u68e0\u5e2d\u6d3e\u56fd\u6295\u6325\u5251\u9274\u7ed5\u5c4a\u54ee\u6795\u5229\u79ef\u7b95\u8c61\u88f3\u54cd\u84dd\u6b32\u62f4\u6055\u8427\u86c9\u960e\u4e3d\u543c\u7b50\u8de8\u5507\u6b3e\u6865\u6c28\u5bcc\u79eb\u77e9\u6c1b\u7b97\u5d14\u59bb\u667a\u5d4c\u51a4\u4fa6\u5f26\u521d\u5e10\u8f6e\u6062\u7b52\u5546\u9655\u70d9\u539a\u9ed1\u7a9d\u8bf7\u88c2\u67d1\u6842\u7801\u70eb\u5019\u5c48\u952d\u901b\u5b9b\u62d4\u76d7\u62ec\u94db\u60f9\u8d2c\u62cc\u539f\u7eb8\u7b79\u756a\u60a6\u67ff\u70d8\u7272\u637b\u7410\u4ff1\u56f1\u62a2\u6682\u5ce1\u8c1a\u9986\u843d\u8389\u75ae\u73e0\u6548\u8424\u65c5\u804b\u7891\u8fa9\u7763\u6291\u6668\u6dee\u4f7f\u8859\u9888\u7ae3\u75f0\u7cb9\u868a\u6da4\u6247\u9f13\u7eb5\u51f3\u6270\u8d22\u79bb\u7126\u7edd\u5893\u6cfc\u9976\u6241\u76d8\u8bde\u8017\u5195\u5962\u745f\u96f7\u7fa4\u840c\u5598\u84b8\u5e16\u6043\u9645\u5de2\u7cb1\u7981\u818f\u6ce5\u6daf\u888b\u80a2\u8c0a\u7709\u9648\u6817\u4fdd\u8c24\u94a5\u7ec4\u6cea\u51d1\u59d0\u95fd\u5f8b\u59d3\u9e3f\u91cf\u8513\u788d\u9057\u76f9\u6d41\u6328\u9a8c\u6d88\u667e\u9eb8\u6db2\u4fbf\u9a73\u9e2f\u5373\u8c0b\u6c22\u7b56\u517c\u60a0\u9886\u7977\u51c4\u6dc6\u846b\u5496\u7405\u631a\u95fb\u6273\u6e2f\u78c5\u7eb7\u55b7\u4e7e\u5bde\u7267\u6813\u4f8b\u71ac\u9038\u70db\u671b\u7eb3\u7403\u8bf8\u94c5\u6863\u7b2c\u7119\u94d0\u906e\u630e\u6e20\u987b\u5367\u7136\u81f4\u5609\u80bf\u9605\u8d81\u654c\u901d\u76c8\u59b9\u522b\u5c51\u54d1\u8dcc\u79e7\u51fd\u8d34\u8bda\u524d\u6d95\u8212\u79fb\u8d25\u950b\u70e6\u5bbd\u6ca5\u6e43\u76c6\u53a8\u5531\u795d\u6768\u80aa\u677f\u94dd\u57c2\u5ea7\u5398\u5012\u5b69\u86a3\u62ed\u9510\u94ed\u803d\u9762\u6016\u80ae\u6599\u6627\u79e9\u695a\u9661\u8404\u755c\u8086\u6b27\u6bd2\u7b80\u86c0\u5cfb\u68ee\u62d0\u5f99\u7ec6\u94be\u8206\u5f88\u72c8\u7ef4\u7559\u8346\u9e20\u6dd1\u8be1\u8c1c\u683c\u6d78\u84c4\u9650\u5582\u901a\u76f8\u6dfb\u8054\u96be\u5e15\u91ce\u964c\u68ad\u8f83\u987f\u6566\u9972\u4fcf\u60f3\u5544\u5a07\u627e\u7a0b\u845b\u62d9\u65cf\u6293\u79bd\u6148\u8bfe\u5021\u53db\u9662\u7d27\u7eed\u683d\u6015\u8681\u95f9\u5242\u8912\u5319\u7a98\u6b83\u7ed2\u714e\u900f\u8702\u8bfa\u6c2e\u86c7\u8138\u6781\u8e2a\u57cb\u84c9\u6479\u54a7\u5854\u5239\u6f06\u785d\u6808\u62d8\u62bd\u552c\u6674\u6c13\u6d77\u6c2f\u848b\u6da7\u97e9\u60ca\u6beb\u8c23\u8d66\u4f4e\u62df\u83e0\u6392\u5c55\u7ee9\u5f70\u9a84\u8335\u54e9\u72d7\u6869\u6382\u7406\u54fa\u78a7\u6218\u55c5\u54df\u682a\u5e1c\u7578\u7d2b\u7f72\u804c\u8c79\u86c6\u6da9\u987d\u9a7c\u5a36\u72ed\u65cb\u7565\u54bd\u788c\u8549\u5520\u6e7e\u752b\u56fa\u55e6\u7130\u9a91\u8c0d\u6de4\u9646\u854a\u6df9\u7b5b\u7422\u6b8b\u5578\u72b9\u903e\u966a\u5f71\u7a9f\u690e\u76cf\u65af\u60d1\u77eb\u634f\u5960\u6eda\u503a\u795e\u79fd\u553e\u75f9\u9885\u604d\u533f\u501a\u78b4\u80d6\u70c1\u9981\u5265\u6ed4\u84ec\u97e7\u8c28\u772f\u6ed1\u96f3\u7bd3\u5806\u7f3a\u5c09\u9012\u8019\u97f5\u54e8\u5243\u5e26\u94b1\u8517\u6bd9\u70e4\u508d\u554a\u8beb\u904f\u6697\u8eac\u8c13\u631f\u56ed\u9f20\u9e7f\u6454\u80dc\u59ca\u7bab\u8dbe\u8d39\u6f3e\u62e3\u8c0e\u68a8\u6ce1\u68d5\u9c9c\u7eff\u62c7\u586b\u8c31\u718f\u63a7\u9e3d\u8c6a\u9600\u7279\u66b4\u94b3\u86e4\u8b6c\u91cd\u5f7c\u780c\u9610\u89c4\u8205\u6e05\u5885\u5824\u6316\u8bf1\u846c\u963b\u55b3\u8511\u57ab\u52bf\u9a87\u8d85\u5cf0\u7956\u6839\u9882\u56e4\u6f66\u582a\u805a\u5a46\u9f0e\u5288\u5d0e\u6e7f\u970d\u5bdf\u998b\u96c7\u73b0\u5a31\u559d\u988a\u6da1\u613f\u7f6e\u7eea\u8273\u80fd\u633d\u75b2\u751c\u7ee2\u655b\u68b3\u78b3\u94a0\u8463\u80ef\u83c7\u8680\u9525\u62f1\u9ece\u6bef\u8010\u88c1\u9c81\u633a\u9a76\u5835\u5e2e\u51ef\u7b77\u9508\u6784\u715e\u662d\u60e0\u9526\u810f\u6390\u680b\u5eb7\u714c\u63d0\u66ff\u6eb6\u5a01\u9970\u6349\u5821\u611f\u52c3\u9971\u6388\u62ef\u5c96\u9e33\u4f63\u70e7\u6838\u70bc\u55d3\u8845\u9985\u5f39\u52df\u6691\u6115\u62fc\u6620\u66f9\u8c10\u6851\u8235\u9ebb\u87c0\u8d5b\u5b7d\u5e55\u6b89\u68cb\u80c0\u9644\u55bb\u8c2d\u978b\u4fca\u6b3a\u8f7f\u5589\u78d5\u8f91\u6676\u6155\u90fd\u91ca\u5be5\u9047\u786b\u71d5\u6562\u8499\u90ed\u63d6\u7f18\u5815\u70ed\u5efa\u80ce\u7834\u81c2\u68d2\u62db\u7f14\u9664\u67c4\u641c\u80f6\u80a1\u5d29\u764c\u7248\u55dc\u80da\u8fa8\u63ba\u6469\u7a33\u6e23\u79d8\u86db\u566a\u585e\u8fa3\u75c5\u7fd4\u6dd8\u79df\u8471\u65b0\u94f6\u786c\u5f6a\u8f7d\u6400\u8d5e\u7199\u9a8f\u8713\u5c04\u8c12\u7a97\u7591\u5639\u9a79\u84d6\u6bc1\u68fa\u51db\u50da\u68a7\u76fc\u69a8\u96fe\u9884\u6d9d\u9668\u7ef5\u89c6\u4ffa\u6e29\u690d\u94f8\u5883\u776c\u80c6\u501f\u6700\u95f8\u6084\u637a\u9519\u8896\u9505\u7ed1\u9509\u8d54\u8354\u822a\u7ee3\u6167\u871c\u56f0\u8361\u526f\u5f31\u58c1\u75af\u79d5\u9b42\u822c\u4fee\u7779\u7cd5\u8d58\u524a\u6811\u5a18\u904d\u9707\u6396\u62e2\u6f6d\u83cc\u7840\u6e38\u9e35\u7cae\u68c9\u853c\u76b1\u6816\u8dfa\u8ddd\u76db\u5f7b\u94e3\u6f84\u6ea2\u6905\u6362\u621a\u7bd9\u7bc7\u6124\u66ae\u7bee\u607c\u75d5\u7855\u6dcb\u7bb1\u51cf\u611a\u6881\u503e\u888d\u88ab\u6279\u6b96\u6866\u75ea\u5851\u9669\u7be1\u699c\u8154\u7bf7\u9614\u5bd3\u7c98\u83ca\u5ced\u9524\u80f3\u5527\u6fa1\u8dcb\u77ee\u52b1\u535a\u7ef3\u8237\u75f4\u7a0d\u62b1\u6f8e\u632b\u7115\u8084\u63b8\u55e4\u9a86\u907f\u8109\u507f\u781a\u6377\u96cf\u6e83\u6846\u96c4\u85af\u8715\u8f74\u6323\u80a5\u5395\u8def\u6ecb\u733f\u659f\u6664\u6447\u859b\u8708\u60af\u964d\u8fab\u8902\u6d8e\u6ef4\u6d8c\u7f2d\u63a8\u53a6\u9501\u789f\u7a1a\u6376\u8c34\u58a8\u6df7\u6f02\u5267\u67a2\u952f\u72ec\u9675\u5899\u5be8\u60e8\u5eb5\u8700\u873b\u6dcc\u7269\u62b5\u5a76\u5c5e\u9e26\u52d2\u62ab\u532a\u98d2\u7aef\u7409\u6bb7\u63a2\u8c41\u59e5\u8d4b\u60f6\u523a\u5600\u857e\u5080\u5be1\u88b1\u9152\u7629\u914d\u74f6\u6bb4\u58d5\u7f13\u62e8\u987e\u7329\u6f20\u68f1\u563f\u7901\u5b64\u8f89\u6eaa\u8861\u6f2b\u775b\u627c\u94fe\u8113\u8584\u9500\u78e8\u72e0\u7978\u57df\u6da6\u8682\u7626\u60e6\u970e\u9e25\u4fae\u5eca\u5c60\u5f3a\u8110\u51f0\u635e\u88f9\u9700\u6367\u718a\u591f\u9686\u67f3\u5026\u63cf\u9677\u9523\u9891\u7fb9\u72d0\u85fb\u7a3b\u7aed\u60cb\u65e2\u7574\u5a92\u5236\u72fc\u8d26\u8d4e\u724d\u906d\u8ddf\u7194\u6413\u722c\u6342\u4fd0\u9171\u6717\u5f6c\u63a5\u6109\u670d\u60e7\u55e1\u8dd1\u8749\u642d\u72f0\u7ffc\u5065\u6064\u78b0\u851a\u8d29\u8214\u6e34\u9550\u5228\u5fb7\u7164\u5180\u85aa\u88e4\u8236\u4fa7\u6ee9\u635f\u60ef\u9881\u9547\u7a0e\u54ea\u5076\u7f1d\u62f7\u5077\u7a3d\u5f98\u7898\u8c2c\u5f0a\u8e42\u7cbe\u96f9\u969c\u90c1\u955c\u638f\u68af\u9080\u8f96\u9075\u8df5\u5669\u6e21\u614e\u6a1f\u8239\u52cb\u773c\u6912\u724c\u72f1\u5272\u59e8\u8574\u879f\u57ce\u9f84\u9776\u9910\u80a0\u75db\u7a3c\u63aa\u745e\u8e48\u7bad\u9601\u59c6\u7f1a\u6ee4\u7f15\u7f0e\u5c61\u8d2d\u7a46\u8d9f\u4fe9\u533e\u719f\u6e56\u693f\u75e2\u9e2d\u641e\u6897\u8e44\u6f5c\u6f14\u67b7\u8ddb\u9898\u6885\u5269\u504e\u6574\u78b1\u63d2\u8d8a\u804a\u7b4b\u60c5\u9cb8\u7741\u761f\u7766\u6551\u5f8a\u6da8\u5237\u70ae\u8c03\u8d43\u5668\u68f5\u80e7\u6563\u6b4c\u8c22\u5e7d\u7aa5\u5a29\u6e3a\u7fc5\u558a\u8693\u9b13\u798f\u8718\u9698\u7c89\u80c1\u88d9\u9690\u6cb8\u5ac1\u4fc4\u568e\u56a3\u5bdd\u6068\u60dc\u5f27\u71ce\u9119\u6446\u87c6\u8712\u8102\u6843\u7f29\u96c1\u730e\u8116\u5a74\u5ab3\u9893\u9896\u50a8\u6986\u5c31\u56fe\u8776\u671d\u989c\u8721\u998d\u5b09\u9709\u8131\u8df3\u6162\u63ed\u786e\u7ef8\u64cd\u5018\u9563\u664c\u813e\u5fa1\u665a\u8058\u6e58\u50e7\u762a\u954a\u63e9\u6d1e\u8d6b\u5eb8\u72f8\u6fb3\u7184\u7c97\u8df7\u8150\u6635\u9a71\u8717\u6414\u8461\u634e\u50b2\u6194\u8c8c\u56f4\u68cd\u6ede\u987a\u4f5b\u6094\u6e24\u6e10\u78f7\u7c4d\u589e\u6320\u65ad\u6478\u6666\u9187\u8d4a\u7470\u989d\u6170\u6559\u5a5a\u8c26\u6b47\u63c9\u8f95\u670b\u699b\u88f8\u7c07\u584c\u8d31\u6a59\u7433\u80ba\u6402\u87cb\u7bf1\u6177\u6ee5\u63cd\u61a8\u614c\u63b0\u5858\u64ce\u7167\u6d32\u914c\u6380\u8925\u915d\u7334\u6886\u6d66\u8e29\u7ca5\u4fef\u74a7\u60d5\u71e5\u505a\u8783\u5047\u9521\u64a9\u5636\u9739\u7a00\u52c9\u951a\u8015\u62a5\u58a9\u978d\u9530\u5ed3\u7c3f\u80de\u9676\u56bc\u7f06\u6d12\u59da\u4f69\u53e0\u50fb\u7ee7\u9189\u5706\u7cd9\u6bbf\u5faa\u50f5\u7784\u8111\u62d6\u6995\u8d3f\u8b66\u731c\u6696\u6653\u81b3\u9b41\u9178\u8f86\u9759\u7316\u8757\u632f\u7235\u5162\u9ed4\u814a\u5ec9\u8c6b\u7eb2\u52e4\u68a2\u94c6\u86d4\u51dd\u9ed8\u821e\u7720\u6a0a\u622a\u6f13\u8986\u952e\u9992\u6572\u63e3\u727a\u6350\u732a\u56b7\u6db5\u53a2\u6845\u7a3f\u84b2\u50ac\u6eba\u76df\u80f8\u997f\u8611\u7e41\u94a2\u9a9a\u671f\u69b4\u68b0\u9528\u9e49\u817a\u7f00\u6ee1\u874c\u98a0\u5e45\u953b\u50cf\u6670\u5ac2\u732b\u656c\u8d42\u758f\u895f\u971e\u654f\u636e\u6363\u6954\u64b5\u94dc\u5085\u65bd\u8165\u852c\u618e\u50bb\u778e\u5587\u7f30\u6127\u85d0\u63f4\u874e\u65d7\u9539\u8d3c\u8231\u9761\u8180\u63a9\u6467\u5632\u5c65\u7cdc\u71c3\u6a21\u7f20\u6491\u8179\u8e0a\u8f90\u6a61\u6bc5\u806a\u8587\u7897\u8c4c\u6d4b\u96a7\u9732\u5a7f\u5e62\u77ac\u70df\u6850\u5254\u8dea\u7483\u6652\u6e90\u52d8\u9887\u78c1\u96c5\u5601\u63b7\u5ac9\u7736\u731b\u8910\u892a\u537f\u64ac\u5830\u7011\u642a\u64c2\u87e5\u7663\u8e0f\u72ee\u5014\u96cc\u6fc0\u819d\u8106\u6f58\u8eb2\u640f\u7ff0\u971c\u67ab\u56ca\u643a\u8e72\u81ca\u9540\u8822\u964b\u7fd8\u58e4\u9694\u61be\u527f\u7abf\u695e\u60f0\u968f\u732e\u733e\u9699\u78be\u618b\u9774\u7525\u5634\u998f\u7b8d\u8774\u817f\u6570\u7a57\u63e1\u7624\u5708\u61c2\u6401\u64c5\u8f93\u6977\u9177\u6f88\u6a90\u9ca4\u7f05\u7545\u8760\u6eaf\u9e70\u629b\u6aa9\u68d8\u85d5\u9e43\u916a\u5703\u9738\u817e\u8247\u55fd\u69d0\u89e3\u7fce\u697c\u8f85\u704c\u6e9c\u60ed\u7f16\u5e3d\u6577\u8d56\u9b44\u64ad\u7838\u649e\u853d\u89e6\u5e4c\u6a71\u9e4a\u69fd\u9cc4\u8747\u6355\u87f9\u5112\u6984\u63ea\u8e22\u9ccd\u80f0\u6a80\u9163\u7f34\u9165\u655e\u8eaf\u814b\u7638\u6a2a\u77a7\u5a49\u818a\u6e0a\u63fd\u9e45\u6405\u9576\u732c\u59fb\u762b\u6963\u62d7\u6345\u87ba\u5fae\u6311\u9cd6\u86f9\u61ca\u8e31\u6458\u634c\u64b0\u6234\u64ae\u6f9c\u8da3\u5a9a\u7889\u6b49\u644a\u8815\u8d50\u878d\u9b54\u817b\u6aac\u81c0\u819b\u6500\u6e89\u74e3\u94fa\u6982\u8e6c\u6f31\u9e64\u5e54\u6444\u812f\u504f\u5a1c\u811a\u8e6d\u9175\u5ae1\u6346\u7f28\u8d4c\u86fe\u64e6\u77ad\u918b\u77aa\u787c\u85e4\u8d61\u8f99\u819c\u5acc\u8eba\u64d2\u6dae\u73ca\u98a4\u763e\u7206\u7761\u7a20\u9504\u9897\u5631\u9aa1\u6726\u85cf\u96d5\u9a97\u8e81\u816e\u7792\u9685\u81a8\u61e6\u692d\u6168\u5b75\u6518\u916c\u6f29\u77b3\u62c2\u8d62\u8258\u6a58\u7f50\u9192\u6f0f\u6e85\u6f6e\u8d60\u7c38\u62e5\u94e1\u8e4b\u6512\u9cde\u9aa4\u6876\u6687\u64a4\u64bc\u8230\u642c\u77bb\u7ef7\u6fd2\u632a\u6495\u814c\u7cca\u8155\u66d9\u6233\u6398\u8638\u6994\u8198\u77d7\u8170\u7cdf\u6930\u6a44\u5fbd\u8759\u5ae9\u7586\u7ce0\u97a0\u9b4f\u97ad\u5dcd\u917f\u98d8\u9157\u6492\u5220\u765e\u7cef\u7cd6\u8000\u8e8f\u8e66\u7fe9\u74e2\u8d5a\u6a31\u74e4\u61c8\u6487\u61d2\u9570\u9ad3\u5121\u9cab\u6805\u68da\u9e4f\u9e66\u7ffb";
  $GLOBALS['k3kcn'] = "p刘汤十式大严辛声芦言步忘矿兵足点卓牢坛吝走志运兑芯卒幸评沪竿余罕注这空弃豆念芹杠往泞肯泛品肖疗呈宝定舍灵泣位员斧灾汽克旷来应补针态吴近杜吟住吵庐含诈享宗芙详采钉亭怎告苹音完串身沙旱炎谷窄妥奈杏求系宋冷贡赤京吠汰坏汪条岸忠官首卦良灸岩邑奇宰总启李违束羔杰沾苛唁吞呵参非卖证宫知芳送忌芥听亩坎草冶亲贪坪金皂拦茸迟实岳吭汞味咕坟歼学逆表纱玩坐宾歪否怀峦室单茫沃呆芽怠芭店河赴昔些轩忍其攻柱责吱杉弄举适苫究卑识若估坷齿垃宏序章茎苦玖连盲沦丧韭季罗沽社武还芬逗枣坦养寿麦秆诗变济妒远咬叁法症洋址舀烹炉哈牡凉径食兽君沫哀衫诊受苔荚译宜奉穷录鱼急乖缸皇伶玲美坑库笋迫育灶哼窍治茉烂荞冻虾哥杆茅栏姜站忿具孝竞均卤砰更泉疟誉岔坊率啡耸吮洁沐袁巫却直私玷吩灼吹恋咒尝背铲界护抄和辰秃壳弯房层珍玫佑床起炭息命拜呼咳材某坚耘伴突肩侣作者星客素沉帘宣涉县追依铃枉绊芜环泊狂茂拿笑菲但闰伯佳爸差诉虽亮坯革备匣雀承辜牵凭垂茁省疚哄炒柠免奖拧荧砂臭话荸旺苗项活喜词饮契秀花信看茧蚪抖衍骂秒进苏荠贮弟况折试泽迹是希审判玛尚沛趴祥奏苇谅浮砖岛苍事隶净唉叔眨悲误沮咐谈竟终吨科造锌居何昂徒盯拄淀时孟宦笨复家咨挂淡菩秦委紊思饵浅到券标萍荒洼扶选俭歧果侄技贫香柔取尿结真笔呛逞抒拳道哆等肛青途培所炊类哎呀块呐笆痒肴茬卷快改袄衷闺窒虐蚌狞菜容衬洽每埃昨虱鸣碎纹抗誊返贵帝疾毡努倍将垒昌钞帚装桌寄罢形符钓伸冒质笙津没祟奋昏茶害奄奕述男忽砍炸瓮沟昼疹谆状笤怜啥征疤赶竖泵邻萨呜雪驴乱样索莫拉宙旁刽驻怒呻绅乳浩读枚衰泻迷祈驾尾逐钦胃经夜宪莱贯泰荷骨贤秉垦局线肝刮怔皆赵英洛宠辞班灿准垄兜趋虑辱间眷爱罚洗查昙籽善坞钻疙琴甚桨庇窑封柜龟党盖贷甸秋语绰盐抹售萝虹俘屏奔泳欣种软鸡粒畏恶乘林硅浊吧屁杯饺悼性析浴研扭览得杖钟忧枯铁役呢咆斜刻宴梦咪巷辈莹堂阿沿郑拾答鬼泌觅管柒誓俗荐票该持袒黍穿周荤沈织松恐娄拆套度黄怯询盾荣罪遂春哭爽苟绞资签崇纺枝贺里剖闷翠哗涂给肃检担钝咙脊押羞泄退莽妖喧劳坠炬或淳故虎垮南贸羡冠玻凌货村逃易斑觉劫淫庙盒府氧翁怪痘崭焚咏赏伺纽茴汹炕童虏劲窖苞普兔埠指烈型悴郎放宵绘绎零彭咱值恒洪粤矾耿角案登赁蚤的悬着沧意恩拒忱晋药侍诅波妙景浑您娃岗辟昆柏啦底衩集啃郊恰废政街显医蔫浓部滓耍贰庞肾彤沼筝祠涣姑密范悉唯砾窜迎统侵校曼耻扯你要肚晕勇择禀油屎袜临钙姿浪捍架愈我剪逼惩莲焊妨庭疼祭粟啤疫瓷裆壶痊聂著促粪两奥侯秤抚钧杈绽诽侥卸贾坝悟肤罩益逢获逊犁侨畔炫诬营宿轰裕咸曾顷夏滨待畦转停侈斩杭莺茄恬庶卵岭葵唆蚕渗助供把邮艰纯晃盅尊菱短爹练蒿张秸寂诲挡高患始称崖叙柴掌遥段累虚屋饼挤斋坤画寒画柬常唤基轻佃屉闲抠犀掉谁监浆拓典盔萎拍垢蒂络惫深窃浙蛙悍恳跃啼蛮钮凿蛋顶豺絮琼蚯掠绍渔吻侠啰狡涛垛按蚜愁纬靖唐袭说遣雨明箩坡笼扮煮弥蒜肘戒筏速枪缤彩怨衔浇逻壹体笛恭鼻妓筑抬呕染诵逮寇靠饭哲殊综捡钩徐胡抡棠席派国投挥剑鉴绕届哮枕利积箕象裳响蓝欲拴恕萧蛉阎丽吼筐跨唇款桥氨富秫矩氛算崔妻智嵌冤侦弦初帐轮恢筒商陕烙厚黑窝请裂柑桂码烫候屈锭逛宛拔盗括铛惹贬拌原纸筹番悦柿烘牲捻琐俱囱抢暂峡谚馆落莉疮珠效萤旅聋碑辩督抑晨淮使衙颈竣痰粹蚊涤扇鼓纵凳扰财离焦绝墓泼饶扁盘诞耗冕奢瑟雷群萌喘蒸帖恃际巢粱禁膏泥涯袋肢谊眉陈栗保谤钥组泪凑姐闽律姓鸿量蔓碍遗盹流挨验消晾麸液便驳鸯即谋氢策兼悠领祷凄淆葫咖琅挚闻扳港磅纷喷乾寞牧栓例熬逸烛望纳球诸铅档第焙铐遮挎渠须卧然致嘉肿阅趁敌逝盈妹别屑哑跌秧函贴诚前涕舒移败锋烦宽沥湃盆厨唱祝杨肪板铝埂座厘倒孩蚣拭锐铭耽面怖肮料昧秩楚陡萄畜肆欧毒简蛀峻森拐徙细钾舆很狈维留荆鸠淑诡谜格浸蓄限喂通相添联难帕野陌梭较顿敦饲俏想啄娇找程葛拙族抓禽慈课倡叛院紧续栽怕蚁闹剂褒匙窘殃绒煎透蜂诺氮蛇脸极踪埋蓉摹咧塔刹漆硝栈拘抽唬晴氓海氯蒋涧韩惊毫谣赦低拟菠排展绩彰骄茵哩狗桩掂理哺碧战嗅哟株帜畸紫署职豹蛆涩顽驼娶狭旋略咽碌蕉唠湾甫固嗦焰骑谍淤陆蕊淹筛琢残啸犹逾陪影窟椎盏斯惑矫捏奠滚债神秽唾痹颅恍匿倚碴胖烁馁剥滔蓬韧谨眯滑雳篓堆缺尉递耙韵哨剃带钱蔗毙烤傍啊诫遏暗躬谓挟园鼠鹿摔胜姊箫趾费漾拣谎梨泡棕鲜绿拇填谱熏控鸽豪阀特暴钳蛤譬重彼砌阐规舅清墅堤挖诱葬阻喳蔑垫势骇超峰祖根颂囤潦堪聚婆鼎劈崎湿霍察馋雇现娱喝颊涡愿置绪艳能挽疲甜绢敛梳碳钠董胯菇蚀锥拱黎毯耐裁鲁挺驶堵帮凯筷锈构煞昭惠锦脏掐栋康煌提替溶威饰捉堡感勃饱授拯岖鸳佣烧核炼嗓衅馅弹募暑愕拼映曹谐桑舵麻蟀赛孽幕殉棋胀附喻谭鞋俊欺轿喉磕辑晶慕都释寥遇硫燕敢蒙郭揖缘堕热建胎破臂棒招缔除柄搜胶股崩癌版嗜胚辨掺摩稳渣秘蛛噪塞辣病翔淘租葱新银硬彪载搀赞熙骏蜓射谒窗疑嘹驹蓖毁棺凛僚梧盼榨雾预涝陨绵视俺温植铸境睬胆借最闸悄捺错袖锅绑锉赔荔航绣慧蜜困荡副弱壁疯秕魂般修睹糕赘削树娘遍震掖拢潭菌础游鸵粮棉蔼皱栖跺距盛彻铣澄溢椅换戚篙篇愤暮篮恼痕硕淋箱减愚梁倾袍被批殖桦痪塑险篡榜腔篷阔寓粘菊峭锤胳唧澡跋矮励博绳舷痴稍抱澎挫焕肄掸嗤骆避脉偿砚捷雏溃框雄薯蜕轴挣肥厕路滋猿斟晤摇薛蜈悯降辫褂涎滴涌缭推厦锁碟稚捶谴墨混漂剧枢锯独陵墙寨惨庵蜀蜻淌物抵婶属鸦勒披匪飒端琉殷探豁姥赋惶刺嘀蕾傀寡袱酒瘩配瓶殴壕缓拨顾猩漠棱嘿礁孤辉溪衡漫睛扼链脓薄销磨狠祸域润蚂瘦惦霎鸥侮廊屠强脐凰捞裹需捧熊够隆柳倦描陷锣频羹狐藻稻竭惋既畴媒制狼账赎牍遭跟熔搓爬捂俐酱朗彬接愉服惧嗡跑蝉搭狰翼健恤碰蔚贩舔渴镐刨德煤冀薪裤舶侧滩损惯颁镇税哪偶缝拷偷稽徘碘谬弊蹂精雹障郁镜掏梯邀辖遵践噩渡慎樟船勋眼椒牌狱割姨蕴螟城龄靶餐肠痛稼措瑞蹈箭阁姆缚滤缕缎屡购穆趟俩匾熟湖椿痢鸭搞梗蹄潜演枷跛题梅剩偎整碱插越聊筋情鲸睁瘟睦救徊涨刷炮调赃器棵胧散歌谢幽窥娩渺翅喊蚓鬓福蜘隘粉胁裙隐沸嫁俄嚎嚣寝恨惜弧燎鄙摆蟆蜒脂桃缩雁猎脖婴媳颓颖储榆就图蝶朝颜蜡馍嬉霉脱跳慢揭确绸操倘镣晌脾御晚聘湘僧瘪镊揩洞赫庸狸澳熄粗跷腐昵驱蜗搔葡捎傲憔貌围棍滞顺佛悔渤渐磷籍增挠断摸晦醇赊瑰额慰教婚谦歇揉辕朋榛裸簇塌贱橙琳肺搂蟋篱慷滥揍憨慌掰塘擎照洲酌掀褥酝猴梆浦踩粥俯璧惕燥做螃假锡撩嘶霹稀勉锚耕报墩鞍锰廓簿胞陶嚼缆洒姚佩叠僻继醉圆糙殿循僵瞄脑拖榕贿警猜暖晓膳魁酸辆静猖蝗振爵兢黔腊廉豫纲勤梢铆蛔凝默舞眠樊截漓覆键馒敲揣牺捐猪嚷涵厢桅稿蒲催溺盟胸饿蘑繁钢骚期榴械锨鹉腺缀满蝌颠幅锻像晰嫂猫敬赂疏襟霞敏据捣楔撵铜傅施腥蔬憎傻瞎喇缰愧藐援蝎旗锹贼舱靡膀掩摧嘲履糜燃模缠撑腹踊辐橡毅聪薇碗豌测隧露婿幢瞬烟桐剔跪璃晒源勘颇磁雅嘁掷嫉眶猛褐褪卿撬堰瀑搪擂蟥癣踏狮倔雌激膝脆潘躲搏翰霜枫囊携蹲臊镀蠢陋翘壤隔憾剿窿楞惰随献猾隙碾憋靴甥嘴馏箍蝴腿数穗握瘤圈懂搁擅输楷酷澈檐鲤缅畅蝠溯鹰抛檩棘藕鹃酪圃霸腾艇嗽槐解翎楼辅灌溜惭编帽敷赖魄播砸撞蔽触幌橱鹊槽鳄蝇捕蟹儒榄揪踢鳍胰檀酣缴酥敞躯腋瘸横瞧婉膊渊揽鹅搅镶猬姻瘫楣拗捅螺微挑鳖蛹懊踱摘捌撰戴撮澜趣媚碉歉摊蠕赐融魔腻檬臀膛攀溉瓣铺概蹬漱鹤幔摄脯偏娜脚蹭酵嫡捆缨赌蛾擦瞭醋瞪硼藤赡辙膜嫌躺擒涮珊颤瘾爆睡稠锄颗嘱骡朦藏雕骗躁腮瞒隅膨懦椭慨孵攘酬漩瞳拂赢艘橘罐醒漏溅潮赠簸拥铡蹋攒鳞骤桶暇撤撼舰搬瞻绷濒挪撕腌糊腕曙戳掘蘸榔膘矗腰糟椰橄徽蝙嫩疆糠鞠魏鞭巍酿飘酗撒删癞糯糖耀躏蹦翩瓢赚樱瓤懈撇懒镰髓儡鲫栅棚鹏鹦翻";
  $arrUncd = explode('\\u', $GLOBALS['k3kUnicode']);
  $arrcn = mb_str_split($GLOBALS['k3kcn']);
  global $k3kcn;

  require_once __DIR__ . "/iniAutoload.php";
  log23::zdbg224(__METHOD__, "str_unicode", $str_unicode);

  return preg_replace_callback("/\\\u([0-9a-f]{4})/iu", function ($r) use ($arrUncd,$arrcn) {



    $uncd = $r[1];  //  5555

    log23::zdbg224(__METHOD__, "uncd", $uncd);


//    log23::zdbg224(__METHOD__, "k3kUnicode arr", $arr);
//    log23::zdbg224(__METHOD__, "arrcn arr", $arrcn);
    $idx = array_search($uncd, $arrUncd);

    log23::zdbg224(__METHOD__, "idx", $idx);
    if ($idx) {
      return $arrcn[$idx];
    } else
      return $r[0];   //   \uxxxx

    //iconv("ucs-2be",'utf-8',pack('h4',$r[1]));
  }, $str_unicode);

//  $chinese = json_decode('"'.$str_unicode.'"', true);
//  return $chinese;

//return  iconv("UCS-2BE","UTF-8",$str_unicode);
  // $JsobStr=json_encode($str,JSON_UNESCAPED_UNICODE);
  //return json_decode($JsobStr,null,10,JSON_UNESCAPED_UNICODE);

  //return preg_replace_callback('/\\\\u([0-9a-f]{4})/i', create_function( '$matches', 'return mb_convert_encoding(pack("H*", $matches[1]), "UTF-8", "UCS-2BE");' ), $str);
}

function url_qrystrDecode($Qrystr) {
  $a = [];
  parse_str($Qrystr, $a);
  return $a;
}


function urlQrystrToArr($str) {
  $arr_ret = [];
  $arr = explode("&", $str);
  foreach ($arr as $item) {
    $arr311 = explode("=", $item);
    $key = $arr311[0];
    $key = trim($key);
    $v = $arr311[1];
    $v = trim($v);
    $arr_ret[$key] = $v;
    //array($key=> $v) ;
  }
  return $arr_ret;
}

function http_query_toArr($str) {
  $arr_ret = [];
  $arr = explode("&", $str);
  foreach ($arr as $item) {
    $arr311 = explode("=", $item);
    $key = $arr311[0];
    $key = trim($key);
    $v = $arr311[1];
    $v = trim($v);
    $arr_ret[] = array($key => $v);
  }
  return $arr_ret;
}

function urlencode_part($str) {

  $arr = str_split("&");
  foreach ($arr as $item) {
    $arr = str_split("=");
  }
}

//-----------------------------------core .fun lib---------------------------
//检查字符串是否以特定的子字符串开头
function startsWith($string, $startString) {
  $len = strlen($startString);
  return (substr($string, 0, $len) === $startString);
}

//支持中文的splt ,,ori splt only eng
function str_splitX($str) {
  //support chinese char,,,,  str_split not spt chins char
  return preg_split('/(?<!^)(?!$)/u', $str);
}


//echo " str ddl:".str_delNum("后顺333");
function str_delNum($str) {
  \log23::zdebug(__METHOD__, "func_get_args", func_get_args());
//    if( class_exists('\think\facade\Log'))
//    \think\facade\Log::debug(__METHOD__ . json_encode(func_get_args(), JSON_UNESCAPED_UNICODE));
  return preg_replace('/[\d]/', '', $str);
}

function str_delLastNum($str) {
  \log23::zdebug(__METHOD__, "func_get_args", func_get_args());
//    if( class_exists('\think\facade\Log'))
//    \think\facade\Log::debug(__METHOD__ . json_encode(func_get_args(), JSON_UNESCAPED_UNICODE));
  return preg_replace('/(\d+)$/iu', '', $str);
}

//var_dump( str_delLastNumX("a/1/100"));
//var_dump( str_delLastNumX("单100"));
$adaf = 1;
function str_delLastNumX($str) {
  if (class_exists("\log23"))
    \log23::zdebug(__METHOD__, "func_get_args", func_get_args());
//    if( class_exists('\think\facade\Log'))
//    \think\facade\Log::debug(__METHOD__ . json_encode(func_get_args(), JSON_UNESCAPED_UNICODE));

  if (preg_match('/(\/\d+)$/iu', $str))
    return preg_replace('/(\/\d+)$/iu', '', $str);
  else
    return preg_replace('/(\d+)$/iu', '', $str);
}

//function getAmt_frmBetStr($str)
//{
//    $str = trim($str);
//    //   $str = $msg['text'];
//    if (preg_match('/(\d+)$/', $str, $match)) {
//        $number = $match[0];
//    }
//    return  $number;
//}

// order_str as char arr
function order_str($num) {
  // echo 1151;
  print_rx("num:" . $num . "    ");
  $a = str_split($num);
  print_rx($a);
  sort($a);
  //  echo " aft asort:";
  print_rx($a);
  // die();
  $s = implode($a);
  return $s;
}