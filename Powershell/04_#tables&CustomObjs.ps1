$myHashTable = @{
    name = "shoppingList"
    key1 = 100
    apple = 2.34
    key2 = "xoxo"
    key3 = @(1,2,3)
    key4 = $true
}
$myHashTable.GetType()
$myHashTable.Keys
#   see that the o/p of keys is not in the order we put them
$myHashTable.Values

$myHashTable.apple
$myHashTable['key3']
$myHashTable['key4']

Set-StrictMode -Version Latest
$myHashTable.key6
#   pwsh will give you just a warning but runs the program so not very useful
#   you can check by 
$myHashTable.ContainsKey('key6')
$myHashTable.ContainsValue(100)

#   adding keys
$myHashTable.Add('key5_addObj','$newHash = @{newKey1 = 121}')
$myHashTable
$myHashTable['keys7'] = 'added via []'
$myHashTable.key8 = 'added via . notation'
$myHashTable

#   changing values
$myHashTable.key1 = 100+1
$myHashTable

#   remove
$myHashTable.Remove('apple')
$myHashTable


###################### PS CUSTOM OBJECT
$Employee = New-Object -TypeName PScustomObject
$Employee1 = New-Object -TypeName psobject
$Employee.GetType()
$Employee1.GetType()
#   both are same
Add-Member -InputObject $Employee -MemberType NoteProperty -Name "EmployeeID" -Value "Haren"
#   Add-Member tells that a member has to be added
#   -InputObject is a parameter of Add-Member which tells it that onto which it wants to add member
#   $- onto a variable 
#   -MemberType is another Parameter which defines the type of Member
#   Now MemberType has arguments like noteProperty, scriptProperty, MethodProperty
#   then key:value pair.
$Employee
Get-Member -InputObject $Employee

$Employee = [PSCustomObject]@{
    cpfNo = 171451
    BasicPay = 30000
}
$Employee

Get-Member -InputObject $Employee