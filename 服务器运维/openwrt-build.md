---
title: "用docker编译lede大佬的openwrt固件"
created: "2021-08-02 13:12:42"
updated: "2021-08-02 13:12:42"
date: "2021-08-02 13:12:42"
tags: 
 - "服务器运维"
categories: 
 - "服务器运维"
---

第一步当然是先下载仓库

```sh
git clone https://github.com/coolsnowwolf/lede
```

将仓库挂载到docker容器中

```sh
docker run --rm -it -v "$(pwd)/lede:/home/user/lede" p3terx/openwrt-build-env:20.04 bash
```

在容器中就像在家一样

```sh
export HTTP_PROXY=http://192.168.1.2:10801
export HTTPS_PROXY=http://192.168.1.2:10801
echo "http_proxy = $HTTP_PROXY" > ~/.wgetrc
echo "https_proxy = $HTTPS_PROXY" >> ~/.wgetrc
echo 'use_proxy = on' >> ~/.wgetrc
git config --global http.proxy "$HTTP_PROXY"
git config --global https.proxy "$HTTPS_PROXY"
cd ./openwrt
sudo chown -R user .
./scripts/feeds update -a
./scripts/feeds install -a
make menuconfig
# 进行配置
make -j8 download V=s
make -j1 V=s
```