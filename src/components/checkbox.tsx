type CheckboxSchema = {
  content: string;
  value: boolean;
  onChange: () => void;
};

export default function Checkbox({ content = '', value = false, onChange = () => {} }: CheckboxSchema) {
  return (
    <label className="checkbox-label cursor-pointer">
      <input type="checkbox" checked={value} onChange={onChange} />
      <i className="checkbox" data-value={value}></i>
      <span className="font-size-normal text-white">{content}</span>
    </label>
  );
}
