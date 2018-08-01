<?php
/**
 * =================================================
 * @版权所有  网悦时代，并保留所有权利。
 * @网站地址: http://soft.wangyue.cc；
 * -------------------------------------------------
 * @这是一个商业软件！您只能在得到官方的授权才可对程序代码进行修改
 * @使用；不允许对程序代码以任何形式任何目的的再发布。
 * @inc_config.php
 * =================================================
*/
if(!defined('PATH_ROOT')){
	exit('Access Denied');
}
define('COOKIE_DOMAIN', ''); //正式环境中如果要考虑二级域名问题的应该用 .xxx.com
define('COOKIE_PATH', '/');
define('URL', 'http://micbuy.cn/tb/');
// --------------------------  CONFIG CONFIG  --------------------------- //
$GLOBALS['config']['db_host']['master'] = 'rm-uf6355614g4u9p998o.mysql.rds.aliyuncs.com';
$GLOBALS['config']['db_host']['slave']['0'] = 'rm-uf6355614g4u9p998o.mysql.rds.aliyuncs.com';
$GLOBALS['config']['db_user'] = 'root';
$GLOBALS['config']['db_name'] = 'tbk_xy';
$GLOBALS['config']['db_pass'] = '123!@#qwe';
$GLOBALS['config']['db_pre'] = 'pre_';
$GLOBALS['config']['cookie_pre'] = 'SmRZ6LR#puAZ';
$GLOBALS['config']['cookie_pwd'] = 'iI3xQTM#ccnA';


// -------------------  THE END  -------------------- //

?>