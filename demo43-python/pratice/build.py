from bs4 import BeautifulSoup;

with open('C:/Users/Eric/develop/daily-exercise/demo43-python/pratice/index.html','r') as wb_data:
    Soup = BeautifulSoup(wb_data,'lxml')
    h1 = Soup.select('body > h1')
    print(h1)
