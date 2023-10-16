Write-Host ' *9999!'
Write-Host ' *9999!' ' *888!'


function ff7 {
    Write-Host ' *777!'
    
}
ff7
$ScriptPath = Split-Path $MyInvocation.InvocationName
Write-Host $ScriptPath 
. "$ScriptPath\str.ps1"
#Call myScript1 from myScript2
# invoke-expression -Command .\str.ps1
 # . .\str.ps1
  ff1
# 在另一个脚本中导入并调用模块
#Import-Module .\str.psm1
# Import-Module .\str.ps1
# ff2