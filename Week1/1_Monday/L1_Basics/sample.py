import random


# Data Types ================== 🐍
# Data Type Methods: https://www.w3schools.com/python/python_reference.asp

# Int (Number)
x = 3

# Float (Decimal)
y = 3.1  # float

# List (arrays!)
list = [1, 2, 3]

# Boolean
bool = False

# String
string = "Even more Text!"

# Dictionary
dict = {"name": "Max", "fav_food": "Pasta"}

# Tuple (Immutable, cannot be changed)
tuple = ("This is a tuple", "Yep, still a tuple!", 42)


# Checking Data Types in Python
print(type(x))


# for loop (fixed range)

for i in range(len(list)):  # len() is used to get the length!
    print(i)


# Range can be customized further with other values!
# Ex: range(1,2,5)
# 1 = start
# 2 = stop
# 5 = step


# for each element in a variable loop

arr = [1, 2, 3, 4, 5]

# for i in arr:
#     print(i)


# Functions in Python
# def someFunc(x, y):
#     print(x, y)


# the 1 is the start, 3 is the stop. Can also use a third for step!
sliced_arr = arr[1:4:2]

print(sliced_arr)

# This can quickly reverse an array by looping from the other end with negative steps!
reversed_arr = arr[::-1]

print(reversed_arr)

# Getting a random value from a list using the random library


print(random.choice(arr))

# Example Function:
# Note the tabbing! Python is a tabular language and reads

num_arr = [32, 433, 55, 2300, 9001, 932]


def getHighestNum(arr):
    high_num = arr[0]
    for i in arr:
        if i > high_num:
            high_num = i
        else:  # Can also use else if as 'elif:'
            continue

    return high_num


result = getHighestNum(num_arr)
print(result)
