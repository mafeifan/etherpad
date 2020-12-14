module.exports = {
  apps : [{
    name: "etherpad",
    script: "./bin/run.sh -s settings.json",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
