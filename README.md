//git init
//git status
//git add
//git commit

//git log
//git show
//git diff

//working directory
//staging area
//git repository

//git checkout -- (file name)
//git reset (file name)

//git checkout -b (branch name) (branching)
//git checkout (branch name)
//git merge
	//merge B --> A
	//step 1: git checkout A (stay in branch A)
	//step 2: git merge B 
//git branch -D branch (delete branch)

//git reset --soft (to_commit id) comeback to commit last and keep file modify in staging
//git reset --mixed (to_commit id) comeback to commit last and keep file modify in working area
//git reset --hard (to commit id) comeback to commit last and remove file modify

//git revert (commit id) revert a file from commit id. note: remove data modified

//setup github 
//git remote add origin (link repository github)
//git push

//link can commit like github: bitbucket.org, gitlab.com

//git config --global credential.helper store
(save user and password not encode)
(-/.git-credentials)

//git config --global credential.helper "cache --timeout=18000" (save into ram in second)

// google "gnome-keyring" "git ssh" (encode algorithm)

//git Clone (if dont have repository)
//git pull (get commit from other)

//pull request 
//1. git checkout -b (feature_branch)
//2. git push origin (branch)
//3. create a pull request on github
//4. review code
//5. merge to master 
