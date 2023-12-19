let a=0;
function up()
{
    a++;
    console.log(a);
    setTimeout(up,1000);
}
up();