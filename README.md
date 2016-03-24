# 前端自动化开发框架和部署说明

--------------------------
by Pang.J.G

本项目基于nodejs环境下的Gulp.JS


## 安装 nodeJS 环境

* 前往 [http://nodejs.org/](http://nodejs.org/) 安装nodeJS
   - 注意系统是32位还是64位的，选择对应的版本
   - 如果是windows系统，需自行设置好环境变量，将nodejs的路径加入到系统的 `path` 环境变量中

* 安装 `gulp` 全局支持，在终端执行 `npm install -g gulp`

## 项目部署和初始化

本代码库包含了一个静态demo，如在实际开发的项目中部署，例如，你打算将前端静态资源放在 `~/statics/` 文件夹，那么：

#### STEP 1：复制源码

将 `build` 目录下的源码复制到 `statics` 文件夹下；

如果，单独对源码进行代码管理，可以使用以下命令：

```
git clone https://github.com/lmtdit/bdCore.git build
```

#### STEP 2：安装依赖

进入build目录，执行 `npm install`，安装依赖的nodejs模块

#### STEP 3：初始化

模块安装完成后，使用如下命令进行初始化

```
gulp init
```


## 开发

ok，上述的事项已经部署完成，那么我们可以进入前端的项目开了。使用 `gulp` 命令默认启动开发模式：

```
gulp
```

## 更多参数使用说明

以gulp命令启动程序，它可接收两个参数，分别是

参数1： --env 或者 --e
> 此参数是环境参数，默认值为'local'，其他值分别为test、rc、www，分别针对测试、预发布和生产环境，在测试和发布环节中使用。

参数2： --debug 或者 --d
> 此参数为调试开关，带上此参数，html模板则开启debug模式

**命令使用示例:**
1、local开发环境的watch命令：
```shell
gulp

# or
gulp --e local

# or
gulp --env local
#以上三个命令是等效的
```

2、local开发环境的debug命令：
```shell
gulp --d

# or
gulp --debug

# or
gulp --env local --d
```

3、发布代码
```
# 测试环境
gulp --e test
gulp --env test

# 预发布环境
gulp --e rc
gulp --env rc

# 生产环境
gulp --e www
gulp --env www
```

4、其他命令使用说明

**查看自动化框架支持的项目构建命令**
```
gulp -T
gulp helper
```
