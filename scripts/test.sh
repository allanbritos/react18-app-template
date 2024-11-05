set -e
mkdir -p logs
#npm run lint
node_modules/.bin/jest --coverage -c jest.config.js