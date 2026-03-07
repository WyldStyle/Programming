//---------------Consoling
console.log('(7).toString()         = ',(7).toString())// default 10
console.log('7..toString(2)         = ',7..toString(2))
console.log('(-7).toString(2)       = ',(-7).toString(2))// it's type is num woah+!
console.log('-7..toString(2)       = ',-7..toString(2))
console.log(' 7 >>> 0..toString(2) will always give value in decimal = '
,7 >>> 0..toString(2))
console.log('(7 >>> 0).toString(2)  = ',(7 >>> 0).toString(2))
console.log('(-7 >>> 0).toString(2) = ',(-7 >>> 0).toString(2))
console.log('(7 >>> 1).toString(2)  = ', (7 >>> 1).toString(2))
console.log('(-7 >>> 1).toString(2) = ',(-7 >>> 1).toString(2))
console.log('(-7 >>> 3).toString(2) = ',(-7 >>> 3).toString(2))
console.log('(7 >> 0).toString(2)   = ',(7 >> 0).toString(2))
console.log('(-7 >> 0).toString(2)  = ',(-7 >> 0).toString(2))
console.log('(7 >> 1).toString(2)   = ',(7 >> 1).toString(2))
console.log('(-7 >> 1).toString(2)  = ',(-7 >> 1).toString(2))
console.log('>> 1  = Math.floor()');
console.log('((-7 >> 0) >> 1).toString(2)  = ',((-7 >> 0) >> 1).toString(2))
console.log('(7 << 0).toString(2)   = ',(7 << 0).toString(2))
console.log('(-7 << 0).toString(2)  = ',(-7 << 0).toString(2))
console.log('(7 << 1).toString(2)   = ',(7 << 1).toString(2))
console.log('(-7 << 1).toString(2)  = ',(-7 << 1).toString(2))

console.log(`\n Node doesn't print leading zeroes so 8 in signed 
2's comp = 1000 n not 01000 `)
console.log(`\n what's happening is >>> 0 sees integer entered as \n
positive number by changing most significant bit as unsigned bit \n
so result would always be a positive no and when you convert it \n 
into binary it just represents set high bits \n`)

console.log('8 >>> 0..toString(2) will always give value in decimal = '
,8 >>> 0..toString(2))
console.log(`8..toString(2)         = `,8..toString(2))
console.log(`-8..toString(2)        = `,-8..toString(2))
console.log(`8 >>> 0                = `,8 >>> 0)
console.log(`-8 >>> 0               = `,-8 >>> 0)
console.log('(8 >>> 0).toString(2)  = ',(8 >>> 0).toString(2))
console.log('(-8 >>> 0).toString(2) = ',(-8 >>> 0).toString(2))
console.log('(8 >>> 1).toString(2)  = ', (8 >>> 1).toString(2), `  is actually 0100`)
console.log('(-8 >>> 1).toString(2) = ',(-8 >>> 1).toString(2))
console.log('(-8 >>> 3).toString(2) = ',(-8 >>> 3).toString(2))
console.log(`result should've been  =  00011111111111111111111111111111`)
console.log(`the no -8 is not negative anymore \n`)

console.log(`\n some more intereseting result ---- \n`)
console.log(Number.MAX_SAFE_INTEGER); // A number greater than 4294967295 64bit 
console.log(Number.MAX_SAFE_INTEGER >>> 0); // 4294967295 32bit
// -1 = 0xFFFFFFFF = every bit is 1
// setting just the sign bit to 0 you get the max 32 bit int
let x = -10,unsigned_x = x & 0xFFFFFFFF
console.log(`10 & 0xFFFFFFFF = `,(unsigned_x)) //# Output: 0b11111111111111111111111111110110
console.log(`10 & 0xFFFFFFFF >>> 0= `,unsigned_x >>> 0)
console.log(`-1 >>> 0       = `,-1 >>> 0); // 4294967295
console.log(`'-1' >>> 0     = `,'-1' >>> 0); // 4294967295
console.log(`Infinity >>> 0 = `,Infinity >>> 0); // 0
console.log(`Nan >>> 0      = `,NaN >>> 0); // 0
console.log(`null >>> 0     = `,null >>> 0); // 0
console.log(`[] >>> 0       = `,[] >>> 0); // 0
console.log(`{} >>> 0       = `,{} >>> 0); // 0
console.log(`Number.MAX_SAFE_INTEGER >> 0 = `,Number.MAX_SAFE_INTEGER >> 0); // -1 (because the output is a 32 bit number)

console.log(`\n converting binary back to decimal \n`)
console.log(`parseInt((-8 >>> 3).toString(2), 2).toString(10)`,
parseInt((-8 >>> 3).toString(2), 2).toString(10))
console.log(`parseInt((-8 >>> 0).toString(2), 2).toString(10)`,
parseInt((-8 >>> 0).toString(2), 2).toString(10))
console.log(`parseInt((-8 >>> -1).toString(2), 2).toString(10)`,
parseInt((-8 >>> -1).toString(2), 2).toString(10),'\n')

for (let i= -33; i <=33; i++)
{
  console.log('(100 >>>', ``,i,`) = `,(100 >>> i),'=',(100 >>> i).toString(2))
}
for( let j = -33; j <= 33; j++)
{

  console.log(`(-100 >>>`,``,j,` = `,(-100 >>> j),` =`,(-100 >>> j).toString(2) )
}

console.log('\n (8 >> 0).toString(2)   = ',(8 >> 0).toString(2))
console.log('(-8 >> 0).toString(2)  = ',(-8 >> 0).toString(2))
console.log('8 >> 0 = ',8 >> 1)
console.log('-8 >> 0 = ',-8 >> 1)
console.log('(8 >> 1).toString(2)   = ',(8 >> 1).toString(2))
console.log('(-8 >> 1).toString(2)  = ',(-8 >> 1).toString(2))
console.log('((-8 >> 0) >> 1).toString(2)  = ',((-8 >> 0) >> 1).toString(2))
console.log(`((-8 >> 1) >> 0).toString(2)  = `,((-8 >> 1) >> 0).toString(2))
console.log('((-8 >>> 0) >> 1).toString(2) = ',((-8 >>> 0) >> 1).toString(2))
console.log(`((-8 >> 1) >>> 0).toString(2) = `,((-8 >> 1) >>> 0).toString(2))

for (let i= -33; i <=33; i++)
{
  console.log('(100 >>', ``,i,`) = `,(100 >> i),'=',(100 >> i).toString(2))
}
for( let j = -33; j <= 33; j++)
{

  console.log(`(-100 >>`,``,j,` = `,(-100 >> j),` =`,((-100 >> j)>>>0).toString(2) )
}
// console.log(2n >> 1) --error
console.log(`2n >> 1n = `,2n >> 1n)
console.log('(8 << 0).toString(2)   = ',(8 << 0).toString(2))
console.log('(-8 << 0).toString(2)  = ',(-8 << 0).toString(2))
console.log('(8 << 1).toString(2)   = ',(8 << 1).toString(2))
console.log('(-8 << 1).toString(2)  = ',(-8 << 1).toString(2))



// ---------- XOR jaa re Sam

console.log(`BEWARE----`)
console.log(`5..toString(2) ^ 8..toString(2) = `,5..toString(2) ^ 8..toString(2),`=`,
(5..toString(2) ^ 8..toString(2)).toString(2))
console.log('correct way 5 ^ 8 = ',5 ^ 8,`=`,(5 ^ 8).toString(2))
console.log(`5 ^ 7 = `,5 ^ 7,`=`,(5 ^ 7).toString(2))
console.log(`5 ^ 7 ^ 8 = `,5 ^ 7 ^ 8,`=`,(5 ^ 7 ^ 8).toString(2))
console.log(` 5  ^ 7 ^ 8 ^ 9 = `,5  ^ 7 ^ 8 ^ 9,`=`,(5  ^ 7 ^ 8 ^ 9).toString(2))
console.log('5 ^ 6 ^ 7 ^ 8 = ', 5..toString(2),`^`,6..toString(2),`^`,7..toString(2),`^`,8..toString(2),`= `,
5 ^ 7 ^ 8 ^ 9,` = `,(5 ^ 7 ^ 8 ^ 9).toString(2))
console.log('5 ^ 7 ^ 8 ^ -9 = ', 5..toString(2),`^`,7..toString(2),`^`,8..toString(2),`^`,(-9 >>> 0).toString(2),`= `,
5 ^ 7 ^ 8 ^ -9,` = `,(5 ^ 7 ^ 8 ^ -9).toString(2))
