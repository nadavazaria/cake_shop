def get_next_line():
    n = 1
    while n < 6:
        with open('file.csv','r') as file:
             for _ in range(n):
                res = file.readline()
        yield  res
        n +=1 

gen = get_next_line()

print(next(gen))
print(next(gen))
print(next(gen))
print(next(gen))
print(next(gen))