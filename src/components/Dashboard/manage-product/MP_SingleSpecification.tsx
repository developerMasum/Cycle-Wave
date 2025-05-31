import { X } from "lucide-react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { TSpecification } from "../../../types";
import { Textarea } from "../../ui/text-area";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

type SingleSpec = TSpecification & { id: string | number };
type PropTypes = {
  setAllSpecifications: Dispatch<SetStateAction<SingleSpec[] | []>>;
  specifications: SingleSpec[];
  spec: SingleSpec;
};
export default function MP_SingleSpecification({
  setAllSpecifications,
  specifications,
  spec,
}: PropTypes) {
  const handleChangeSpecName = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedSpecs = specifications.map((item) => {
      if (item.id !== spec.id) {
        return item;
      } else {
        return {
          ...item,
          key: e.target.value,
        };
      }
    });
    setAllSpecifications(updatedSpecs);
  };
  const handleChangeSpecDetails = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const updatedSpecs = specifications.map((item) => {
      if (item.id !== spec.id) {
        return item;
      } else {
        return {
          ...item,
          value: e.target.value,
        };
      }
    });
    setAllSpecifications(updatedSpecs);
  };
  const handleDeleteSpec = () => {
    const updatedSpec = specifications.filter((item) => item.id !== spec.id);
    setAllSpecifications(updatedSpec);
  };
  return (
    <div className="grid grid-cols-3 gap-2">
      <Input
        value={spec.key}
        onChange={handleChangeSpecName}
        className="col-span-1"
      />
      <div className="col-span-2 flex gap-2">
        <Textarea
          value={spec.value}
          onChange={handleChangeSpecDetails}
          className="w-full"
        />
        <Button onClick={handleDeleteSpec} size={"icon"}>
          <X />
        </Button>
      </div>
    </div>
  );
}
