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
                if(i < 3){
                    console.log(i)
                    size = arr[i].miniimg_size;
                    URL = arr[i].url;
                    Topic = arr[i].topic;
                    Source = arr[i].tpch;
                    var miniimg = eval(arr[i].miniimg);
                    var url = null;
                    var divData = null;
                    IMG = miniimg[0].src;
                    url = miniimg[0].url;
                    divData = "<div class='firstData' onmouseover=this.style.backgroundColor='#F0F0F0' onmouseout=this.style.backgroundColor='#FFFFFF'><a href='"+ url +"'><div><img class='miniImg' src='https://"+IMG+ "'></div><div class='topic'>"+Topic+"</br><span class='newsType'>"+ Source +"</span></div></a></div></<br>";
                    $("#frameOut").append(divData);
                }
               // console.log(size,URL,Source,Topic);
            }

        }

        console.log(arr);
    }
})