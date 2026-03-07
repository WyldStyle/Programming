$PSVersionTable
// automatic variable which stores state info.
Get-ExecutionPolicy Get-ExecutionPolicy -List
//Restricted, Remote Signed...for all scopes
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
//Default Execution Policy - LocalMachine
// RemoteSigned requires downloaded scripts to be signed by a trusted publisher.
//-Compiled commands in PowerShell are known as cmdlets, pronounced as “command-let”
//Verb-Noun ---> Get-Service
//Core cmdlets - 1.Get-help 2.Get-Command  3. Get-Member
//Do - from admin PS -> Update-Help to update help
//Do - enter Get-Help -Name Get-Help -> 6 different parameters
//Full Detailes Examples Online Parameter ShowWindow
help Get-EventLog
/* 
Get-EventLog [-LogName] <System.String> [[-InstanceId] <System.Int64[]>]
    [-After <System.DateTime>] [-AsBaseObject] [-Before <System.DateTime>]
    [-ComputerName <System.String[]>] [-EntryType {Error | Information |
    FailureAudit | SuccessAudit | Warning}] [-Index <System.Int32[]>] [-Message
    <System.String>] [-Newest <System.Int32>] [-Source <System.String[]>]
    [-UserName <System.String[]>] [<CommonParameters>]

    Get-EventLog [-AsString] [-ComputerName <System.String[]>] [-List]
    [<CommonParameters>]
 */
// PARAMETERS

// Positional Parameters
/*Positional parameters allow you to provide a value without specifying the parameter’s name. 
When using a parameter positionally, you must specify its value in the correct position. */
// [-LogName] <System.String> , everything not within [] = required parameter
// parameterName   parameterDataType
// Square Bracket [] indicates i.e. it is optional
//[[-InstanceId] <System.Int64[]>] everything within [] = optional parameter
// [-InstanceId] => parameter name within [] = Positional Parameter
//<System.Int64[]> ==> parameterDataType has [] = can accept multiple values

//Switch Parameters
/**
 Doesn't require a value
 if you specify it, value = true, else value = false
[-List]
 */

/*
Get-Help
help <commandName> -Full/Detailed/Examples/ShowWindow
ShowWindow opens a searchable window
*/

/*
Chapter 3 : Discovering objects, properties & methods

Get-Service -Name w32time
Get-Service -Name w32time | Get-Member
display first line ->  TypeName: System.ServiceProcess.ServiceController
TypeName identifies the type of object that’s returned, which in this example is a System.ServiceProcess.ServiceController object. This is often abbreviated to the last part of the TypeName, such as ServiceController, in this example.
Although additional properties (Although these additional properties aren’t shown by default, you can select them by piping to Select-Object and using the Property parameter. ) aren’t shown by default, you can select them by piping to Select-Object and using the Property parameter. 

Get-Service -Name w32time | Select-Object -Property *
Get-Service -Name w32time | Select-Object -Property can* // search a property with specific name

Methods:
Methods are actions you can perform on an object. 
use MemberType to narrow down the results of Get Member     
do---> 
Get-Service -Name w32time | Get-Member -MemberType Method
do--->
(Get-Service -Name w32time).Stop()
(Get-Service -Name w32time).Start()
did but the time had not stopped.
--->
Get-Service -Name w32time | Start-Service -PassThru 
return output

{
somethings are going over the head but I will try to understand them later}

Chapter 4: One Liners and the pipeline

--contd. Filter left