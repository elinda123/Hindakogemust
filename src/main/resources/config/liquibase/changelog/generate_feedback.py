import names, lorem, time
from random import randint

feedbackCount = 500;

file = open('20170618010101_insert_feedbacks.sql', 'w')
file.write("INSERT INTO feedback (name, jhi_comment, rating, place_id) VALUES ('Elinda Tragel', 'Lorem Ipsum 1', 9, 1);")

for i in range(feedbackCount):
    #INSERT INTO feedback (name, jhi_comment, rating, place_id) VALUES ('Elinda Tragel', 'Lorem Ipsum 1', 9, 1);
    file.write("INSERT INTO feedback (name, jhi_comment, rating, place_id) VALUES ('" +
          names.get_full_name() + "', '" +
          lorem.sentence() + "', " +
          str(randint(1, 10)) + ", " +
          str(randint(1, 23)) + ");\n")  

file.close()
