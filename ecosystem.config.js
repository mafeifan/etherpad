module.exports = {
  apps : [{
    name: "etherpad",
    script: "./bin/run.sh",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
