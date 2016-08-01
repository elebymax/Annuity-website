/**
 * Created by max on 2016/5/21.
 */

var idArr = new Array();

function change(id){
    if(idArr.indexOf(id)==-1){
        $(id).attr("src","res/image/minus.png");
        idArr.splice(idArr.length, 0, id);
    }else{
        $(id).attr("src","res/image/add.png");
        idArr.splice(idArr.indexOf(id), 1);
    }
}