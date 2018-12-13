import Loadable from 'react-loadable';
import Spinner from '../_components/Spinner';

const LoadableComponent = Loadable({
  loader: () => import('./container'),
  loading: Spinner,
});

export default LoadableComponent;
