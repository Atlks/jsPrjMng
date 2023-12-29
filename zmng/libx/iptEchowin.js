// private void Form1_Load(object sender, EventArgs e)
// {
//     this.TopMost = true;
//     //5秒后开始运行，接着每隔1秒的调用Tick方法
//     //System.Threading.Timer tmr = new System.Threading.Timer(Tick, "tick...", 0, 100);
//     this.Width =1024;
//
//     this.Height = 100;
//
//
//     Timer myTimer = new Timer();
//     //给timer挂起事件 gadd 卡片 gad 猫 gad 猫 gadd 卡片
//     myTimer.Tick += new EventHandler(Tick);
//     //使timer可用
//     myTimer.Enabled = true;
//     //设置时间间隔，以毫秒为单位 lib 类库  lib 类库lib 类库lk 喜欢
//     myTimer.Interval = 100;//1s
//
//
//
// }
//
// void Tick(object sender, EventArgs e)
// {
//     try
//     {
//         string f = "C:\\modyfing\\apiprj\\jbbot\\zmng\\libx\\ipt_echo.txt";
//         string content = File.ReadAllText(f, Encoding.UTF8);
//         label1.Text = content;
//     }catch (Exception ex)
//     {
//         Console.WriteLine(ex.Message);
//     }
//
// }