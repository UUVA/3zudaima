var s = {
  title: {
    el: $("h1"),
    dots: 0
  },
  bowl: {
    el: $(".bowl"),
    top: $(".bowl .top-water")
  }
};

var loading = window.setInterval(function() {
  var str = "";

  if (s.title.dots < 3) {
    s.title.dots++;
  } else {
    s.title.dots = 1;
  }

  for (var i = 0; i < s.title.dots; i++) {
    str += "."
  }

  s.title.el.html("Loading" + str);
}, 500);

// 假设加载时间为 5 秒（5000 毫秒），你可以根据实际情况调整
setTimeout(function() {
  // 清除加载动画的定时器
  clearInterval(loading);
  // 这里替换为你要跳转的目标网页地址
  window.location.href = "./index2.html"; 
}, 2000);