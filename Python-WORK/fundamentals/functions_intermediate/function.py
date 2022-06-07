# 1
x = [ [5,2,3], [10,8,9] ] 
x[1][0]= 15
print(x)

students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
students [0]['last_name'] = 'Bryant'
print(students)

sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
sports_directory['soccer'][0] = 'Andres'
print(sports_directory)

z = [ {'x': 10, 'y': 20} ]
z[0]['y'] = 30
print(z)

# 2
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
for each in students:
    print(each)

# 3
from operator import itemgetter
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
# def iterateDictionary2(key_name, some_list):
res = list(map(itemgetter('first_name'), students))
print(str(res))
res = list(map(itemgetter('last_name'), students))
print(str(res))

#  i could find a way of getting the values with itemgetter method upon online search, but not sure how to do with a function :(

# 4
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printinfo(some_dict):
    for key, values in some_dict.items():
        print(len(values),key)
        if(isinstance(values, list)):
            for value in values:
                print(value)
print(printinfo(dojo))
# I was able to find a way of doing it searching online, and fit it in the desireble function, have a few questions about the if statement and how thats playing out, but is working 