'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find() {
    console.log('UserService find doing')
    return await this.ctx.model.User.find({});
  }

  async insert() {
    console.log('UserService insert doing')
    return await this.ctx.model.User.create({'userName': 'wq_test', 'password': 123});
  }

  async delete() {
    console.log('UserService delete doing')
    return await this.ctx.model.User.remove({'userName': 'wq_test'});
  }

  async update() {
    console.log('UserService update doing')
    return await this.ctx.model.User.update({'userName': 'wq_test'}, {$set:{'userName':'wq'}});
  }
}

module.exports = UserService;