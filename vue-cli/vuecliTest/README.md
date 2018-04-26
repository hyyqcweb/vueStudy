# clitest

> A Vue.js project

## 文件解读

```bash
.
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- src                              // 源码目录
|   |-- components                     // vue公共组件
|   |-- store                          // vuex的状态管理
|   |-- App.vue                        // 页面入口文件
|   |-- main.js                        // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|   |-- data                           // 群聊分析得到的数据用于数据可视化
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- favicon.ico 
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
.
```

### package.json解读
+ package.json文件是项目根目录下的一个文件，定义该项目开发所需要的各种模块以及一些项目配置信息（如项目名称、版本、描述、作者等）

+ package.json中的script字段解读
```bash
	"scripts": {
	    "dev": "node build/dev-server.js", 
	    "build": "node build/build.js"
	  },
	  dev : 相当于命令行 npm run dev
	  build : 相当于命令行 npm run build
```

### editorconfig 解读
+ 该文件定义项目的编码规范,其优先级高于编译器自身的设置
```bash
	root = true
 
	[*]    // 对所有文件应用下面的规则
	charset = utf-8                    // 编码规则用utf-8
	indent_style = space               // 缩进用空格
	indent_size = 2                    // 缩进数量为2个空格
	end_of_line = lf                   // 换行符格式
	insert_final_newline = true        // 是否在文件的最后插入一个空行
	trim_trailing_whitespace = true    // 是否删除行尾的空格
```