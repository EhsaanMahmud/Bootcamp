
function greeting()
{
    console.log("hello everyone");

}

function greeting1(name)
{
    console.log(`hello ${name}`);
}

const delay=(1*3*1000);

const timeout=setTimeout(greeting1, delay, 'john');

clearTimeout(timeout);

function currentTime()
{
  const date=new Date();
  document.getElementById('p1').innerHTML=date;
}

let count=1;
function welcome(){
    console.log('welcome to javascript');
    if(count==4)
    {
        clearInterval(call);
    }
    count++;
}
const call=setInterval(welcome,2000);