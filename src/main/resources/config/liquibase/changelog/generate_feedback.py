import names, lorem, time
from random import randint

feedbackCount = 333
file = open('20170618010101_insert_feedback.sql', 'w')
file.write("INSERT INTO feedback (name, jhi_comment, rating, place_id) VALUES ('Elinda Tragel', 'Lorem Ipsum 1', 9, 1);")

def getRandomLoremText(randomNumber):
    if randomNumber <= 6:
        return lorem.sentence()
    elif randomNumber <= 9:
        return lorem.paragraph()
    else:
        return lorem.text()

for i in range(feedbackCount):
    #INSERT INTO feedback (name, jhi_comment, rating, place_id) VALUES ('Elinda Tragel', 'Lorem Ipsum 1', 9, 1);
    file.write("INSERT INTO feedback (name, jhi_comment, rating, place_id) VALUES ('" +
          names.get_full_name() + "', '" +
          getRandomLoremText(randint(1, 10)) + "', " +
          str(randint(1, 10)) + ", " +
          str(randint(1, 23)) + ");\n")

file.close()
