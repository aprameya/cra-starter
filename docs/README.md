

# Check updates
* https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js/#check-for-duplicate-versions

```
# Using NPM
npm ls -all 2>$null |
  Select-String -Pattern  '(@?aws\-amplify[^@]*).*(?<!deduped)$' | 
  %{$_.Matches.Groups[1].value} | Group-Object | 
  Where-Object { $_.Count -gt 1 } | Select-Object -ExpandProperty Name |
  Sort-Object
```

```
PS C:\dev\projects\sites\cra-starter> npm ls -all 2>$null |
>>   Select-String -Pattern  '(@?aws\-amplify[^@]*).*(?<!deduped)$' |
>>   %{$_.Matches.Groups[1].value} | Group-Object |
>>   Where-Object { $_.Count -gt 1 } | Select-Object -ExpandProperty Name |
>>   Sort-Object
@aws-amplify/ui
```



`npx npm-check-updates`
example:
```
PS C:\dev\projects\sites\cra-starter> npx npm-check-updates -i '/@?aws-amplify/'
Need to install the following packages:
  npm-check-updates
Ok to proceed? (y) y
Upgrading C:\dev\projects\sites\cra-starter\package.json
[====================] 2/2 100%

√ Choose which packages to update »

 aws-amplify  ^4.1.1  →  ^4.3.28

√ npm install to install new versions? ... yes
```


# Downgrading

https://github.com/aws-amplify/amplify-cli/issues/10578

Downgrade to CLI resolved this issue
npm install -g @aws-amplify/cli@8.0.2

