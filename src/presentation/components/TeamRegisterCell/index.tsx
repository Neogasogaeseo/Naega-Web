import { StLabel } from './style';

interface TeamRegisterCellProps {
  label: string;
  children: React.ReactNode;
}

export default function TeamRegisterCell(props: TeamRegisterCellProps) {
  const { label, children } = props;

  return (
    <div>
      <StLabel>{label}</StLabel>
      {children}
    </div>
  );
}
