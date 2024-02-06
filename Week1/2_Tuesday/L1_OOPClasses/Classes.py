'''
Objects are like objects in real life. They are a series of things that share properties. 
Objects in code are made from classes, but are organized similar to a dictionary.

-----------------------------------

Objects exist in Python in a lot of things we've worked with. (strings, lists, dictionaries, etc.)
Such as why we can use some METHODS for certain things and not others.
    - For example: We can use .pop() on lists, but not on integers. Or that we can use .append() on lists and not dictionaries. 

This is an example of 'Encapsulation' which is one of the 'Four Pillars of OOP'. Which can be summarized as: 
    - Grouping our code together into objects and their appropriate methods for organization based on how we use those objects.

-----------------------------------
Types of methods in Python:

Instance Methods - Accessed via named instances of an object.
Class Methods - Accessed via the class name or object name. Can affect class attributes that are shared among all objects of that class.
Static Methods - Accessed via the class name or object name. Utility functions that do not modify or access the class/instances. 
-----------------------------------

'''

#! Objective 1: Build a class that represents a character in an RPG.


class Player:
    # Name, Attack, Defense, HP, Str, Dex, Con, Abilities

    Player_List = []

    def __init__(self, name, attack, defense, hp, abilities=[]):
        self.name = name
        self.attack = attack
        self.defense = defense
        self.hp = hp
        self.abilities = abilities
        Player.Player_List.append(self)
        # self.name = "Kirby"
        # self.attack = 100
        # self.defense = 10
        # self.hp = 300
        # self.abilities = ['Eat', 'Transform', 'Dash', 'Kick', 'Fly']

    #! Objective 2: Build Instance Methods for printing the details of the character, taking damage, or healing.
    # Instance Method for printing out the instance's information!
    def PlayerInfo(self):
        print(
            f'Player Name : {self.name}\n HP : {self.hp}\n Attack : {self.attack}\n Defense : {self.defense}\n Abilities : {self.abilities}')

    def TakeDamage(self, dmg):
        self.hp = self.hp - (dmg - self.defense)
        print(
            f'Player {self.name} takes {dmg - self.defense}!\n Current HP : {self.hp}')

#! Objective 3: Add a class attribute to track all the existing characters that have been made and build a class method to print them out.


# Creating an instance of Player
# Accessing an attribute of that instance
Kirby = Player("Kirby", 100, 10, 300, ['Eat', 'Transform'])
Ike = Player("Ike", 200, 5, 80, ['Slash', 'Parry', 'Air Attack'])

Ike.PlayerInfo()
Kirby.PlayerInfo()

Kirby.TakeDamage(100)
