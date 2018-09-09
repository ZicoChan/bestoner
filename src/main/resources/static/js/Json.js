$(function(){
    $.ajax({
        url:'http://1.mini.eastday.com/tips/tipsxxl.json',
        type:'get',
        dataType:'json',
        data:"",
        error:error,
        success:success,
    })

    function error(){
        alert("调用出错！");
    }

    function success(data){
        //alert("返回数据如下！" + data);
        console.log(data);
        showData(data);
    }
    function showData(data){
        var arr = eval(data.data);
        // arr = arr.parseJSON(data.data);
        if(arr != null && arr.length >0){
            var URL,IMG,Topic,Source = null;
            var size = 0;
            for(var i in arr){
                console.log(i)
                size = arr[i].miniimg_size;
                URL = arr[i].url;
                Topic = arr[i].topic;
                Source = arr[i].tpch;
                var miniimg = eval(arr[i].miniimg);
                var url = null;
                for(var j in miniimg){
                    IMG = miniimg[j].src;
                    url = miniimg[j].url;
                    console.log(IMG + url);
                }

                console.log(size,URL,Source,Topic);
            }
        }

        console.log(arr);
    }
})