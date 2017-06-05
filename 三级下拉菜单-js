$(function () {
    // jQuery.support.cors = true;
    $.ajax({
        url: "chinese.json",
        type: "post",
        data: "",
        // contentType:'application/x-www-form-urlencoded',
        dataType: 'json',
        success: function (data) {
            sessionStorage.setItem("province", JSON.stringify(data));
            // console.log(JSON.parse(sessionStorage.getItem("province")));
            // console.log(data);
            var province = '';
            for (var i = 0; i < data.length; i++) {
                province += '<option value=' + i + '>' + data[i].name + '</option>'
            }
            $("#selProvince").append(province);
        }
    });
    $("#selProvince").on("change", function () {
        $("#selCity,#selTown").empty();
        $("#selCity,#selTown").append('<option value="">--请选择--</option>');
        var city = '';
        var data  = JSON.parse(sessionStorage.getItem("province"));
        // console.log($("#selProvince").val());
        // console.log(data[$("#selProvince").val()].city);
        for (var i = 0; i < data[$("#selProvince").val()].city.length; i++) {
            city += '<option value=' + i + '>' + data[$("#selProvince").val()].city[i].name + '</option>'
        }
        $("#selCity").append(city);
    });
    $("#selCity").on("change", function () {
        $("#selTown").empty();
        $("#selTown").append('<option value="">--请选择--</option>');
        var town = '';
        var data  = JSON.parse(sessionStorage.getItem("province"));
        // console.log($("#selCity").val());
        // console.log(data[$("#selProvince").val()].city[$("#selCity").val()].area);
        for (var i = 0; i < data[$("#selProvince").val()].city[$("#selCity").val()].area.length; i++) {
            town += '<option value=' + i + '>' + data[$("#selProvince").val()].city[$("#selCity").val()].area[i] + '</option>'
        }
        $("#selTown").append(town);
    });
});
