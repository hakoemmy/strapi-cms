'use strict';
const utils = require('@strapi/utils');
/**
 * `is-owner` policy
 */

module.exports = async (policyContext, config, { strapi }) => {

    const { id } = policyContext.request.params;
    const user = policyContext.state.user;

    const order = await strapi.entityService.findOne("api::order.order", id, {
        populate: { owner: true }
    });
    
    if (order.owner.id === user.id) return true;

    return false;
};
