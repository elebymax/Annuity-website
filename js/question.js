/**
 * Created by max on 2016/5/20.
 */

$(function(){
    $(".quest_option").accordion({
        collapsible: true,
        active: false});
});

//$(document).ready(function(){
//    $(".option_bar").click(function(){
//        parent.document.getElementById("frame_question").height=document.body.scrollHeight;
//    });
//});

function frameResize(){
    parent.document.getElementById("frame_question").height = document.body.clientHeight;
}