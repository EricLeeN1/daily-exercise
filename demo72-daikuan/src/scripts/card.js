$(function () {
  $("header img").on('click',function () {
    window.history.go(-1)
  })
  $(".btn-login").on('click', function () {
    if (true) {
      window.location.href = './card1.html'
    } else {
      alert('信息不完整')
    }
  });
  $("#card .form-item input").on('change', function () {
    console.log($(this).attr('id'));
    previewFile($(this).prev('img')[0],$(this)[0].files[0])
  });

  function previewFile(img,file) {
    var preview = img;
    var file = file;
    var reader = new FileReader();
    reader.onloadend = function (res) {
      console.log(res);
      preview.src = reader.result;
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }
})