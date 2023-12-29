function importUserFm() {
    authChkFrt()
    $("#fileInput").click()
}


global['importUser'] = importUser


/**
 *
 * @param file
 * @returns {string}
 */
function importUser(file) {

    req = global['req'];
    //let t = readFileFromUploadFile(req);
    //readFileSyncx(avatar)
    //console.log("==file txt:=>" + t.substr(0, 300))
    console.log("importUser...")

    readExcelFromUploadFile(req, (row)=>{
        console.log(row)
        let uid=row[1]
        let uname = row[2]
        let nknm = row[3]
        let agtid = row[4]

        if(!isExistUser(uname))
        {
            let obj={"userid":uid,"account": uname,"nickname":nknm,"agtid":agtid,"uid":uid,"uname":uname,"nknm":nknm,"time": curDatetimeV2()}
            let file = getDbdir()+"/userColl.json";
            pdo_insert(obj,file)
        }

    })
    return "ok."
}


/**
 *
 */
function importUserUploadUserdt() {
    var formData = new FormData();
    // 获取文件
    var fileData = $("#fileInput").prop("files")[0];
    formData.append("file1", fileData);

    $.ajax({
        url: '/callrmt?callfun=importUser',
        type: 'POST',
        async: false,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            alert(data);
        }
    });


}