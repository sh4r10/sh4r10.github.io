import os
from send2trash import send2trash

path = input("Paste in the path to the folder:  ")
ext= input("File Extension to remove:  ")

os.chdir(r""+path+"")
files = os.listdir(r""+path+"")

for file in files:
    if file.endswith("."+str(ext)):
        send2trash(str(file))
        print(str(file)+" deleted")
    else:
        print(str(file)+" is not a "+str(ext)+" file")

