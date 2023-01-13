let getClass = sel => document.querySelector(sel);
let count = 0;
let str = '';
window.addEventListener('keydown', function(event){
    // console.log('click');
    // console.log('KeyCode ' + event.keyCode);
    // console.log('code ' + event.code);
    // console.log('key ' + event.key);
    console.log(event);
    if (event.key == 'Tab'){
        document.querySelector(`.tab`).style.backgroundColor = 'rgb(96, 96, 96)';
        str = str + '      ';
        document.querySelector('.screen').textContent = str;
        window.addEventListener('keyup', function(){
        document.querySelector(`.tab`).style.backgroundColor = 'white';
        })
    }
    else if(this.event.key == 'Enter'){
        str = str + '\n';
        this.document.querySelector('.enter').style.backgroundColor = 'rgb(96, 96, 96)';
        window.addEventListener('keyup', function(){
        document.querySelector(`.enter`).style.backgroundColor = 'white';
        })
    }
    else if (event.key == 'CapsLock'){
        document.querySelector(`.caps`).style.backgroundColor = 'rgb(96, 96, 96)';
        window.addEventListener('keyup', function(){
        document.querySelector(`.caps`).style.backgroundColor = 'white';
        })
        if (count == 1)
        {
            count = 0;
        }
        else{
            count = 1;
        }
    } 
    else if (event.shiftKey)
    {
        if (event.code == 'ShiftLeft')
        {
            document.querySelector('.shift1').style.backgroundColor = 'rgb(96, 96, 96)';
            window.addEventListener('keyup', function(){
            document.querySelector(`.shift1`).style.backgroundColor = 'white';
            })
        //     if(document.querySelector('.shift1').style.backgroundColor == 'rgb(96, 96, 96)')
        //     {

        //             window.addEventListener('keydown', function(e){
        //                 if (e.keyCode >= 48 || e.keyCode <= 90)
        //                 {
        //                     console.log('KeyCode ' + e.keyCode);
        //                     console.log('code ' + e.code);
        //                     console.log('key ' + e.key);
        //                     console.log('KeyCode ' + event.keyCode);
        //                     console.log('code ' + event.code);
        //                     console.log('key ' + event.key);
        //                     console.log("click keydown");
        //                 str = str + e.key;
        //                 document.querySelector('.screen').textContent = str;
        //                 document.querySelector(`.a${e.key.toLowerCase()}`).style.backgroundColor = 'rgb(96, 96, 96)';
        //                 window.addEventListener('keyup', function(){
        //                 document.querySelector(`.a${e.key.toLowerCase()}`).style.backgroundColor = 'white';
        //                 console.log("click keyup");
        //                 })
        //                 window.addEventListener('keyup', function(){
        //                 document.querySelector(`.shift1`).style.backgroundColor = 'white';
        //                 console.log("click keyup");
        //                 })
        //             }
        //             else{
        //                 window.addEventListener('keyup', function(){
        //                     console.log("click keyup");
        //                 })
        //             }
        //             })
                
        //         window.addEventListener('keyup', function(){
        //         console.log("click keyup");
        //         })
        //         window.addEventListener('keyup', function(){
        //         console.log("click keyup");
        //         document.querySelector(`.shift1`).style.backgroundColor = 'white';
        //         })
            
        // }

        }
        else{
            document.querySelector('.shift2').style.backgroundColor = 'rgb(96, 96, 96)';
            window.addEventListener('keyup', function(){
            document.querySelector(`.shift2`).style.backgroundColor = 'white';
            })
        }
    }
    else if (event.code == "Space")
    {
        str = str + ' ';
        document.querySelector(`.space`).style.backgroundColor = 'rgb(96, 96, 96)';
        window.addEventListener('keyup', function(){
        document.querySelector(`.space`).style.backgroundColor = 'white';
        })
    }
    else if (event.key == 'Backspace'){
        if (str.length >= 1)
        {
            str = str.substr(0, str.length-1);
            console.log(str.length);
            document.querySelector('.screen').textContent = str;
            document.querySelector(`.Backspace`).style.backgroundColor = 'rgb(96, 96, 96)';
            window.addEventListener('keyup', function(){
            document.querySelector(`.Backspace`).style.backgroundColor = 'white';
            })
        }
        else{
            document.querySelector(`.Backspace`).style.backgroundColor = 'rgb(96, 96, 96)';
            window.addEventListener('keyup', function(){
            document.querySelector(`.Backspace`).style.backgroundColor = 'white';
            })
        }
    }
    else if (event.keyCode >= 65 && event.keyCode <= 90){
        if (count == 1)
        {
            str = str + event.key.toUpperCase();
            document.querySelector('.screen').textContent = str;
            document.querySelector(`.${event.code}`).style.backgroundColor = 'rgb(96, 96, 96)';
            window.addEventListener('keyup', function(){
            document.querySelector(`.${event.code}`).style.backgroundColor = 'white';
            })
        }
        else{
        str = str + event.key;
        document.querySelector('.screen').textContent = str;
        document.querySelector(`.${event.code}`).style.backgroundColor = 'rgb(96, 96, 96)';
        window.addEventListener('keyup', function(){
        document.querySelector(`.${event.code}`).style.backgroundColor = 'white';
            })
    }  
    }
    else if (event.keyCode >= 48 && event.keyCode <= 65){
        if (count == 1)
        {
            str = str + event.key.toUpperCase();
            document.querySelector('.screen').textContent = str;
            document.querySelector(`.${event.code}`).style.backgroundColor = 'rgb(96, 96, 96)';
            window.addEventListener('keyup', function(){
            document.querySelector(`.${event.code}`).style.backgroundColor = 'white';
            })
        }
        else{
        str = str + event.key;
        document.querySelector('.screen').textContent = str;
        document.querySelector(`.${event.code}`).style.backgroundColor = 'rgb(96, 96, 96)';
        window.addEventListener('keyup', function(){
        document.querySelector(`.${event.code}`).style.backgroundColor = 'white';
            })
    }  
    }
    else if ((event.keyCode >= 186 && event.keyCode <= 192) || (event.keyCode >= 219 && event.keyCode <= 222)){
        str = str + event.key;
        this.document.querySelector(`.a${event.code}`).style.backgroundColor = 'rgb(96, 96, 96)';
        this.document.querySelector(".screen").textContent = str;
        this.window.addEventListener('keyup', function(){
        this.document.querySelector(`.a${event.code}`).style.backgroundColor = 'white';
        })
    }

    if (str.length % 100 == 0)
    {
        str = str + '\n';
    }
    console.log(str);
   
})


    
