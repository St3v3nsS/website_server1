# HTML/CSS/JS Project
A website project with a tiny server for handling requests written in Node.js 
##  Dependencies
*   [Node.js](https://nodejs.org/en/)
*   [Docker](https://www.docker.com/)
*   [Chrome](https://www.google.com/chrome/)    

##  Instalation
For accessing this website, you will have to install the ```Docker``` first. Here is a [link](https://www.tutorialspoint.com/docker/installing_docker_on_linux.htm) that shows you how to do that step-by-step. Once you have installed it, run
```bash
sudo apt install docker-compose
```
After that, go to the directory where the project is and run those commands
```bash
docker-compose build
docker-compose up
```

Now, all you have to do is to copy the IP provided by mongo, without the port, to your browser and add the port 8080. That's all, you now have the website up and running. 

##  Usage

This website is made using ```HTML, CSS and JavaScript```. I am using a server made with ```express``` from ```Node.js```.
It uses ```MongoDB``` to store users login details. 

In ```connect_mongodb.js``` is the script for connecting to database and exporting the functions for using them in ```Server.js```, where weyou'll find the server part.
```JavaScript            
dns.lookup(email[0], options, (err, address, family)=>{});
```
This sequence of code checks the validity of the email domain and allow people sign up only with a valid email. If you are using the 8080 port for some other app, just change in ```Server.js``` the line ```app.listen(8080);``` with the new port then go to the ```Dockerfile``` and replace ```EXPOSE 8080``` with the same port. Now, if you made any changes in the source files, you have to compile them again using ```docker-compose build```.

```docker-compose.yml``` is the file which makes the linking of the Node.js code and the mongoDB, so on this section
```docker
ports:
    - "8080:8080"
```
you have to replace or add the new ports.

In ```main.js``` you'll find all the ```JavaScript``` code for the website, including the snow effect and the tiny game made with canvas.
```JavaScript
function drawCircle(canvas){}
function moveCircle(canvas, obj){
function drawGloves(canvas, positions){}
function dragAndDrop(){}
```
are just few functions used in this file.

```style.css``` contains all the styling code for all the pages. The responsiveness of this site is made using
```css
@media screen and (max-width: 600px){}
```

##  TODO
- [ ] Use of headers
- [ ] Better authentication
- [ ] Keep session alive
- [ ] User Profile

##  License
[MIT](https://choosealicense.com/licenses/mit/)