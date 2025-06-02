import turtle as n

n.penup()
n.goto(-200,200)
n.pendown()
n.forward(400)

n.fillcolor('#221F1F')
n.begin_fill()

for i in range(18):
    n.forward(1)
    n.right(5)
n.forward(400)
for i in range(18):
    n.forward(1)
    n.right(5)
n.forward(400)
for i in range(18):
    n.forward(1)
    n.right(5)
n.forward(400)
for i in range(18):
    n.forward(1)
    n.right(5)
n.end_fill()

n.penup()
n.goto(-75,125)
n.pendown()
n.color('#B81D24')

n.fillcolor('#E50914')
n.begin_fill()
n.forward(50)
n.right(70)
n.forward(300)
n.left(160)
n.left(75)

for i in range(48):
    n.forward(1)
    n.right(-0.75)

n.right(90.5)
n.forward(302)
n.end_fill()    

n.fillcolor('#B81D24')
n.begin_fill()
n.left(159.5)
n.forward(283)
n.left(90)
n.left(20)
for i in range(50):
    n.forward(1)
    n.right(0.75)
n.left(107.5)
n.forward(150)
n.penup()
n.goto(-75,125)
n.pendown()
n.end_fill()

n.right(90)
n.forward(50)
n.right(70)
n.forward(300)
n.left(160)


n.fillcolor('#B81D24')
n.begin_fill()
n.forward(283)
n.left(90)
n.forward(50)
n.left(90)
n.forward(150)
n.end_fill()

n.done()

