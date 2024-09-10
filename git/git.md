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

    git diff <commitID_1> <commitID_2>

#### Comparing branches

    git diff <branch_1> <branch_2>

### Stash
