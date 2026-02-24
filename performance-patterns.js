// Performance Optimization Patterns for Fast Websites

// 1. LAZY LOADING COMPONENTS - Load components only when needed
const LazyComponent = lazy(() => import('./HeavyComponent'));

// Usage with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>

// 2. DYNAMIC IMPORTS - Load modules on demand
const loadModule = async () => {
  const { heavyFunction } = await import('./utils/heavyFunction');
  heavyFunction();
};

// 3. MEMOIZATION - Cache expensive calculations
const ExpensiveComponent = memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => expensiveCalculation(item));
  }, [data]);
  
  return <div>{processedData}</div>;
});

// 4. VIRTUALIZATION - Only render visible items
import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => (
  <List
    height={600}
    itemCount={items.length}
    itemSize={50}
  >
    {({ index, style }) => (
      <div style={style}>
        {items[index]}
      </div>
    )}
  </List>
);

// 5. DEBOUNCING - Limit function calls
const debouncedSearch = useMemo(
  () => debounce((query) => {
    // API call
  }, 300),
  []
);

// 6. CODE SPLITTING - Split bundles by routes
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

// 7. IMAGE OPTIMIZATION - Use next/image for automatic optimization
import Image from 'next/image';

<Image
  src="/photo.jpg"
  alt="Description"
  width={500}
  height={300}
  placeholder="blur"
  loading="lazy"
/>

// 8. STATE MANAGEMENT PATTERNS - Avoid unnecessary re-renders
// Use useCallback for functions
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies]);

// Use selector patterns for context
const useAppSelector = (selector) => {
  const context = useContext(AppContext);
  return useMemo(() => selector(context), [context, selector]);
};

// 9. CSS-IN-JS OPTIMIZATION - Use styled-components with caching
import styled, { createGlobalStyle } from 'styled-components';

const StyledComponent = styled.div`
  /* Styles are cached */
`;

// 10. SERVICE WORKER PATTERN - Cache assets
// public/sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/styles/main.css',
        '/script/main.js'
      ]);
    })
  );
});

// 11. PRELOADING - Load critical resources early


// 12. BUNDLE ANALYSIS - Identify large chunks
// webpack-bundle-analyzer or @next/bundle-analyzer

// 13. TREE SHAKING - Remove unused code
// Use ES6 imports/exports
export { usedFunction };
// Don't export unused functions

// 14. MINIFICATION AND COMPRESSION
// Next.js does this automatically, but you can configure:
// next.config.js
module.exports = {
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

// 15. CDN AND CACHING HEADERS
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
