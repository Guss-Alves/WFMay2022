for i in range(151):
    print(i)

for num in range(5,1001):
    if num % 5 == 0:
        print(num)

for i in range(1,101):
    if i % 10 == 0:
        print('coding dojo')
    elif i % 5 == 0:
        print('coding')
    else:
        print(i)

sum = 0
for i in range(0,500000):
    if i % 3 == 0:
        sum = sum + i
print(sum)

for i in range(2018,0,-4):
    print(i)

low_num = 2
high_num = 10
mult = 3
for i in range(low_num,high_num):
    if i % mult == 0:
        print(i)
