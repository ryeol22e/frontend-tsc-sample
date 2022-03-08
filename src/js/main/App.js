// as HTMLInputElement
// as HTMLElement or <HTMLElement>형변환
import { Calculrator } from '../math/Calculator';
window.addEventListener('load', function () {
    var count = 0;
    var cal = new Calculrator();
    cal.setAdd(1, 3);
    console.log(cal.getAdd());
    setInterval(function () {
        var a = document.getElementById('counting');
        a.innerText = String(count++);
    }, 1000);
});
