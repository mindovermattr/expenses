import sprite from "../../assets/sprite/index.svg";
import { TIconsSpriteId } from "../../types/TIconSpriteId";

type TIconProps = {
  width?: number;
  height?: number;
  id: TIconsSpriteId | string;
  color?: string;
  classname?: string;
};

const Icon = ({
  color = "initial",
  id,
  width = 14,
  height = 14,
  classname,
}: TIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      className={classname ? classname : ""}
    >
      <use xlinkHref={`${sprite}#${id}`}></use>
    </svg>
  );
};

export default Icon;
