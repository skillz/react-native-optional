/*
 * @providesModule Optional
 *
 */
import React from 'react';

function Optional(props: {test:boolean}) {
  console.error("<Optional> is a babel transform plugin, not a React Compononent.\nTo correct this error, add:\n\nplugins:['react-nativer-optional/babel']\n\nto your babel.config.js file");
  return null;
}

export default Optional;
