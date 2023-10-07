import keyboard


def abc(x):
    print(x)
    print("111")

keyboard.hook(abc)
#按下任何按键时，都会调用abc，其中一定会传一个值，就是键盘事件
keyboard.wait()