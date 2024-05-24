import { useEffect, useRef, useState } from "react";

export default function useToastState() {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const onHandleOpen = () => {
    setOpen(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setOpen(true);
    }, 100);
  };
  return {
    open,
    onHandleOpen,
    setOpen,
  };
}
