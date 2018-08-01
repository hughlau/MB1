/// <reference path="../js/common.js" />

jc.data.setup(function (data) {
    var html = '';

    if (!data) return html;

    var list = data.list;

    var columnListId = window.columnListId || data.id;


    for (var i = 0, l = list.length; i < l; i++) {

        var firstClass = i == 0 ? "first" : "";

        var curList = list[i];

        html+='<li class="item cl" style="margin: 0.5rem 0.5rem; border: 1px solid #e2e9ea" >';
        html+='<div onclick="window.router(\'menuAndDetail\',{ rootColumnId:\'' + window.rootColumnId + '\',columnListId:\'' + columnListId + '\',articleId:\'' + curList.id + '\' });">';
        html+='<div class="pic default-img fl" style="width: 37%;height: auto;">';
        html+='<img src="' + (curList.coverImageUrl ? window.serverUploadPath + curList.coverImageUrl : window.notImgUrl) + '" alt="" />';
        html+='</div>';
        html+='<div class="info wrapper2" style="margin-left: 40%;">';
        html+='<p class="name">';
        html+=curList.title;
        html+='</p>';
        html+='<p class="count-cont mgt-5">';
        //html+='<span>34459934</span>';
        // html+='<br />';
        //html+='<span>最后更新 2016-12-11</span>';
        html+='</p></div>';

        html+='</div>';
        html+='</li>';

    }




    return html;

});