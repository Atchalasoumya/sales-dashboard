import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

type FilterInputProps = {
  threshold: string;
  setThreshold: (value: string) => void;
  onApply: () => void;
};

export const FilterInput = ({ threshold, setThreshold, onApply }: FilterInputProps) => (
  <div className="flex gap-2 mb-4">
    <Input
      value={threshold}
      onChange={(e) => setThreshold(e.target.value)}
      placeholder="Enter sales threshold"
    />
    <Button onClick={onApply}>Apply</Button>
  </div>
);
