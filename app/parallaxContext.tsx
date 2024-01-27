'use client'

import React from 'react';

const ParallaxContext = React.createContext({
  parallaxRef: { current: null },
  scrollToSection: (offset: number) => {}
});

export default ParallaxContext;
