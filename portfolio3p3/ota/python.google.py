import turtle

def drawgoogle():

    window = turtle.Screen()
    window.bgcolor("white")


    cursor = turtle.Turtle()

    cursor.color('#4285F4','#4285F4')

    cursor.pensize(5)

    cursor.speed(8)

    cursor.forward(120)
    cursor.right(90)
    cursor.circle(-150,50)

    cursor.color('#0F9D58')
    cursor.circle(-150,100)
    cursor.color('#F4B400')
    cursor.circle(-150,60)
    cursor.color('#DB4437','#DB4437')

    cursor.begin_fill()
    cursor.circle(-150,100)
    cursor.right(90)
    cursor.forward(50)
    cursor.right(90)
    cursor.circle(100,100)
    cursor.right(90)
    cursor.forward(50)
    cursor.end_fill()
    cursor.begin_fill()


    cursor.color('#F4B400','#F4B400')
    cursor.right(180)
    cursor.forward(50)
    cursor.right(90)

    cursor.circle(100,60)
    cursor.right(90)
    cursor.forward(50)
    cursor.circle(-150,100)
    cursor.end_fill()

    cursor.right(90)
    cursor.forward(50)
    cursor.right(90)
    cursor.circle(100,60)
    cursor.color('#0F9D58','#0F9D58')
    cursor.begin_fill()
    cursor.circle(100,100)
    cursor.right(90)
    cursor.forward(50)
    cursor.right(90)
    cursor.circle(-150,100)
    cursor.right(90)
    cursor.forward(50)
    cursor.end_fill()


    cursor.right(90)
    cursor.circle(100,100)
    cursor.color('#4285F4','#4285F4')
    cursor.begin_fill()
    cursor.circle(100,25)
    cursor.left(115)
    cursor.forward(65)
    cursor.right(90)
    cursor.forward(42)
    cursor.right(90)
    cursor.forward(124)
    cursor.right(90)
    cursor.circle(-150,100)
    cursor.right(90)
    cursor.forward(50)


    cursor.end_fill()
    cursor.penup()
    window.exitonclick()
 
drawgoogle()   
        



