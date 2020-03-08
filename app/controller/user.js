'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {

  async find() {
    this.ctx.body =  await this.ctx.service.user.find();
  }

  async insert() {
    this.ctx.body =  await this.ctx.service.user.insert();
  }

  async delete() {
    this.ctx.body =  await this.ctx.service.user.delete();
  }

  async update() {
    this.ctx.body =  await this.ctx.service.user.update();
  }
}

module.exports = UserController;