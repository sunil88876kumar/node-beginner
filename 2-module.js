const packageName = require('./1-module');
const showName = require('./3-module');
const data = require('./alternate-module');
// mind grenade module code below
const func = require('./mindgrenade-module')
// func() //this also work

showName('Sunil')
showName(packageName.john)
showName(packageName.peter)