class User:

    def __init__(self, name):
        self.name = name
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f"{self.name}, Balance : {self.account_balance}")

gustavo = User('Gustavo Alves')
alan = User('Alan Gomes')

gustavo.make_deposit(500).make_withdrawal(20).display_user_balance()
alan.make_deposit(1005).make_withdrawal(5).display_user_balance()