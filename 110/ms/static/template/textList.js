/// <reference path="../js/common.js" />

jc.data.setup(function (data) {
    var html = '';

    if (!data) return html;

    var list = data.list;

    var columnListId = window.columnListId || data.id;
    if(list.length<1){
        html+='<li class="item cl" style="margin: 0.5rem 0.5rem;" >';
        html+='<div class="info wrapper2" style="text-align: center;">';
        html+='<p class="name" style="font-size: 1.0rem; color: #999;">';
        html+='<span>没有找到相关信息~~~</span>';
        html+='</p>';
        html+='<p class="count-cont mgt-5">';
        html+='</p></div>';
        html+='</li>';
    }

    for (var i = 0, l = list.length; i < l; i++) {

        var firstClass = i == 0 ? "first" : "";

        var curList = list[i];

        html+='<li class="item cl" style="margin: 0.5rem 0.5rem; border: 1px solid #e2e9ea" onclick="window.router(\'menuAndDetail\',{ rootColumnId:\'' + window.rootColumnId + '\',columnListId:\'' + columnListId + '\',articleId:\'' + curList.id + '\' });">';
        html+='<div  class="pic default-img fl" style="width: 37%;height: auto;">';
        html+='<img src="' + (curList.coverImageUrl ? window.serverUploadPath + curList.coverImageUrl : window.notImgUrl) + '" alt="" />';
        html+='</div>';
        html+='<div class="info wrapper2" style="margin-left: 40%;">';
        html+='<p class="name" style="font-size: 1.0rem;">';
        html+='<a href="javascript:;">'+curList.title+'</a>';
        html+='</p>';
        html+='<p class="count-cont mgt-5">';
        //html+='<span>34459934</span>';
       // html+='<br />';
        html+='<span>'+(jc.tools.formatDate(curList.createDate, 'yyyy-MM-dd'))+'</span>';
        html+='</p></div>';
        html+='</li>';

    }

    return html;

});