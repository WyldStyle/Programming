$filePath = "D:\Programming\Powershell\07_switch.ps1"
$Data = Get-Content -Path $filePath
#   it will be an array
$firstName = $Data[0];

# if($firstName -eq "Tim")
# $name = "Harry";
$name = "marry" # see this also mathces with Marry
switch ($name) {
    "Harry"{
      Write-Output("the name is1", $name)
    break;
      }
    "Marry"{
      Write-Output("the name is2", $name)
    break;
    }
    "Jerry"{
      Write-Output("the name is3", $name)
    break;
    }
    Default {
      Write-Output(" Who are you Mr", $name)
    }
}

# $num = 50
# $num = 25
$num = 35
# switch ($num) {
#   ($_ -lt 10){  
#     Write-Output('Total char are <10',$num)
#   break;
#   }
#   ($_ -in 20..30){
#     Write-Output('Total char are <30',$num)
#   break;
#   }
#   ($_ -lt 40){
#     Write-Output('Total char are <40',$num)
#   break;
#   }
#   Default {
#     Write-Output('Total char are > 40',$num)
#   }
# }

switch ($num) {
  {$_ -lt 10}{  
    Write-Output('Total char are <10',$num)
  break;
  }
  {$_ -in 20..30}{
    Write-Output('Total char are <30',$num)
  break;
  }
  {$_ -lt 40}{
    Write-Output('Total char are <40',$num)
  break;
  }
  Default {
    Write-Output('Total char are > 40',$num)
  }
}