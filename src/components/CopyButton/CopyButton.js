import React, { useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import Button from 'calcite-react/Button';
import CopyToClipboardIcon from 'calcite-ui-icons-react/CopyToClipboardIcon';
import CheckIcon from 'calcite-ui-icons-react/CheckIcon';

// Component Definition
const CopyButton = props => {
  const [copyIcon, setCopyIcon] = useState(<CopyToClipboardIcon size={16} />);

  const onCopy = () => {
    setCopyIcon(<CheckIcon size={16} />);

    setTimeout(() => {
      setCopyIcon(<CopyToClipboardIcon size={16} />);
    }, 3000);
  };

  return (
    <CopyToClipboard onCopy={onCopy} text={props.copy}>
      <Button transparent icon={copyIcon} iconPosition="before">
        {props.children}
      </Button>
    </CopyToClipboard>
  );
};

export default CopyButton;
