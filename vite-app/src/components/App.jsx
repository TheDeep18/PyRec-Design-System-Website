import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import {
  Home, Button, Typography, BugReportingFlow, Color, Icons, Spacing, UploadFlow, TracePalette, Viewer3D, StampTool, Accessibility, ContentStrategy, ComponentUsage, Versioning, VisualConsistency, Checkbox, TextField, UploadButton, Tags
} from '../pages';
// ... import other pages as needed

const routes = {
  '/': <Home />,
  '/button': <Button />,
  '/typography': <Typography />,
  '/bug-reporting-flow': <BugReportingFlow />,
  '/color': <Color />,
  '/icons': <Icons />,
  '/spacing': <Spacing />,
  '/upload-flow': <UploadFlow />,
  '/trace-palette': <TracePalette />,
  '/3d-viewer': <Viewer3D />,
  '/stamp-tool': <StampTool />,
  '/accessibility': <Accessibility />,
  '/content-strategy': <ContentStrategy />,
  '/component-usage': <ComponentUsage />,
  '/versioning': <Versioning />,
  '/visual-consistency': <VisualConsistency />,
  '/checkbox': <Checkbox />,
  '/textfield': <TextField />,
  '/upload-button': <UploadButton />,
  '/tags': <Tags />,
  // ... add other routes here
};

function getRouteComponent() {
  const hash = window.location.hash.replace('#', '') || '/';
  return routes[hash] || <Home />;
}

const App = () => {
  const [route, setRoute] = useState(getRouteComponent());

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteComponent());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return <Layout>{route}</Layout>;
};

export default App; 