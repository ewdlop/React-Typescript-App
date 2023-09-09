import React, { useRef, useEffect, Component, PropsWithChildren } from 'react';

interface RenderCountProp {
    renderCount: number;
}

type ComponentProps<P> = PropsWithChildren<P & RenderCountProp>;

type ComponentWithRenderCount<P extends object> = React.FC<ComponentProps<P>>;

const withRenderCount = <P extends object>(Component: React.FC<P>): ComponentWithRenderCount<P> => {
  return (props: P) => {
    const renderCount = useRef(0);

    useEffect(() => {
      renderCount.current = renderCount.current + 1;
    });

    return <Component {...props} renderCount={renderCount.current} />
  };
};



export default withRenderCount;