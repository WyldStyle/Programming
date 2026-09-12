for($i =0;$i -lt 10;$i+=2){
    Write-Output("$i")

}

$testArray = @("Steve", "John", "Tim")
for($i=0; $i -lt $testArray.Length; $i++){
    Write-Output("$testArray[$i]")
    Write-Output $testArray[$i]
    #   see the difference in the output of two writes
}

foreach($item in $testArray){
    Write-Output $item
}

for($i=0; $i -lt $testArray.Length; $i++){
    $testArray[$i] += "Doe";
    Write-Output $testArray[$i];
}

foreach($item in $testArray){
    $item += "Hoe";
    Write-Output $item
}

# $currentMinute = (Get-Date).Minute
# while ((Get-Date).minute -eq $currentMinute) {
#    Get-Date 
# }

# while($true){
#     Write-Output "Welcome User";
#     Write-Output "Enter q to quit"
#     Write-Output "Enter two numbers"

#     $a = Read-Host -Prompt "Enter 1st no"
#     if ($a -eq "q"){break;}
#     $b = Read-Host -Prompt "Enter 2nd no"
#     # Write-Output The sum is $($a+$b)
#     # Write-Output "the sum is $($a + $b)"
#     Write-Output "The sum is $($a+$b)"

# }
#   See in the above program the output of $a+$b = 22 because Read -Prompt store input as text

while($true){
    Write-Output "Welcome User";
    Write-Output "Enter q to quit"
    Write-Output "Enter two numbers"

    $a = [int] (Read-Host -Prompt "Enter 1st no")
        if ($a -eq "q"){break;}
    $b =[int] (Read-Host -Prompt "Enter 2nd no")
         # Write-Output The sum is $($a+$b)
    # Write-Output "the sum is $($a + $b)"
    Write-Output "The sum is $($a+$b)"
    Write-Output ###############
}