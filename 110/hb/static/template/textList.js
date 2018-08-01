/// <reference path="../js/common.js" />

jc.data.setup(function (data) {
    var html = '';

    if (!data) return html;

    var list = data.list;

    var columnListId = window.columnListId || data.id;
    if(list.length<1){

        html+='<div class="info wrapper2" style="text-align: center;margin-top: 14rem; ">';
        html+='<p class="name" style="font-size: 1.8rem; color: #999;">';
        html+='<span>没有找到相关信息~~~</span>';
        html+='</p>';
        html+='<p class="count-cont mgt-5">';
        html+='</p></div>';

    }

    for (var i = 0, l = list.length; i < l; i++) {

        var firstClass = i == 0 ? "first" : "";

        var curList = list[i];

        html+='<li class="cd-item">';
        html+='<div class="single-member effect-8" data-articleId="'+curList.id+'" >';
        html+='<div class="member-info">';
        //html+='<h3>'+curList.title+'</h3>';
        //html+='<h5>'+curList.publisher+'&nbsp;&nbsp;' + (jc.tools.formatDate(curList.createDate, 'yyyy-MM-dd')) + '</h5>';
        html+='<p class="weixinAudio">';
        html+='<audio src="https://img.yzcdn.cn/upload_files/2016/03/06/Fh9x1cwVnoH6q1bdPUqKh_OflAZT.mp3" id="media" width="1" height="1" preload></audio>';
        html+='<span id="audio_area" class="db audio_area">';
        html+='<span class="audio_wrp db">';
        html+='<span class="audio_play_area">';
        html+='<i class="icon_audio_default"></i>';
        html+='<i class="icon_audio_playing"></i>';
        html+='</span>';
        html+='<span id="audio_length" class="audio_length tips_global"></span>';
        html+='<span class="db audio_info_area">';
        html+='<strong class="db audio_title">'+curList.title+'</strong class="db audio_title">';
       // html+='<span class="audio_source tips_global">'+curList.publisher+'&nbsp;&nbsp;' + (jc.tools.formatDate(curList.createDate, 'yyyy-MM-dd')) + '</span>';
        html+='</span>';
        html+='<span id="audio_progress" class="progress_bar" style="width: 0%;"></span>';
        html+='</span>';
        html+='</span>';
        html+='</p>';
        html+='</div>';
        html+='<div class="member-image" onclick="window.router(\'menuAndDetail\',{ rootColumnId:\'' + window.rootColumnId + '\',columnListId:\'' + columnListId + '\',articleId:\'' + curList.id + '\' });">';
        html+='<img src="' + (curList.coverImageUrl ? window.serverUploadPath + curList.coverImageUrl : window.notImgUrl) + '">';
        html+='</div>';
        html+='<div class="more-info">';
        //html+='<p>内容，内容，内容，内容，内容，内容，内容，内容，内容，内容，内容，</p>';
        html+='<div class="social-touch icon-colored">';
        //html+='<a class="fb-touch" href="javascript:;" >进入绘本</a>';
        html+='</div></div></div></li>';

    }

    return html;

});