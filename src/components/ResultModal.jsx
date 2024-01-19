import { forwardRef, useInperativeHandle, useRef } from "react";
  

const ResultModal = forwardRef (function ResultModal({result, targetTime}, ref) {
  const dialog = useRef();

  useInperativeHandle(ref, () => {
    return{
      open() {

      }
    }
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stoped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
})

export default ResultModal;
