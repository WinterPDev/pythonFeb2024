# Intro to Python ================~

# Note: If you can't run Python with CodeRunner, it's because it defaults to "Python" Go into the extension's settings and change the python command to python3.
# JS Data Types: Boolean, Numbers, Strings, Undefined, Null, NaN

'''
=============== Data Types 🐍 ===============
#* Data Type Methods: https://www.w3schools.com/python/python_reference.asp

Integer(Whole number)
Float(decimal)
Strings
Complex Number
Lists(Like a JS Array)
Tuple(immutable array)
Dictionary (Key Value Pair)
Boolean

None

'''

# String , Integer, Float

first_name = "Winter"
age = 99
floaty = 10.00004

vacations = ['New Orleans', 'Catania', 'Mars w/ Elon', 'Paris']


vacationsTuple = ('New Orleans', 'Catania', 'Mars w/ Elon', 'Paris')

# Range
# for x in range(len(vacations)):
#     print(vacations[x])

# for in loop
for vacation in vacations:
    print(vacation)
    for letter in vacation:
        print(letter)


instructor_dictionary = {
    'name': 'Winter',
    'fav_food': 'Udon Noodles'
}

# Print vs f-String(String Interpolation)

print('Hello! My name is ' + first_name)
print(f'Hello! My name is {first_name}')

# Conditionals
if age < 9000:
    print('Age is under 9000!')
else:
    print('Age is over 9000!')

# lists & loops
# Lists are ordered by their index value, just like in JS.


# Dictionaries - Key Value Pair


# Tuples - Immutable List of Data


# Functions


# Extra~
# Reversing a string in 1 line using array slicing. Array[start:end:stop]
# reverse = "Ramen Noodles"

# print(reverse[::-1])
