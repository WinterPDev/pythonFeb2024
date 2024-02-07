from rpg_classes.player import Player


class Warrior(Player):

    def __init__(self, name, hp=300, attack=20, defense=10):
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
        dmg = self.attack*2
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
