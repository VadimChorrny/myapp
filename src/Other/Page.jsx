import React from 'react';
import { useState } from 'react';

function Page() {
  const [isShow, setIsShow] = useState(false);

  if (isShow) {
    return (
      <>
        <h1>Text</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Nothing</h1>
      </>
    );
  }
}

export default Page;
