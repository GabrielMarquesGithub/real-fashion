import { Group, FormInputStyle, FormInputLabel } from "./form-input.style";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputStyle {...otherProps} />
      {label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
