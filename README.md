# CSL Lab 02 - Drawing 
 
* How can we break down a robot into basic shapes in p5.js?

## Overview:
In this learning activity we will create a visual composition using the p5 shape-drawing functions (ellipse, rect, line, point, quad, triangle), and set their fill and stroke to a grayscale value.

We will understand the p5 canvas coordinate system, call functions and pass parameters to them, and consult the p5 reference for documentation about them.

## Objectives:
* Explore what p5.js is
* Imagine things you can create with p5.js
* Understand the p5 canvas coordinate system

## Vocabulary:

| **Computational Media** | The practice of using programming to build expressive and interactive computer applications and media. | 
| --- | --- |
| **p5.js** | An open source Javascript library that allows people to make web pages animated and interactive. | 
| **IDE** | Integrated development area is a software application that provides a place for computer programmers to develop code. | 
| **Unplugged Activity** | An activity that can be conducted without the use of computers or electronic equipment. | 
| **Abstraction** | Abstraction is the process of taking away or removing characteristics from something in order to reduce it to a set of essential characteristics. | 
| **Width** | Horizontal distance of a 2D shape | 
| **Height** | Vertical distance of a 2D shape | 
| **Radius** | Distance from the center to edge of a circle | 
| **Diameter** | Distance from edge to edge of a circle passing through the center point | 
| **Cartesian (Coordinate) Place** | Four quadrant grid with an x & y axis, origin, etc. | 

## Resources:
* Video tutorial: [1.2 Basics of Drawing](https://www.youtube.com/watch?v=D1ELEeIs0j8) | [Code](https://github.com/CodingRainbow/Rainbow-Code/tree/master/p5.js/1.1_p5.js_basics_of_drawing)
* [Robot Worksheet](https://drive.google.com/file/d/1ZmERZDHhM4A7TB27mQcxrcPJeAi5Z0m8/view?usp=sharing)
* [Processing Drawing Tutorial](https://processing.org/tutorials/drawing/)

## Unplugged Activity: Draw a Robot and Write Pseudocode
Before we start to give instructions to computers, we are going to practice by writing instructions on paper. You will use a graph that has the p5.js coordinate system to draw out a design, and write down instructions on how another person could draw them.

## Step 1: Draw a robot using basic shapes
* Use only two types of shapes: ellipses and rectangles
* Combine up to 5 shapes total.
* Place the shapes on the coordinate system on the worksheet, following the guidelines on the next pages.

## Drawing Area: The Canvas
In p5, we use code to draw graphics on a “canvas”. The canvas displays the output of your code.

In a computer screen every pixel is a coordinate. It has an “x” value (horizontal) and a “y” value (vertical) that determines where the pixel is going to be located.

Computers use a specific coordinate system than the one you’re used to in math class.

The 0 origin is located in the top left and the x value increases to the right while the y-value increases down vertically.  
![coordinategrid.png](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.1/coordinategrid.png)

## Example: Robot  
![robot.jpg](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.1/robot.png)

## Rectangles:
* Draw rectangles along grid lines.  
![heightwidthsquare.png](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.1/heightwidthsquare.png)

## Ellipses:
* Draw a point at two intersecting lines.
* Draw an ellipse around that point with even width and height.  
![heightwidth.png](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.1/heightwidth.png)

## Step 2: Deconstruct Your Drawing
List each shape used in your drawing.  provide the information for each shape as if you were instructing someone to draw your robot. You will need to specify the shape, the x and y coordinate, and the width and height of the shape (where applicable).

Keep in mind that the x and y coordinate of a rectangle refer to one of it’s corners, while for an ellipse they refer to it’s center. Also keep in mind the p5 coordinate system with the origin in the upper left corner.  
![shapeinstructions.png](https://nycdoe-cs4all.github.io/images/lessons/unit_1/1.1/shapeinstructions.png)  
```
// robot

function setup() {
  createCanvas(120, 120);
}

function draw() { 
  background(220);
  // head
  rect(50, 20, 10, 10);
  rect(20, 30, 70, 60);
  // eyes
  ellipse(40, 50, 20);
  ellipse(70, 50, 20);
  // mouth
  rect(40, 70, 30, 10);
}

```



[Unit 01 - Drawing, Variables, Random](https://nycdoe-cs4all.github.io/units/1/lessons/lesson_1.1)  
[pj5 editor robot](https://editor.p5js.org/grgry13/sketches/3-xkEYr0B)

