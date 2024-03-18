



//   puppeteer  web gui bot
global['page_select']=page_select

async function page_select(el, val) {


    try {
        await page.select(el, val)
    } catch (e) {
        console.log(e)
    }
}
global['page_type']=page_type
async function page_type(el, val) {
    try {
        await page.type(el, val)
    } catch (e) {
        console.log(e)
    }
}