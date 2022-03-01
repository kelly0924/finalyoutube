function showHiddenNav(){

    var mainLeftHiddenNav=document.getElementById("main_left_hidden_nav");
    var mainCenterDiv=document.getElementsByClassName("main_center_div");
    var mainCenter=document.getElementById("main_center");
    var mainCenterDivImg=document.getElementsByClassName("main_center_div_img");
    var mainCenterDivDetails=document.getElementsByClassName("main_center_div_details");
     
    var tmpLeftNav=document.getElementById("main_left_nav");   
    var rectObjec= tmpLeftNav.getBoundingClientRect();
    console.log(rectObjec.x, rectObjec.y);

    if( rectObjec.x > 0){
        mainLeftHiddenNav.style.transform = "translate(0px,0px)";
        document.getElementById("main_left_nav").style.transform="translate(-100px,0px)";
        mainCenter.style.transform= "translate(168px,0px)";
        for(var index =0; index<mainCenterDivImg.length; index++){
            mainCenterDivImg[index].style.width="250px";
            mainCenterDivImg[index].style.height="150px";
            mainCenter.style.width="84.3%";
        }

    }else{
        mainLeftHiddenNav.style.transform = "translate(-240px,0px)";
        document.getElementById("main_left_nav").style.transform="translate(0px,0px)";
        mainCenter.style.transform= "translate(0px,0px)";
        for(var index =0; index<mainCenterDivImg.length; index++){
            mainCenterDivImg[index].style.width="320px";
            mainCenterDivImg[index].style.height="170px";
            mainCenter.style.width="100%";
        }
        location.reload();
    }
     
}