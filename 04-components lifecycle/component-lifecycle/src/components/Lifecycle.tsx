import { useEffect } from "react";

function LifecycleDemo() {

  useEffect(() => {
    alert("Component mounted");

    return () => {
      alert("Component unmounted");
    };

  }, []);

  return <h2>I am a lifecycle component</h2>;
}

export default LifecycleDemo;