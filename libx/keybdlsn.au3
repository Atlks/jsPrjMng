; #INDEX# =======================================================================================================================
; Title .........: HotString
; AutoIt Version : 3.3.10.2
; Description ...: Similar to HotKeySet but for entire strings of characters to be set as the hotkey.
; Author(s) .....: Manadar, GaryFrost, WideBoyDixon, KaFu, Malkey
; Dll ...........: user32.dll
; ===============================================================================================================================

;Supported keys:
;{ESC}{F1}{F2}{F3}{F4}{F5}{F6}{F7}{F8}{F9}{F10}{F11}{F12}
;{GRAVE}1234567890-={BACKSPACE}
;{TAB}QWERTYUIOP[]\
;{CAPSLOCK}ASDFGHJKL;{ACUTE/CEDILLA}
;{SHIFT}ZXCVBNM,./
;{CTRL}{Left Windows}{SPACE}{Right Windows}{Application}{Right Ctrl}
;{LEFT}{UP}{RIGHT}{DOWN}
;{INSERT}{HOME}{PGUP}{DELETE}{END}{PGDOWN}{Prnt Scrn}{SCROLL LOCK}{Pause}
;{Num Lock}{NUM DIVIDE}{NUMMULT}{NUM SUB}{NUM 7}{NUM 8}{NUM 9}{NUM PLUS}{NUM 4}{NUM 5}{NUM 6}{NUM 1}{NUM 2}{NUM 3}{NUM ENTER}{NUM 0}{NUM DECIMAL}


#include-once
#include <WinAPI.au3>
#include <WindowsConstants.au3>
#include <GUIConstantsEx.au3>
#include <Array.au3>

Local Const $HOTSTRING_MAXLEN = 250

Local $initialized = False, $hotString_Debug = True, $hotString_hStub_KeyProc, $hotString_hmod, $hotString_hHook, $hotString_buffer = "", $hotString_User32, $hotString_hotkeys[1], $hotString_hotfuncs[1], $hotString_hWnd, $hotStringTimer = TimerInit()

Global $HotStringPressed ; allows monitoring of the typed sequence
Global $hotStringMaxInterval = 55000 ; allows monitoring of delays between keypresses (can be changed by user)
Global $hotStringActive ; stops hotkey sequences from triggering other hotkey sequences




Func _HotString_Initialize()
	$hotString_hStub_KeyProc = DllCallbackRegister("_HotString_KeyProc", "long", "int;wparam;lparam")
	$hotString_hmod = _WinAPI_GetModuleHandle(0)
	$hotString_hHook = _WinAPI_SetWindowsHookEx($WH_KEYBOARD_LL, DllCallbackGetPtr($hotString_hStub_KeyProc), $hotString_hmod)
	$hotString_User32 = DllOpen("user32.dll")
	$hotString_hWnd = GUICreate("")
	;、、-------------- this is impt
	GUIRegisterMsg($WM_COMMAND, "_HotString_GUIKeyProc")
	OnAutoItExitRegister("_HotString_OnAutoItExit")

	$initialized = True
EndFunc   ;==>_HotString_Initialize


Func _HotString_KeyProc($nCode, $wParam, $lParam)
	If $nCode >= 0 And $wParam = $WM_KEYDOWN Then
		Local $tKEYHOOKS = DllStructCreate($tagKBDLLHOOKSTRUCT, $lParam)

		; http://msdn.microsoft.com/en-us/library/ms646300(v=vs.85).aspx
		Local $vkKey = DllStructGetData($tKEYHOOKS, "vkCode")
		Local $scanCode = DllStructGetData($tKEYHOOKS, "scanCode")
		Local $flags = DllStructGetData($tKEYHOOKS, "flags")

		Local $lWantParam = BitShift($scanCode, -16)
		$lWantParam = BitOR($lWantParam, BitShift($flags, -24))

		; post message to our local GUI
		; We use $WM_COMMAND instead of $WM_KEYDOWN/UP because $WM_KEYDOWN/UP automagically consumed some chars such as up, down, enter
		_WinAPI_PostMessage($hotString_hWnd, $WM_COMMAND, $vkKey, $lWantParam)
	EndIf

	Return _WinAPI_CallNextHookEx($hotString_hHook, $nCode, $wParam, $lParam)
EndFunc   ;==>_HotString_KeyProc



Func _HotString_GUIKeyProc($hWnd, $Msg, $wParam, $lParam)
	If $hWnd <> $hotString_hWnd Then Return $GUI_RUNDEFMSG ; If this message is not for us, run the AutoIt internal handler

	Local $aRet = DllCall($hotString_User32, 'int', 'GetKeyNameText', 'int', $lParam, 'str', "", 'int', 256)

	Local $sKeyName = $aRet[2]
	If $sKeyName Then
		_HotString_EvaluateKey($sKeyName)
	EndIf

	Return 0 ; Don't run the AutoIt internal handler for this GUI
EndFunc   ;==>_HotString_GUIKeyProc s s



Func _HotString_EvaluateKey($key)


  ; ConsoleWrite("【_HotString_CheckHotkeys】 cur=>"& $current & @CRLF)
     ;;;; abc dmddddddddddddddddddddd ffxabc02rtyyyyyyyyyyyio
	If StringLen($key) > 1 Then
		$key = "{" & $key & "}"
	EndIf

	_HotString_DebugWrite("Received key: " & $key)
	  ;-------save cur to file for show choose
	  Local $rdm=Random ()
;	FileDelete ()
    FileWrite ("keysdir/curKey"&$rdm&".txt",$key )

EndFunc   ;==>_HotString_EvaluateKey



; s


Func _HotString_OnAutoItExit()
	_WinAPI_UnhookWindowsHookEx($hotString_hHook)
	DllCallbackFree($hotString_hStub_KeyProc)
	DllClose($hotString_User32)
EndFunc   ;==>_HotString_OnAutoItExit

Func _HotString_DebugWrite($line)
	If Not $hotString_Debug Then Return
	ConsoleWrite("dbgwrtline: " & $line & @CRLF)
EndFunc   ;==>_HotString_DebugWrite


If Not $initialized Then _HotString_Initialize()
	ConsoleWrite("..start.. "  & @CRLF)
While 1
    Sleep(10)

WEnd
