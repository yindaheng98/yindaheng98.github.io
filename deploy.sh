git config user.name "TravisCI"
git config user.email "yindaheng98@163.com"
sed -i "s/DEPLOY_TOKEN/$1/g" ./_config.yml
cat ./_config.yml
set -e
hexo deploy