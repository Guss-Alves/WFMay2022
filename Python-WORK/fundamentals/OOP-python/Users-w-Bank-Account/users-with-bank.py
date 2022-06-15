class BankAccount:
    all_bank_accounts = []
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance
        self.all_bank_accounts.append(self)
    
    def display_all_bank_accounts(self):
        for users in self.all_bank_accounts:
            print(users.balance)
        return self

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if(self.balance - amount) >= 0:
            self.balance -= amount
        else:
            self.balance -= 5
            print(f"insufficient fund:{self.balance}")
        return self
    
    def yield_interest(self):
        if(self.balance) > 0:
            self.balance += self.balance * self.int_rate
            return self

class User:

    def __init__(self, name, int_rate, balance):
        self.name = name
        self.account = BankAccount(int_rate = int_rate, balance= balance)

    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self

    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self

    def display_user_balance(self):
        print(f"{self.name}, Balance : {self.account.balance}")
        return self

gustavo = User('Gustavo Alves', 0.01, 10)
leo = User('leo Silva', 0.04, 100)

gustavo.make_deposit(100).make_deposit(1000).make_withdrawal(200).account.yield_interest()
gustavo.display_user_balance()
leo.make_deposit(130).make_deposit(200).make_deposit(40).display_user_balance()