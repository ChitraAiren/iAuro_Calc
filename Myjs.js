function square()
{
    document.form1.box.value = Math.pow(document.form1.box.value,2);
}
function cube()
{
    document.form1.box.value = Math.pow(document.form1.box.value,3);
}
function sqrt()
{
    document.form1.box.value = Math.sqrt(document.form1.box.value);
}
function cbrt()
{
    document.form1.box.value = Math.cbrt(document.form1.box.value);
}
function fact()
{
    var num, i, fact;
    num = document.form1.box.value;
    if (num == 0){
        document.form1.box.value = 1;
    }
    else{
        fact = 1;
        for(i = 1; i<num; i++)
        {
            fact *= i
        }
        document.form1.box.value = fact
    } 
}
function logo()
{
    document.form1.box.value = Math.log10(document.form1.box.value);
}
function sine()
{
    var angle, radian, f;
    angle = document.form1.box.value;
    radian = angle*Math.PI/180;
    f = Math.sin(radian);
    document.form1.box.value = f.toFixed(2);
}
function cosin()
{
    var angle, radian, f;
    angle = document.form1.box.value;
    radian = angle*Math.PI/180;
    f = Math.cosin(radian);
    document.form1.box.value = f.toFixed(2);
}
function tann()
{
    var angle, radian, f;
    angle = document.form1.box.value;
    radian = angle*Math.PI/180;
    f = Math.tan(radian);
    document.form1.box.value = f.toFixed(2);
}
function sinr()
{
    var radian, value;
    radian = Math.asin(document.form1.box.value);
    value = radian * 180 / Math.PI;
    document.form1.box.value = value.toFixed(2);
}
function cosr()
{
    var radian, value;
    radian = Math.acos(document.form1.box.value);
    value = radian * 180 / Math.PI;
    document.form1.box.value = value.toFixed(2);
}
function tanr()
{
    var radian, value;
    radian = Math.atan(document.form1.box.value);
    value = radian * 180 / Math.PI;
    document.form1.box.value = value.toFixed(2);
}
function perc()
{
    var x, result;
    x = eval(document.form1.box.value);
    result = x/100;
    document.form1.box.value = result;  
}