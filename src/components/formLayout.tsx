export default function FormLayout({
  children,
  label = '',
  color = 'black',
  className = '',
}: {
  children: React.ReactNode;
  label: string;
  color: string;
  className: string;
}) {
  return (
    <label className={'label ' + className} data-color={color}>
      <span>{label}</span>
      {children}
    </label>
  );
}
