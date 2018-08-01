jc.data.setup(function (data) {
    var html = '';

    html += '<div class="d_header">';
    html += '<div class="h_title">' + this.getString(data.title) + '</div>';
    html += '<div class="h_intro">';
    html += '<span>' + (jc.tools.formatDate(data.createDate, 'yyyy-MM-dd')) + '</span>';
    html += '<span><a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUxMTEwMzgzMQ==&scene=124#wechat_redirect">寸草春晖情</a></span>';
    /*  html += '<span>编辑于：' + (jc.tools.formatDate(data.updateDate, 'yyyy-MM-dd hh:mm:ss')) + '</span>';*/
    html += '<span>阅读量：' + (data.viewCount) + '</span>';
    html += '</div>';
    html += '</div>';
    html += '<div class="d_main">';

    var content = this.getString(data.content);
  
    html += content;
    html += '</div>';
    html += '<div class="d_footer">';
    html += '<div class="f_left">';
    html += '<a data-type="prev" href="javascript:;">上一篇</a>';
    html += '</div>';
    html += '<div class="f_right">';
    html += '<a data-type="next" href="javascript:;">下一篇</a>';
    html += '</div>';
    html += '</div>';



    return html;

});