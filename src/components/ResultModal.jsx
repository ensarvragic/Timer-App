import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        // dialog.current.showModal();
      },
    };
  });

  return (
    <div ref={dialog} className="result-modal">
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
    </div>
  );
});

export default ResultModal;
