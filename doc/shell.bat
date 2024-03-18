


set str1="this is a old string"

call :fun_replace old,旧的,%str1%

echo finish call fun...

set a[0]=000
set a[1]=111

echo a[1]==   %a[1]%
 rem  >  log502.log

pause







:fun_replace

echo 111

 GOTO:EOF



pause