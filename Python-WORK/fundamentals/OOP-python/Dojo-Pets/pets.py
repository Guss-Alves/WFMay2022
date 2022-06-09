class Pet():

    def __init__(self, name, type, tricks, noise):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 100
        self.energy = 100
        self.noise = noise

    def sleep(self):
        self.energy += 25
        return self

    def eat(self):
        self.energy += 15
        self.health += 10
        return self

    def play(self):
        self.health += 5
        self.energy -= 15
        print(f"your pet has this energy: {self.energy}")
        return self

    def noise(self):
        print(self.noise)
        return self

class Ninja:

    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet

    def walk(self):
        self.pet.play()
        return self

    def feed(self):
        if len(self.pet_food) > 0:
            food = self.pet_food.pop()
            print(f'feeding {self.pet.name} {food}!')
            self.pet.eat()
        else:
            print("oh no, buy more food")
        return self

    def bathe(self):
        self.pet.noise()
        return self

my_treats = ["bacon", "sausage"]
my_pet_food = ["pizza", "burguer", 'pasta', 'apple']


kika = Pet("kika", "dog", "play dead","auf auf")
gustavo = Ninja("Gustavo", "Alves", my_treats, my_pet_food, kika)

gustavo.feed()
gustavo.walk()
