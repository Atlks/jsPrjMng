
<?php

//  C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe  composer.phar require    guzzlehttp/guzzle
//namespace phpEther\Providers;
require_once  'HttpProvider.php';
use \phpEther\Providers\Etherscan\Request;

/**
 * Etherscan API Wrapper.
 *
 * @license http://opensource.org/licenses/MIT
 */
//use phpEther\Web3\Providers\HttpProvider;
class Etherscan extends HttpProvider implements Provider {
	const API_URL = "https://api.etherscan.io/api";
	const TESTNET_ROPSTEN = "ropsten";
    const TESTNET_KOVAN = "kovan";
    const TESTNET_RINKEBY = "rinkeby";
	const TAG_LATEST = "latest";
    const BLOCK_TYPE_BLOCKS = "blocks";
    const BLOCK_TYPE_UNCLES = "uncles";

    /**
     * Etherscan API key token.
     *
     * @var string
     */
    private $apiKeyToken='D9N8M9GJG5ISQ8TNKZV7TUXCMDFNQBVYCN';

    /**
     * cURL request object.
     *
     * @var Request
     */
    private $request = null;

    /**
     * Instantiate Etherscan API object.
     *
     * @param string $apiKeyToken API key token.
     * @param string $net Testnet name or mainnet by default.
     */
    public function __construct($apiKeyToken = null, $net = null) {
        if (is_null($apiKeyToken)) {
            return;
        }
		parent::determineChainId($net);
        $this->apiKeyToken = $apiKeyToken;
    }
	
	public   function getAPIUrl() {
        if (is_null($this->net)) {
            return self::API_URL;
        }
        return "https://{$this->net}.etherscan.io/api";
    }
	
	public function setNet($net){
		$this->net = $net;
		return $this;
	}
	
	public function request($req, $type = 'GET'){
		$url = self::getAPIUrl();
        echo $type."\r\n";
        var_dump( $url);
		$client = new \GuzzleHttp\Client([
            'timeout' => 20,
            'verify' => false
        ]);
	 	$req['apikey'] = $this->apiKeyToken;

        echo json_encode($req)."\r\n";;
		$request = $type =='GET'?'query':'form_params';
        var_dump('$request:'.$request) ;
			$response = $client->request($type, $url, [
				$request => $req
			]);

		$json = json_decode($response->getBody());
        echo  "\r\n".json_encode($json)."\r\n";;
        // Check for the Etherscan API error
        if (isset($json->error)) {
            throw new \Exception("Etherscan API error: {$json->error}");
        }
        return $json->result;
	}
	
	
	
    // === Account APIs ========================================================

    /**
     * Get Ether Balance for a single Address.
     *
     * @param string $address Ether address.
     * @param string $tag
     *
     * @return array
     */
    public function balance($address, $tag = self::TAG_LATEST) {
        return $this->request([
            'module' => "account",
            'action' => "balance",
            'address' => $address,
            'tag' => $tag
        ]);
    }

    /**
     * Get Ether Balance for multiple Addresses in a single call.
     *
     * @param string $addresses Ether address.
     * @param string $tag
     *
     * @return array
     */
    public function balanceMulti($addresses, $tag = self::TAG_LATEST) {
        if (is_array($addresses)) {
            $addresses = implode(",", $addresses);
        }

        return $this->request([
            'module' => "account",
            'action' => "balancemulti",
            'address' => $addresses,
            'tag' => $tag
        ]);
    }

    /**
     * Get a list of 'Normal' Transactions By Address.
     * (Returns up to a maximum of the last 10000 transactions only).
     *
     * @param string $address Ether address.
     * @param int $startBlock Starting blockNo to retrieve results
     * @param int $endBlock Ending blockNo to retrieve results
     * @param string $sort 'asc' or 'desc'
     * @param int $page Page number
     * @param int $offset Offset
     *
     * @return array
     */
    public function transactionList($address, $startBlock = 0, $endBlock = 99999999, $sort = "desc", $page = null, $offset = null) {
        $params = [
            'module' => "account",
            'action' => "txlist",
            'address' => $address,
            'startblock' => $startBlock,
            'endblock' => $endBlock,
            'sort' => $sort
        ];

        if (!is_null($page)) {
            $params['page'] = (int)$page;
        }

        if (!is_null($offset)) {
            $params['offset'] = (int)$offset;
        }

        return $this->request($params);
    }

    /**
     * Get a list of 'Internal' Transactions by Address
     * (Returns up to a maximum of the last 10000 transactions only).
     *
     * @param string $address Ether address.
     * @param int $startBlock Starting blockNo to retrieve results
     * @param int $endBlock Ending blockNo to retrieve results
     * @param string $sort 'asc' or 'desc'
     * @param int $page Page number
     * @param int $offset Offset
     *
     * @return array
     */
    public function transactionListInternalByAddress($address, $startBlock = 0, $endBlock = 99999999, $sort = "asc", $page = null, $offset = null) {
        $params = [
            'module' => "account",
            'action' => "txlistinternal",
            'address' => $address,
            'startblock' => $startBlock,
            'endblock' => $endBlock,
            'sort' => $sort
        ];

        if (!is_null($page)) {
            $params['page'] = (int)$page;
        }

        if (!is_null($offset)) {
            $params['offset'] = (int)$offset;
        }

        return $this->request($params);
    }

    /**
     * Get "Internal Transactions" by Transaction Hash.
     *
     * @param string $transactionHash
     *
     * @return array
     */
    public function transactionListInternalByHash($transactionHash) {
        return $this->request([
            'module' => "account",
            'action' => "txlistinternal",
            'txhash' => $transactionHash
        ]);
    }

    /**
     * Get list of Blocks Mined by Address.
     *
     * @param string $address Ether address
     * @param string $blockType "blocks" or "uncles"
     * @param int $page Page number
     * @param int $offset Offset
     *
     * @return array
     */
    public function getMinedBlocks($address, $blockType = self::BLOCK_TYPE_BLOCKS, $page = null, $offset = null) {
        if (!in_array($blockType, self::$blockTypes)) {
            throw new \Exception("Invalid block type");
        }

        $params = [
            'module' => "account",
            'action' => "getminedblocks",
            'address' => $address,
            'blocktype' => $blockType,
        ];

        if (!is_null($page)) {
            $params['page'] = (int)$page;
        }

        if (!is_null($offset)) {
            $params['offset'] = (int)$offset;
        }

        return $this->request($params);
    }

    // === Contract APIs =======================================================

    /**
     * Get Contract ABI for Verified Contract Source Codes.
     * (Newly verified Contracts are synched to the API servers within 5 minutes or less).
     *
     * @param string $address Ether address.
     *
     * @return array
     */
    public function getABI($address) {
        return $this->request([
            'module' => "contract",
            'action' => "getabi",
            'address' => $address
        ]);
    }

    /**
     * Get Contract ABI for Verified Contract Source Codes.
     * (Newly verified Contracts are synched to the API servers within 5 minutes or less).
     *
     * @param string $address Ether address.
     *
     * @return array
     */
    public function getContractABI($address) {
        return $this->getABI($address);
    }

    // === Transaction APIs ====================================================

    /**
     * Check Contract Execution Status (if there was an error during contract execution).
     * Note: isError":"0" = Pass , isError":"1" = Error during Contract Execution.
     *
     * @param string $transactionHash
     *
     * @return int
     */
    public function getStatus($transactionHash) {
        return $this->request([
            'module' => "transaction",
            'action' => "getstatus",
            'txhash' => $transactionHash
        ]);
    }

    /**
     * Check Contract Execution Status (if there was an error during contract execution).
     * Note: isError":"0" = Pass , isError":"1" = Error during Contract Execution.
     *
     * @param string $transactionHash
     *
     * @return int
     */
    public function getContractExecutionStatus($transactionHash) {
        return $this->getStatus($transactionHash);
    }

    // === Blocks APIs =========================================================

    /**
     * Get Block And Uncle Rewards by BlockNo.
     *
     * @param int $blockNumber
     *
     * @return array
     */
    public function getBlockReward($blockNumber) {
        return $this->request([
            'module' => "block",
            'action' => "getblockreward",
            'blockno' => $blockNumber
        ]);
    }

    // === Event Logs ==========================================================

    //TODO: implement

    // === Geth/Parity Proxy APIs ==============================================

    //TODO: implement

    // === Websockets ==========================================================

    //TODO: implement

    // === Token Info ==========================================================



    /**
     * Get Token TotalSupply by TokenName (Supported TokenNames: DGD, MKR,
     * FirstBlood, HackerGold, ICONOMI, Pluton, REP, SNGLS).
     *
     * or
     *
     * by ContractAddress.
     *
     * @param string $tokenIdentifier Token name from the list or contract address.
     *
     * @return array
     */
    public function tokenSupply($tokenIdentifier) {
        $params = [
            'module' => "stats",
            'action' => "tokensupply",
        ];

        if (strlen($tokenIdentifier) === 42) {
            $params['contractaddress'] = $tokenIdentifier;
        } else {
            $params['tokenname'] = $tokenIdentifier;
        }

        return $this->request($params);
    }

    /**
     * Get Token Account Balance by known TokenName (Supported TokenNames: DGD,
     * MKR, FirstBlood, HackerGold, ICONOMI, Pluton, REP, SNGLS).
     *
     * or
     *
     * for TokenContractAddress.
     *
     * @param string $tokenIdentifier Token name from the list or contract address.
     * @param string $address Ether address.
     * @param string $tag
     *
     * @return array
     */
    public function tokenBalance($tokenIdentifier, $address, $tag = self::TAG_LATEST) {
        $params = [
            'module' => "stats",
            'action' => "tokenbalance",
            'address' => $address,
            'tag' => $tag
        ];

        if (strlen($tokenIdentifier) === 42) {
            $params['contractaddress'] = $tokenIdentifier;
        } else {
            $params['tokenname'] = $tokenIdentifier;
        }

        return $this->request($params);
    }

    // === General Stats =======================================================

    /**
     * Get Total Supply of Ether.
     *
     * @return int Result returned in Wei, to get value in Ether divide
     *           resultAbove / 1000000000000000000
     */
    public function ethSupply() {
        return $this->request([
            'module' => "stats",
            'action' => "ethsupply",
        ]);
    }

    /**
     * Get Ether LastPrice Price.
     *
     * @return float
     */
    public function ethPrice() {
        return $this->request([
            'module' => "stats",
            'action' => "ethprice",
        ]);
    }

    // === Utility methods =====================================================

    /**
     * Converts Wei value to the Ether float value.
     *
     * @param int $amount
     *
     * @return float
     */
    public static function convertEtherAmount($amount) {
        return (float)$amount / pow(10, 18);
    }

    /**
     * Checks if transaction is input transaction.
     *
     * @param string $address Ether address.
     * @param array $transactionData Transaction data.
     *
     * @return bool
     */
    public static function isInputTransaction($address, $transactionData) {
        return (strtolower($transactionData['to']) === strtolower($address));
    }

    /**
     * Checks if transaction is output transaction.
     *
     * @param string $address Ether address.
     * @param array $transactionData Transaction data.
     *
     * @return bool
     */
    public static function isOutputTransaction($address, $transactionData) {
        return (strtolower($transactionData['from']) === strtolower($address));
    }
	
	
	public static $blockTypes = [
        self::BLOCK_TYPE_BLOCKS, self::BLOCK_TYPE_UNCLES
    ];
	
	## proxy API #######
	
	/**
     * Checks if transaction is output transaction.
     *
     * @param string $address Ether address.
     * @param array $transactionData Transaction data.
     *
     * @return bool
     */
	 
	 
	 /*
	 	eth_blockNumber
		Returns the number of most recent block
	 *
	 */
	
	public function eth_blockNumber(){
		 $params = [
            'module' => "proxy",
            'action' => "eth_blockNumber",
        ];
		return $this->request($params);
	}
		
		
		
		
		/*eth_getBlockByNumber
		Returns information about a block by block number.
		*/
	public function eth_getBlockByNumber($tag = self::TAG_LATEST,$bolean = false ){
		 $params = [
            'module' => "proxy",
            'action' => "eth_blockNumber",
			'tag'=> $tag,
			'bolean'=>$bolean
        ];
		return $this->request($params);
	}
		
		
		/*eth_getUncleByBlockNumberAndIndex
		Returns information about a uncle by block number.
		
		https://api.etherscan.io/api?module=proxy&action=eth_getUncleByBlockNumberAndIndex&tag=0x210A9B&index=0x0&apikey=YourApiKeyToken
		*/
		
	public function eth_getUncleByBlockNumberAndIndex($tag = self::TAG_LATEST , $index='0x0'){
		 $params = [
            'module' => "proxy",
            'action' => "eth_getUncleByBlockNumberAndIndex",
			'tag'=> $tag,
			'index'=>$index
        ];
		return $this->request($params);
	}
		
		
		
		/*eth_getBlockTransactionCountByNumber
		Returns the number of transactions in a block from a block matching the given block number
		
		https://api.etherscan.io/api?module=proxy&action=eth_getBlockTransactionCountByNumber&tag=0x10FB78&apikey=YourApiKeyToken
		*/
	public function eth_getBlockTransactionCountByNumber($tag = self::TAG_LATEST){
		 $params = [
            'module' => "proxy",
            'action' => "eth_getBlockTransactionCountByNumber",
			'tag'=> $tag
        ];
		return $this->request($params);
	}
		
		
		
		/*eth_getTransactionByHash
		Returns the information about a transaction requested by transaction hash
		
		https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=0x1e2910a262b1008d0616a0beb24c1a491d78771baa54a33e66065e03b1f46bc1&apikey=YourApiKeyToken
		*/
	public function eth_getTransactionByHash($hash){
		 $params = [
            'module' => "proxy",
            'action' => "eth_getTransactionByHash",
			'hash'=> $hash
        ];
		return $this->request($params);
	}
		
		
		/*eth_getTransactionByBlockNumberAndIndex
		Returns information about a transaction by block number and transaction index position
		
		https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByBlockNumberAndIndex&tag=0x10d4f&index=0x0&apikey=YourApiKeyToken
		*/
	public function eth_getTransactionByBlockNumberAndIndex($tag = self::TAG_LATEST , $index='0x0'){
		 $params = [
            'module' => "proxy",
            'action' => "eth_getTransactionByBlockNumberAndIndex",
			'tag'=> $tag,
			'index'=>$index
        ];
		return $this->request($params);
	}
		
		
		/*eth_getTransactionCount
		Returns the number of transactions sent from an address
		
		https://api.etherscan.io/api?module=proxy&action=eth_getTransactionCount&address=0x2910543af39aba0cd09dbb2d50200b3e800a63d2&tag=latest&apikey=YourApiKeyToken*/
	public function eth_getTransactionCount($address){
		 $params = [
            'module' => "proxy",
            'action' => "eth_getTransactionCount",
			'address'=> $address,
        ];
		return $this->request($params);
	}
		
		
		/*eth_sendRawTransaction
		Creates new message call transaction or a contract creation for signed transactions
		
		https://api.etherscan.io/api?module=proxy&action=eth_sendRawTransaction&hex=0xf904808000831cfde080&apikey=YourApiKeyToken
		(Replace the hex value with your raw hex encoded transaction that you want to send.
		Send as a POST request, if your hex code is particularly long)*/
		
	public function eth_sendRawTransaction($hex){
		 $params = [
            'module' => "proxy",
            'action' => "eth_sendRawTransaction",
			'hex'=> $hex,
        ];
		return $this->request($params,'POST');
	}
		
		
		/*eth_getTransactionReceipt
		Returns the receipt of a transaction by transaction hash
		
		https://api.etherscan.io/api?module=proxy&action=eth_getTransactionReceipt&txhash=0x1e2910a262b1008d0616a0beb24c1a491d78771baa54a33e66065e03b1f46bc1&apikey=YourApiKeyToken
		*/
	public function eth_getTransactionReceipt($txhash){
		 $params = [
            'module' => "proxy",
            'action' => "eth_getTransactionReceipt",
			'txhash'=> $txhash,
        ];
		return $this->request($params,'POST');
	}
	
	/*
		eth_call
		Executes a new message call immediately without creating a transaction on the block chain
		https://api.etherscan.io/api?module=proxy&action=eth_call&to=0xAEEF46DB4855E25702F8237E8f403FddcaF931C0&data=0x70a08231000000000000000000000000e16359506c028e51f16be38986ec5746251e9724&tag=latest&apikey=YourApiKeyToken*/
		
	public function eth_call(\phpEther\Transaction $message, $tag = self::TAG_LATEST ){
		 $payload = $message->getArray();
		 $params = [
			'module' => "proxy",
            'to' => $payload['to'],
            'action' => "eth_call",
			'data'=> $payload['data'],
			'tag'=> $tag,
        ];
		return $this->request($params);
	}
	
	
		
		/* eth_getCode
		Returns code at a given address		
		https://api.etherscan.io/api?module=proxy&action=eth_getCode&address=0xf75e354c5edc8efed9b59ee9f67a80845ade7d0c&tag=latest&apikey=YourApiKeyToken */
		
	public function eth_getCode($address, $tag = self::TAG_LATEST ){
		 $params = [
		 	'module' => "proxy",
            'action' => "eth_getCode",
			'address'=> $address,
			'tag'=> $tag,
        ];
		return $this->request($params);
	}
		
		
	/*	eth_getStorageAt (**experimental)
		Returns the value from a storage position at a given address.
		
		https://api.etherscan.io/api?module=proxy&action=eth_getStorageAt&address=0x6e03d9cce9d60f3e9f2597e13cd4c54c55330cfd&position=0x0&tag=latest&apikey=YourApiKeyToken*/
		
	public function eth_getStorageAt($address, $position, $tag = self::TAG_LATEST ){
		 $params = [
		 	'module' => "proxy",
            'action' => "eth_getStorageAt",
			'address'=> $address,
			'position'=> $position,
			'tag'=> $tag,
        ];
		return $this->request($params);
	}
		/*eth_gasPrice
		Returns the current price per gas in wei.
		
		https://api.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=YourApiKeyToken
		*/
	public function eth_gasPrice(){
		 $params = [
            'module' => "proxy",
            'action' => "eth_gasPrice",
        ];
		return $this->request($params);
	}
	/*
		
		eth_estimateGas
		Makes a call or transaction, which won't be added to the blockchain and returns the used gas, which can be used for estimating the used gas
		
		https://api.etherscan.io/api?module=proxy&action=eth_estimateGas&to=0xf0160428a8552ac9bb7e050d90eeade4ddd52843&value=0xff22&gasPrice=0x051da038cc&gas=0xffffff&apikey=YourApiKeyToken*/
	public function eth_estimateGas(\phpEther\Transaction $tx, $tag = self::TAG_LATEST ){
		 $payload =  array_filter($tx->getArray()); 
		 unset ($payload['from']);
		 $payload['module']= "proxy";
		 $payload['action'] = "eth_call";
		 return $this->request($payload);
	}

}

	
   