# Learn Platform Loops: https://login.codingdojo.com/m/172/7209/51954

# More Range Function! (ﾉ*･ω･)ﾉ

#! Objective 1: Using range, count up to 10 from 0.
# for (let i=0; i < array.length; i+=2)  for(start;stop;step)

# for x in range(11):
#     print(x)

#! Objective 2: Add a start and stop to our range. 1 to 10

# for x in range(1, 11):
#     print(x)

#! Objective 3: Add a start, stop, and step to our range. 1 to 10, but count by 2s.

# for x in range(1, 11, 4):
#     print(x)

# ========================================================================================
# Looping a List
# Learn Platform Lists: https://login.codingdojo.com/m/172/7209/54358
# Extra List material: https://www.w3schools.com/python/python_lists.asp


fav_foods = ['Eggs', 'Gazpacho', 'Sushi',
             'Poutine', 'Jalapeno Poppers', "Cordon'Bleu"]

#! Objective 1: Loop through and print each value using len and range with 'i'.

for i in range(len(fav_foods)):
    print(fav_foods[i])


#! Objective 2: Create a for loop without len to get each value from the list.

for food in fav_foods:
    print(food)


#! Objective 3: Loop through the list until we find a value and then end the loop early.
# Hint: We'll need to 'break out' of the loop.

for food in fav_foods:
    if food == 'Poutine':
        print('Gosh I love Poutine!')
        break
    print(food)
