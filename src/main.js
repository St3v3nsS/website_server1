
function toggleMenu() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function getHamburger(){
    let x = document.getElementById("hamburgerMenu");
    x.onclick = toggleMenu;
}

function styling(btn){
    btn.style.display = "block";
    btn.style.marginLeft = "auto";
    btn.style.marginRight = "auto";
    btn.style.borderRadius = "25%";
    btn.style.border = "2px solid blue";
    btn.style.padding = "5px";
    btn.style.backgroundColor = "aquamarine";
    btn.style.fontSize = "16px";
    btn.style.transition = "all 1s";

}

function addCoach(){

    let teams = [];
    
    let real = document.getElementById("real");
    let bar = document.getElementById("barcelona");
    let juve = document.getElementById("juventus");
    let psg= document.getElementById("psg");
    let bayern = document.getElementById("bayern");
    let mancity = document.getElementById("mancity");
    let srcReal = "./lopetegui.jpg";
    let srcBar = "./valverde.jpg";
    let srcJuve = "./allegri.jpg";
    let srcBayern = "./kovac.jpg";
    let srcPSG = "./tuchel.jpg";
    let srcMC = "./pep.jpg"

    teams.push(real); teams.push(bar); teams.push(juve); 
    teams.push(psg); teams.push(bayern); teams.push(mancity); 

    let newDiv = document.createElement("div");
    newDiv.className = "rows";

    let newPosition = document.createElement("div");
    newPosition.className = "position";

    newDiv.appendChild(newPosition);

    let newSpan = document.createElement("span");
    newSpan.textContent = "COACH";

    newPosition.appendChild(newSpan);

    let newSection = document.createElement("section");
    newSection.className = "row";
    
    newPosition.appendChild(newSection);

    let newFigure = document.createElement("figure");
    newFigure.className = "columns";

    newSection.appendChild(newFigure);

    let newImg = document.createElement("img");
    
    newFigure.appendChild(newImg);


    let newFigcaption = document.createElement("figcaption");
    newFigure.appendChild(newFigcaption);
    

    if(real){
        real.appendChild(newDiv);
        newImg.src = srcReal;
        real.removeChild(this);
        newFigcaption.textContent = "Julen LOPETEGUI";
    }
    else if(bar){
        bar.appendChild(newDiv);
        newImg.src = srcBar;
        bar.removeChild(this);
        newFigcaption.textContent = "Ernesto VALVERDE";
    }
    else if(bayern){
        bayern.appendChild(newDiv);
        newImg.src = srcBayern;
        bayern.removeChild(this);
        newFigcaption.textContent = "Niko KOVAC";
    }
    else if(juve){
        juve.appendChild(newDiv);
        newImg.src = srcJuve;
        juve.removeChild(this);
        newFigcaption.textContent = "Massimiliano ALLEGRI";
    }
    else if(psg){
        psg.appendChild(newDiv);
        newImg.src = srcPSG;
        psg.removeChild(this);
        newFigcaption.textContent = "Thomas TUCHEL";
    }
    else {
        mancity.appendChild(newDiv);
        newImg.src = srcMC;
        mancity.removeChild(this);
        newFigcaption.textContent = "Josep GUARDIOLA";
    }

}

function scrollFunction(){

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("ScrollToTop").style.display = "block";
    } else {
        document.getElementById("ScrollToTop").style.display = "none";
    }

}

function scrollToTop(){

    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}

function querry(){

    let q = document.querySelectorAll("ul li a");
    for(let i = 0; i < q.length; i++){
        q[i].style.textDecoration = "none";
        q[i].style.color = "white";
    }

}

function addAnthem(){

    let src = "audio.mp3";
    
    let audio = document.createElement('audio');
    audio.controls = "controls";
    
        
    let source = document.createElement('source');
    source.src= src;
    source.type = "audio/mpeg";

    audio.appendChild(source);
    
    let parent = document.getElementById('anthm');
    parent.appendChild(audio);
   // alert(audio.innerHTML);
    parent.removeChild(this);
}

function disable() {

    let x = document.getElementById('yes');
    let no = document.getElementById('no');

    if (x.checked){
        no.disabled = true;
    }
    else {
        x.disabled = true;
    }


}

function enableBox(){

    let box = document.getElementById('youTeam');
   

    let h22 = document.getElementById('h22');
    let rmd = document.getElementById('rmd');
   
    box.value = 'Real Madrid is your team now!';
    box.style.visibility = "visible";
    
    
    
  
    h22.removeChild(this);
    

    
}

function makeTheFlakeMove(imgCurr) {

    //imgCurr.style.display = 'block';
    imgCurr.timmer = setInterval(function(){
      imgCurr.x1 += 7;
      imgCurr.style.top = imgCurr.x1 + 'px';
      imgCurr.style.width = imgCurr.procent1 + '%';
      imgCurr.style.height = 'auto';
      imgCurr.procent1 -= 0.1;
  
    //  console.log(img[i].procent1 + " " + img[i].style.width + '\n');
      if(imgCurr.procent1 <= 0.2){
        clearInterval(imgCurr.timmer);
  
        document.body.removeChild(imgCurr);
      }
  
      imgCurr.onclick = function(ev){
        clearInterval(imgCurr.timmer);
        document.body.removeChild(imgCurr);
        ev.stopPropagation();
      }
  
  
  
    }, 100);
}

function handleSignLog(){
    let sigIn = document.getElementById('SignIn');
    let logIn = document.getElementById('LogIn');
    let closeBtn = document.getElementsByClassName('close');
    let Signwrapper = document.getElementById('Signwrapper');
    let Logwrapper = document.getElementById('Logwrapper');
    let uname = document.getElementsByName('uname');
    let psw = document.getElementsByName('psw');

    if(sigIn || logIn){
        sigIn.addEventListener('click', () => {
            Signwrapper.style.display= 'block';
        });
    
        logIn.addEventListener('click', () => {
            Logwrapper.style.display= 'block';
            
            if(localStorage.uname){
                uname[0].focus();
                uname[0].value = localStorage.uname;
                psw[0].focus();
                console.log(localStorage.psw);
                psw[0].value = localStorage.psw;
            }
            
        });
    
        if(closeBtn.length){
            closeBtn[0].addEventListener('click', () => {
            
                Logwrapper.style.display = "none";
                
               
            });
            closeBtn[1].addEventListener('click', () => {
            
                Signwrapper.style.display = "none";
                
            });
        }
        
        let chk = document.getElementsByName('chkbox');
        
        chk[0].onclick = function(){
            localStorage.setItem('user', uname[0].value);
            localStorage.setItem('pass', psw[0].value);
        }
    }

    
}

function getKey(canvas, obj){
    canvas.focus();
    window.onkeydown = function(ev){
        switch(ev.keyCode){
            case 37: obj.deltaX -= 2;
                     break;
            case 38: obj.deltaY -= 2;
                     break;
            case 39: obj.deltaX += 2;
                     break;
            case 40: obj.deltaY += 2;
                     break;
        }
        
        ev.preventDefault();
        moveCircle(canvas, obj);
    };
    
}

function moveRandomGloves(canvas, obj){


    setInterval(() =>{
        obj.oldPosY = obj.posY;
        var posY = Math.floor(Math.random()*obj.height);
        obj.posY = posY;
     
        drawGloves(canvas, obj);
    }, 2000);

}


function drawCircle(canvas){
   
    let context = canvas.getContext('2d');

    let img  = document.getElementById('ballImg');
    context.beginPath();
    let posX = canvas.width / 2 - 11;
    let posY = canvas.height /2 - 11;

    context.drawImage(img, posX, posY, 20, 20);
    context.imageSmoothingEnabled = true;
}

function drawGloves(canvas, positions){

    let ctx = canvas.getContext('2d');

    let img = document.getElementById('gloves');
    ctx.clearRect(positions.posX, positions.oldPosY, 30, 30);

    ctx.beginPath();
    
    ctx.drawImage(img, positions.posX, positions.posY, 25, 25);
}

function moveCircle(canvas, obj){
    let context = canvas.getContext('2d');
  
    let img  = document.getElementById('ballImg');
    let posX = canvas.width / 2 - 11;
    let posY = canvas.height /2 - 11;
    console.log(posX + " " + obj.deltaX);
    context.clearRect(posX + obj.deltaX - 5, posY + obj.deltaY - 5, 27, 27);
    context.beginPath();
    
    if(posX+obj.deltaX < 0){
        obj.deltaX = -posX + 1;
        context.drawImage(img, 1, posY + obj.deltaY, 20, 20);
        if(posY+obj.deltaY < 0){
            context.drawImage(img, posX + obj.deltaX, 1 , 20, 20);
           
        }else if(posY+obj.deltaY > 2*posY-1){
            context.drawImage(img, posX+obj.deltaX, 2*posY-1, 20, 20);
            
        }
    }
    
    else if(posX+obj.deltaX > posX*2 -1){
        obj.deltaX = posX - 1;
        console.log((posY + obj.deltaY) + " " + obj.oldPosY + " " + obj.posY);

      
        context.drawImage(img, 2*posX - 1, posY + obj.deltaY, 20, 20);
        if(posY+obj.deltaY < 0){
            context.drawImage(img, posX + obj.deltaX, 1 , 20, 20);
           
        }else if(posY+obj.deltaY > 2*posY-1){
            context.drawImage(img, posX+obj.deltaX, 2*posY-1, 20, 20);
            
        }
        
        alert('You win!');
        document.location.reload();
        
    }
    else if(posY+obj.deltaY < 0){
        obj.deltaY = -posY + 1;
        context.drawImage(img, posX + obj.deltaX, 1 , 20, 20);
       
    }
    else if(posY+obj.deltaY > 2*posY - 1){
        obj.deltaY = posY - 1;
        context.drawImage(img, posX+obj.deltaX, 2*posY-1, 20, 20);
        
    }
    else{
        if(posX + obj.deltaX + 20 >= obj.posX){
            if(posY+obj.deltaY <= obj.posY + 10 && posY+obj.deltaY >= obj.posY -10){
               alert('You lose!');
               document.location.reload();
            }
            

        }
        context.drawImage(img, posX + obj.deltaX, posY + obj.deltaY, 20, 20);
    }

    context.imageSmoothingEnabled = true;

}

function dragAndDrop(){
    let div = document.getElementById('playerDiv');
    let img1 = document.getElementById('drag');
    let img2 = document.getElementById('drag2');
    let img3 = document.getElementById('drag3');
    let playerName = document.getElementById('playerName');
    

    img1.ondragstart = (event) => {
        event.dataTransfer.setData("text1", event.target.id);
    }

    img2.ondragstart = (event) => {
        event.dataTransfer.setData("text2", event.target.id);
    }

    img3.ondragstart = (event) => {
        event.dataTransfer.setData("text3", event.target.id);
    }

    div.ondrop = (event) => {
        event.preventDefault();
        var data1 = event.dataTransfer.getData("text1");
        var data2 = event.dataTransfer.getData("text2");
        var data3 = event.dataTransfer.getData("text3");

        
        if(data1){
            document.getElementById(data1).style.marginLeft = 0; 
            img2.style.width = "8em";
            img3.style.width = "8em";
            img2.style.height = "8em";
            img3.style.height = "8em";
            img2.style.visibility = "hidden";
            img3.style.visibility = "hidden";
            event.target.appendChild(document.getElementById(data1));
            playerName.innerHTML = '<p style="text-align:center; color:white; font-size: 2em;"> Messi </p>';
           
        }
        if(data2){
            img1.style.width = "8em";
            img3.style.width = "8em";
            img1.style.height = "8em";
            img3.style.height = "8em";
            img1.style.visibility = "hidden";
            img3.style.visibility = "hidden";
            document.getElementById(data2).style.marginLeft = 0;
            event.target.appendChild(document.getElementById(data2));
            playerName.innerHTML = '<p style="text-align:center; color:white; font-size: 2em;"> Cristiano </p>';
        }
        if(data3){
            img2.style.width = "8em";
            img1.style.width = "8em";
            img2.style.height = "8em";
            img1.style.height = "8em";
            img2.style.visibility = "hidden";
            img1.style.visibility = "hidden";
            document.getElementById(data3).style.marginLeft = 0;
            event.target.appendChild(document.getElementById(data3));
            playerName.innerHTML = '<p style="text-align:center; color:white; font-size: 2em;"> Bale </p>';
        }
        
    }

    div.ondragover = (event) => {
        event.preventDefault();
    }

}

function uefaGame(){
    let submit = document.getElementById('submit');
    let btn = document.getElementById('circleBtn');
    if(btn){
        let back = window.getComputedStyle(btn).background;
        let uefadiv = document.getElementById('uefadiv');
        uefadiv.addEventListener('click', ()=> {
            uefadiv.style.background = 'purple';
            btn.style.border = "2px solid black";
            btn.style.background = 'deepskyblue';
            let elem = document.createElement('p');
            elem.textContent = "The initial color of button background was " + back + ", now it is "+
                                    window.getComputedStyle(btn).background;
            uefadiv.appendChild(elem);
        }, true);
        btn.addEventListener('click', () => {
            let elem = document.createElement('p');
            btn.style.background = "midnightblue";
            elem.textContent = "The last color of button background was " + back + ", now it is "+
                                    window.getComputedStyle(btn).background;
            uefadiv.appendChild(elem);
        });
    }
    
    let newWindow = document.getElementById('openbtn');
    var openWindow;

    if(newWindow){
        newWindow.onclick = function(){
            if(localStorage.LastEntry){
                alert('Already open on ' + localStorage.LastEntry);
            }
            openWindow = window.open('/uefagame', '_blank', width="500", height="500");
            localStorage.setItem('LastEntry', new Date());
            
        }
    
        let closeBtn = document.getElementById('closebtn');
        closeBtn.onclick = function(){
            if(!openWindow.closed){
                openWindow.close();
            }
        }
    }
    

    if(submit){
        submit.onclick = enableBox;
        
    }

    /*  Set canvas widh and height  */

    var img = document.getElementById("pitch");
    var canvas = document.getElementById("myCanvas");
    if(img){
        canvas.style.position = "absolute";
        canvas.style.left = img.offsetLeft + 'px';
        canvas.style.top = img.offsetTop + 'px';
        canvas.style.width = img.offsetWidth + 'px';
        canvas.style.height = getComputedStyle(img).height;
        
        let ballimg  = document.getElementById('ballImg');
        ballimg.style.display = 'none';
        
        let gloves = document.getElementById('gloves');
        gloves.style.display = 'none';
        var obj = {deltaX: 0,
                   deltaY: 0, 
                   height: canvas.height, 
                   posX : canvas.width -25, 
                   posY: canvas.height /2 - 11,
                   oldPosX: 0,
                    oldPosY: 0  };
    
    
        drawCircle(canvas);  
        drawGloves(canvas, obj);
        moveRandomGloves(canvas, obj);
        setInterval(getKey, .01, canvas, obj);
    }

    dragAndDrop();
   
}

window.onload = function(){

    getHamburger();

    let click = document.getElementById("btn");
    if( click ){
        styling(click);
        click.onclick = addCoach;
    }
    
    let btn = document.getElementById('ScrollToTop');
    btn.onclick = scrollToTop;

    querry();
    let anthem = document.getElementById('anthem');
    if(anthem){
        anthem.onclick = addAnthem;
    }

    let yes = document.getElementById('yes');
    let no = document.getElementById('no');

    if(yes) yes.onclick = disable;
    if(no) no.onclick = disable;


    let intervalForCreatingFlakes = Math.floor(Math.random()*1500);

    setInterval(function(){

        let img = document.createElement('img');
        img.classList.add('snowflake');
        img.src = './snowflake.png';
        let position = Math.floor(Math.random()*window.innerWidth);
        let dimension = Math.floor(Math.random()*10);
        //img.style.position = 'absolute';
        img.style.left = position + 'px';
        img.style.width = dimension + '%';
        img.style.height = 'auto';
        img.x1 = 0;
        img.left = position;
        img.procent1 = dimension;
        img.style.zIndex = 1000;
        document.body.insertBefore(img, document.body.firstChild);
        img.makeTheFlakeMove = makeTheFlakeMove(img);
        intervalForCreatingFlakes = Math.floor(Math.random()*1500);
    }, intervalForCreatingFlakes);

    handleSignLog();
    uefaGame();


};

window.onscroll = function() {
    scrollFunction()
};