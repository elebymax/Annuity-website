/**
 * Created by max on 2016/5/18.
 */
var optionW = 250;
var nameW = 403;
var optionCount = 0;

$(function(){
    var url = window.location;
    var urlAux = url.toString().split("=");
    var option = urlAux[1];
    optionCount = option;
    changeFrameURL(optionCount);
});

$(document).ready(function(){
    $("#option_btn_right").click(function(){
        if(optionCount<3){
            optionCount++;
            $("#head_option").animate({
                scrollLeft: $("#pay_option").scrollLeft() + optionW*optionCount
            }, 500,function(){});
            $("#head_name").animate({
                scrollLeft: $("#pay_name").scrollLeft() + nameW*optionCount
            }, 500,function(){});
            changeFrameURL(optionCount);
        }
    });
    $("#option_btn_left").click(function(){
        if(optionCount>0){
            optionCount--;
            $("#head_option").animate({
                scrollLeft: $("#pay_option").scrollLeft() + optionW*optionCount
            }, 500,function(){});
            $("#head_name").animate({
                scrollLeft: $("#pay_name").scrollLeft() + nameW*optionCount
            }, 500,function(){});
            changeFrameURL(optionCount);
        }
    });
});

function changeFrameURL(option){
    $("#head_option").animate({
        scrollLeft: $("#pay_option").scrollLeft() + optionW*optionCount
    }, 500,function(){});
    $("#head_name").animate({
        scrollLeft: $("#pay_name").scrollLeft() + nameW*optionCount
    }, 500,function(){});
    switch (parseInt(option)){
        case 0:
            document.getElementById("frame_question").src = 'question_disability.html';
            break;
        case 1:
            document.getElementById("frame_question").src = 'question_birth.html';
            break;
        case 2:
            document.getElementById("frame_question").src = 'question_old.html';
            break;
        case 3:
            document.getElementById("frame_question").src = 'question_death.html';
            break;
    }
}

function changeOption(option) {
    document.location.href="pay.html?option="+option;
}