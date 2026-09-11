Set-StrictMode -Version Latest
$myArray = @()
$myArray.GetType()
$myArray.IsFixedSize
#   array is bad for when you are constantly adding or deleting because what it does that it first deletes the prev array and then creates a new array with the new element added

$myArray = ("test1", "test2","test3")
$myArray.Length
$myArray.Count
$myArray[2]

#$myArray.Add("test4")
$myArray = $myArray + "test4"
$myArray += "test5"
# $myArray.RemoveAt(1)
#   Add & remove wont work as this is fixed size array
$myArray = $myArray -ne "test2"
#   -ne means "where it doesn't equals to"
$myArray

########## Array List 
$myList1 = [System.Collections.ArrayList]@()
$myArrList = New-Object -TypeName System.Collections.ArrayList

$myList1.GetType()
$myArrList.GetType()
$myArrList.IsFixedSize
$myArrList.Add("Test1")
$myArrList.Add("Test2")
$myArrList.Add("Test3")
# it will give 0, 1, 2 so if we don't want to print the position
[void]$myArrList.Add("Test1")
[void]$myArrList.Add("Test2")
[void]$myArrList.Add("Test3")
$myArrList.AddRange(@("test4","test5","test6"))
# AddRange(@()) -> @() = array of items
$myArrList.Count
$myArrList.Remove("Test2")
$myArrList.Count
$myArrList.RemoveAt(1)
$myArrList.Count
$myArrList.RemoveRange(0,2)
$myArrList.Count

### Time calc
$myArr2 = @()
#Measure-Command -Expression{@(0..50000).ForEach({$myArr2+=($_)})} #18seconds

$myArrList2 = New-Object -TypeName System.Collections.ArrayList
Measure-Command -Expression{@(0..50000).ForEach({$myArrList2.Add($_)})} # 0.65seconds
#   fastest
$myArrList3 = New-Object -TypeName System.Collections.ArrayList
Measure-Command -Expression{$myArrList3.AddRange(@(0..50000))} # 0.09seconds
