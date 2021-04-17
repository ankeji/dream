// app/core/base_controller.js
const { Controller } = require('egg');
class BaseController extends Controller {
    success(data) {
        this.ctx.body = {
            status: 200,
            success: true,
            data,
        };
    }

    notFound(msg) {
        msg = msg || 'not found';
        this.ctx.throw(404, msg);
    }
}
module.exports = BaseController;
