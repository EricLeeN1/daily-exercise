$(function () {
  $("header img").on('click',function () {
    window.history.go(-1)
  })
  $(".btn-login").on('click',function () {
    if (true) {
      window.location.href = './card.html'
    }else{
      alert('信息不完整')
    }
  })
})