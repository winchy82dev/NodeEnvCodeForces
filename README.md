# Node Js local environement for VSCODE

This project allow you to test your Javascript code before submitting your answer on [codeforces.com](https://www.codeforces.com)

## How to use this project
1. Clone the project
1. (for windows users:) Make `cmd.exe` as your default shell, you can do that by editing this parameter on your VScode settings:

```json
"terminal.integrated.automationProfile.windows": {
  "path": "cmd.exe"
}
```

1. Change the layout of your VSCODE to look like that, (just drag and drop the panels):

[![](./img/screenshot.png)]()

1. Type your code inside the **`main`** function on the **`script.js`** file (don't edit the upper part of the file)
1. Add the data test on the **`input.txt`** file
    * Just click on copy from the codeforces.com site and paste it on your file
    [![](./img/copy.png)]()
1. Run the Task by clicking on **`Terminal > Run Build Task...`** on your VsCode menu, or use the shortcut **`Ctr + Alt + B`**
  * Make sure that your are on the **`script.js`** file before running the task
1. The result will be writen in the **`output.txt`** file

## Submiting to codeforces.com
* Copy the entire code from **`script.js`** and paste it on the submission form
* Choose **`Node`** as language (do not pick JavaScript)
[![](./img/node.png)]()



## Under the hood:
The **`tasks.json`** file runs the following command in `cmd.exe` on windows, without showing you the terminal :

```bash
node script.js < ./input.txt > ./output.txt 
```

## Why using 'cmd' as shell ?
With Powershell, for example, it return an error
it doen't process correctly the `<`


[learn more about tasks](https://code.visualstudio.com/docs/editor/tasks)


## i want to see what happend on the terminal
* Edit the **`./.vscode/tasks.json`** file
* Replace "never" by "always"

```json
"presentation": {
  "reveal": "always"
  }
```

#### let me know if you find a typo or you have suggestions by PR this project, thanks
