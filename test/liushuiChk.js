

UserID=29274668
start="2023-10-01"
endDt="2023-11-02"



//select sum(allbet) from zhudan wehre   curdate >sttDt && curdate<endDtx
// aggr sum allbet ,vldbet
//aggr sum algo, wehre flt ,then map, sum arr just ok
require("../libx/file")
sttDt=new Date(start)
endDtx=new Date(endDt)
let dbf = __dirname + "/../db_zhudan/zhudan_uid" + UserID;
let dtRows = readFileAsJsonV2(dbf, [])
const result = dtRows.filter(
    (row) => {


        let curdate=new Date(row.GameStartTime)
        if(  curdate >sttDt && curdate<endDtx)
        {
            return true;
        }
    }
);

console.log(sumCol(result, (e)=>e.AllBet))


function sumAllbet(rows) {
   let data_rows =rows



        let modifiedArr = data_rows.map(function(element){
            return element.AllBet;
        });


        require("../libx/arr"  +   "")

        console.log(  array_sum(modifiedArr) )
        let arraySum = array_sum(modifiedArr);
        arraySum=arraySum.toFixed(2)
        return  arraySum ;



}



function sumCol(rows,colMapFun) {
    let data_rows =rows



    let modifiedArr = data_rows.map(colMapFun);


    require("../libx/arr"  +   "")

    console.log(  array_sum(modifiedArr) )
    let arraySum = array_sum(modifiedArr);
    arraySum=arraySum.toFixed(2)
    return  arraySum ;



}


//29274668	5722047804	暴暴暴暴暴暴