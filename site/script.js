function goy(){
  let yu=document.createElement('p');
  yu.className='yu';
  document.querySelector('main').append(yu);
  let yo=document.createElement('p');
  yo.className='yo';
  document.querySelector('main').append(yo);

  let yl=document.createElement('p');
  yl.className='yl';
  document.querySelector('main').append(yl);
  let yr=document.createElement('p');
  yr.className='yr';
  document.querySelector('main').append(yr);

  let yy=document.createElement('p');
  yy.className='yy';
  document.querySelector('main').append(yy);
  let yyy=document.createElement('p');
  yyy.className='yyy';
  document.querySelector('main').append(yyy);
  let littleFinger=document.createElement('p');
  littleFinger.className='littleFinger';
  document.querySelector('main').append(littleFinger);
  let bigFinger=document.createElement('p');
  bigFinger.className='bigFinger';
  document.querySelector('main').append(bigFinger);
  let skeleton=document.createElement('p');
  skeleton.className='skeleton';
  document.querySelector('main').append(skeleton);

  let number=+0;
  let number3=+70;
  let fuck=-50;
  let fuck3=-100;
  let littleF=+90;
  let skeletonN=+150;
  let bigF=-10;
  document.querySelector('main').style.cssText=`
  display:flex;
  justify-content:center;
  align-itemas:ceneter;
  width:100%;
  `
  const lol=setInterval(()=>{
    number=number+10;
    number3=number3+10;
    fuck=fuck+10;
    fuck3=fuck3+10;
    littleF=littleF+10;
    bigF=bigF+10;
    skeletonN=skeletonN+10;
    yu.style.cssText='top: '+`${number}`+'px';
    yy.style.cssText='top: '+`${number}`+'px';
    yo.style.cssText='top: '+`${number3}`+'px';
    yl.style.cssText='top: '+`${number3}`+'px';
    yr.style.cssText='top: '+`${number3}`+'px';
    yy.style.cssText='top: '+`${fuck}`+'px;';
    yyy.style.cssText='top: '+`${fuck3}`+'px;';
    littleFinger.style.cssText='top: '+`${littleF}`+'px;';
    bigFinger.style.cssText='top: '+`${bigF}`+'px;';
    skeleton.style.cssText='top: '+`${skeletonN}`+'px;';
    // console.log(window.innerHeight);
    if(window.innerHeight<number+50){
      console.log('Go fuck yourself scum!');
      yu.remove();
      yo.remove();
      yl.remove();
      yr.remove();
      yy.remove();
      yyy.remove();
      littleFinger.remove();
      bigFinger.remove();
      skeleton.remove();
      clearInterval(lol);
      let lOl=document.createElement('p');
      lOl.className='lOl';
      lOl.innerHTML='Muscovites rats!<br> burn Moscow with a red flame!'
      document.querySelector('main').append(lOl);
      description();
    }
  },300);
}

let go = document.createElement('button');
go.innerHTML=`Запустить презентацию! Доказывающую что московиткы крысы.`;
document.querySelector('main').append(go);
function description(){
  let description=document.createElement('p');

    document.querySelector('main').append(description);
    description.className='lOl';
  description.innerHTML='москвичи как бункерные крысы военных преступников третьего рейха, в своей крысиной москве, а москва - это карликовое, бункерное мини государство, военных преступников третьего рейха.';
}

document.querySelector('button').addEventListener('click',()=>{
  document.querySelector('main').removeChild(go);
  goy();

})
