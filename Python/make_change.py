# Make Change
def change(cents):
    if cents > 1:
        cents = cents/100.0
    print cents

    coins = []
    Dollar = 1
    Half_Dollar = 0.5
    Quarter = 0.25
    Dime = 0.1
    Nickel = 0.05
    Penny = 0.01

    # dollars
    count = 0
    while cents > 1:
        cents = cents - 1
        count += 1

    coins.append({'dollars': count})
    count = 0

    # half dollars
    while cents > .50:
        cents = cents - .5
        count += 1

    coins.append({'half-dollars': count})
    count = 0

    # quarters
    while cents > .25:
        cents = cents - .25
        count += 1
    coins.append({'quarters': count})
    count = 0

    # dime
    while cents > .10:
        cents = cents - .10
        count += 1
    coins.append({'dimes': count})
    count = 0

    # nickel
    while cents > .05:
        cents = cents - 0.05
        count += 1
    coins.append({'nickels': count})
    count = 0

    # penny
    while cents > 0:
        cents = cents - .01
        count += 1
    coins.append({'pennies': count})

    return coins

x = change(501)
print x

