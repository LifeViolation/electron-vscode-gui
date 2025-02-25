type Props = {
  minimizeFunction: () => void;
};

export const MinimizeButton = (props: Props) => {
  return (
    <div
      id="minimize-button"
      className="control-buttons"
      onClick={props.minimizeFunction}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 7.99994V8.99994H3V7.99994H14Z" fill="#C5C5C5" />
      </svg>
    </div>
  );
};
