/**
 *
 * @param $url
 * @param f
 * @param failF
 */
function http_get_jqGet($url, f, failF) {

    console.log(" [http_get_jqget] " + $url)


    // log_info("\r\n");

    log_info("  [http_get_jqget] url=>" + $url);

    $.get($url, function (data) {
        console.log("[http_get_jqget_sccsFun] ret=>" + $url)
        log_info(" [jqGet] ret=>" + data);
        if(f)
        f(data)
        return data;
    }, "text").fail(failF);
}




// $.ajax(
//     {
//         url: $url,
//         data: {},
//         success: function (data) {
//             console.log("[http_get_jqget] ret=>" + $url)
//             log_info(" [jqGet] ret=>" + data);
//             f(data)
//         },
//         dataType: "text", async: false
//
//     }
// ).fail(failF);

global['http_get_jqGetSync'] = http_get_jqGetSync

/**
 *
 * @param $url
 * @param f sucessFun
 * @param failF
 */
function http_get_jqGetSync($url, f, failF) {

    console.log(" [http_get_jqget] " + $url)


    // log_info("\r\n");

    log_info("  [http_get_jqget] url=>" + $url);

    const $ = require("jquery");
    // $.ajaxSetup({
    //      async:false
    // } )  // cant find ajax setup

    //ajax get fun all cant find ..
    $.ajax(
        {
            url: $url,
            data: {},
            success: function (data) {
                console.log("[http_get_jqget] ret=>" + $url)
                log_info(" [jqGet] ret=>" + data);
                f(data)
            },
            dataType: "text", async: false

        }
    ).fail(failF);
}