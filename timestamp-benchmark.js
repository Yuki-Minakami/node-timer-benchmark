
var count = 10000000;
/* ---------------- */
var t1 = Date.now();
for(i = 0; i < count; i++)
{
    new Date().getTime();
}
var t2 = Date.now();
console.log('【new Date().getTime()】interval: ', t2-t1);

/* ---------------- */
var t1 = Date.now();
for(i = 0; i < count; i++)
{
    +new Date;
}
var t2 = Date.now();
console.log('【+new Date】interval: ', t2-t1);

/* ---------------- */
var t1 = Date.now();
for(i = 0; i < count; i++)
{
    Date.now();
}

var t2 = Date.now();
console.log('【Date.now()】interval: ', t2-t1);

/* ---------------- */

var hrTime1 = process.hrtime();
var hrTime2 = hrTime1;

var t1 = Date.now();
for(i = 0; i < count; i++)
{
    hrTime2 = process.hrtime(hrTime1);
}
var t2 = Date.now();
console.log('【hrTime】interval: ',t2-t1);

/* ---------------- */

var t1 = Date.now();
for(i = 0; i < count; i++)
{
    process.uptime();
}
t2 = Date.now();

console.log('【hrTime】interval: ', t2 - t1);