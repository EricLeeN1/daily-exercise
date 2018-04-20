export default {
    getAjax(url, datas, fns, fnf) {
        $.ajax({
            type: "GET",
            url: this.site + url,
            data: datas,
            dataType: 'JSON',
            success: fns,
            fail: fnf
        });
    },
    postAjax(url, datas, fns, fnf) {
        $.ajax({
            type: "POST",
            url: this.site + url,
            data: datas,
            dataType: 'json',
            success: fns,
            fail: fnf
        });
    }
}