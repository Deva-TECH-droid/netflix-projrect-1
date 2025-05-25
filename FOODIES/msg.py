# import pywhatkit as kit
# import datetime

# phone = "+918081310420"
# message = "hello ,bhai kya kare rahe ho , aur sab sahi hai"

# current_time = datetime.datetime.now()
# hour = current_time.hour
# minute = current_time.minute+1
# kit.sendwhatmsg(phone)

import pywhatkit as kit
import datetime

phone = "+918081310420"
message = "hello, bhai kya kar rahe ho, aur sab sahi hai"

current_time = datetime.datetime.now()
hour = current_time.hour
minute = (current_time.minute + 1) % 60 


if current_time.minute == 59:
    hour = (hour + 1) % 24

kit.sendwhatmsg(phone, message, hour, minute)
