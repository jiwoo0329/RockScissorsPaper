function srp(e){
    // var me = ['가위', '바위', '보'];
    var c = Math.floor(Math.random()*3);

    //나의 결과는 e  ,  컴퓨터의 결과는 c 
    var me, com, str, img, img2;
    switch(e){
        case 0:
           me='가위';
           img = 'images/sc.png';
        break; 
        case 1:
            me='바위';
            img='images/ro.png';
        break; 
        case 2:
            me='보';
            img='images/pa.png';
        break; 
    }
    if(c == 0){
        com = '가위';
        img2 = 'images/sc.png';
    }else if(c==1){
        com = '바위';
        img2 = 'images/ro.png';
    }else{
        com = '보';
        img2 = 'images/pa.png';
    }

  //비기는 조건  00 11 22 
  //이기는 조건  02 10 21  
  //지는 조건 01 12 20
   if((e==0&&c==0)||(e==1&&c==1)||(e==2&&c==2)){
       str = "비겼습니다. 다시 하세요.";
   }else if((e==0&&c==2)||(e==1&&c==0)||(e==2&&c==1)){
       str = "이겼습니다. 축하 드려요.";
   }else{
       str = "졌습니다. 그렇게 뿐이 못하세요?";
   }
   document.getElementById("result").innerHTML = str;
   document.getElementById("me").style.backgroundImage="url("+img+")";  
   document.getElementById("com").style.backgroundImage="url("+img2+")";   
}