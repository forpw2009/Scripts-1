/*
小小影视

QuanX1.0.10
[rewrite_local]
https:\/\/.*\.xxjjappss\.com\/(vod\/reqplay\/|ucp/index|getGlobalData) url script-response-body https://raw.githubusercontent.com/muxu-i/Scripts/master/Js/xxys.js

[MITM]
hostname= *.xxjjappss.com

小小影视下载地址：http://IDINEK.xiaoxiaoys1.com/?inviteCode=IDINEK
*/

const path1 = "/ucp/index";
const path2 = "/vod/reqplay/";
const ad = "/getGlobalData";
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
    obj.data.uinfo["down_daily_remainders"] = "666";
    obj.data.uinfo["play_daily_remainders"] = "666";
    obj.data.uinfo["curr_group"] = "5";
    obj.data.user["isvip"] = "1";
    obj.data.user["goldcoin"] = "666";
}
if ($request.url.indexOf(path2) != -1){
    obj.retcode = "0";
}

if ($request.url.indexOf(ad) != -1) {
    delete obj.data.adrows;
    delete obj.data.adgroups;
    delete obj.data.iOS_adgroups;
    obj.data.app_launch_times_adshow =0;
}
$done({body: JSON.stringify(obj)});
