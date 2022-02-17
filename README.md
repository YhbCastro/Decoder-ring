# Decoder-ring

This project is designed to test your ability to build complex algorithms as well as write unit tests with Mocha & Chai to test your algorithms. Before taking on this module, you should be comfortable with the learning objectives listed below. You will not need to make any edits to HTML or CSS for this project.

Caesar Shift

![image](https://user-images.githubusercontent.com/85961954/154578006-1883a72d-2cf7-4b71-bcea-3a9383b6235c.png)


The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".

"thinkful" -> "wklqnixo"
When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.

Polybius Square
1	2	3	4	5
1	A	B	C	D	E
2	F	G	H	I/J	K
3	L	M	N	O	P
4	Q	R	S	T	U
5	V	W	X	Y	Z
The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like.

In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left. For example, in the above table, the letter "B" would be represented by the numerical pair "21".

"thinkful" -> "4432423352125413"
When decoding the message, each pair of numbers is translated using the coordinates.

Substitution Cipher

![image](https://user-images.githubusercontent.com/85961954/154578066-a623a43f-e847-4c9d-bd6f-b33dd04f2930.png)

The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet; otherwise, it will be difficult for them to decode the message.

For example, in the image above, the word "HELLO" would be translated as follows:

"H" becomes "R".
"E" becomes "M".
"L" becomes "W".
"O" becomes "L".
This would result in the code "RMWWL". To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.
