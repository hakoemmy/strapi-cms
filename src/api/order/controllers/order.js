'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    confirmOrder: async (ctx, next) => {
        const { id } = ctx.request.params;
        const user = ctx.state.user;
        const order = await strapi.entityService.findOne("api::order.order", id);
        console.log(order);

        return await strapi.entityService.update("api::order.order", id, {
            data: {
                confirmed: true,
                confirmation_date: new Date()
            }
        });

        // Send email after confirmation
    },

    async create(ctx, next) {
        const user = ctx.state.user;
     
        return await strapi.entityService.create("api::order.order", {
            data: {
                products: ctx.request.body.data.products,
                owner: user.id
            }
        })
    }
}));
