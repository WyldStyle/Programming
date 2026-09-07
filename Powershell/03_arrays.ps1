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