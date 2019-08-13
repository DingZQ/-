//   轮播图
function lunbo() {
    var i = 0;
    setInterval(() => {
        if (i == -2160) {
            i = 0;
            cc1.style.transition = "0s";
        } else { i -= 1080; }
        cc1.style.left = i + "px";
        cc1.style.transition = "0s";

    }, 3000)
}

//手风琴
function show1() {
    tu2.style.left = "600px";
    tu3.style.left = "675px";
    tu4.style.left = "750px";
    tu5.style.left = "825px";
    tu6.style.left = "900px";
    tu7.style.left = "975px";
    tu8.style.left = "1050px";
    tu9.style.left = "1125px";
}

function show2() {
    tu2.style.left = "73px";
    tu3.style.left = "673px";
    tu4.style.left = "762.85px";
    tu5.style.left = "835.7px";
    tu6.style.left = "908.55px";
    tu7.style.left = "981.4px";
    tu8.style.left = "1054.25px";
    tu9.style.left = "1127.1px";
}

function show3() {
    tu2.style.left = "73px";
    tu3.style.left = "145.7px";
    tu4.style.left = "745.7px";
    tu5.style.left = "825px";
    tu6.style.left = "900px";
    tu7.style.left = "975px";
    tu8.style.left = "1050px";
    tu9.style.left = "1125px";
}

function show4() {
    tu2.style.left = "73px";
    tu3.style.left = "145.7px";
    tu4.style.left = "218.55px";
    tu5.style.left = "818.55px";
    tu6.style.left = "900px";
    tu7.style.left = "975px";
    tu8.style.left = "1050px";
    tu9.style.left = "1125px";
}

function show5() {
    tu2.style.left = "73px";
    tu3.style.left = "145.7px";
    tu4.style.left = "218.55px";
    tu5.style.left = "291.4px";
    tu6.style.left = "891.4px";
    tu7.style.left = "975px";
    tu8.style.left = "1050px";
    tu9.style.left = "1125px";
}

function show6() {
    tu2.style.left = "73px";
    tu3.style.left = "145.7px";
    tu4.style.left = "218.55px";
    tu5.style.left = "291.4px";
    tu6.style.left = "364.25px";
    tu7.style.left = "964.25px";
    tu8.style.left = "1050px";
    tu9.style.left = "1125px";
}

function show7() {
    tu2.style.left = "73px";
    tu3.style.left = "145.7px";
    tu4.style.left = "218.55px";
    tu5.style.left = "291.4px";
    tu6.style.left = "364.25px";
    tu7.style.left = "437.1px";
    tu8.style.left = "1037.1px";
    tu9.style.left = "1125px";
}

function show8() {
    tu2.style.left = "73px";
    tu3.style.left = "145.7px";
    tu4.style.left = "218.55px";
    tu5.style.left = "291.4px";
    tu6.style.left = "364.25px";
    tu7.style.left = "437.1px";
    tu8.style.left = "509.95px";
    tu9.style.left = "1109px";
}

function show9() {
    tu2.style.left = "73px";
    tu3.style.left = "145.7px";
    tu4.style.left = "218.55px";
    tu5.style.left = "291.4px";
    tu6.style.left = "364.25px";
    tu7.style.left = "437.1px";
    tu8.style.left = "509.95px";
    tu9.style.left = "600px";
}

function div() {
    tu2.style.left = "133.33px";
    tu3.style.left = "266.66px";
    tu4.style.left = "399.99px";
    tu5.style.left = "533.33px";
    tu6.style.left = "666.66px";
    tu7.style.left = "799.98px";
    tu8.style.left = "933.33px";
    tu9.style.left = "1066.66px";
}
/** 侧边栏缩放监控 */
var detectZoom = (function (){ 
    var ratio = 0,
      screen = window.screen,//返回以像素计的访问者屏幕宽度
      ua = navigator.userAgent.toLowerCase();//判断是手机端还是移动端
      console.log("1:"+ratio,ua,screen);
   
     if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;//返回当前显示设备的物理像素分辨率与 CSS 像素分辨率的比率
        console.log("2:"+ratio);
    }
    else if (~ua.indexOf('msie')) {  
      if (screen.deviceXDPI && screen.logicalXDPI) {
        ratio = screen.deviceXDPI / screen.logicalXDPI;
        //deviceXDPI 属性返回显示屏幕的每英寸水平点数。
        //logicalXDPI 属性可返回显示屏幕每英寸的水平方向的常规点数。
        console.log("3:"+ratio);
      }
    }
    else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
      ratio = window.outerWidth / window.innerWidth;
      console.log("4:"+ratio);
    }
     
     if (ratio){
      ratio = Math.round(ratio * 100);
      console.log("5:"+ratio);
    }
     console.log("6:"+ratio);
     return ratio;
  }
)()
  
  //网页最大6.25   最小0.3125


  ///
 function lytz(){
     
 }