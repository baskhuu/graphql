//////////////////////////////////////////
//  GraphQL + Apollo Server + JavaScript  
//////////////////////////////////////////

2024/11/28 

1.  Installed nvm on Windows10
    ->  nvm version
        1.1.12

2.  Installed nodejs on Windows10
    ->  node -v
        v22.11.0

3.  Created new profile for GraphQL in VSCode

4.  Installed "Apollo GraphQL" extention to No.3 profile
4.1 Suddenly an error occured on terminal when executing npm commands 
    ->  Error:  "\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system."
    
    ->  Checked the policy
        Get-ExecutionPolicy -List
        
        --------------------------------------------LogS

        Scope ExecutionPolicy
        ----- ---------------
        MachinePolicy       Undefined
        UserPolicy       Undefined
        Process       Undefined
        urrentUser       Undefined
        LocalMachine       Undefined

        --------------------------------------------LogE

    ->  Setted the policy to "Unrestricted", and checked again
        Set-ExecutionPolicy Unrestricted
        Get-ExecutionPolicy -List
        --------------------------------------------LogS

        Scope ExecutionPolicy
        ----- ---------------
        MachinePolicy       Undefined
        UserPolicy       Undefined
        Process       Undefined
        CurrentUser       Undefined
        LocalMachine    Unrestricted

        --------------------------------------------LogE

    ->  npm command errors are fixed!

5.  Created "package.json" for nodejs package managing
    https://qiita.com/fehde/items/17a2bfff8f5a5767c600

    ->  npm init

6.  Installed Apollo server and GraphQL
    ->  npm install @apollo/server graphql
        After this step we can check below
        ->  "node_modules" folder will bi created
        ->  Dependencies will be created in package.json.
            -------------------------------
            "dependencies": {
                "@apollo/server": "^4.11.2",
                "graphql": "^16.9.0"
            }
            -------------------------------

7.  Added local source to Git remote repository
    https://www.youtube.com/watch?v=tlu5e0TxSzo
    ->  git init
    ->  touch README.md
    ->  git add .
    ->  git commit -m "initial commit"
    ->  git branch -M main
    ->  git remote add origin https://github.com/baskhuu/graphql.git
    ->  git push -u origin main

