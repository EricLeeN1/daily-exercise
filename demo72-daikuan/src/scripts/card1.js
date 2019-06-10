$(function () {
  $("#btn-times").on('click',function () {
    $(this).hide();
    $(this).next().show();
    let seconds = 60;
    let timer = setInterval(() => {
      console.log(seconds);
      if (seconds > 1) {
        seconds --;
        $(this).next().text(`${seconds}s再次点击`)
      }else{
        clearInterval(timer);
        $(this).next().hide();
        $(this).show();
        $(this).next().text('59s再次点击')
      }
    }, 1000);
  });
  $('.btn-login').on('click',function () {
    alert('提交成功')
  })
})