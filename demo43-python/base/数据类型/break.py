n = 1;
while n <= 100:
    if n > 10:# 当 n = 11 时，条件满足。执行break语句
        break #break语句会结束当前循环
    print(n)
    n = n + 1
    pass
print('end')