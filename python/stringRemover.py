import os

path = input("Paste in the path to the folder:   ")
toRemove = input("String to Remove:   ")

os.chdir(r""+path+"")
files = os.listdir(r""+path+"")

for file in files:
    os.rename(file, file.replace(str(toRemove), ""))
    print(str(file)+" has been renamed to "+file.replace(str(toRemove), ""))

