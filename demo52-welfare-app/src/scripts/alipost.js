window.onload = function () {
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    };
    var total_fee = getQueryString('total_fee');
    var name = getQueryString('name');
    var sex = getQueryString('sex');
    var phone = getQueryString('phone');
    var mail = getQueryString('mail');
    var address = getQueryString('address');
    var invoicing = getQueryString('invoicing');
    var invoice = getQueryString('invoice');
    var TaxID = getQueryString('TaxID');
    var way = getQueryString('way');
    $("#total_fee,input[name='total_fee']").text(total_fee);
    $("#name,input[name='name']").text(name);
    $("#sex,input[name='sex']").text(sex?sex:'男');
    $("#phone,input[name='phone']").text(phone);
    $("#mail,input[name='mail']").text(mail);
    $("#address,input[name='address']").text(address);
    $("#invoicing,input[name='invoicing']").text(invoicing);
    $("#invoice,input[name='invoice']").text(invoice);
    $("#TaxID,input[name='TaxID']").text(TaxID);
    $("#way,input[name='way']").text(way);
    var btn = document.querySelector(".J-btn-submit");
    btn.addEventListener("click", function (e) {
        $("#form").submit();
    }, false);

}