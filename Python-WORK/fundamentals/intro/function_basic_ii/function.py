# 1
def countdown(a):
    b = []
    for i in range(a,-1,-1):
        b.append(i)
    return b
result = countdown(5)
print(result)

# 2
def print_and_return(list):
    print(list[0])
    return(list[1])
result = print_and_return([1,2])
print(result)

# 3
def first_plus_lenght(arr):
    b = 0
    b = arr[0] + len(arr)
    return b 
result = first_plus_lenght([1,2,3,4,5])
print(result)

# 4
def grater_than_second(list):
    if len(list) < 2:
        return False
    output = []
    for i in range(0,len(list)):
        if list[i] > list[1]:
            output.append(list[i])
    print(len(output))
    return output
print(grater_than_second([5,2,3,2,1,4]))
print(grater_than_second([3]))

# 5
def two_integers(size,value):
    output = []
    for i in range(0,size):
        output.append(value)
    return output
result = two_integers(4,7)
result2 = two_integers(6,2)
print(result)
print(result2)