git config user.name "TravisCI"
git config user.email "yindaheng98@163.com"
sed -i "s/DEPLOY_REPO/$1/g" ./_config.yml
cat ./_config.yml
hexo deploy