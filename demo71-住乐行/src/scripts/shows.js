$(function () {
  $(".shows-left p,.attract-list li").on('click',function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active').siblings().removeClass('active');
    }
  })
})