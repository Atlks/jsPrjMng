Set WshShell = WScript.CreateObject("WScript.Shell")
strPath = WScript.ScriptFullName
strDir = Left(strPath, InstrRev(strPath, "\"))
WshShell.Run strDir & "Program.exe", 1, False

'  这样就可以启动与VBScript文件同一目录下的 "Program.exe" 文件。