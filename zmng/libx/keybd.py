import keyboard


def abc(x):
    print(x)
    if x.event_type=="up":
     print("111")

keyboard.hook(abc)
#按下任何按键时，都会调用abc，其中一定会传一个值，就是键盘事件
keyboard.wait()

# python -m pip install keyboard abcefggggggggggggggggggggggggggggggg 
# C:\Users\attil\AppData\Local\Programs\Python\Python312\python.exe -m pip install keyboard