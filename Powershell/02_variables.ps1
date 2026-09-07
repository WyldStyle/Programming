$myName= "WyldWyld"
$myHerName = "Parul"
#after entering variable name enter . and you'll see properties on variable.
$myHerName.GetType()

#intergers & Double
$myValue = 12
$myValueD = 12.11

$myValue + $myValueD;
$sum = $myValue + $myValueD
$sum
$remainderModulo = $myValue % $myValueD
$remainderModulo

#Boolean
$myStatement = $true
$myStatement.GetType()

$myStatement -eq $myValue

Set-StrictMode -version Latest
#   it will set the mode to strict which won't let it run if there's garbage variable
# $myGarbage
#   unquote above variable and it'll display error

# $checkNull
# $checkNull -eq $null

[int]$myValueInt = 1.1
$myValueInt.GetType();
$myValueInt
# double value stored in an int will be automatically Math.floor
[double]$myValueDD = 1.1
$myValueDD.GetType()

#   you can also store value of cmdLets into variable
$today = Get-Date
$today