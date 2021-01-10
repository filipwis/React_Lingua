import React from 'react';
import { useLoading, ThreeDots } from '@agney/react-loading';

export default function Loader() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="150" color="hsl(43, 99%, 63%)" />,
  });

  return (
    <>
      <section {...containerProps}>
        {indicatorEl} {/* renders only while loading */}
      </section>
    </>
  );
}
