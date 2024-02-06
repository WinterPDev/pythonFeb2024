'''
-----------------------------------
Types of methods in Python:

Instance Methods - Accessed via named instances of an object.
Class Methods - Accessed via the class name or object name. Can affect class attributes that are shared among all objects of that class.
Static Methods - Accessed via the class name or object name. Utility functions that do not modify or access the class/instances. 
-----------------------------------

Associating Classes with Objects!

Associating classes is as simple as accessing another object's attributes or methods through a different class.


'''


class Player:
    # Class Attributes
    Game_Title = "Super Smash Coders"
    Player_List = []

    def __init__(self, name, attack, defense, hp, companion, abilities=[]):
        self.name = name
        self.attack = attack
        self.defense = defense
        self.hp = hp
        self.abilities = abilities
        #! Objective 3: Store the current Companion they have into an attribute of the Player, that way we can access their information as well as their methods.
        self.companion = companion
        Player.Player_List.append(self)

    # Instance Method for printing out the instance's information!
    def PlayerInfo(self):
        print(
            f'Player Name : {self.name}\n HP : {self.hp}\n Attack : {self.attack}\n Defense : {self.defense}\n Abilities : {self.abilities}')
        return self

    # Instance Method for taking damage/adjusting hp
    def TakeDamage(self, dmg):

        if Player.CanDamage(self.hp, dmg):
            self.hp = self.hp - (dmg - self.defense)
            print(
                f'Player {self.name} takes {dmg - self.defense}!\n Current HP : {self.hp}')
        else:
            print(f'Player {self.name} has fallen!')
            self.hp = 0
        return self

    # Class Method to print all characters

    @classmethod
    def GetAllPlayers(cls):
        for player in cls.Player_List:
            player.PlayerInfo()

    @staticmethod
    def CanDamage(hp, dmg):
        if (hp - dmg) < 0:
            return False
        else:
            return True


#! Objective 2: Create a Companion class with Attributes that include name, mana, and abilities to make a companion for our Players.


class Companion:

    # name, abilities, mp

    def __init__(self, name, abilities, mp=100) -> None:
        self.name = name
        self.abilities = abilities
        self.mp = mp

    def CompanionInfo(self):
        print(
            f'Companion Name : {self.name}\n MP : {self.mp}\n Abilities : {self.abilities}')
        return self

    # self - The Companion that is attacking
    # target - The Player Object we are targetting with that attack
    def PetAttack(self, target):
        self.mp -= 10
        print(f'{self.name} used {self.abilities[0]}, it cost 10 MP!')
        target.hp = target.hp - (10 - target.defense)
        print(f'{self.name} Damaged {target.name} for {10 - target.defense} damage!')
        return self

#! Objective 4: Create a method for the companion to attack with
# Creating an instance of Player
# Accessing an attribute of that instance


Chimchar = Companion("Chimchar", ['Blaze', 'Tackle'], 200)

Brock = Player("Brock", 200, 20, 400, Chimchar, ['Cook', 'Swoon'])

Meowth = Companion("Meowth", ['Scratch', 'Payday'], 50)

Jesse = Player("Jesse", 300, 5, 130, Meowth, ['Blasting Off'])

Brock.companion.CompanionInfo()

Jesse.companion.CompanionInfo()

Jesse.companion.PetAttack(Brock).PetAttack(Brock)


# Kirby = Player("Kirby", 100, 10, 300, ['Eat', 'Transform'])
# Ike = Player("Ike", 200, 5, 80, ['Slash', 'Parry', 'Air Attack'])

# Ike.PlayerInfo()
# Kirby.PlayerInfo()

# Kirby.TakeDamage(100)
# Player.GetAllPlayers()
