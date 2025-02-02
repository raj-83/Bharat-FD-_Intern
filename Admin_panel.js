const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');

AdminJS.registerAdapter(AdminJSMongoose);

const adminJs = new AdminJS({
  resources: [FAQ],
  rootPath: '/admin',
});

const router = AdminJSExpress.buildRouter(adminJs);
app.use(adminJs.options.rootPath, router);