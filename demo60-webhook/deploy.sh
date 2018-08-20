#!/bin/bash

WEB_PATH='/home/webhookServe/'
WEB_USER='root'
WEB_USERGROUP='root'

echo "开始工作"
cd $WEB_PATH
echo "拉取代码ing..."
git reset --hard origin/master
git clean -f
git pull
git checkout master
echo "改变许可中"
chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH
echo "结束"
