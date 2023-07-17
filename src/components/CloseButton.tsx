type Props = {
  closeFunction: () => void;
};

export const CloseButton = (props: Props) => {
  return (
    <div
      id="close-button"
      className="control-buttons"
      onClick={props.closeFunction}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.1161 7.99992L2.55804 12.558L3.44193 13.4419L7.99999 8.88381L12.558 13.4419L13.4419 12.558L8.88387 7.99992L13.4419 3.44187L12.558 2.55798L7.99999 7.11604L3.44193 2.55798L2.55804 3.44187L7.1161 7.99992Z"
          fill="#C5C5C5"
        />
      </svg>
    </div>
  );
};
