jc.data.setup(function (data) {
    var html = '';

    if (!data) return html;

    html += '<ul>';



    for (var i = 0, l = data.length; i < l; i++) {

        var currentClass = "";

        var curData = data[i];
        var curDataId = curData.id;
        var curDataName = curData.name;

        if (curDataId == columnListId) {
            currentClass = "current";
        }

        html += '<li>';
        html += '<a onclick="window.router(\'menuAndTextlist\',{ rootColumnId:\'' + window.rootColumnId + '\',columnListId:\'' + curDataId + '\' },true);" href="javascript:;">' + (this.getString(curDataName)) + '</a>';
        html += '</li>';
    }


    html += '</div>';



    return html;

});