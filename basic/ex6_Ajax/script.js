function test() {
    $.ajax({
        type: "GET",
        url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
        data: {},
        success: function (response) {
            let rows = response;
            console.log(rows)
        }
    });
}