import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useEffect, useRef, useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { styled } from 'styled-components/native';

type Props = {
  placeholder?: JSX.Element | string;
  label: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  value: string;
  numeric?: boolean;
};

const Box = styled.View`
  width: 100%;
`;

const Label = styled.Text`
  color: #000;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.3px;
  margin-bottom: 5px;
`;

const Placeholder = styled.Text`
  color: #cdcdcd;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.8px;
`;

const PressInput = styled.Pressable`
  padding: 16px;
  border-radius: 5px;
  border: 1.5px solid #e6e3e6;
  background: #fff;
  width: 100%;
`;

const FormTextInput = ({
  placeholder,
  label,
  onChangeText,
  value,
  numeric,
}: Props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const textInputRef = useRef<TextInput>(null);

  const handleInputOnClick = useCallback(() => {
    setFocused((prev) => {
      return !prev;
    });
  }, []);

  useEffect(() => {
    if (focused) {
      textInputRef.current?.focus();
    }
  }, [focused]);

  return (
    <Box>
      <Label>{label}</Label>
      <PressInput onPress={handleInputOnClick}>
        {(value.length > 0 || focused) && (
          <TextInput
            ref={textInputRef}
            value={value}
            onChangeText={(text) => onChangeText(text)}
            onEndEditing={(e) => {
              if (e.nativeEvent.text.trim().length === 0) setFocused(false);
            }}
            keyboardType={numeric ? 'number-pad' : 'default'}
          />
        )}
        {value.length === 0 && !focused && (
          <Placeholder>{placeholder ? placeholder : ' '}</Placeholder>
        )}
      </PressInput>
    </Box>
  );
};
export default React.memo(FormTextInput);
