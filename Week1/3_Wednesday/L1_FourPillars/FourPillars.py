'''
Encapsulation: 

Encapsulation is the process of binding data and functions that operate on that data within a single unit. 
This is largely done to organize our code, as well as control access to data.
'''
# Example :


class Player:
    def __init__(self, name, hp=100, attack=10, defense=5):
        self.name = name
        self.hp = hp
        self.attack = attack
        self.defense = defense

    def Attack(self, target):
        target.Defend(self.attack)
        print(f"""{self.name} attacks {target.name}\n {target.name} took {self.attack - target.defense} damage!\n {target.name} HP: {target.hp}""")
        return self

    def Defend(self, dmg):
        dmg -= self.defense
        self.hp -= dmg
        return self


Xeno = Player('Xeno')
Cloud = Player('Cloud')
Xeno.Attack(Cloud)

'''
Inheritance: 
Inheritance is the process of creating a new class from an existing class. The new class inherits all the properties and methods of the existing class. 
It helps in reducing code duplication and increasing reusability.

This is done using a generic/starter template class (A super base class) that makes up attributes all the other classes will use. 
Then making classes that use this super base class to expand on it and cut back on duplication in our code.
'''


class Warrior(Player):

    def __init__(self, name, hp=300, attack=20, defense=10):
        # Player.__init__(name, hp, attack, defense)
        # super().PlayerInfo()
        super().__init__(name, hp, attack, defense)
        self.rage = 0

    def Enrage(self):
        self.rage += 20
        print(f'{self.name} gets angry! Rage increased by 20!\n Rage : {self.rage}')
        return self

    def WildSwing(self, target):
        if self.rage < 40:
            print(f'Not enough rage for Wild Swing. Costs 40 Rage')
            return self
        dmg = self.attack*2.5
        target.hp -= dmg - target.defense
        self.rage -= 40
        print(f"{self.name} attacks {target.name} with Wild Swing! \n 40 Rage spent to deal {int(self.attack*2.5)} damage to {target.name}.\n Target's HP is now: {target.hp} ")
        return self

# Polymorphism:
# Polymorphism is the ability of an object to take on many forms.
# Some methods can share the same name across child classes, but they operate differently based on that class. Thereby using the same naming of the methods to reduce complexity, but intended to act similarly.

    def Defend(self, dmg):
        dmg -= self.defense
        self.hp -= dmg
        self.rage += 10
        print(
            f'{self.name} took damage and gained 10 rage! \n Rage : {self.rage} \n HP : {self.hp}')
        return self


Tryndamere = Warrior('Tryndamere')

Tryndamere.Enrage().WildSwing(Xeno).Enrage().WildSwing(Xeno).Defend(Xeno.attack)


'''
Abstraction: 
Abstraction is the process of hiding complex implementation details while showing only the necessary information to the user/different objects. 
It helps in reducing complexity and increasing efficiency by making code more modular and reusable.

This is a way to simplify a process and limit what needs to be seen/known by a user to complete an action. 
(This extends to things like making a purchase on a website, the user doesn't need to know/see the database 
interactions or any of the code in order to make those purchases.)
'''


class Barista:
    def __init__(self, name):
        self.name = name
        self.cafe = CoffeeM("Cafe")
        # Using Abstraction, the Barista would only need to know about what beans to use,
        # and the CoffeeM would track the temperature that is used. Like an automated coffee brewer.

    def make_coffee(self, beans):
        self.cafe.brew_now(beans)


class CoffeeM:
    def __init__(self, name):
        self.name = name
        self.water_temp = 200

    def brew_now(self, beans):
        print(f"Using {beans}!")
        print("Brew now brown cow!")

    def clean(self):
        print("Cleaning!")
