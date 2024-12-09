const a = parseFloat(prompt('Введите коэффициент a:'));
const b = parseFloat(prompt('Введите коэффициент b:'));
const c = parseFloat(prompt('Введите коэффициент c:'));

const D = (b * b) - (4 * a * c);

const x1 = (-b - Math.sqrt(D)) / (2 * a);
const x2 = (-b + Math.sqrt(D)) / (2 * a);
if ( D === 0){
    document.write('D=0  x1=0')
}
else if (D < 0) {
    document.write('нет корней')
}
else if ( D > 0) {
    document.write('D = ', D);
    document.write('   x1= ', x1);
    document.write('   x2= ', x2);
}

