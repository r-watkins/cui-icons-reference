import React, { useState } from 'react';
import { IconContext } from './IconContext';
import Slider from 'calcite-react/Slider';

import {
  Container,
  Form,
  List,
  Search,
  SliderContainer,
  SliderTitle,
  SliderNumber,
} from './styles';

import { iconComps } from './icons';

// Component Definition
const IconList = (props) => {
  // use icon props to set app list states of generated icons
  const [iconProps, setIconProps] = useState({
    size: 32,
    color: 'currentColor',
  });
  const [icons] = useState(iconComps(iconProps));
  const [currentIcons, setcurrentIcons] = useState(iconComps(iconProps));
  const [inputValue, setInputValue] = useState('');
  const [sizeValue, setSizeValue] = useState(iconProps.size);

  // search filter method
  const onUserAction = (inputValue) => {
    setInputValue(inputValue);

    let updatedIcons = icons;

    updatedIcons = updatedIcons.filter(function (item) {
      return (
        item.props.name.toLowerCase().search(inputValue.toLowerCase()) !== -1
      );
    });

    setcurrentIcons(updatedIcons);
  };

  const clearSearch = () => {
    setInputValue('');
    setcurrentIcons(icons);
  };

  const updateSizeValue = (event) => {
    const size = parseInt(event.target.value, 10);

    setSizeValue(size);
    setIconProps({
      ...iconProps,
      size,
    });
  };

  return (
    <Container>
      <Form>
        <Search
          placeholder="Search"
          inputValue={inputValue}
          onUserAction={onUserAction}
          onRequestClear={clearSearch}
        />

        <SliderContainer>
          <SliderTitle>Size</SliderTitle>

          <Slider
            value={sizeValue}
            min={16}
            max={48}
            step={4}
            onChange={updateSizeValue}
          />

          <SliderNumber>{sizeValue} px</SliderNumber>
        </SliderContainer>
      </Form>

      <List>
        <IconContext.Provider value={iconProps}>
          {currentIcons}
        </IconContext.Provider>
      </List>
    </Container>
  );
};

export default IconList;
