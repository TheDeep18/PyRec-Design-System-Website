import React, { useState, useEffect, Suspense } from 'react';
import Layout from './components/Layout';

const Home = React.lazy(() => import('./pages/Home'));
const Button = React.lazy(() => import('./pages/Button'));
const Typography = React.lazy(() => import('./pages/Typography'));
const BugReportingFlow = React.lazy(() => import('./pages/BugReportingFlow'));
const Color = React.lazy(() => import('./pages/Color'));
const Icons = React.lazy(() => import('./pages/Icons'));
const Spacing = React.lazy(() => import('./pages/Spacing'));
const UploadFlow = React.lazy(() => import('./pages/UploadFlow'));
const TracePalette = React.lazy(() => import('./pages/TracePalette'));
const Viewer3D = React.lazy(() => import('./pages/Viewer3D'));
const StampTool = React.lazy(() => import('./pages/StampTool'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const ContentStrategy = React.lazy(() => import('./pages/ContentStrategy'));
const ComponentUsage = React.lazy(() => import('./pages/ComponentUsage'));
const Versioning = React.lazy(() => import('./pages/Versioning'));
const VisualConsistency = React.lazy(() => import('./pages/VisualConsistency'));
const Checkbox = React.lazy(() => import('./pages/Checkbox'));
const TextField = React.lazy(() => import('./pages/TextField'));
const UploadButton = React.lazy(() => import('./pages/UploadButton'));
const Tags = React.lazy(() => import('./pages/Tags'));

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

  return (
    <Layout>
      <Suspense fallback={<div className="p-8">Loading...</div>}>
        {route}
      </Suspense>
    </Layout>
  );
};

export default App; 