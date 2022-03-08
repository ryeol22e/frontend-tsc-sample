// as HTMLInputElement
// as HTMLElement or <HTMLElement>형변환

import {Calculrator} from '../math/Calculator';

window.addEventListener('load',()=> {
    let count: number = 0;
    const cal = new Calculrator();
    cal.setAdd(1,3);

    console.log(cal.getAdd());
    setInterval(()=>{
        const a = <HTMLElement> document.getElementById('counting');
        a.innerText = String(count++);
    }, 1000);
});