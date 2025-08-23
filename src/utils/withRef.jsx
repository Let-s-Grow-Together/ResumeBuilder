import { forwardRef } from "react";

// Wraps a component and forwards the ref to the root DOM element
export function withRef(Component) {
  return forwardRef((props, ref) => (
    <div ref={ref}>
      <Component {...props} />
    </div>
  ));
}
