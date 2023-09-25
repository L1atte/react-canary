//@ts-ignore
import { Suspense, use } from 'react';

import { sleep } from './util';

const p = sleep('sleep');
function Example() {
  const res = use(sleep('sleep'));

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div>{res}</div>
    </Suspense>
  );
}

export { Example };
