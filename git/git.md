# Git

### Set git aliases

```bash
git config --global alias.st status // git st === git status
```

### Amend a commit

```bash
git commit --amend
```

Edit the previous commit (not creating a new one)

-   Adding staged changes
-   Modifying the commit message

### Diff

```bash
git diff
```

> _Diff_ is a function that takes two input data sets (_commits, branches, files..._) and outputs the changes between them.

Example of a diff

```bash
diff --git a/diff_test.txt b/diff_test.txt	-> //sources
index 6b0c6cf..b37e70a 100644 			-> //Metadata
--- a/diff_test.txt 				-> // Markers for changes
+++ b/diff_test.txt				-> // Markers for changes
@@ -1 +1 @@  					-> // Chunks
-this is a git diff test example 		-> // Chunks
+this is a diff example 			-> // Chunks
```

Chunk example:

    @@ -34,6 +34,8 @@

6 lines have been **extracted** starting from line number 34. Additionally, 8 lines have been **added** starting at line number 34.

#### Comparing commits

```bash
git diff <commitID_1> <commitID_2>
```

#### Comparing branches

```bash
git diff <branch_1> <branch_2>
```

### Stash

The `git stash` command will stash:

-   Changes that have been added to your index (**staged**)
-   Changes made to files that are currently tracked by Git (**unstaged**)

But it will **not** stash:

-   New files that have not yet been staged (**untracked**)
-   Files that have been **ignored**

Adding the `-u` option (`--include-untracked`) will also stash **untracked** files
git stash -u

```bash
git stash -u
```

Adding the `-a` option (`--all`) will also stash **ignored** files

```bash
git stash -a
```

![](https://wac-cdn.atlassian.com/dam/jcr:d6fec41a-dc66-4af6-8b0f-c23d271eaf8e/01.svg?cdnVersion=2221)

#### Listing all stashes

```bash
git stash show
```

Will diplay stash info:

```bash
stash@{0}: WIP on main: 5002d47 our new homepage
```

    stash@{STASH_INDEX}: WIP on <BRANCH> <COMMIT_HASH> <COMMIT_MESSAGE>

We can provide more context passing a message for the stash

```bash
git stash save "adding styling of main page"
```

```bash
stash@{0}: On main: adding styling of main page
```

#### Re-applying stashed changes

Apply last stashed changes **keeping** the stash

```bash
git stash apply
```

Apply _last_ stashed changes **removing** the stash

```bash
git stash pop
```

Chosse which stash to apply

```bash
git stash pop stash@{2}
```

#### Viewing stash diffs

Display a **summary** of the changes.

```bash
git stash show
```

Adding -p or --patch to view the full diff of a stash

```bash
git stash show -p
```

#### Partial stashes

You can also choose to stash just a single file, a collection of files, or individual changes from within files. If you pass the `-p` option (or `--patch`) to `git stash`, it will iterate through each changed "hunk" and ask whether you wish to stash it or not.

Useful commands when iterating hunks:

| Command | Description                              |
| :-----: | :--------------------------------------- |
|   `/`   | `search for a hunk by regex`             |
|   `?`   | `help`                                   |
|   `n`   | `don't stash this hunk`                  |
|   `y`   | `stash this hunk`                        |
|   `q`   | `quit (stashing already selected hunks)` |
|   `s`   | `split this hunk into smaller hunks`     |

#### Cleaning up stashes

You can delete the last stash using git stash drop:

```bash
git stash drop
```

Or choose which stash to delete by ID:

```bash
git stash drop stash@{1}
```

You can also delete **all** stashes:

```bash
git stash clear
```
