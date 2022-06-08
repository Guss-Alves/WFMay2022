class User:

    def __init__(self, name,):
        self.name = name
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount

    def make_withdrawal(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):
        return f"{self.name}, Balance : {self.account_balance}"
    
    # def transfer_money(self):

Gustavo = User('Gustavo Alves')
Alan = User('Alan Muller')

Gustavo.make_deposit(500)
Gustavo.make_withdrawal(20)
Alan.make_deposit(1005)
Alan.make_withdrawal(5)
print(f"{Gustavo.display_user_balance()}")
print(f"{Alan.display_user_balance()}")
