import { InputWidgetProps } from './interface';
import { Container } from './styles';

export const InputWidget = ({
  id,
  defaultValue,
  onChange,
}: InputWidgetProps) => {
  const handleChanged: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;

    onChange?.(value);
  };

  return (
    <Container data-widget-id={id}>
      <input onChange={handleChanged} defaultValue={defaultValue} />
    </Container>
  );
};
