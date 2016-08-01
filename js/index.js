/**
 * Created by max on 2016/5/21.
 */

function goPay(option) {
    document.location.href="pay.html?option="+option;
}

function goDiv(div) {
    $("html,body").animate({scrollTop: $("#"+div).offset().top}, 1000);
}