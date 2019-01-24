 The KdV equation is a mathematical model of shallow water waves. It is a non-linear third order PDE whose solution can be precisely specified.  
 
 The KdV equation is as follows: u(t) = -a(u2)x – vuxxx. Using an approximation scheme, we can approximate the change in the height of a shallow water wave as follows: write down approximation scheme on board. Now that we have a third order PDE, we can solve it using a number of numerical methods. I have chosen to use Euler’s method. 
 
 What we will do is specify a time frame, a time step, an initial nu and alpha value, and the equation for an initial wave. For my example, my distance frame is from -20 to 20 units, with a time step of 0.04 seconds, an initial nu value of -1, initial alpha value of -3, and an initial wave equation of y(x) = 6sech(x)2. We also impose an initial condition, stating that y(0) = y(N+1), meaning that the first and last values of the waves are equal. We also state that y(m)=y(N+1-m) and if m>N+1, then y(m)=y(m-(N+1)). Draw circle to explain the boundary conditions 
 
 From there, we will use the initial wave equation to calculate some starting values. These values will model an initial wave with a certain height. For the next time step, we will approximate the change in height using the KdV equation, and with that change in height, we can add it to the previous height of the wave to determine its new position, by means of Euler’s method.  
 
 If we were to continuously do that, we will be able to get enough data about the wave to graph it and see it in action.

 ![Initial Wave](https://raw.githubusercontent.com/ch-allen-ge/Code-Playground/master/Java/math/kdvEquation/images/initialWave.png)