

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
