'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/find', controller.user.find);
  router.get('/insert', controller.user.insert);
  router.get('/delete', controller.user.delete);
  router.get('/update', controller.user.update);
};
