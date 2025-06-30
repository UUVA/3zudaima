(function () {
  initActive()
  bindEvenInit()
  var mycard = $('#mycard')
  
    let mycardTop = mycard&&mycard.offset()&&mycard.offset().top;
    // let height=$('.header').height()
    // console.log(mycardTop,height)
    window.onscroll = function () {
      var e = e || window.event;
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop )
      if (scrollTop > mycardTop) {
        mycard.addClass('scroll')
      } else {
        mycard.removeClass('scroll')
      }
    }
 

  function initActive () {
  let root = document.querySelector(':root')
  var active = sessionStorage.getItem('wttandroid')

  // 如果 active 是 'true' 或者 null/undefined，都走日间模式
  if (active !== 'false') { 
    $('#myRadio').removeClass('active')
    $('.navigation').removeClass('active')

    root.style.setProperty('--backColor', '#cceeff')        
    root.style.setProperty('--borderline', '#91d5ff')       
    root.style.setProperty('--headerCOlor', '#81caff8c')    
    root.style.setProperty('--headerhover', 'rgb(255, 255, 255,.8)')
    root.style.setProperty('--headerFont', '#000')          
    root.style.setProperty('--fontColor', '#000')
    root.style.setProperty('--mainColor', '#1890ff')        
    root.style.setProperty('--bagColor', '#cceeff')         

    sessionStorage.setItem('wttandroid', 'true') // 明确设置默认为 true
  } else {
    $('#myRadio').addClass('active')
    $('.navigation').addClass('active')

    root.style.setProperty('--backColor', '#002244')        
    root.style.setProperty('--borderline', '#003366')       
    root.style.setProperty('--headerCOlor', '#002244')      
    root.style.setProperty('--headerhover', 'rgb(0, 40, 58,.8)')
    root.style.setProperty('--headerFont', '#fff')          
    root.style.setProperty('--fontColor', '#fff')
    root.style.setProperty('--mainColor', '#004080')        
    root.style.setProperty('--bagColor','#001a33')          
  }
}

$('#myRadio').click(function () {
  let root = document.querySelector(':root')

  if ($('#myRadio').hasClass('active')) { // 切换到白天模式
    sessionStorage.setItem('wttandroid', true)

    $('#myRadio').removeClass('active')
    $('.navigation').removeClass('active')

    root.style.setProperty('--backColor', '#cceeff')
    root.style.setProperty('--borderline', '#91d5ff')
    root.style.setProperty('--headerCOlor', '#81caff8c')
    root.style.setProperty('--headerhover', 'rgb(255, 255, 255,.8)')
    root.style.setProperty('--headerFont', '#000')
    root.style.setProperty('--fontColor', '#000')
    root.style.setProperty('--mainColor', '#1890ff')
    root.style.setProperty('--bagColor', '#cceeff')

  } else { // 切换到黑夜模式
    sessionStorage.setItem('wttandroid', false)

    $('#myRadio').addClass('active')
    $('.navigation').addClass('active')

    root.style.setProperty('--backColor', '#002244')
    root.style.setProperty('--borderline', '#003366')
    root.style.setProperty('--headerCOlor', '#002244')
    root.style.setProperty('--headerhover', 'rgb(0, 40, 58,.8)')
    root.style.setProperty('--headerFont', '#fff')
    root.style.setProperty('--fontColor', '#fff')
    root.style.setProperty('--mainColor', '#004080')
    root.style.setProperty('--bagColor','#001a33')
  }
})

  

   
$('#zhezhao>.close').click(function () {
  console.log('遮罩层')
  if ($('#zhezhao').hasClass('active')) {
    $('#zhezhao').removeClass('active')
    document.getElementById('videoResumeC').pause();
  } else {
    $('#zhezhao').addClass('active')
  }
})
  
$('#minmenu').click(function () {
  console.log('遮罩层')
  if ($('#minmenu').hasClass('active')) {
    $('#minmenu').removeClass('active');
    $('.menu_list').removeClass('active');
    
  } else {
    $('#minmenu').addClass('active')
    $('.menu_list').addClass('active')
  }
})
  
  

  
  
  // loadding
  document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
      let opacity = $('.lodding-wrap').css('opacity');
      let timer = null;
      timer = opacity&&setInterval(() => {
        opacity-=0.1
        $('.lodding-wrap').css('opacity', opacity);
        console.log(opacity)
        if (opacity <= 0) {
          $('.lodding-wrap').css('display','none');
          clearInterval(timer)
        }
      }, 100);
     
    }
  }

  

            //锚点定位初始化
            function bindEvenInit(){
              $('.navbtn').bind("click touch",function () {
                //scrollTop 滚动到  $(this).attr('href')锚点关联id所在位置
                $('html,body').animate({scrollTop:($($(this).attr('href')).offset().top-100)},500)
                return false
              })
            }
})()
