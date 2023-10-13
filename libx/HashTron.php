<?php

namespace app\common;

use app\common\Lottery;
use app\common\helper;
use app\common\Logs;

class LotteryHash28 extends Lottery
{

    protected $api_url = "https://apilist.tronscanapi.com/api/block";
    protected $http_helper;
    protected $data = false;
    protected $start = false;
    protected $last_opentime = 0;

    public function __construct()
    {
        $this->http_helper = new Helper();
    }

    public function setData($data)
    {
        $this->data = $data;
    }

    // 获取最后彩期
    public function get_last_no()
    {
        $log = Logs::get_last_lottery_log();
        $today = date("Y-m-d", time());
        $no = "";//date("md", time());
        $res = $this->http_helper->http_request($this->api_url . "?sort=-number&limit=1&count=true&hash=lasted");
        $res = json_decode($res);
        $this->data = [
            'lottery_no' => intval($no . $log['Id']),
            'hash_no' => $res->data[0]->number + 40,
        ];
        return $this->data;
    }

    // 获取当前彩期
    public function get_current_no()
    {
        if (!$this->data) return false;
        $this->data['lottery_no'] += 1;
        $now = time();
        // 120秒一期
        $elapsed = $now - $this->last_opentime;
        $step = 1 + intval($elapsed / 120);
        $mod = $elapsed % 120;
        if($mod > 14)
            $step += 1;
        $this->data['hash_no'] += 40 * $step;
        return $this->data;
    }

    // 开奖
    public function draw()
    {
        if (!$this->data) return false;
        while (true) {
            $res = $this->http_helper->http_request('https://apilist.tronscanapi.com/api/block?sort=-number&limit=1&count=true&number=' . $this->data['hash_no']);
            if (!is_bool($res)) {
                $res = json_decode($res);
                if (count($res->data) > 0) {
                    $this->last_opentime = $res->data[0]->timestamp;
                    return $res->data[0]->hash;
                }
            }
            sleep(1);
        }
    }

    public function drawV2()
    {
        if (!$this->data) return false;
        try {
            $res = $this->http_helper->http_request('https://apilist.tronscanapi.com/api/block?sort=-number&limit=1&count=true&number=' . $this->data['hash_no']);
            if (!is_bool($res)) {
                $res = json_decode($res);
                if (count($res->data) > 0) {
                    $this->last_opentime = ceil($res->data[0]->timestamp/1000); // 毫秒转秒
                    return $res->data[0]->hash;
                }
            }
            return false;
        } catch (\Exception $e) {
            trace($e->getMessage(),"debug");
            return false;
        }
    }
}
