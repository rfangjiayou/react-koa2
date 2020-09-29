module.exports = {
    apps: [
        {
            name: "server",
            script: "./server/app.js",
            cwd: "./server",
            exec_mode: "fork",
            max_memory_restart: "1G",
            autorestart: true,
            watch: [
                'server',
                'src'
            ],
            watch_options: {
                followSymlinks: false,
                usePolling: true
            },
            ignore_watch: ['node_modules'],
            watch_delay: 5e3,
            node_args: [],
            args: [],
            env: {
                NODE_ENV: 'production'
            }
        }
    ],
    // deploy : {
    //     production : {
    //       user : 'node', // 以什么身份登录远程服务器，这里是node用户登录，建议使用root用户，权限更大
    //       host : '192.168.4.142', // 远程服务器地址，需要配ssh登录
    //       ref  : 'origin/master', // 需要部署的分支
    //       repo : 'git@github.com:repo.git', // 代码git地址，需要配ssh登录
    //       path : '/var/www/production', // 文件存放的地址
    //       'post-deploy' : 'npm install && npm run build' // 拉完代码需要执行的构建命令
    //     }
    // }
}