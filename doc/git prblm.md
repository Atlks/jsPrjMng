

在这种情况下，您应该查看您尝试向后移植的提交，并确定其两个父项中的哪一个是您要挑选的提交之前的提交。假设它是第一个（它们在 github 上以一致的顺序列出，或使用 git show），您可以在前面的命令中添加“-m 1”，例如

git cherry-pick -x de7fd1bd259ebb7ab95eb18659cbb19fd680cd3e -m 1
致命：坏对象错误
当挑选时，您有时可能会收到此错误： fatal: bad object xxxxxxxxxxxxxxxxx，其中 x 代表提交哈希。

您需要从上游 master 获取最新更改，以便您想要挑选的提交位于本地存储库中。 “git fetch --all” 应该可以解决问题。

例如，当我将一些主提交挑选到 1.11.x 分支时，我遇到了上述错误。我只需要切换回 master 分支，然后执行 git pull --rebase upper master，然后再切换回 1.11.x 分支再试一次。