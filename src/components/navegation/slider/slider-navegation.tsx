import { ChangeEvent, useState } from "react";

const SliderNavegationItem: React.FC<{
  value: number;
  current: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <label
      className={`w-3 h-3 rounded-full border-2 border-primary cursor-pointer ${
        props.current === props.value ? "bg-primary" : ""
      }`}
    >
      <input
        onChange={props.handleChange}
        type="radio"
        name="slider-control"
        value={props.value}
        className="appearance-none"
        checked={props.value === props.current}
      />
    </label>
  );
};

export const SliderNavegation: React.FC<{
  option: number;
  setCurrentOption: (option: number) => void;
}> = (props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.currentTarget.checked) {
      props.setCurrentOption(+e.currentTarget.value);
    }
  };

  return (
    <div className="flex gap-5 items-center" aria-hidden="true">
      <SliderNavegationItem value={0} current={props.option} handleChange={handleChange} />
      <SliderNavegationItem value={1} current={props.option} handleChange={handleChange} />
      <SliderNavegationItem value={2} current={props.option} handleChange={handleChange} />
      <SliderNavegationItem value={3} current={props.option} handleChange={handleChange} />
    </div>
  );
};
