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

    def display_account_info(self):
        print(f"balance :{self.balance}")
        return self
    def yield_interest(self):
        if(self.balance) > 0:
            self.balance += self.balance * self.int_rate
            return self
        

account1 = BankAccount(0.01, 0)
account2 = BankAccount(0.05, 0)

account1.deposit(1000).deposit(60).deposit(50).withdraw(200).yield_interest().display_account_info()
account2.deposit(10000).deposit(1000).withdraw(200).withdraw(200).yield_interest().display_account_info().display_all_bank_accounts()