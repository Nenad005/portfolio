import type { Schema, Attribute } from '@strapi/strapi';

export interface LocationLocation extends Schema.Component {
  collectionName: 'components_location_locations';
  info: {
    displayName: 'Location';
    icon: 'pinMap';
  };
  attributes: {
    LocationString: Attribute.String & Attribute.Required;
    LocationUrl: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'location.location': LocationLocation;
    }
  }
}
