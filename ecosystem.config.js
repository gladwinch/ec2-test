module.exports = {
    apps: [
        {
            name: 'ec2-test',
            exec_mode: 'cluster',
            instances: '1', // Or a number of instances
            script: 'app.js',
            args: 'start'
        }
    ]
}