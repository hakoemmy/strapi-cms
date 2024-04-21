import type { Schema, Attribute } from '@strapi/strapi';

export interface ComputerSpecs extends Schema.Component {
  collectionName: 'components_computer_specs';
  info: {
    displayName: 'specs';
    icon: 'grid';
  };
  attributes: {
    model: Attribute.String;
    storage: Attribute.String;
    memory: Attribute.String;
    cpu: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'computer.specs': ComputerSpecs;
    }
  }
}
