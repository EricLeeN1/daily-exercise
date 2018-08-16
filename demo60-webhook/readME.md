# 利用Github的Webhook功能和Node.js完成项目的自动部署

##	一、deploy.sh脚本负责进入项目的目录，然后利用git命令拉取最新的代码，

    deploy.sh 会接受第一个参数当做项目名字，然后进入这个项目的目录执行git操作，这个参数是在deploy.js中根据hook返回的项目名字来的，代码应该比较容易懂，都是些简单的git命令。
    
> 如果是全新的项目，需要在你的服务器上先clone要部署的项目
你需要根据自己的实际项目位置，修改WEB_PATH的值

##	二、后台运行deploy.js

利用Linux提供的nohup命令，让server.js运行在后台
	
	nohup node server.js > deploy.log &
##	三、为了防止Node.js自己挂掉，我们可以启用进程管理服务forver，类似python里面的supervisor

	forever start deploy.js

这样就算这段 NodeJS 代码某处出错挂了，它也会自动重新启动一个进程，保证服务仍可用。

### 1.	forever的命令

	forever list
	forever stop 1
	forever restartall
	
## 四、	反向代理

	`server {
    listen 80;
    server_name dev.lovelucy.info;

    # ...

    location / {
        # ...
    }

    location /incoming$ {
    	    proxy_pass http://127.0.0.1:7777;
    }
	}`